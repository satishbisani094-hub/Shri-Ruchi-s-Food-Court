import { MenuItem, Review, FeatureItem, GalleryItem } from '../types';

import heroBg from '../assets/images/sri_ruchi_hero_bg_1780663615597.png';
import vegNoodlesImg from '../assets/images/veg_noodles_1780663631502.png';
import vegManchurianImg from '../assets/images/veg_manchurian_1780663645789.png';
import chickenManchurianImg from '../assets/images/chicken_manchurian_1780663660184.png';
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
    image: vegFriedRiceImg,
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
    image: vegNoodlesImg,
    rating: 4.8,
    reviewsCount: 0,
    preparationTime: '8-10 mins'
  }
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
  gmapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.7213677!3d17.4602259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7695f76a2e87%3A0x590044683d33643a!2sAurora%27s+Scientific+%26+Technological+Institute,+Ghatkesar,+Aushapur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
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
