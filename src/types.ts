export interface Product {
  id: string;
  number: string;
  title: string;
  description: string;
  features?: string[];
  image: string;
  videoUrls?: string[];
}

export interface Client {
  name: string;
  logo: string;
}
