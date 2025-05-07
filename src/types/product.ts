export type Product = {
  title: string;
  description: string;
  manufacturer: "Atlas" | "Bachmann" | "MTH" | "Lionel" | "All Brands";
  scale: "N" | "HO" | "O" | "G" | "Z" | "S" | "All Scales";
  category: "Locomotives" | "Rolling Stock" | "Accessories" | "Scenery" | "Electronics" | "All Categories";
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
