const productsData = [
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/SULPHUR-GRANULES-200x200.jpg",
    title: "SULPHUR GRANULES",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/SULPHUR-LUMPS-200x200.jpg",
    title: "SULPHUR LUMPS",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/SULPHUR-FLAKES-200x200.jpg",
    title: "SULPHUR FLAKES",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/SULPHUR-BENTONITE-200x200.jpg",
    title: "SULPHUR BENTONITE",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/SULPHUR-WDG-80-200x200.jpg",
    title: "SULPHUR WDG 80%",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/Limestone-200x200.jpg",
    title: "LIMESTONE",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/KCL-potash-200x200.jpg",
    title: "KCL POTASH",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/UREA-granules-200x200.jpg",
    title: "UREA GRANULES",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/Urea-prills-200x200.jpg",
    title: "UREA PRILLS",
  },
  {
    image: "https://ampm-llc.com/wp-content/uploads/2022/11/gypsum-200x200.jpg",
    title: "GYPSUM",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/BITUMEN-6070-200x200.jpg",
    title: "BITUMEN 60/70",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/bitumen-80-100-200x200.jpg",
    title: "BITUMEN 80/100",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/Linear-alkaline-benzene-lab-200x200.jpg",
    title: "LINEAR ALKALINE BENZENE (LAB)",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/PETRO-COKE-1-200x200.jpg",
    title: "PETRO COKE",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/POLYMERS-200x200.jpg",
    title: "POLYMERS",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/clinker-200x200.jpg",
    title: "CLINKER",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/grinding-media-balls-200x200.jpg",
    title: "GRINDING MEDIA BALLS",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/steel-coils-200x200.jpg",
    title: "STEEL COILS",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/rhodes-grass-alfalfa-200x200.jpg",
    title: "RHODES GRASS ALFALFA",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/11/SPONGE-IRON-DRI-200x200.jpg",
    title: "SPONGE IRON DRI",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/12/FERRO-MANGANESE.jpg",
    title: "FERRO MANGANESE",
  },
  {
    image: "https://ampm-llc.com/wp-content/uploads/2022/12/LPG.jpg",
    title: "LPG",
  },
  {
    image: "https://ampm-llc.com/wp-content/uploads/2022/12/GASOLINE.jpg",
    title: "GASOLINE",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/12/SHELL-ARGINA-S4X-40.jpg",
    title: "SHELL ARGINA S4X 40",
  },
  {
    image: "https://ampm-llc.com/wp-content/uploads/2022/12/BASE-OILS.jpg",
    title: "BASE OILS",
  },
  {
    image: "https://ampm-llc.com/wp-content/uploads/2022/12/FUEL-OILS.jpg",
    title: "FUEL OILS",
  },
  {
    image:
      "https://ampm-llc.com/wp-content/uploads/2022/12/SHELL-ARGINA-S4-40.jpg",
    title: "SHELL ARGINA S4 40",
  },
  {
    image: "https://ampm-llc.com/wp-content/uploads/2022/12/COTTON.jpg",
    title: "COTTON",
  },
];

// Select the container for the product cards
let productContainer = document.querySelector(".products-cards-div");

// Define a function to append the product data to the container
function appendProduct(data) {
  // Clear the container first to avoid duplicating products
  productContainer.innerHTML = "";

  // Loop through each product in the data array and create a new card div for it
  data.forEach((el) => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card-img-title";

    // Create an image element and set its source and alt attributes
    let img = document.createElement("img");
    img.src = el.image;
    img.alt = el.title;

    // Create a new div for the product title
    let divTitle = document.createElement("div");
    divTitle.className = "prod-title";

    // Create a heading element for the title and set its innerHTML to the product title
    let h3 = document.createElement("h3");
    h3.innerHTML = el.title;

    // Append the heading element to the title div
    divTitle.appendChild(h3);

    // Append the image and title div to the card div
    cardDiv.append(img, divTitle);

    // Append the card div to the product container
    productContainer.append(cardDiv);
  });
}

// Call the appendProduct function with the product data array to display the products on the page
appendProduct(productsData);
