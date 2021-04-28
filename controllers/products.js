const Products = require("../models/products");

//Get all products
module.exports.getProducts = async (req, res) => {
  const products = await Products.find({});
  return res.send({ products });
};


//Create a new product
module.exports.createProduct = async (req, res) => {
    if(!req.body){
      return res.send("No data to create")
    }
    const newProduct = new Products(req.body);
    await newProduct.save();
    return res.send("Added a new product");
  };