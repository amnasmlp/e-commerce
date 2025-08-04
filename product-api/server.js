const express = require('express');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data', 'products.json');

function loadProducts() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

function saveProducts(products) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
}

const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
  const { category } = req.query;
  let products = loadProducts();
  if (category) {
    products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const products = loadProducts();
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.post('/products', (req, res) => {
  const { name, category, price, description = '' } = req.body;
  if (!name || !category || price === undefined) {
    return res.status(400).json({ error: 'name, category and price are required' });
  }
  const products = loadProducts();
  const id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { id, name, category, price, description };
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Product API listening on port ${PORT}`);
});

module.exports = app;
