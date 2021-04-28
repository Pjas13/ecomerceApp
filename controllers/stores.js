const Store = require("../models/store");

//Get all Stores
module.exports.getStores = async (req, res) => {
  const stores = await Store.find({});
  return res.send({ stores });
};

//Create a new Store
module.exports.createStore = async (req, res) => {
  if(!req.body){
    return res.send("No data to create")
  }
  const newStore = new Store(req.body);
  await newStore.save();
  return res.send("Added a new store");
};

//Get a Store
module.exports.getStore = async (req, res) => {
  const { id } = req.params;
  const store = await Store.findById(id);
  if (!store) {
    return res.send("Store not found");
  }
  return res.send(store)
};

//Edit a Store
module.exports.editStore = async (req, res) => {
  const { id } = req.params;
  const store = await Store.findByIdAndUpdate(id, {
    ...req.body,
  });
  if(!store){
    return res.send("Store not found")
  }
  await store.save();
  return res.send("Store updated");
};

//Delete a Store
module.exports.deleteStore = async (req, res) => {
  const { id } = req.params;
  await Store.findOneAndDelete(id);
  return res.send("Store deleted");
};
