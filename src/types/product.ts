export type Product = {
  title: string;
  description: string;
  manufacturer: string;
  scale: "N" | "HO" | "O" | "G" | "Z";
  category: "Locomotives" | "Rolling Stock" | "Accessories" | "Scenery" | "Electronics";
  collection?: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
