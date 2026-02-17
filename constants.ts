
import { Category, Product } from './types';

export const PHONE_NUMBER = "0720658825";
export const WHATSAPP_NUMBER = "254720658825";
export const EMAIL_ADDRESS = "orders@santosmotors.co.ke";
export const LOCATION = "Kirinyaga Road, Nairobi, Kenya";

// Provided workshop images from the user
const providedImages = [
  "https://storage.googleapis.com/generativeai-downloads/images/input_file_0.png",
  "https://storage.googleapis.com/generativeai-downloads/images/input_file_1.png",
  "https://storage.googleapis.com/generativeai-downloads/images/input_file_2.png",
  "https://storage.googleapis.com/generativeai-downloads/images/input_file_3.png"
];

const generateProducts = (category: Category, count: number, prefix: string): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
    name: `${prefix} ${i + 1}`,
    category,
    description: `Original Santos Motors stock from Kirinyaga Road. This ${category.toLowerCase().slice(0, -1)} has been thoroughly tested for quality and performance.`,
    price: Math.floor(Math.random() * 45000) + 12000,
    // Cycle through provided images and add a salt to prevent browser caching if needed
    image: providedImages[i % providedImages.length]
  }));
};

export const PRODUCTS: Product[] = [
  ...generateProducts(Category.GEARBOX, 12, "Heavy Duty Gearbox Type"),
  ...generateProducts(Category.ENGINE, 12, "Complete Engine Type"),
  ...generateProducts(Category.SUSPENSION, 12, "Premium Suspension Type"),
  ...generateProducts(Category.BODY_PARTS, 12, "Body Part Accessory")
];
