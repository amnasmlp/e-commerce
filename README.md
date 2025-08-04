## Run Locally

Clone the project

```bash
  git clone https://dredsoft-labs-admin@bitbucket.org/dredsoft-labs/ecommerce.git
```

Go to the project directory

```bash
  cd ecommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## Product API

A small Node + Express service is included for experimenting with product data.

### Tech stack
* Node.js
* Express

### Run the API

```bash
npm install
npm run product-api
```

The API will be available at `http://localhost:3001`.


### Sample requests

```bash
# list all products
curl http://localhost:3001/products

# get by id
curl http://localhost:3001/products/1

# filter by category
curl "http://localhost:3001/products?category=Apparel"

# create a product
curl -X POST http://localhost:3001/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Hat","category":"Apparel","price":15.99}'
```

Product data lives in `product-api/data/products.json`.
