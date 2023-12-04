const products = [
  {
    id: "1",
    name: "Samsung Galaxy A54 5G 5G 256 GB awesome graphite 8 GB RAM",
    price: 409999,
    category: "cellular",
    img: "https://http2.mlstatic.com/D_NQ_NP_732057-MLA70868353813_082023-O.webp",
    stock: 25,
    description: "Professional photography in your pocket.",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Plus 8gb 256gb Color Phantom black",
    price: 809999,
    category: "cellular",
    img: "https://http2.mlstatic.com/D_NQ_NP_984857-MLA69514172539_052023-O.webp",
    stock: 25,
    description: "Make nights more epic with the night camera.",
  },
  {
    id: "3",
    name: "Lenovo Tab M10 Plus FHD 2da Gen (10.3”, Android)",
    price: 247999,
    category: "tablet",
    img: "https://www.lenovo.com/medias/lenovo-tab-m10-fhd-plus-gen2-subseries-gallery-1.jpg?context=bWFzdGVyfHJvb3R8MTM5MTczfGltYWdlL2pwZ3xoM2IvaDEzLzEwNzA0NTUxMDg0MDYyLmpwZ3w5ODRhZTliMjYwNWMyNjgzYTg5NWJhMDA2ZDc3YjU3NzExNTg1OTVjZjhhMDAyM2I0YTQ0Yzk5MDhjMzZhZGRh",
    stock: 25,
    description:
      "Its soft, all-metal cover and ultra-thin edges for a better visual experience on the screen will result in a tablet that everyone will want to use.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
