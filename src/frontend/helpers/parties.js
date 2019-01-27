export const availableCountries = [
  {id: 'GB', country: "Great Britain"},
  {id: 'DE', country: "Germany"},
  {id: 'LV', country: "Latvia"},
  {id: 'BR', country: "Brazil"},
  {id: 'IE', country: "Ireland"},
  {id: 'US', country: "USA"},
  // {id: 'HU', country: "Hungary"},
  {id: 'CA', country: "Canada"},
  {id: 'SE', country: "Sweden"},
  {id: 'AU', country: "Australia"},
  {id: 'UA', country: "Ukraine"},
  {id: 'FI', country: "Finland"},
  {id: 'NL', country: "Netherlands"},
  // {id: 'FR', country: "France"},
  {id: 'NG', country: "Nigeria"},
  // {id: 'IL', country: "Israel"},
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
      {entityId: 9, party:'Others', shortName: 'Oth', color: 'grey'},
      {entityId: 10, party:'Pro Brexit', shortName: 'Leave', color: 'darkred'},
      {entityId: 11, party:'Anti Brexit', shortName: 'Remain', color: 'darkblue'},
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
  ],
  'US': [
    {entityId: 1, party:'Republicans', shortName: 'Rep', color: 'red'},
    {entityId: 2, party:'Democrats', shortName: 'Dem', color: 'blue'},
    {entityId: 3, party:'Independents', shortName: 'Ind', color: 'grey'},
    {entityId: 4, party:'Libertarians', shortName: 'Lib', color: 'yellow'},
    {entityId: 5, party:'Greens', shortName: 'Gre', color: 'green'},
    {entityId: 6, party:'Republican PACs', shortName: 'RPacs', color: 'lightred'},
    {entityId: 7, party:'Democratic PACs', shortName: 'DPacs', color: 'lightblue'},
    {entityId: 8, party:'Other', shortName: 'Oth', color: 'lightgrey'},
  ],
  'HU': [
    {entityId: 12, party:'Fidesz', shortName: 'Fidesz', color: 'orange'},
    {entityId: 13, party:'Magyar Szocialista Párt', shortName: 'MSZP', color: 'red'},
    {entityId: 14, party:'Jobbik', shortName: 'Job', color: 'black'},
    {entityId: 16, party:'Demokratikus Koalíció', shortName: 'DK', color: 'blue'},
    {entityId: 17, party:'Együtt', shortName: 'Egy', color: '#ffff00'},
    {entityId: 18, party:'Párbeszéd', shortName: 'Pár', color: 'lightgreen'},
    {entityId: 20, party:'Más', shortName: 'Más', color: 'grey'},
    {entityId: 21, party:'LMP', shortName: 'LMP', color: 'lightgreen'},
  ],
  'CA': [
    {entityId: 1, party:'Liberal Party of Canada', shortName: 'Lib', color: '#EA6D6A'},
    {entityId: 2, party:'Conservative Party of Canada', shortName: 'Con', color: '#6495ED'},
    {entityId: 3, party:'Green Party of Canada', shortName: 'Gre', color: '#F4A460'},
    {entityId: 4, party:'New Democratic Party', shortName: 'NDP', color: '#99C955'},
    {entityId: 5, party:'Bloc Québécois', shortName: 'Qué', color: '#87CEFA'},
    {entityId: 6, party:'Other parties', shortName: 'Oth', color: '#cccccc'},
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
    {entityId: 7, party:'Outros partidos', shortName: 'OUT', color: 'grey'},
    {entityId: 8, party:'Coligação: Ciro Gomes', shortName: 'PDT', color: 'purple'},
    {entityId: 9, party:'Coligação: Marina Silva', shortName: 'PV', color: 'lightgreen'},
    {entityId: 10, party:'Coligação: Alvaro Dias', shortName: 'PTC', color: 'darkblue'},
    {entityId: 11, party:'Partido: Vera Lúcia', shortName: 'PSTU', color: 'pink'},
    {entityId: 12, party:'Partido: Cabo Daciolo', shortName: 'PATR', color: 'darkcyan'},
    {entityId: 13, party:'Partido: João Goulart', shortName: 'PPL', color: 'yellow'},
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
  ],
  'AU': [
    {entityId: 1, party:'Liberal Party', shortName: 'Lib', color: '#0047AB'},
    {entityId: 2, party:'Labour Party', shortName: 'Lab', color: '#DE3533'},
    {entityId: 3, party:'National Party', shortName: 'Nat', color: '#006644'},
    {entityId: 4, party:'Liberal National Party', shortName: 'LNP', color: '#006644'},
    {entityId: 5, party:'Green Party', shortName: 'Gre', color: '#006644'},
    {entityId: 6, party:'Other Parties', shortName: 'Oth', color: '#cccccc'},
  ],
  'UA': [
    {entityId: 1, party:'Всеукраїнське об\'єднання "Свобода"', shortName: 'СВО', color: 'black'},
    {entityId: 2, party:'Всеукраїнське об\'єднання "Батьківщина"', shortName: 'БАТ', color: 'red'},
    {entityId: 3, party:'Партія "Блок Петра Порошенка "Солідарність“', shortName: 'БПП', color: 'darkred'},
    {entityId: 4, party:'Політична партія "Опозиційний блок"', shortName: 'ОПБ', color: 'blue'},
    {entityId: 5, party:'Радикальна партія Олега Ляшка', shortName: 'РПОЛ', color: 'purple'},
    {entityId: 6, party:'Політична партія "Громадянська позиція"', shortName: 'ГП', color: 'yellow'},
    {entityId: 7, party:'Політична партія "Об\'єднання "Самопоміч“', shortName: 'САМ', color: 'green'},
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
  ],
  'NG': [
    {entityId: 1, party:'People\'s Democratic Party', shortName: 'PDP', color: 'green'},
    {entityId: 2, party:'All Progressives Congress', shortName: 'APC', color: 'lightblue'},
    {entityId: 3, party:'Advanced Allied Party', shortName: 'AAP', color: 'red'},
    {entityId: 4, party:'Social Democratic Party', shortName: 'SDP', color: 'red'},
    {entityId: 5, party:'Alliance for New Nigeria', shortName: 'ANN', color: 'lightgreen'},
    {entityId: 6, party:'Allied Congress Party', shortName: 'ACP', color: 'green'},
    {entityId: 7, party:'Abundant Nigeria Renewal Party', shortName: 'ANRP', color: 'darkgrey'},
    {entityId: 8, party:'Independent', shortName: 'IND', color: 'grey'},
    {entityId: 9, party:'Other', shortName: 'OTH', color: 'lightgrey'},
    {entityId: 10, party:'Alliance for People\'s Trust', shortName: 'APT', color: 'yellow'},
  ],
}
