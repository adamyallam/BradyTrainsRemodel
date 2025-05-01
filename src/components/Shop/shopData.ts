import { Product } from "@/types/product";

// {
//   title: "",
//   description: "",
//   manufacturer: "",
//   scale: "N" | "HO" | "O" | "G" | "Z",
//   category: "Locomotives" | "Rolling Stock" | "Accessories" | "Scenery" | "Electronics",
//   collection: "",
//   reviews: 0,
//   price: 0.00,
//   discountedPrice: 0.00,
//   id: NUM,
//   imgs: {
//     thumbnails: [
//       "",
//       "",
//     ],
//     previews: [
//       "",
//       "",
//     ],
//   },
// },

const shopData: Product[] = [
  {
    title: "N MASTER SILVER DASH 8-40C",
    description: "The N MASTER SILVER DASH 8-40C is a high-quality model train engine designed for collectors and enthusiasts. It features intricate detailing, smooth operation, and is compatible with various N scale tracks.",
    manufacturer: "Atlas",
    scale: "N",
    category: "Locomotives",
    collection: "Master Silver Series",
    reviews: 0,
    price: 154.95,
    discountedPrice: 135.00,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/atlasN-new-product-1-main.png",
      ],
      previews: [
        "/images/products/atlasN-new-product-1-main.png",
      ],
    },
  },
  {
    title: "N MASTER SILVER DASH 8-40C CSX",
    description: "The N MASTER SILVER DASH 8-40C CSX is a premium model train engine that showcases the iconic CSX livery. It is built for performance and realism, making it a perfect addition to any N scale layout.",
    manufacturer: "Atlas",
    scale: "N",
    category: "Locomotives",
    collection: "Master Silver Series",
    reviews: 0,
    price: 149.95,
    discountedPrice: 135.00,
    id: 2,
    imgs: {
      thumbnails: [
        "/images/products/atlasN-new-product-2-main.png",
      ],
      previews: [
        "/images/products/atlasN-new-product-2-main.png",
      ],
    },
  },
  {
    title: "N MASTER SILVER DASH 8-40C UNION PACIFIC",
    description: "The N MASTER SILVER DASH 8-40C UNION PACIFIC is a detailed model train engine that captures the essence of the Union Pacific Railroad. It features high-quality construction and is ideal for both display and operation.",
    manufacturer: "Atlas",
    scale: "N", 
    category: "Locomotives",
    collection: "Master Silver Series",
    reviews: 0,
    price: 149.95,
    discountedPrice: 135.00,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/atlasN-new-product-3-main.png",
      ],
      previews: [
        "/images/products/atlasN-new-product-3-main.png",
      ],
    },
  },
  {
    title: "N GP-38 GOLD NORFOLK WESTERN",
    description: "The N GP-38 GOLD NORFOLK WESTERN is a premium model train engine that features the classic Norfolk Western livery. It is designed for collectors who appreciate fine details and superior performance in their N scale models.",
    manufacturer: "Atlas",
    scale: "N", 
    category: "Locomotives",
    collection: "Gold Series",
    reviews: 0,
    price: 259.95,
    discountedPrice: 235.00,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/products/atlasN-new-product-4-main.png",
      ],
      previews: [
        "/images/products/atlasN-new-product-4-main.png",
      ],
    },
  }
];

export default shopData;
