const express = require("express");
const router = express.Router();
const stores = require("../controllers/stores");

//Route to get stores
router.route("/").get(stores.getStores);

//Route to create a store
router.route("/new")
    .post(stores.createStore);

//Route to get a store
//Route to edit a store
//Route to delete a store
router
  .route("/:id")
  .get(stores.getStore)
  .put(stores.editStore)
  .delete(stores.deleteStore);

module.exports = router;
