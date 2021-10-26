// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1 - Array Methoden
// 1a
const tvType = inventory.map((tv) => {return tv.type;});
console.log(tvType);

// 1b
const soldOut =  inventory.filter((tv) => {return tv.originalStock - tv.sold === 0;});
console.log(soldOut);

// 1c
const hasAmbilight = inventory.filter((tv) => {return tv.options.ambiLight;});
console.log(hasAmbilight);

// 1d
const lowToHigh = inventory.sort((a, b) => {return a.price - b.price;});
console.log(lowToHigh);


// Opdracht 2 - Elementen in de DOM plaatsen
// 2a
const unitsSold = () => {
  let sold = 0;
  for (let i = 0; i < inventory.length; i++) {
    sold += inventory[i].sold;
  }
  return sold;
};

console.log(unitsSold());

// 2b
const soldElement = document.getElementById("sold");
soldElement.textContent = unitsSold();

// 2c
const unitsPurchased = () => {
  let purchased = 0;
  for (let i = 0; i < inventory.length; i++) {
    purchased += inventory[i].originalStock;
  }
  return purchased;
};

console.log(unitsPurchased());

// 2d
const purchasedElement = document.getElementById("purchased");
purchasedElement.textContent = unitsPurchased();

// 2e
const stockLeft = () => {
  let totalStockLeft = 0;
  for (let i = 0; i < inventory.length; i++) {
    const onStock = inventory[i].originalStock - inventory[i].sold;
    totalStockLeft += onStock;
  }
  return totalStockLeft;
}

const stockElement = document.getElementById("stock");
stockElement.textContent = stockLeft();


// Opdracht 3
// 3a
const tvBrand = inventory.map((tv) => {return " " + tv.brand});

const brandElement = document.getElementById("brand");
brandElement.textContent = tvBrand;

// 4b
const tvBrandFunction = (tvArray) => {
  let brandList = "";
  for (let i = 0; i < tvArray.length; i++) {
    if (i < (tvArray.length - 1)) {
      brandList += tvArray[i].brand + ", ";
    } else {
      brandList += tvArray[i].brand;
    }

  }
  return brandList;
}

const brandFunctionElement = document.getElementById("brandFunction");
brandFunctionElement.textContent = tvBrandFunction(inventory);

// Opdracht 5
// 5a
const tvName = (tvArray) => tvArray.brand + " " + tvArray.type + " - " + tvArray.name;

const nameElement = document.getElementById("name");
nameElement.textContent = tvName(inventory[0]);

// 5b
const tvPrice = (tvArray) => "€" + tvArray.price + ",-";

const priceElement = document.getElementById("price");
priceElement.textContent = tvPrice(inventory[0]);

// 5c
const availableSizes = (tvArray) => {
  }
}

console.log(availableSizes(inventory[5]))

const sizesElement = document.getElementById("sizes");
sizesElement.textContent = availableSizes(inventory[5]);