import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 89,
      img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 2,
      name: "108 Panchatantra Stories",
      author: "by Maple Press  | 1 September 2020",
      price: 98,
      img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 3,
      name: "Amazing Questions & Answers Science",
      author: "by Om Books Editorial Team  | 25 November 2018",
      price: 143,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 4,
      name: "My First Book of Pencil Control",
      author: "by Wonder House Books | 25 April 2018",
      price: 57,
      img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 5,
      name: "My First 1000 Words",
      author: "by Wonder House Books  | 1 January 2018",
      price: 149,
      img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
    {
      id: 6,
      name: "101 Panchatantra Stories for Children",
      author: "by Om Books Editorial Team | 30 September 2020",
      price: 135,
      img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1,
    },
  ];

  if (req.query.search) {
    const filterList = products.filter((item) =>
      item.name.includes(req.query.search)
    );
    res.send(filterList);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
