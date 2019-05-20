export const availableCountries = [
  {id: 'GB', country: "Great Britain"},
  {id: 'DE', country: "Germany"},
  {id: 'LV', country: "Latvia"},
  {id: 'BR', country: "Brazil"},
  {id: 'IE', country: "Ireland"},
  {id: 'US', country: "USA"},
  {id: 'HU', country: "Hungary"},
  {id: 'CA', country: "Canada"},
  {id: 'SE', country: "Sweden"},
  {id: 'AU', country: "Australia"},
  {id: 'UA', country: "Ukraine"},
  {id: 'FI', country: "Finland"},
  {id: 'NL', country: "Netherlands"},
  {id: 'FR', country: "France"},
  {id: 'NG', country: "Nigeria"},
  {id: 'IL', country: "Israel"},
  {id: 'ES', country: "Spain"},
  {id: 'EC', country: "Ecuador"},
  {id: 'HR', country: "Croatia"},
  {id: 'AT', country: "Austria"},
  {id: 'IT', country: "Italy"},
  {id: 'BE', country: "Belgium"},
  {id: 'BG', country: "Bulgaria"},
  {id: 'CY', country: "Cyprus"},
  {id: 'CZ', country: "Czech Republic"},
  {id: 'DK', country: "Denmark"},
  {id: 'EE', country: "Estonia"},
  {id: 'GR', country: "Greece"},
  {id: 'LT', country: "Lithuania"},
  {id: 'LU', country: "Luxembourg"},
  {id: 'MT', country: "Malta"},
  {id: 'PL', country: "Poland"},
  {id: 'PT', country: "Portugal"},
  {id: 'RO', country: "Romania"},
  {id: 'SK', country: "Slovakia"},
  {id: 'SI', country: "Slovenia"},
  {id: 'LI', country: "Liechtenstein"},
  // {id: 'MK', country: "North Macedonia"},
  // {id: 'NO', country: "Norway"},
  // {id: 'IS', country: "Iceland"},
]

export const availableParties = {
  'GB': [
      {entityId: 1, party:'Conservatives', shortName: 'CON', color: 'blue'},
      {entityId: 2, party:'The Labour Party', shortName: 'LAB', color: 'red'},
      {entityId: 3, party:'Liberal Democrats', shortName: 'LD', color: '#ffff00'},
      {entityId: 4, party:'Scottish National Party', shortName: 'SNP', color: '#ffff00'},
      {entityId: 5, party:'Northern Irish Parties', shortName: 'NI', color: 'lightgrey'},
      {entityId: 6, party:'Plaid Cymru', shortName: 'PC', color: 'blue'},
      {entityId: 7, party:'UKIP', shortName: 'UKIP', color: 'purple'},
      {entityId: 8, party:'The Green Party', shortName: 'Gre', color: 'green'},
      {entityId: 10, party:'Pro Brexit', shortName: 'Leave', color: 'darkred'},
      {entityId: 11, party:'Anti Brexit', shortName: 'Remain', color: 'darkblue'},
      {entityId: 12, party:'The Brexit Party', shortName: 'BRE', color: '#12b6cf'},
      {entityId: 13, party:'Change UK', shortName: 'CHUK', color: 'black'},
      {entityId: 9, party:'Others', shortName: 'Oth', color: 'grey'},
    ],
  'DE': [
    {entityId: 1, party:'CDU', shortName: 'cdu', color: '#000000'},
    {entityId: 2, party:'SPD', shortName: 'spd', color: '#EB001F'},
    {entityId: 3, party:'AFD', shortName: 'afd', color: '#009EE0'},
    {entityId: 4, party:'FDP', shortName: 'fdp', color: '#FFED00'},
    {entityId: 5, party:'Die Linke', shortName: 'linke', color: '#BE3075'},
    {entityId: 6, party:'Die Grünen', shortName: 'gruene', color: '#64A12D'},
    {entityId: 7, party:'CSU', shortName: 'csu', color: '#008AC5'},
    {entityId: 8, party:'Die blaue Partei', shortName: 'dbp', color: '#008AC5'},
    {entityId: 9, party:'Andere', shortName: 'Oth', color: 'lightgrey'},
  ],
  'US': [
    {entityId: 1, party:'Republicans', shortName: 'Rep', color: 'red'},
    {entityId: 2, party:'Democrats', shortName: 'Dem', color: 'blue'},
    {entityId: 3, party:'Independents', shortName: 'Ind', color: 'grey'},
    {entityId: 4, party:'Libertarians', shortName: 'Lib', color: 'yellow'},
    {entityId: 5, party:'Greens', shortName: 'Gre', color: 'green'},
    {entityId: 6, party:'Republican PACs', shortName: 'RPacs', color: 'lightred'},
    {entityId: 7, party:'Democratic PACs', shortName: 'DPacs', color: 'lightblue'},
    {entityId: 8, party:'Others', shortName: 'Oth', color: 'lightgrey'},
  ],
  'HU': [
    {entityId: 1, party:'Fidesz - Magyar Polgári Szövetség', shortName: 'FID', color: '#fe6b12'},
    {entityId: 2, party:'Jobbik Magyarországért Mozgalom', shortName: 'JOB', color: '#006612'},
    {entityId: 3, party:'Magyar Szocialista Párt', shortName: 'MSZP', color: '#cd171b'},
    {entityId: 4, party:'Lehet Más a Politika', shortName: 'LMP', color: '#7cac24'},
    {entityId: 5, party:'Magyar Liberális Párt', shortName: 'MLP', color: '#2cbfe3'},
    {entityId: 16, party:'Demokratikus Koalíció', shortName: 'DK', color: 'blue'},
    {entityId: 17, party:'Együtt', shortName: 'EGY', color: '#ffff00'},
    {entityId: 18, party:'Párbeszéd', shortName: 'PAR', color: 'lightgreen'},
    {entityId: 20, party:'Más', shortName: 'MAS', color: 'grey'},
    {entityId: 6, party:'Egyéb', shortName: 'OTH', color: '#ccc'},
  ],
  'CA': [
    {entityId: 1, party:'Liberal Party of Canada', shortName: 'Lib', color: '#EA6D6A'},
    {entityId: 2, party:'Conservative Party of Canada', shortName: 'Con', color: '#6495ED'},
    {entityId: 3, party:'Green Party of Canada', shortName: 'Gre', color: '#F4A460'},
    {entityId: 4, party:'New Democratic Party', shortName: 'NDP', color: '#99C955'},
    {entityId: 5, party:'Bloc Québécois', shortName: 'Qué', color: '#87CEFA'},
    {entityId: 6, party:'Others', shortName: 'Oth', color: '#cccccc'},
  ],
  'LV': [
    {entityId: 1, party:'Saskana', shortName: 'Sas', color: 'red'},
    {entityId: 2, party:'Vienotiba', shortName: 'Vien', color: 'green'},
    {entityId: 3, party:'Zalo un Zemnieku savieniba', shortName: 'ZZS', color: 'darkgreen'},
    {entityId: 4, party:'Nacionala apvieniba', shortName: 'NA', color: 'darkred'},
    {entityId: 5, party:'Latvijas Regionu Apvieniba', shortName: 'LRA', color: 'darkblue'},
    {entityId: 7, party:'Jauna konservativa partija', shortName: 'JKP', color: 'blue'},
    {entityId: 13, party:'Latvijas Krievu Savienība', shortName: 'LKS', color: 'pink'},
    {entityId: 100, party:'Others', shortName: 'Oth', color: 'grey'},
  ],
  'BR': [
    {entityId: 1, party:'MDB e base do governo Temer (PTB, DEM, PP, PR, PSD)', shortName: 'MDB', color: 'black'},
    {entityId: 2, party:'PT e centro esquerda (PCdoB e PDT)', shortName: 'PTE', color: 'red'},
    {entityId: 3, party:'Socialista Brasileiro', shortName: 'PSB', color: 'orange'},
    {entityId: 4, party:'Partido da Social Democracia Brasileira', shortName: 'SDB', color: 'blue'},
    {entityId: 5, party:'Partidos conservadores menores (PSL, PSC, PODE, PRTB, PSDC, PRB)', shortName: 'CON', color: 'darkgreen'},
    {entityId: 6, party:'Partidos progressistas menores (REDE, PSTU, PSOL, PCB, PCO)', shortName: 'PRO', color: 'darkred'},
    {entityId: 8, party:'Coligação: Ciro Gomes', shortName: 'PDT', color: 'purple'},
    {entityId: 9, party:'Coligação: Marina Silva', shortName: 'PV', color: 'lightgreen'},
    {entityId: 10, party:'Coligação: Alvaro Dias', shortName: 'PTC', color: 'darkblue'},
    {entityId: 11, party:'Partido: Vera Lúcia', shortName: 'PSTU', color: 'pink'},
    {entityId: 12, party:'Partido: Cabo Daciolo', shortName: 'PATR', color: 'darkcyan'},
    {entityId: 13, party:'Partido: João Goulart', shortName: 'PPL', color: 'yellow'},
    {entityId: 7, party:'Outros partidos', shortName: 'OUT', color: 'grey'},
  ],
  'IE': [
    {entityId: 1, party:'Fine Gael', shortName: 'FG', color: '#0c4176'},
    {entityId: 2, party:'Fianna Fail', shortName: 'FF', color: '#66BB66'},
    {entityId: 3, party:'Labour', shortName: 'Lab', color: '#CC0000'},
    {entityId: 4, party:'Sinn Fein', shortName: 'SF', color: '#008800'},
    {entityId: 5, party:'Green Party', shortName: 'Gre', color: '#99CC33'},
    {entityId: 6, party:'Social Democrats', shortName: 'SD', color: '#752F8B'},
    {entityId: 7, party:'Solidarity', shortName: 'Sol', color: '#E5E500'},
    {entityId: 8, party:'Independent', shortName: 'Ind', color: '#FFC0CB'},
    {entityId: 9, party:'Workers and Unemployed Action', shortName: 'Wor', color: '#FA8072'},
    {entityId: 10, party:'Others', shortName: 'Oth', color: 'grey'},
  ],
  'SE': [
    {entityId: 1, party:'Socialdemokraterna', shortName: 'S', color: '#ed1b34'},
    {entityId: 2, party:'Moderaterna', shortName: 'M', color: '#019CDB'},
    {entityId: 3, party:'Sverigedemokraterna', shortName: 'SD', color: '#fedf09'},
    {entityId: 4, party:'Miljöpartiet', shortName: 'MP', color: '#80AA4E'},
    {entityId: 5, party:'Centerpartiet', shortName: 'C', color: '#39944A'},
    {entityId: 6, party:'Vänsterpartiet', shortName: 'V', color: '#b00000'},
    {entityId: 7, party:'Liberalerna', shortName: 'L', color: '#0069b4'},
    {entityId: 8, party:'Kristdemokraterna', shortName: 'KD', color: '#2D338E'},
    {entityId: 9, party:'Feministiskt initiativ', shortName: 'FI', color: '#cd1b68'},
    {entityId: 10, party:'Alternativ för Sverige', shortName: 'AfS', color: '#19489D'},
    {entityId: 11, party:'Medborgerlig Samling', shortName: 'MED', color: '#28416f'},
    {entityId: 12, party:'Annat', shortName: 'Annat', color: '#cccccc'},
  ],
  'AU': [
    {entityId: 1, party:'Liberal Party', shortName: 'Lib', color: '#0047AB'},
    {entityId: 2, party:'Labour Party', shortName: 'Lab', color: '#DE3533'},
    {entityId: 3, party:'National Party', shortName: 'Nat', color: '#006644'},
    {entityId: 4, party:'Liberal National Party', shortName: 'LNP', color: '#006644'},
    {entityId: 5, party:'Green Party', shortName: 'Gre', color: '#006644'},
    {entityId: 6, party:'Others', shortName: 'Oth', color: '#cccccc'},
  ],
  'UA': [
    {entityId: 12, party:'Зеленський Володимир', shortName: 'ЗЕЛ', color: '#00cc00'},
    {entityId: 3, party:'Партія "Блок Петра Порошенка "Солідарність“', shortName: 'БПП', color: 'darkred'},
    {entityId: 2, party:'Всеукраїнське об`єднання "Батьківщина"', shortName: 'БАТ', color: 'red'},
    {entityId: 4, party:'Політична партія "Опозиційний блок"', shortName: 'ОПБ', color: 'blue'},
    {entityId: 1, party:'Всеукраїнське об`єднання "Свобода"', shortName: 'СВО', color: 'black'},
    {entityId: 5, party:'Радикальна партія Олега Ляшка', shortName: 'РПОЛ', color: 'purple'},
    {entityId: 6, party:'Політична партія "Громадянська позиція"', shortName: 'ГП', color: 'yellow'},
    {entityId: 7, party:'Політична партія "Об`єднання "Самопоміч“', shortName: 'САМ', color: 'green'},
    {entityId: 8, party:'Політична партія "Народний фронт"', shortName: 'НФ', color: 'lightblue'},
    {entityId: 9, party:'Партія "Основа"', shortName: 'ОСН', color: 'red'},
    {entityId: 10, party:'Політична партія "Громадсько-політичний рух Валентина Наливайченка "Справедливість"', shortName: 'СПР', color: 'brown'},
    {entityId: 11, party:'Інші', shortName: 'ІНШ', color: 'grey'},
  ],
  'FI': [
    {entityId: 1, party:'Suomen Keskusta', shortName: 'KES', color: '#01954B'},
    {entityId: 2, party:'Kansallinen Kokoomus', shortName: 'KOK', color: '#006288'},
    {entityId: 3, party:'Suomen Sosialidemokraattinen Puolue', shortName: 'SDP', color: '#E11931'},
    {entityId: 4, party:'Sininen tulevaisuus', shortName: 'SIN', color: '#031F73'},
    {entityId: 5, party:'Perussuomalaiset', shortName: 'PER', color: '#FFDE55'},
    {entityId: 6, party:'Vihreä liitto', shortName: 'VIH', color: '#61BF1A'},
    {entityId: 7, party:'Vasemmistoliitto', shortName: 'VAS', color: '#BF1E24'},
    {entityId: 8, party:'Suomen ruotsalainen kansanpuolue', shortName: 'RKP', color: '#FFDD93'},
    {entityId: 9, party:'Suomen Kristillisdemokraatit', shortName: 'KD', color: '#18359B'},
    {entityId: 10, party:'Others', shortName: 'OTH', color: 'grey'},
  ],
  'NL': [
    {entityId: 1, party:'Volkspartij voor Vrijheid en Democratie', shortName: 'VVD', color: 'orange'},
    {entityId: 2, party:'Partij voor de Vrijheid', shortName: 'PVV', color: 'blue'},
    {entityId: 3, party:'Christen Democratisch Appel', shortName: 'CDA', color: 'darkgreen'},
    {entityId: 4, party:'Democraten 66', shortName: 'D66', color: 'green'},
    {entityId: 5, party:'GroenLinks', shortName: 'GL', color: 'green'},
    {entityId: 6, party:'Socialistische Partij', shortName: 'SP', color: 'red'},
    {entityId: 7, party:'Partij van de Arbeid', shortName: 'PvdA', color: 'red'},
    {entityId: 8, party:'ChristenUnie', shortName: 'CU', color: 'blue'},
    {entityId: 9, party:'Partij voor de Dieren', shortName: 'PvdD', color: 'darkgreen'},
    {entityId: 10, party:'50Plus', shortName: '50Plus', color: 'purple'},
    {entityId: 11, party:'Staatkundig Gereformeerde Partij', shortName: 'SGP', color: 'orange'},
    {entityId: 12, party:'DENK', shortName: 'DENK', color: '#40E0D0'},
    {entityId: 13, party:'Forum voor Democratie', shortName: 'FvD', color: '#900020'},
    {entityId: 14, party:'Anders', shortName: 'OTH', color: 'lightgrey'},
  ],
  'NG': [
    {entityId: 1, party:'People`s Democratic Party', shortName: 'PDP', color: 'green'},
    {entityId: 2, party:'All Progressives Congress', shortName: 'APC', color: 'lightblue'},
    {entityId: 3, party:'Advanced Allied Party', shortName: 'AAP', color: 'red'},
    {entityId: 4, party:'Social Democratic Party', shortName: 'SDP', color: 'red'},
    {entityId: 5, party:'Alliance for New Nigeria', shortName: 'ANN', color: 'lightgreen'},
    {entityId: 6, party:'Allied Congress Party', shortName: 'ACP', color: 'green'},
    {entityId: 7, party:'Abundant Nigeria Renewal Party', shortName: 'ANRP', color: 'darkgrey'},
    {entityId: 8, party:'Independent', shortName: 'IND', color: 'grey'},
    {entityId: 10, party:'Alliance for People`s Trust', shortName: 'APT', color: 'yellow'},
    {entityId: 9, party:'Others', shortName: 'OTH', color: 'lightgrey'},
  ],
  'IL': [
    {entityId: 1, party:'הליכוד', shortName: 'LIK', color: 'lightblue'},
    {entityId: 2, party:'איחוד מפלגות הימין', shortName: 'BAY', color: 'orange'},
    {entityId: 3, party:'ישראל ביתנו', shortName: 'ISB', color: 'grey'},
    {entityId: 4, party:'הימין החדש', shortName: 'YMH', color: 'yellow'},
    {entityId: 5, party:'כולנו', shortName: 'KLN', color: 'purple'},
    {entityId: 6, party:'כחול לבן', shortName: 'KAL', color: 'green'},
    {entityId: 8, party:'גשר', shortName: 'GSR', color: '#FFDF00'}, //gold
    {entityId: 9, party:'העבודה', shortName: 'AVD', color: 'lightgrey'}, //white
    {entityId: 11, party:'מרצ', shortName: 'MRZ', color: 'pink'},
    {entityId: 12, party:'חד״ש-תע״ל', shortName: 'ARB', color: 'red'},
    {entityId: 13, party:'יהדות התורה', shortName: 'YTR', color: 'black'},
    {entityId: 14, party:'ש״ס', shortName: 'SHS', color: 'brown'},
    {entityId: 16, party:'רעמ-בלד', shortName: 'DAM', color: 'red'},
    {entityId: 18, party:'Zehut', shortName: 'ZEH', color: '#0F486C'},
    {entityId: 17, party:'אחר', shortName: 'OTH', color: 'lightgrey'},
  ],
  'ES': [
    {entityId: 1, party:'PSOE', shortName: 'PSOE', color: '#e30613'},
    {entityId: 2, party:'Partido Popular', shortName: 'PP', color: '#008bd6'},
    {entityId: 3, party:'Ciudadanos', shortName: 'CS', color: '#fb5000'},
    {entityId: 4, party:'ES', shortName: 'POD', color: '#673165'},
    {entityId: 5, party:'Vox', shortName: 'VOX', color: '#5ac035'},
    {entityId: 6, party:'Partidos y organizaciones catalanas', shortName: 'CAT', color: '#f4e842'},
    {entityId: 7, party:'Más Madrid', shortName: 'MM', color: '#00a58d'},
    {entityId: 8, party:'PACMA', shortName: 'PACMA', color: '#93a607'},
    {entityId: 9, party:'Partidos del País Vasco', shortName: 'Vasco', color: '#347a4a'},
    {entityId: 10, party:'Otros', shortName: 'OP', color: '#d3b3d6'},
  ],
  'EC': [
    {entityId: 1, party:'Izquierda Democrática', shortName: 'ID', color: 'orange'},
    {entityId: 2, party:'CREO', shortName: 'CRE', color: 'darkblue'},
    {entityId: 3, party:'Partido Social Cristiano', shortName: 'PSC', color: 'yellow'},
    {entityId: 4, party:'Fuerza Compromiso Social', shortName: 'FCS', color: 'blue'},
    {entityId: 5, party:'Pachakutik', shortName: 'PK', color: 'green'},
    {entityId: 6, party:'Movimiento Centro Democrático', shortName: 'CD', color: 'darkorange'},
    {entityId: 7, party:'Movimiento Unidad Popular', shortName: 'UP', color: 'red'},
    {entityId: 8, party:'Partido Adelante Ecuatoriano Adelante', shortName: 'AEA', color: '#ffcc00'}, //darkyellow
    {entityId: 9, party:'Partido Fuerza EC', shortName: 'EC', color: 'black'},
    {entityId: 10, party:'Movimiento Unión Ecuatoriana', shortName: 'UE', color: '#ff9980'}, //lightred
    {entityId: 11, party:'Movimiento Concertación', shortName: 'MC', color: 'lightblue'},
    {entityId: 12, party:'Partido Avanaza', shortName: 'PPA', color: '#ffff99'}, //lightyellow
    {entityId: 13, party:'Otros', shortName: 'OTH', color: 'lightgrey'},
  ],
  'HR': [
    {entityId: 1, party:'HDZ', shortName: 'HDZ', color: '#0000ff'},
    {entityId: 2, party:'SDP', shortName: 'SDP', color: '#ff0000'},
    {entityId: 3, party:'Most', shortName: 'MOS', color: '#3e3696'},
    {entityId: 4, party:'BM 365', shortName: 'BM', color: '#36f443'},
    {entityId: 6, party:'HNS', shortName: 'HNS', color: '#f99212'},
    {entityId: 7, party:'GLAS', shortName: 'GLAS', color: '#93f436'},
    {entityId: 8, party:'HSS', shortName: 'HSS', color: '#008000'},
    {entityId: 9, party:'Živi zid', shortName: 'ŽZ', color: '#ffff00'},
    {entityId: 10, party:'Druge Strane', shortName: 'DRU', color: '#cccccc'},
    {entityId: 17, party:'NHR', shortName: 'NHR', color: '#ee1dbb'},
    {entityId: 18, party:'SDSS', shortName: 'SDSS', color: '#ff4d00'},
    {entityId: 19, party:'Otros', shortName: 'OTH', color: 'lightgrey'},
  ],
  'AT': [
    {entityId: 1, party:'Die neue Volkspartei', shortName: 'OVP', color: '#63c3d1'},
    {entityId: 2, party:'Sozialdemokratische Partei Österreichs', shortName: 'SPO', color: '#ce000c'},
    {entityId: 3, party:'Freiheitliche Partei Österreichs', shortName: 'FPO', color: '#005da8'},
    {entityId: 4, party:'NEOS – Das Neue Österreich und Liberales Forum', shortName: 'NEOS', color: '#e74188'},
    {entityId: 5, party:'Liste Peter Pilz', shortName: 'PILZ', color: '#000000'},
    {entityId: 6, party:'Die Grünen – Die Grüne Alternative', shortName: 'GRUNE', color: '#7ca914'},
    {entityId: 7, party:'Andere', shortName: 'OTH', color: '#ccc'},
  ],
  'FR': [
    {entityId: 1, party:'La République En Marche!', shortName: 'REM', color: '#000000'},
    {entityId: 2, party:'Les Républicains', shortName: 'LR', color: '#ffffff'},
    {entityId: 3, party:'Parti socialiste', shortName: 'PS', color: '#e82553'},
    {entityId: 4, party:'Mouvement démocrate', shortName: 'MODEM', color: '#f3a640'},
    {entityId: 5, party:'La France Insoumise', shortName: 'FI', color: '#c64630'},
    {entityId: 6, party:'Parti communiste français', shortName: 'PCF', color: '#fc5457'},
    {entityId: 7, party:'Rassemblement national', shortName: 'RN', color: '#264770'},
    {entityId: 8, party:'Mouvement radical', shortName: 'MR', color: '#e28bc0'},
    {entityId: 9, party:'Les Centristes', shortName: 'LC', color: '#8ea6d1'},
    {entityId: 11, party:'Citoyenneté, Action, Participation pour le 21e siècle', shortName: 'Cap21', color: '#cbe643'},
    {entityId: 12, party:'Europe Écologie Les Verts', shortName: 'EELV', color: '#7bb22d'},
    {entityId: 13, party:'Parti de Gauche', shortName: 'PG', color: '#b50613'},
    {entityId: 14, party:'Génération.S', shortName: 'GS', color: '#ca2456'},
    {entityId: 10, party:'Autre', shortName: 'OTH', color: '#ccc'},
  ],
  'IT': [
    {entityId: 1, party:'Movimento 5 Stelle', shortName: 'M5S', color: '#eed923'},
    {entityId: 2, party:'Lega', shortName: 'LN', color: '#1f2e83'},
    {entityId: 3, party:'Partito Democratico', shortName: 'PD', color: 'red'},
    {entityId: 4, party:'Forza Italia', shortName: 'FI', color: '#2a963a'},
    {entityId: 5, party:'Fratelli d`Italia', shortName: 'FDi', color: '#014171'},
    {entityId: 6, party:'Partito Liberale Italiano', shortName: 'PL', color: '#f1b900'},
    {entityId: 7, party:'Partito Socialista Italiano', shortName: 'PSI', color: '#fefefe'},
    {entityId: 8, party:'Più Europa', shortName: 'PiuE', color: '#fec115'},
    {entityId: 9, party:'Altro', shortName: 'OTH', color: '#ccc'},
  ],
  'BE': [
    {entityId: 1, party:'Nieuw-Vlaamse Alliantie', shortName: 'NVA', color: '#f9b918'},
    {entityId: 2, party:'Christen-Democratisch en Vlaams', shortName: 'CDV', color: '#ff820a'},
    {entityId: 3, party:'Open Vlaamse Liberalen en Democraten', shortName: 'VLD', color: '#1e81c4'},
    {entityId: 4, party:'Socialistische Partij Anders', shortName: 'SP', color: '#307104'},
    {entityId: 5, party:'Groen', shortName: 'GROEN', color: '#04847a'},
    {entityId: 6, party:'Vlaams Belang', shortName: 'VB', color: '#fecf03'},
    {entityId: 7, party:'Others', shortName: 'OTH', color: '#ccc'},
  ],
  'BG': [
    {entityId: 1, party:'ГЕРБ', shortName: 'GERB', color: '#293c0b'},
    {entityId: 2, party:'Българска социалистическа партия', shortName: 'BSP', color: '#ff0000'},
    {entityId: 3, party:'Движение за права и свободи', shortName: 'DPS', color: '#0061ab'},
    {entityId: 4, party:'Обединени Патриоти', shortName: 'PAT', color: 'black'},
    {entityId: 5, party:'Друг', shortName: 'OTH', color: '#ccc'},
  ],
  'CY': [
    {entityId: 1, party:'Δημοκρατικός Συναγερμός', shortName: 'DISY', color: '#0a4595'},
    {entityId: 2, party:'Ανορθωτικό Κόμμα Εργαζόμενου Λαού', shortName: 'AKEL', color: '#eb1e27'},
    {entityId: 3, party:'Δημοκρατικό Κόμμα', shortName: 'DIKO', color: '#0061aa'},
    {entityId: 4, party:'Συμμαχία Πολιτών', shortName: 'SYPOL', color: '#045184'},
    {entityId: 5, party:'Κίνημα Αλληλεγγύη', shortName: 'KA', color: '#b22f19'},
    {entityId: 6, party:'Κίνημα Οικολόγων - Συνεργασία Πολιτών', shortName: 'KOSP', color: '#4a8b5c'},
    {entityId: 7, party:'Εθνικό Λαϊκό Μέτωπο', shortName: 'ELAM', color: '#2764ad'},
    {entityId: 8, party:'Άλλο', shortName: 'OTH', color: '#ccc'},
  ],
  'CZ': [
    {entityId: 1, party:'ANO', shortName: 'ANO', color: '#261161'},
    {entityId: 2, party:'Občanská demokratická strana', shortName: 'ODS', color: '#004494'},
    {entityId: 3, party:'Česká pirátská strana', shortName: 'Pirati', color: '#000000'},
    {entityId: 4, party:'Svoboda a přímá demokracie', shortName: 'SPD', color: '#28579a'},
    {entityId: 5, party:'Komunistická strana Čech a Moravy', shortName: 'KSCM', color: '#8c0000'},
    {entityId: 6, party:'Česká strana sociálně demokratická', shortName: 'CSSD', color: '#ff991f'},
    {entityId: 7, party:'Křesťanská a demokratická unie – Československá strana lidová', shortName: 'KDU', color: '#f6c402'},
    {entityId: 8, party:'Strana svobodných občanů', shortName: 'SVOB', color: '#009682'},
    {entityId: 9, party:'Strana zelených', shortName: 'ZEL', color: '#60b34c'},
    {entityId: 10, party:'Jiné', shortName: 'OTH', color: '#ccc'},
  ],
  'DK': [
    {entityId: 1, party:'Socialdemokraterne', shortName: 'A', color: '#ef4d46'},
    {entityId: 2, party:'Dansk Folkeparti', shortName: 'O', color: '#92aac2'},
    {entityId: 3, party:'Venstre', shortName: 'V', color: '#002783'},
    {entityId: 4, party:'Socialistisk Folkeparti', shortName: 'F', color: '#bf031a'},
    {entityId: 5, party:'Det Konservative Folkeparti', shortName: 'C', color: '#00593c'},
    {entityId: 6, party:'Folkebevægelsen mod EU', shortName: 'N', color: '#304d87'},
    {entityId: 7, party:'Andet', shortName: 'OTH', color: '#ccc'},
  ],
  'EE': [
    {entityId: 1, party:'Eesti Reformierakond', shortName: 'RE', color: '#ffe200'},
    {entityId: 2, party:'Sotsiaaldemokraatlik Erakond', shortName: 'SDE', color: '#e10601'},
    {entityId: 3, party:'Isamaa', shortName: 'I', color: '#009ce2'},
    {entityId: 4, party:'Eesti Vabaerakond', shortName: 'EVA', color: '#0089d1'},
    {entityId: 5, party:'Eesti Konservatiivne Rahvaerakond', shortName: 'EKRE', color: '#0089d1'},
    {entityId: 6, party:'Muu', shortName: 'OTH', color: '#ccc'},
  ],
  'GR': [
    {entityId: 1, party:'Συνασπισμός Ριζοσπαστικής Αριστεράς – Ενωτικό Κοινωνικό Μέτωπο', shortName: 'SZA', color: '#ca262b'},
    {entityId: 2, party:'Νέα Δημοκρατία', shortName: 'ND', color: '#1a5cc6'},
    {entityId: 3, party:'Λαϊκός Σύνδεσμος – Χρυσή Αυγή', shortName: 'XA', color: '#000000'},
    {entityId: 4, party:'Κίνημα Αλλαγής', shortName: 'KINAL', color: '#e30714'},
    {entityId: 5, party:'Το Ποτάμι', shortName: 'POT', color: '#5395c7'},
    {entityId: 6, party:'Ανεξάρτητοι Έλληνες', shortName: 'ANEL', color: '#234a9d'},
    {entityId: 7, party:'Ένωση Κεντρώων', shortName: 'EK', color: '#fdb300'},
    {entityId: 8, party:'Άλλο', shortName: 'OTH', color: '#ccc'},
  ],
  'LT': [
    {entityId: 1, party:'Lietuvos valstiečių ir žaliųjų sąjunga', shortName: 'LVZS', color: '#3f8813'},
    {entityId: 2, party:'Tėvynės sąjunga - Lietuvos krikščionys demokratai', shortName: 'TSLKD', color: '#27326a'},
    {entityId: 3, party:'Lietuvos socialdemokratų partija', shortName: 'LSDP', color: '#e10514'},
    {entityId: 4, party:'Liberalų sąjūdis', shortName: 'LRLS', color: '#f49813'},
    {entityId: 5, party:'Tvarka ir teisingumas', shortName: 'TT', color: '#385296'},
    {entityId: 6, party:'Lietuvos lenkų rinkimų akcija', shortName: 'LLRA', color: 'blue'},
    {entityId: 7, party:'Lietuvos Žaliųjų Partija', shortName: 'LZP', color: '#7a9342'},
    {entityId: 8, party:'Lietuvos centro partija', shortName: 'LCP', color: 'grey'},
    {entityId: 9, party:'Lietuvos sarašas', shortName: 'LS', color: '#980001'},
    {entityId: 10, party:'Kiti', shortName: 'OTH', color: '#ccc'},
  ],
  'LU': [
    {entityId: 1, party:'Alternativ Demokratesch Reformpartei', shortName: 'ADR', color: '#009dd1'},
    {entityId: 2, party:'Chrëschtlech Sozial Vollekspartei', shortName: 'CSV', color: '#ee7d00'},
    {entityId: 3, party:'Demokratesch Partei', shortName: 'DP', color: '#002a54'},
    {entityId: 4, party:'Déi Gréng', shortName: 'GRENG', color: '#84b414'},
    {entityId: 5, party:'Déi Lénk', shortName: 'LENK', color: '#e40133'},
    {entityId: 6, party:'Lëtzebuerger Sozialistesch', shortName: 'LSAP', color: 'grey'},
    {entityId: 7, party:'Piratepartei Lëtzebuerg', shortName: 'PIR', color: '#92268f'},
    {entityId: 8, party:'Others', shortName: 'OTH', color: '#ccc'},
  ],
  'MT': [
    {entityId: 1, party:'Partit Laburista', shortName: 'PL', color: '#e40133'},
    {entityId: 2, party:'Partit Nazzjonalista', shortName: 'PN', color: '#009dd1'},
    {entityId: 3, party:'Demokratiku', shortName: 'PD', color: '#fdb300'},
    {entityId: 4, party:'Oħrajn', shortName: 'OTH', color: '#ccc'},
  ],
  'PT': [
    {entityId: 1, party:'Partido Comunista Português', shortName: 'PCP', color: '#e10514'},
    {entityId: 2, party:'Partido Socialista', shortName: 'PS', color: 'grey'},
    {entityId: 3, party:'Pessoas-Animais-Natureza', shortName: 'PAN', color: '#005ca8'},
    {entityId: 4, party:'LIVRE', shortName: 'L', color: '#a3c660'},
    {entityId: 5, party:'Partido Democrático Republicano', shortName: 'PDR', color: '#000000'},
    {entityId: 6, party:'Partido Social Democrata', shortName: 'PSD', color: '#f4650d'},
    {entityId: 7, party:'Outro', shortName: 'OTH', color: '#ccc'},
  ],
  'RO': [
    {entityId: 1, party:'Partidul Social Democrat', shortName: 'PSD', color: '#e10514'},
    {entityId: 2, party:'Partidul Național Liberal', shortName: 'PNL', color: '#3560a9'},
    {entityId: 3, party:'Uniunea Salvați România', shortName: 'USR', color: '#00aae6'},
    {entityId: 4, party:'Uniunea Democrată Maghiară din România', shortName: 'UDMR', color: '#2a6633'},
    {entityId: 5, party:'Alianța Liberalilor și Democraților', shortName: 'ALDE', color: '#0c5794'},
    {entityId: 6, party:'Altceva', shortName: 'OTH', color: '#ccc'},
  ],
  'SK': [
    {entityId: 1, party:'Smer – soci_lna demokracia', shortName: 'SMER', color: '#cb001c'},
    {entityId: 2, party:'Sloboda a Solidarita', shortName: 'SaS', color: '#b4c800'},
    {entityId: 3, party:'Slovenská národná strana', shortName: 'SNS', color: '#253a79'},
    {entityId: 4, party:'Ľudová strana – Naše Slovensko', shortName: 'LSNS', color: '#348000'},
    {entityId: 5, party:'SME RODINA – Boris Kollár', shortName: 'ROD', color: '#0d3f92'},
    {entityId: 6, party:'Most–Híd', shortName: 'Most', color: '#ee7d0b'},
    {entityId: 7, party:'Slovenská konzervatívna strana', shortName: 'SKS', color: '#385296'},
    {entityId: 8, party:'Iné', shortName: 'OTH', color: '#ccc'},
  ],
  'SI': [
    {entityId: 1, party:'Slovenska demokratska stranka', shortName: 'SDS', color: '#0d3f92'},
    {entityId: 2, party:'Lista Marjana Šarca', shortName: 'LMS', color: '#0c5794'},
    {entityId: 3, party:'Socialni demokrati', shortName: 'SD', color: '#e10514'},
    {entityId: 4, party:'Stranka modernega centra', shortName: 'SMC', color: '#0d3f92'},
    {entityId: 5, party:'Levica', shortName: 'Levica', color: '#e10514'},
    {entityId: 6, party:'Stranka Alenke Bratušek', shortName: 'SAB', color: '#00aae6'},
    {entityId: 7, party:'Slovenska nacionalna stranka', shortName: 'SNS', color: '#eed923'},
    {entityId: 8, party:'Drugo', shortName: 'OTH', color: '#ccc'},
  ],
  'LI': [
    {entityId: 1, party:'Fortschrittliche Bürgerpartei', shortName: 'FBP', color: '#27326a'},
    {entityId: 2, party:'Die Unabhängigen', shortName: 'VU', color: '#e10514'},
    {entityId: 3, party:'Freie Liste', shortName: 'DU', color: '#ffffff'},
    {entityId: 4, party:'Others', shortName: 'OTH', color: '#ccc'},
  ],
  'PL': [
    {entityId: 1, party:'Prawo i Sprawiedliwość', shortName: 'PiS', color: '#263778'},
    {entityId: 2, party:'Platforma Obywatelska', shortName: 'PO', color: '#fdb300'},
    {entityId: 3, party:'Nowoczesna', shortName: 'N', color: '#005ca8'},
    {entityId: 4, party:'Porozumienie', shortName: 'POR', color: '##005ca8'},
    {entityId: 5, party:'Kukiz`15', shortName: 'K15', color: 'black'},
    {entityId: 6, party:'Sojusz Lewicy Demokratycznej', shortName: 'SLD', color: '#e10514'},
    {entityId: 7, party:'Solidarna Polska', shortName: 'SP', color: '##005ca8'},
    {entityId: 8, party:'Wolność', shortName: 'WOL', color: '#ffcb0a'},
    {entityId: 9, party:'Kongres Nowej Prawicy', shortName: 'KNP', color: '#000000'},
    {entityId: 10, party:'Inne', shortName: 'OTH', color: '#ccc'},
  ],
  // 'MK': [
  //   {entityId: 1, party:'European People`s Party', shortName: 'VMRO', color: '#e10514'},
  //   {entityId: 2, party:'Party of European Socialists', shortName: 'SDSM', color: '#1f2953'},
  //   {entityId: 3, party:'Демократска унија за интеграција', shortName: 'DUI', color: '#eed923'},
  //   {entityId: 4, party:'Демократска Партија на Албанците', shortName: 'DPA', color: '#000000'},
  //   {entityId: 5, party:'Others', shortName: 'OTH', color: '#ccc'},
  // ],
  // '': [
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  //   {entityId: , party:'', shortName: '', color: ''},
  // ],
}
