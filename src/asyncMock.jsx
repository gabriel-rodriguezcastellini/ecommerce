const products = [
  {
    id: "1",
    name: "Samsung Galaxy A54 5G 5G 256 GB awesome graphite 8 GB RAM",
    price: 409999,
    category: "cellular",
    img: "https://http2.mlstatic.com/D_NQ_NP_732057-MLA70868353813_082023-O.webp",
    stock: 25,
    description: "Professional photography in your pocket.",
    featured: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Plus 8gb 256gb Color Phantom black",
    price: 809999,
    category: "cellular",
    img: "https://http2.mlstatic.com/D_NQ_NP_984857-MLA69514172539_052023-O.webp",
    stock: 25,
    description: "Make nights more epic with the night camera.",
    featured: false,
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
    featured: true,
  },
  {
    id: "4",
    name: 'Laptop Legion 5i Pro 7ma Gen (16", Intel)',
    price: 3247999,
    category: "notebook",
    img: "https://www.lenovo.com/medias/LEN101G0015-hero.png?context=bWFzdGVyfHJvb3R8MjEwNjk5fGltYWdlL3BuZ3xoN2UvaDlkLzE0MjIyMjE2ODg4MzUwLnBuZ3w4YjkzZTI4Yzg2NDQ4ZjIyNDM5OGJhNDAwMDJmNmJkNDI2Nzk3Zjg4NmM2MjIwOWQyOTUwNGQxMDU3NjdlM2Fj",
    stock: 25,
    description:
      "With cores that are truly revolutionary in performance and efficiency, 12th Gen Intel® Core™ processors are ideal for streaming, editing, gaming, and recording. A maximum level of power when you need it most.",
    featured: true,
  },
  {
    id: "5",
    name: 'Laptop gamer Legion 5 Gen 6 (15.6", AMD)',
    price: 1469999,
    category: "notebook",
    img: "https://www.lenovo.com/medias/lenovo-laptop-legion-5-15-amd-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTYyNjIwfGltYWdlL3BuZ3xoNTIvaDU1LzE0MTkwNDY2NjI5NjYyLnBuZ3wwNTQ1YjQxMzI0ZGJiODc2YmIwNWE3YzRiMzNlZWEzNjg1ODJkZjljNDRhOGVhYTY2YzE1N2Q5OGVhNTlhYWUw",
    stock: 25,
    description:
      "They say we spend our lives making compromises. They say you can't have great performance and long battery life on the same computer. They say that a gaming laptop focused on great performance has to be big and heavy. They are wrong. Now you can enjoy elite gaming performance in a thin and light laptop with incredible battery life thanks to new mobile processors up to AMD Ryzen™ 7. Never compromise on your gaming laptop again.",
    featured: false,
  },
  {
    id: "6",
    name: 'Laptop ThinkBook 15 3era Gen (15.6", AMD)',
    price: 1339999,
    category: "notebook",
    img: "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-series-c-thinkbook-15-gen-2-amd-hero.png?context=bWFzdGVyfHJvb3R8MjYxNjIyfGltYWdlL3BuZ3xoYTMvaDlmLzE0MTkwNDgzMjc1ODA2LnBuZ3w0NGFkZDc1MjJhMzQyNzYyZmNiMzJhMWI5Y2U5MzcxYmM5NGZiMDEyZjhmZjg3MTY1NzBkMzdiYmNhNDBmOWQx",
    stock: 25,
    description:
      "With AMD Ryzen™ 5000 Series Mobile processors and Radeon™ graphics, the ThinkBook 15 3rd Generation work laptop lets you work on demanding applications with ease. Up to eight mobile cores deliver unparalleled responsiveness and multitasking experience. And with up to 50% larger fans than the previous generation, dual heat pipes, and improved thermal capacity, you'll be able to push your processor to its maximum power. Combine this with AI-enabled intelligent cooling and don't worry about overheating.",
    featured: false,
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

export const getProductsByCategoryId = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
