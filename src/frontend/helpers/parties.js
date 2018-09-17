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
]

export const availableParties = {
  'GB': [
      {entityId: 1, party:'Conservatives', shortName: 'CON', color: 'blue'},
      {entityId: 2, party:'The Labour Party', shortName: 'LAB', color: 'red'},
      {entityId: 3, party:'Liberal Democrats', shortName: 'LD', color: '#ffff00'},
      {entityId: 7, party:'UKIP', shortName: 'UKIP', color: 'purple'},
      {entityId: 5, party:'Northern Irish Parties', shortName: 'NI', color: 'lightgrey'},
      {entityId: 4, party:'Scottish National Party', shortName: 'SNP', color: '#ffff00'},
      {entityId: 6, party:'Plaid Cymru', shortName: 'PC', color: 'blue'},
      {entityId: 8, party:'The Green Party', shortName: 'Gre', color: 'green'},
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
  ],
  'US': [
    {entityId: 1, party:'Republican', shortName: 'Rep', color: 'red'},
    {entityId: 2, party:'Democratic', shortName: 'Dem', color: 'blue'},
    {entityId: 3, party:'Independent', shortName: 'Ind', color: 'grey'},
    {entityId: 4, party:'Libertarian', shortName: 'Lib', color: 'yellow'},
    {entityId: 5, party:'Green', shortName: 'Gre', color: 'green'},
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
  ]
}
