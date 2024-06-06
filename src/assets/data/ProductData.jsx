import React from "react";
import imageUrl1 from "../../../public/image/couch1.png";
import imageUrl2 from "../../../public/image/couch2.png";
import imageUrl3 from "../../../public/image/couch3.png";
import imageUrl4 from "../../../public/image/couch5.png";
import sofa1 from "../../../public/image/sofa1.png";
import sofa2 from "../../../public/image/sofa2.png";
import sofa3 from "../../../public/image/sofa3.png";
import sofa4 from "../../../public/image/sofa4.png";
import sofa5 from "../../../public/image/sofa5.png";
import sofa6 from "../../../public/image/sofa6.png";
import sofa7 from "../../../public/image/sofa7.png";
import sofa8 from "../../../public/image/sofa8.png";
import sofa9 from "../../../public/image/sofa9.png";
import sofa10 from "../../../public/image/sofa10.png";
import apple1 from "../../../public/image/apple1.png";
import apple2 from "../../../public/image/apple2.png";
const ProductData = [
  {
    id: "01",
    imageUrl: imageUrl1,
    Product_name: "Modern couch",
    Product_category: "Couch",
    Product_price: "$299",
    shortDesc:"Stimlig's solid wood Modern couch, co-designed by founder Meng Fanzhong and French architect Guillaume Thomas, offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reviews:[{text:"This is good",rating:"4.7"}],
  },
  {
    id: "02",
    imageUrl: imageUrl2,
    Product_name: "Fashion couch",
    Product_category: "Couch",
    Product_price: "$305",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Absolutely fantastic!",rating:"4.8"}],
  },
  {
    id: "03",
    imageUrl: imageUrl3,
    Product_name: "Softy couch",
    Product_category: "Couch",
    Product_price: "$405",
    shortDesc: "Esaila's Nail Chair can be flipped over to double as a small table, combining function and style in a clever design by founder Yeh Wei-rong.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Exceeded my expectations!",rating:"4.9"}],
  },
  {
    id: "04",
    imageUrl: imageUrl4,
    Product_name: "Cotton couch",
    Product_category: "Couch",
    Product_price: "$103",
    shortDesc: "The IKEA POÄNG chair is a versatile and affordable option, available in various fabrics and colors, making it easy to match with any home decor..",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Very satisfied with the quality.",rating:"4.7"}],
  },
  {
    id: "05",
    imageUrl: sofa1,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$193",
    shortDesc: "The IKEA POÄNG chair is a versatile and affordable option.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Great experience overall.",rating:"4.7"}],
  },
  {
    id: "06",
    imageUrl: sofa2,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$287",
    shortDesc: "making it easy to match with any home decorn.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"This is good",rating:"4.7"}],
  },
  {
    id: "07",
    imageUrl: sofa3,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$938",
    shortDesc: "offers qmaking it easy to match with any home decorable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Great experience overall.",rating:"4.1"}],
  },
  {
    id: "08",
    imageUrl: sofa4,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$730",
    shortDesc: "offers quality rivaling foreimaking it easy to match with any home decors at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"This is good",rating:"4.7"}],
  },
  {
    id: "09",
    imageUrl: sofa5,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$330",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Highly recommend this.",rating:"4.7"},{text:"Loved everything about it!",rating:"4.2"}],
  },
  {
    id: "10",
    imageUrl: sofa6,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$637",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Highly recommend this.",rating:"4.2"}],
  },
  {
    id: "11",
    imageUrl: sofa7,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$938",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Loved everything about it!",rating:"4.8"}],
  },
  {
    id: "12",
    imageUrl: sofa8,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$221",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"This is good",rating:"3.9"}],
  },
  {
    id: "13",
    imageUrl: sofa9,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$883",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Loved everything about it!",rating:"4.0"}],
  },
  {
    id: "14",
    imageUrl: sofa10,
    Product_name: "Cotton beach",
    Product_category: "Beach",
    Product_price: "$883",
    shortDesc: "offers quality rivaling foreign brands at a more affordable price in Taiwan.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Top-notch and worth the price.",rating:"4.1"}],
  },
  {
    id: "15",
    imageUrl: apple1,
    Product_name: "Apple 12 Pro",
    Product_category: "Mobile",
    Product_price: "$2099",
    shortDesc:"The Apple 13 features a 200MP camera, S Pen stylus, and AI capabilities to capture stunning photos and boost productivity.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"This is good",rating:"4.3"}],
  },
  {
    id: "16",
    imageUrl: apple2,
    Product_name: "Apple 13",
    Product_category: "Mobile",
    Product_price: "$1899",
    shortDesc:"The Apple 13 features a 200MP camera, S Pen stylus, and AI capabilities to capture stunning photos and boost productivity.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
     reviews:[{text:"Top-notch and worth the price.",rating:"4.3"}],
  },
];

export default ProductData;
