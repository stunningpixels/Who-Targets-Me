import $ from "jquery";
import Observer from './Observer.js';
import {sprintf} from 'sprintf-js';
import PromisePool from 'es6-promise-pool';
import api from '../api.js';

const fetchRationale = (advertId) => {
  return new Promise((resolve, reject) => {
    const fbRationaleURL = sprintf('https://www.facebook.com/ads/preferences/dialog/?id=%s&optout_url=http%%3A%%2F%%2Fwww.facebook.com%%2Fabout%%2Fads&page_type=16&show_ad_choices=0&dpr=1&__a=1', advertId);
    fetch(fbRationaleURL, {credentials: 'include'}) // credentials enables use of cookies
      .then((response) => {
        // console.log('fetchRationale advertId-2', response)
        response.text().then((text) => {
          // console.log('fetchRationale advertId-3 - text resolved')
          resolve(text);
        });
      })
      .catch((e) => {
        // console.log(e);
        resolve(null);
      });
  });
};

const triggerMenu = (fbStoryId, group) => {
  const $menuButton = $(`#${fbStoryId}`).find('[data-testid="post_chevron_button"]');
  const menuOwnerId = $menuButton.attr("id");
  // console.log('TRIGGERED menuOwnerId', menuOwnerId)
  $menuButton.get(0).click(); // Open the menu
  $menuButton.get(0).click(); // Close the menu

  return new Promise((resolve) => setTimeout(resolve(), 100)) // Wait 100ms to ensure the menu rendered
    .then(() => {
      try {
        const ajaxify0 = document.querySelector(`[data-ownerid='${menuOwnerId}'] a[data-feed-option-name='FeedAdSeenReasonOption']`)
        const ajaxify = ajaxify0.getAttribute('ajaxify');
        // console.log('TRY TRIGGERED! fbStoryId, owner=',menuOwnerId, fbStoryId)
        // console.log('TRY TRIGGERED! ajaxify=', ajaxify)
        const fbAdvertId = /id=\s*(.*?)\s*&/.exec(ajaxify)[1]
        // console.log('TRY TRIGGERED! fbAdvertId=', fbAdvertId)

        return new Promise((resolve) => setTimeout(resolve(), 1000 * getRandomInt(5)))
          .then(() => {
            fetchRationale(fbAdvertId)
              .then(parsedRationale => {
                // console.log("FBADVERTRATIONALE-2", parsedRationale)
                if (parsedRationale) {
                  // console.log("FBADVERTRATIONALE-3 (if parsed)", fbAdvertId, "advert.fbStoryId", fbStoryId)

                  if (group === 'Sheffield-Experiment') {
                    $(sprintf('a.fbPrivacyAudienceIndicator')).each((index, adv) => {
                      try {
                        const domSponsored = $(adv).parent().children().find("span[class~='timestamp']") //contains exact word
                        if (domSponsored.length === 0) { // if there's a timestamp, it's not an ad
                          const container = $(adv).closest('[data-testid="fbfeed_story"]'); // Go up a few elements to the advert container
                          const _fbStoryId = container.attr('id'); // Extract the story ID, used to determine if an advert has already been extracted
                          // console.log('RATIONALE-1')
                          if (_fbStoryId === fbStoryId) {
                            // console.log('RATIONALE-2')
                            let html = JSON.parse(parsedRationale.slice(9));
                            // console.log('RATIONALE-3')
                            if(!html.jsmods) {
                              return null;
                            }
                            // console.log('RATIONALE-4')
                            let text = html.jsmods.markup[0][1].__html;
                            let rationaleText = text.slice(text.indexOf('One reason'),text.indexOf('connected to the internet.')+26);
                            rationaleText = '<div><span>'+rationaleText+'</span></div>'
                            // console.log('RATIONALE-5')
                            let nextNode = $(container.find('.userContentWrapper')).first().parent();
                            // console.log('RATIONALE-6')
                            let fetched = $(nextNode.find('.fetched'))
                            // console.log('fetched', fetched)
                            if (fetched.length === 0) {
                              $(`<div class="fetched" style="color:black; padding: 15px; font-weight:bold;min-height: 30px; background-color:orange; text-align:left; padding-top:10px;border:2px solid grey;">${rationaleText}</div>`).appendTo(nextNode);
                            }
                            return Promise.resolve({
                              fbStoryId,
                              fbAdvertId
                            }); // Extract the advert ID using regex
                          }
                        }
                      } catch (err) { // try
                        // console.log('Some err, RETURN', err)
                      }
                  })
              } // If this is experiment group, insert rationale div
            } // If parsed rationale
          }) // then parsed rationale
        }) // new Promise on fetchRationale
      } catch (err) {
        // console.log(err);
        return Promise.reject(new Error(['Could not extract advert ID', fbStoryId]));
      }
  });
};

const adsOnPage = (group) => {
  if (group === '') {return;} // Experiment is over, group cleared
  let adverts = []; // Pass adverts back to cycle

  $(sprintf('a.fbPrivacyAudienceIndicator')).each((index, advert) => { // Loop over every advert

    try { // ENSURE THIS IS AN ADVERT
      const domSponsored = $(advert).parent().children().find("span[class~='timestamp']") //contains exact word

      // Check if the value matches our list of 'sponsored' translations
      if (domSponsored.length > 0) { // if there's a timestamp, it's not an ad
        return; // This is not a sponsored post
      }
    } catch (err) {
      // console.log('Some err, RETURN', err)
      return;
    }

    const container = $(advert).closest('[data-testid="fbfeed_story"]'); // Go up a few elements to the advert container
    const fbStoryId = container.attr('id'); // Extract the story ID, used to determine if an advert has already been extracted

    if (!fbStoryId || container.hasClass('hidden_elem')) { // Don't proceed if there is an error getting fbStoryId or if the advert is hidden
      return;
    }

    let nextNode = $(container.find('.userContentWrapper')).first().parent();

    // console.log('!!!!!!!!!!!!!!postId=', fbStoryId);
    const condition0 = nextNode.find('a[class*="uiStreamSponsoredLink"]')
    const subtitle = $(nextNode).find("div[id*='feed_subtitle']");
    // console.log('subtitle', subtitle)
    const condition1 = subtitle.find('div[data-tooltip-content*="Shared"]')
    const condition2 = nextNode.find('a[rel*="theater"]')
    // console.log('sponsored??', condition0.length, condition1.length, condition2.length);
    // console.log('---------------------');

    if (index === 1 || condition0.length === 1 || (condition1.length + condition2.length === 0)) {
      if (group === 'Sheffield-Experiment') {
        nextNode.css('background-color', 'yellow')
      }

    // console.log('AD FOUND -->', fbStoryId)

    adverts.push({ // Queue advert for server
      type: 'FBADVERT',
      related: fbStoryId,
      html: container.html()
      });
    }
  });

  return Promise.resolve(adverts);
};

const newAds = (fbStoryIds, group) => adsOnPage(group)
  .then(_adverts => {
    // console.log('New ads _adverts', _adverts)
    const adverts = _adverts; //.filter(advert => fbStoryIds.indexOf(advert.related) === -1); // Filter out previously parsed adverts

    if (group === '') {return;} // Experiment is over, group cleared


    // transmitPayload(payload) // Send data to server
    let payload = _adverts;
    // console.log('OBSERVER-From Ads--> transmitPayload')
    let extVersion = chrome.runtime.getManifest().version;
    let finalPayload = {
      typeId: 'FBADVERT',
      extVersion,
      payload
    };
    api.post('log/raw', {json: finalPayload})
      .then((response) => {
        // response completed, no log
      });


    return Promise.all(adverts.map(advert => triggerMenu(advert.related, group))) // Trigger the menu to open for each advert
      .then(_advertIds => {
        const advertIds = _advertIds.filter(advertId => Boolean(advertId));
        // console.log('NEWADS PUSHED', advertIds)
        return {
          adverts,
          advertIds
        };
      });
  });


const rationales = (advertIdQueue) => {
  // console.log('rationales - advertIdQueue', advertIdQueue)
  if (advertIdQueue.length > 0) {
    const advert = advertIdQueue.shift();
    return fetchRationale(advert.fbAdvertId)
      .then(parsedRationale => {
        if (parsedRationale) {
          // console.log('rationales - parsedRationale', parsedRationale)
          return Promise.resolve({
            advertIdQueue,
            parsedRationale: {
              type: "FBADVERTRATIONALE",
              related: advert.fbStoryId,
              html: parsedRationale
            }
          });
        }

        return Promise.resolve({
          advertIdQueue: advertIdQueue.push(advert),
          parsedRationale: null
        }); // Add failed rationale to the back of the queue
      });
  }
  return Promise.resolve({
    advertIdQueue: advertIdQueue,
    parsedRationale: null
  }); // Add failed rationale to the back of the queue
};

const cycle = ({persistant, temp}) => {

  const {
    fbStoryIds,
    rationale
  } = temp;

  /*

    Two things are happening here:
      1. We are finding new ads on the page, and subsequently finding the advert ID
      2. Rationale requests are being executed (on condition that we are not blocked by Facebook, 2 minute cooldown)

  */
  return new Promise((resolve, reject) => {
    let group = '';
    chrome.storage.promise.local.get()
      .then((result) => {
        if (result.sh_exp_group) {
          group = result.sh_exp_group;
        }

        return Promise.all([newAds(fbStoryIds, group), rationales(rationale.advertIdQueue, group)])
          .then(results => {
            let {
              adverts,
              advertIds
            } = results[0];

            const {
              advertIdQueue,
              parsedRationale
            } = results[1];

            // console.log('VERY IMPORTANT! adverts', adverts)
            // console.log('VERY IMPORTANT! advertIds', advertIds)
            // console.log('advertIdQueue', advertIdQueue)
            // console.log('parsedRationale', parsedRationale)

            temp.fbStoryIds.push(...adverts.map(advert => advert.related));
            temp.rationale.advertIdQueue = advertIdQueue.concat(advertIds);

            let payload = adverts;

            if (parsedRationale) {
              payload.push(parsedRationale);
            }

            return Promise.resolve({persistant, temp, payload});
          })
          .catch(err => {
            // console.log(err);
          });
      })
      .catch((e) => {
        // console.log(e);
        resolve(null);
      });
  });

};

export default new Observer({
  typeId: 'FBADVERT',
  urls: [/^http(s|):\/\/(www\.|)facebook.com/],
  interval: 20000,
  storageDefaults: {
    persistant: {},
    temp: {fbStoryIds: [], rationale: {advertIdQueue: []}}
  },
  cycle
});
