import { Product, PriceItem, ContactPerson } from './types';

export const COMPANY_NAME = "Gulandon Group";
export const TAGLINE = "Direct Supplies from Uzbekistan's Rich Deposits";

export const PRODUCTS: Product[] = [
  {
    id: 'quartz-white',
    name: 'High-Purity White Quartz Sand',
    description: 'Experience the original purity of our high-quality white quartz sand, containing up to 96% silicon dioxide. Ideal grain geometry and absence of clay impurities.',
    specs: ['Purity: 96% SiO₂', 'Ideal grain geometry', 'No clay impurities'],
    applications: ['Glass production', 'Modern water filtration systems', 'Precision sandblasting', 'Decorative finishing'],
    imagePlaceholder: 'https://picsum.photos/600/400?grayscale&blur=2',
    grade: '96% SiO₂'
  },
  {
    id: 'quartz-quarry',
    name: 'Quarry Quartz Sand',
    description: 'Unprecedented strength and versatility, forming the foundation for numerous construction and industrial projects.',
    specs: ['SiO₂ content: 64% to 93%', 'Consistent quality', 'Sourced directly from rich deposits'],
    applications: ['Concrete mixing plants', 'Durable road construction', 'Long-lasting asphalt production'],
    imagePlaceholder: 'https://picsum.photos/600/401?grayscale&blur=2',
    grade: '64–93% SiO₂'
  },
  {
    id: 'kaolin',
    name: 'Enriched Kaolin',
    description: 'A specialized, ultra-fine ground material that sets the standard for quality and performance. Characterized by exceptional plasticity and excellent whiteness.',
    specs: ['Fraction: 0.001 (Ultra-fine)', 'Grades: AKF-78 & AKS-30', 'High plasticity'],
    applications: ['High-quality ceramics', 'Refractories', 'Rubber products', 'Fine porcelain'],
    imagePlaceholder: 'https://picsum.photos/600/402?grayscale&blur=2',
    grade: 'AKF-78 / AKS-30'
  },
  {
    id: 'gypsum',
    name: 'Construction and Medical Gypsum',
    description: 'Comprehensive range of gypsum products, carefully sorted for both industrial construction and precise medical applications.',
    specs: ['Grade G-5: Standard construction', 'Grade G-7: High-strength medical'],
    applications: ['Dry mixes & building compounds', 'Medical casts & orthopedics', 'Stucco work', 'Artistic sculpture'],
    imagePlaceholder: 'https://picsum.photos/600/403?grayscale&blur=2',
    grade: 'G-5 / G-7'
  }
];

export const PRICE_LIST: PriceItem[] = [
  { id: 1, name: "White vein quartz, color white, gray", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "30 to 300 mm", price: 175, category: "Quartz" },
  { id: 2, name: "Quartz sand, sifted, white color (flour)", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "From 0.063 mm", price: 185, category: "Quartz" },
  { id: 3, name: "Quartz sand, sifted, white color", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "0.2 to 0.63 mm", price: 185, category: "Quartz" },
  { id: 4, name: "Quartz sand, sifted, white color", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "0.5 to 1.0 mm", price: 185, category: "Quartz" },
  { id: 5, name: "Quartz sand, sifted, white color", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "14 to 17 mm", price: 185, category: "Quartz" },
  { id: 6, name: "Quartz sand unsifted, unenriched, brown", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "0.1 mm to 3 mm", price: 4.5, category: "Quartz" },
  { id: 7, name: "Quartz sand sifted, brown color", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "0.063 mm", price: 5.5, category: "Quartz" },
  { id: 8, name: "Gypsum, grade G-5, white color", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "0.0 63 mm", price: 45, category: "Gypsum" },
  { id: 9, name: "Gypsum, grade G-7, color white", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "Standard", price: 45, category: "Gypsum" },
  { id: 10, name: "Plaster, brand ROTBAN, color white", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "Standard", price: 100, category: "Gypsum" },
  { id: 11, name: "Kaolin, unenriched, color white", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "1-50 microns", price: 119, category: "Kaolin" },
  { id: 12, name: "Kaolin, enriched, grade AKF-78", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "Ultra-fine", price: 250, category: "Kaolin" },
  { id: 13, name: "Kaolin, white, enriched, grade AKS-30", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "Ultra-fine", price: 210, category: "Kaolin" },
  { id: 14, name: "Kaolin, white, enriched, grade AKS-30 (cake)", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "Ultra-fine", price: 98, category: "Kaolin" },
  { id: 15, name: "Kaolin, white, enriched, grade AKT-10", manufacturer: "Republic of Uzbekistan", unit: "ton", size: "Ultra-fine", price: 28, category: "Kaolin" },
  { id: 16, name: "Agglomerate in slabs, colors beige, sand", manufacturer: "Republic of Uzbekistan", unit: "M2", size: "300*600*25 mm", price: 22.2, category: "Other" },
];

export const CONTACTS: ContactPerson[] = [
  { name: "Saidaziz Talatovich Saidov", phone: "+998 77 878 56 78", role: "Sales Representative" },
  { name: "Sergey Konstantinovich Smirnov", phone: "+998 77 380 83 02", role: "Sales Representative" },
];

export const WHATSAPP = "+7 778 459 0083";

export const PRICING_NOTES = [
  "The price is indicated with delivery by railway car to Keles station with all incoming duties and fees.",
  "Includes ST-1 certificate.",
  "All manufactured products are packed in Big Bags of 1,000 kg."
];
