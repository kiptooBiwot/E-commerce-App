const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./utils/mongodb.init");

const userRoutes = require('./routes/User.routes')
const productRoutes = require('./routes/Product.routes')
const categoryRoutes = require('./routes/Category.routes')
const ownerRoutes = require('./routes/Owner.routes')

const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/public', express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello there. The route works!')
})

app.use('/api/users', userRoutes)
app.use('/api/owners', ownerRoutes)
app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
