export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'noodles' | 'manchurian' | 'rice' | 'starters';
  isVeg: boolean;
  isPopular?: boolean;
  spiciness: number; // 1 to 3 stars
  image: string;
  rating: number; // e.g. 4.8
  reviewsCount: number;
  preparationTime: string; // e.g. "10-15 mins"
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  dishName?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon component name
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface OrderEnquiry {
  name: string;
  phone: string;
  itemNames: string[];
  quantity: Record<string, number>;
  notes?: string;
  type: 'delivery' | 'pickup' | 'dinein';
}
