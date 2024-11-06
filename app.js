const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/search", (req, res) => {
  const query = req.query.q;
  const type = req.query.type;
  let results = [];

  const items = [
    { name: "Think like a monk", type: "book" },
    { name: "Do patti", type: "movie" },
    { name: "Keychain", type: "product" },
    { name: "Chiller party", type: "movie" },
    { name: "JAVA DSA", type: "book" },
    { name: "Earbuds", type: "product" },
  ];

  if (query || type) {
    results = items.filter((item) => {
      const matchesQuery = query
        ? item.name.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesType = type ? item.type === type : true;
      return matchesQuery && matchesType;
    });
  }

  res.render("search", { query, type, results });
});

const PORT =3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
