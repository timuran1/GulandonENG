export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
  applications: string[];
  imagePlaceholder: string; // Using placeholder service
  grade?: string;
}

export interface PriceItem {
  id: number;
  name: string;
  manufacturer: string;
  unit: string;
  size: string;
  price: number;
  note?: string;
  category: 'Quartz' | 'Gypsum' | 'Kaolin' | 'Other';
}

export interface ContactPerson {
  name: string;
  role?: string;
  phone: string;
}
