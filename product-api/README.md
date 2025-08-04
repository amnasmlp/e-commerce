# Product API

This folder contains a minimal Express server that exposes product data for experimentation.

## Running

```bash
npm install
npm run product-api
```

The service starts on http://localhost:3001.

## Endpoints

- `GET /products` – list all products
- `GET /products/:id` – fetch a single product by ID
- `GET /products?category=Apparel` – filter products by category
- `POST /products` – add a new product (requires `name`, `category` and `price`)
