import d1 from '../Assets/d1.jpeg';
import d2 from '../Assets/d2.jpeg';
import d3 from '../Assets/d3.jpeg';
import d41 from '../Assets/d41.jpeg';
import d5 from '../Assets/d5.jpeg';
import d6 from '../Assets/d6.jpeg';
import d7 from '../Assets/d7.jpeg';
import d8 from '../Assets/d8.jpeg';
import d9 from '../Assets/d9.jpeg';
import d10 from '../Assets/d10.jpeg';
import d11 from '../Assets/d11.jpeg';
import d12 from '../Assets/d12.jpeg';
import m1 from '../Assets/m1.jpeg';
import m2 from '../Assets/m2.jpeg';
import m3 from '../Assets/m3.jpeg';
import m4 from '../Assets/m4.jpeg';
import m5 from '../Assets/m5.jpeg';
import m6 from '../Assets/m6.jpeg';
import m7 from '../Assets/m7.jpeg';
import m8 from '../Assets/m8.jpeg';
import m9 from '../Assets/m9.jpeg';
import m10 from '../Assets/m10.jpeg';
import m11 from '../Assets/m11.jpeg';
import m12 from '../Assets/m12.jpeg';
import k1 from '../Assets/k1.jpeg';
import k2 from '../Assets/k2.jpeg';
import k3 from '../Assets/k3.jpeg';
import k4 from '../Assets/k4.jpeg';
import k5 from '../Assets/k5.jpeg';
import k6 from '../Assets/k6.jpeg';
import k7 from '../Assets/k7.jpeg';
import k8 from '../Assets/k8.jpeg';
import k9 from '../Assets/k9.jpeg';
import k10 from '../Assets/k10.jpeg';
import k11 from '../Assets/k11.jpeg';
import k12 from '../Assets/k12.jpeg';






const all_product = [
  {
    id: 1,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "Men",
    image: m1,
    new_price: 85.0,
    old_price: 120.5
  },
  {
    id: 2,
    name: "Boys Blue Striped Hooded Sweatshirt",
    category: "Men",
    image: m2,
    new_price: 90.0,
    old_price: 130.0
  },
  {
    id: 3,
    name: "Girls Pink Floral Printed Dress",
    category: "Men",
    image: m3,
    new_price: 95.0,
    old_price: 140.0
  },
  {
    id: 4,
    name: "Boys Green Graphic Hoodie",
    category: "Men",
    image: m4,
    new_price: 80.0,
    old_price: 110.0
  },
  {
    id: 5,
    name: "Girls Yellow Ruffled Dress",
    category: "Men",
    image: m5,
    new_price: 100.0,
    old_price: 150.0
  },
  {
    id: 6,
    name: "Boys Red Plaid Shirt",
    category: "Men",
    image: m6,
    new_price: 60.0,
    old_price: 90.0
  },
  {
    id: 7,
    name: "Girls Blue Denim Jacket",
    category: "Men",
    image: m7,
    new_price: 110.0,
    old_price: 160.0
  },
  {
    id: 8,
    name: "Boys Black Pullover Hoodie",
    category: "Men",
    image: m8,
    new_price: 95.0,
    old_price: 140.0
  },
  {
    id: 9,
    name: "Girls White Summer Dress",
    category: "Men",
    image: m9,
    new_price: 85.0,
    old_price: 120.0
  },
  {
    id: 10,
    name: "Boys Navy Blue Track Pants",
    category: "Men",
    image: m10,
    new_price: 55.0,
    old_price: 85.0
  },
  {
    id: 11,
    name: "Girls Red Polka Dot Dress",
    category: "Men",
    image: m11,
    new_price: 75.0,
    old_price: 105.0
  },
  {
    id: 12,
    name: "Boys Grey Sweatpants",
    category: "Men",
    image: m12,
    new_price: 65.0,
    old_price: 95.0
  },
  {
    id: 13,
    name: "Girls Green Tunic Dress",
    category: "Women",
    image: d1,
    new_price: 80.0,
    old_price: 120.0
  },
  {
    id: 14,
    name: "Boys Yellow Polo Shirt",
    category: "Women",
    image: d2,
    new_price: 50.0,
    old_price: 75.0
  },
  {
    id: 15,
    name: "Girls Orange Summer Shorts",
    category: "Women",
    image: d3,
    new_price: 40.0,
    old_price: 65.0
  },
  {
    id: 16,
    name: "Boys Brown Leather Jacket",
    category: "Women",
    image: d41,
    new_price: 150.0,
    old_price: 200.0
  },
  {
    id: 17,
    name: "Girls Purple Cardigan",
    category: "Women",
    image: d5,
    new_price: 65.0,
    old_price: 95.0
  },
  {
    id: 18,
    name: "Boys Black Skinny Jeans",
    category: "Women",
    image: d6,
    new_price: 70.0,
    old_price: 105.0
  },
  {
    id: 19,
    name: "Girls Yellow Floral Skirt",
    category: "Women",
    image: d7,
    new_price: 55.0,
    old_price: 80.0
  },
  {
    id: 20,
    name: "Boys White T-shirt",
    category: "Women",
    image: d8,
    new_price: 30.0,
    old_price: 50.0
  },
  {
    id: 21,
    name: "Girls Black Leggings",
    category: "Women",
    image: d9,
    new_price: 45.0,
    old_price: 70.0
  },
  {
    id: 22,
    name: "Boys Orange Fleece Jacket",
    category: "Women",
    image: d10,
    new_price: 90.0,
    old_price: 120.0
  },
  {
    id: 23,
    name: "Girls Blue Knit Sweater",
    category: "Women",
    image: d11,
    new_price: 85.0,
    old_price: 115.0
  },
  {
    id: 24,
    name: "Boys Green Rain Jacket",
    category: "Women",
    image: d12,
    new_price: 100.0,
    old_price: 140.0
  },
  {
    id: 25,
    name: "Girls Pink Puffy Coat",
    category: "Kid",
    image: k1,
    new_price: 120.0,
    old_price: 160.0
  },
  {
    id: 26,
    name: "Boys Grey Winter Jacket",
    category: "Kid",
    image: k2,
    new_price: 135.0,
    old_price: 180.0
  },
  {
    id: 27,
    name: "Girls Red Wool Sweater",
    category: "Kid",
    image: k3,
    new_price: 95.0,
    old_price: 135.0
  },
  {
    id: 28,
    name: "Boys White Shirt with Tie",
    category: "Kid",
    image: k4,
    new_price: 60.0,
    old_price: 85.0
  },
  {
    id: 29,
    name: "Girls Black Denim Shorts",
    category: "Kid",
    image: k5,
    new_price: 40.0,
    old_price: 60.0
  },
  {
    id: 30,
    name: "Boys Navy Blue Suit",
    category: "Kid",
    image: k6,
    new_price: 180.0,
    old_price: 220.0
  },
  {
    id: 31,
    name: "Girls Yellow Hooded Jacket",
    category: "Kid",
    image: k7,
    new_price: 110.0,
    old_price: 150.0
  },
  {
    id: 32,
    name: "Boys Green Cargo Pants",
    category: "Kid",
    image: k8,
    new_price: 55.0,
    old_price: 85.0
  },
  {
    id: 33,
    name: "Girls Purple Raincoat",
    category: "Kid",
    image: k9,
    new_price: 85.0,
    old_price: 115.0
  },
  {
    id: 34,
    name: "Boys Brown Knit Sweater",
    category: "Kid",
    image: k10,
    new_price: 75.0,
    old_price: 100.0
  },
  {
    id: 35,
    name: "Girls White Puffy Vest",
    category: "Kid",
    image: k11,
    new_price: 60.0,
    old_price: 85.0
  },
  {
    id: 36,
    name: "Boys Red Zippered Hoodie",
    category: "Kid",
    image: k12,
    new_price: 85.0,
    old_price: 120.0
  }
];

export default all_product;
