export interface Product {
  id: string;
  number: string;
  title: string;
  description: string;
  features?: string[];
  image: string;
  videoUrl?: string;
}

export interface Client {
  name: string;
  logo: string;
}
