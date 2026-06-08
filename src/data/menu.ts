import { MenuItem, Review, FeatureItem, GalleryItem } from '../types';

import heroBg from '../assets/images/sri_ruchi_hero_bg_1780663615597.png';
import vegNoodlesImg from '../assets/images/veg_noodles_1780663631502.png';
import vegManchurianImg from '../assets/images/veg_manchurian_1780663645789.png';
const chickenManchurianImg = 'https://img.magnific.com/free-psd/delicious-sesame-chicken-bowl_191095-77866.jpg';
import vegFriedRiceImg from '../assets/images/veg_fried_rice_1780663675138.png';
import gobiManchurianImg from '../assets/images/gobi_manchurian_1780663689497.png';
export { heroBg };

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'veg-manchurian',
    name: 'Veg Manchurian',
    description: 'Crispy deep-fried mixed vegetable balls tossed in a tangy, savory and slightly sweet Manchurian sauce loaded with fresh ginger and garlic.',
    price: 70,
    category: 'manchurian',
    isVeg: true,
    isPopular: true,
    spiciness: 2,
    image: vegManchurianImg,
    rating: 4.9,
    reviewsCount: 148,
    preparationTime: '10-12 mins'
  },
  {
    id: 'veg-noodles',
    name: 'Veg Noodles',
    description: 'Fresh wheat noodles wok-tossed with crisp julienne onions, cabbage, carrots, vibrant bell peppers, and touch of soy-chili sauce.',
    price: 80,
    category: 'noodles',
    isVeg: true,
    isPopular: true,
    spiciness: 1,
    image: vegNoodlesImg,
    rating: 4.8,
    reviewsCount: 124,
    preparationTime: '8-10 mins'
  },
  {
    id: 'chicken-manchurian',
    name: 'Chicken Manchurian',
    description: 'Juicy, batter-fried chicken bites simmered to perfection in a thick, rich, soy-garlic Indo-Chinese gravy garnished with green spring onions.',
    price: 120,
    category: 'manchurian',
    isVeg: false,
    isPopular: true,
    spiciness: 3,
    image: chickenManchurianImg,
    rating: 4.9,
    reviewsCount: 182,
    preparationTime: '12-15 mins'
  },
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    description: 'Fluffy, aromatic basmati rice stir-fried in a roaring high-heat wok with tender green peas, finely chopped carrots, French beans, and mild seasoning.',
    price: 80,
    category: 'rice',
    isVeg: true,
    isPopular: false,
    spiciness: 1,
    image: vegFriedRiceImg,
    rating: 4.7,
    reviewsCount: 96,
    preparationTime: '8-10 mins'
  },


  {
    id: 'chicken-rice',
    name: 'Chicken Rice',
    description: 'Fluffy basmati rice tossed with succulent chicken pieces, peas, carrots, and subtle spices.',
    price: 90,
    category: 'rice',
    isVeg: false,
    isPopular: false,
    spiciness: 1,
    image: 'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg',
    rating: 4.7,
    reviewsCount: 0,
    preparationTime: '10-12 mins'
  },
  {
    id: 'chicken-noodles',
    name: 'Chicken Noodles',
    description: 'Stir-fried wheat noodles with juicy chicken strips, veggies, and savory soy-chili sauce.',
    price: 90,
    category: 'noodles',
    isVeg: false,
    isPopular: false,
    spiciness: 1,
    image: 'https://i.ytimg.com/vi/MhzBUy-JOCE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHrjt0krn7AlWVFHVR222EZTfRQg',
    rating: 4.8,
    reviewsCount: 0,
    preparationTime: '8-10 mins'
  },
  // Veg Starters
  {
    id: 'veg-gobi',
    name: 'Veg Gobi (G.S)',
    description: 'Crispy cauliflower florets tossed in tangy Indo-Chinese sauce.',
    price: 70,
    category: 'manchurian',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: gobiManchurianImg,
    rating: 4.5,
    reviewsCount: 0,
    preparationTime: '10-12 mins'
  },
  {
    id: 'veg-chilli',
    name: 'Veg Chilli',
    description: 'Spicy mixed vegetables in chili sauce.',
    price: 80,
    category: 'manchurian',
    isVeg: true,
    isPopular: false,
    spiciness: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrYaHQqbfwHaW4yrjSPb6AXXP4ys73v8qsA&s',
    rating: 4.4,
    reviewsCount: 0,
    preparationTime: '10-12 mins'
  },
  {
    id: 'paneer-manchurian',
    name: 'Paneer Manchurian',
    description: 'Paneer cubes in classic Manchurian sauce.',
    price: 110,
    category: 'manchurian',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/paneer-manchurian-recipe-480x270.jpg',
    rating: 4.6,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'paneer-65',
    name: 'Paneer 65',
    description: 'Crispy paneer tossed with spices.',
    price: 120,
    category: 'manchurian',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: 'https://sinfullyspicy.com/wp-content/uploads/2024/11/1200-by-1200-images-2.jpg',
    rating: 4.5,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'chilli-paneer',
    name: 'Chilli Paneer',
    description: 'Paneer with fiery chili sauce.',
    price: 120,
    category: 'manchurian',
    isVeg: true,
    isPopular: false,
    spiciness: 3,
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/chilli-paneer-recipe.jpg',
    rating: 4.5,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },

  // Non-Veg Starters
  {
    id: 'chicken-65',
    name: 'Chicken 65',
    description: 'Spicy deep-fried chicken bites.',
    price: 130,
    category: 'manchurian',
    isVeg: false,
    isPopular: false,
    spiciness: 3,
    image: chickenManchurianImg,
    rating: 4.6,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'chilli-chicken',
    name: 'Chilli Chicken',
    description: 'Chicken tossed in fiery chili sauce.',
    price: 140,
    category: 'manchurian',
    isVeg: false,
    isPopular: false,
    spiciness: 3,
    image: chickenManchurianImg,
    rating: 4.6,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop',
    description: 'Crispy chicken wing lollipops.',
    price: 150,
    category: 'manchurian',
    isVeg: false,
    isPopular: false,
    spiciness: 3,
    image: 'https://t3.ftcdn.net/jpg/16/70/64/44/360_F_1670644406_Z6yG7rn6ZEPPPPrFUvcvvdj3XgCmJNwr.jpg',
    rating: 4.7,
    reviewsCount: 0,
    preparationTime: '15-18 mins'
  },
  {
    id: 'omelette',
    name: 'Omelette',
    description: 'Fluffy egg omelette with herbs.',
    price: 30,
    category: 'noodles',
    isVeg: false,
    isPopular: false,
    spiciness: 1,
    image: 'https://t3.ftcdn.net/jpg/07/15/86/22/360_F_715862236_VHJPf0EQsXpxSaoMJKOlkqfDSWlkMTZW.jpg',
    rating: 4.3,
    reviewsCount: 0,
    preparationTime: '5-7 mins'
  },
  {
    id: 'egg-boil',
    name: 'Egg Boil',
    description: 'Hard boiled eggs served with sauce.',
    price: 50,
    category: 'noodles',
    isVeg: false,
    isPopular: false,
    spiciness: 1,
    image: 'https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs-1200x815.jpg',
    rating: 4.3,
    reviewsCount: 0,
    preparationTime: '7-9 mins'
  },

  // Rice & Noodles
  {
    id: 'veg-manchurian-rice',
    name: 'Veg Manchurian Rice',
    description: 'Fried rice with veg manchurian pieces.',
    price: 80,
    category: 'rice',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: 'https://www.shutterstock.com/image-photo/veg-manchurian-fried-rice-made-260nw-1866778348.jpg',
    rating: 4.6,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'jeera-rice',
    name: 'Jeera Rice',
    description: 'Aromatic cumin flavored rice.',
    price: 80,
    category: 'rice',
    isVeg: true,
    isPopular: false,
    spiciness: 1,
    image: vegFriedRiceImg,
    rating: 4.5,
    reviewsCount: 0,
    preparationTime: '10-12 mins'
  },
  {
    id: 'veg-manchurian-noodles',
    name: 'Veg Manchurian Noodles',
    description: 'Noodles tossed with veg manchurian.',
    price: 80,
    category: 'noodles',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: 'https://i.ytimg.com/vi/MhiWI1bmbh0/maxresdefault.jpg',
    rating: 4.6,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'paneer-rice',
    name: 'Paneer Rice',
    description: 'Rice mixed with paneer cubes.',
    price: 110,
    category: 'rice',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2023/09/paneer-fried-rice-1.jpg',
    rating: 4.5,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
  {
    id: 'paneer-noodles',
    name: 'Paneer Noodles',
    description: 'Noodles with paneer pieces.',
    price: 110,
    category: 'noodles',
    isVeg: true,
    isPopular: false,
    spiciness: 2,
    image: 'https://www.shutterstock.com/image-photo/paneer-noodles-popular-indochinese-dish-260nw-1876087126.jpg',
    rating: 4.5,
    reviewsCount: 0,
    preparationTime: '12-15 mins'
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'fresh',
    title: 'Fresh Ingredients',
    description: 'We source the freshest vegetables and highest grade proteins daily for unmatched taste quality.',
    iconName: 'Sparkles'
  },
  {
    id: 'hygiene',
    title: 'Hygienic Cooking',
    description: 'Our kitchen maintains top-tier cleanliness and safety protocols under strict supervision.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'fast',
    title: 'Fast Service',
    description: 'Enjoy blazing-fast preparation and quick turnaround time without compromising on flavor.',
    iconName: 'Zap'
  },
  {
    id: 'quality',
    title: 'Quality Food',
    description: 'Every dish is vetted for taste and consistency before being served to your table.',
    iconName: 'ChefHat'
  },
  {
    id: 'affordable',
    title: 'Affordable Prices',
    description: 'Gourmet street food experience styled beautifully, priced perfectly for great value.',
    iconName: 'CheckCircle'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: vegManchurianImg,
    title: 'Perfect Veg Manchurian',
    category: 'Starters'
  },
  {
    id: 'gal-2',
    image: vegNoodlesImg,
    title: 'Stir-Fry Work in Action',
    category: 'Noodles'
  },
  {
    id: 'gal-3',
    image: chickenManchurianImg,
    title: 'Sizzling Chicken Gravy',
    category: 'Non-Veg Starters'
  },
  {
    id: 'gal-4',
    image: vegFriedRiceImg,
    title: 'Fragrant Wok Fried Rice',
    category: 'Main Course'
  },
  {
    id: 'gal-5',
    image: gobiManchurianImg,
    title: 'Crispy Chili Cauliflower',
    category: 'Dry Starters'
  },
  {
    id: 'gal-6',
    image: heroBg,
    title: 'Our Signature Platter',
    category: 'Combos'
  }
];

export const REVIEWS: Review[] = [];


export const CONTACT_INFO = {
  restaurantName: "Sri Ruchi's Food Court",
  phone: '+91 6304374054',
  phoneSearch: '916304374054', // For click-to-call / whatsapp api
  email: 'info@sriruchi.com',
  address: "Aurora's Scientific & Technological Institute, Ghatkesar, Aushapur",
  gmapsEmbedUrl: "https://www.google.com/maps/place/Aurora's+Scientific+%26+Technological+Institute,+Ghatkesar,+Aushapur/@17.460403,78.7215963,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb7695f76a2e87:0x590044683d33643a!8m2!3d17.4603979!4d78.7241712!16s%2Fg%2F1ths7t8n?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  openingHours: [
    { days: 'Everyday Open', hours: '11:00 AM - 11:30 PM' },
    { days: 'Weekend Specials available', hours: 'All day long!' }
  ],
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com'
  }
};
