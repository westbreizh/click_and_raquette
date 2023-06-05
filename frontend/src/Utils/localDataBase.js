const datasForSelectstring = [ 
  {   
   options: ["Babolat", "Head", "Wilson","Technifibre", "Yonex"],
   title : "Marque",
   fieldNameBdd: "Mark"
  },

  {
    options: ["Multifilament", "Monofilament", "Boyau naturel", "Co-polyester"],
    title : "Composition",
    fieldNameBdd: "Composition",
  },
  {
    options: ["Contrôle", "Puissance", "Prise d'effet", "Confort"],
    title : "Gamme",
    fieldNameBdd: "first_characteristic"
  },
  {
    options: ["Garniture 12m", "Bobine 200m"],
    title : "Conditionnement",
    fieldNameBdd: "Packaging"
  }
];

export { datasForSelectstring };


const datasForSelectsBall = [ 
  {   
   options: ["Dunlop", "Technifibre", "Wilson"],
   title : "Marque",
   fieldNameBdd: "mark"
  },
  {
    options: ["Tube de balles","pack de 2 tubes de balles", "Carton de tubes"],
    title : "Conditionnement",
    fieldNameBdd: "packaging"
    },

  {
  options: ["standard", "Balles sans pression", "Balles oranges"],
  title : "Type",
  fieldNameBdd: "sort",
  },

];

export { datasForSelectsBall };


const datasForSelectsAccessories = [ 
  {   
   options: ["Babolat", "Head"],
   title : "Marque",
   fieldNameBdd: "mark"
  },
  {
    options: ["grip","surgrip", "anti-vibrateur"],
    title : "Produits",
    fieldNameBdd: "product"
    },

];

export { datasForSelectsAccessories };


const datasForSelectClub = [ 
  { value: 'TC Quimper' },
  { value: 'TC Penmach'},  
];

export { datasForSelectClub };


const datasForSelectRopeString = [];

for (let i = 17; i <= 30; i++) {
  datasForSelectRopeString.push({ value: i });
}


export { datasForSelectRopeString };