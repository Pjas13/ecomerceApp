const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
const session = require("express-session")
const MongoStore = require("connect-mongo");

require("dotenv").config();
const User = require("./models/users")
const users = require("./routes/users");
const stores = require("./routes/stores")
const products = require("./routes/products")

const app = express();
const port = process.env.PORT || 3001;
const secret = process.env.SECRET;
const dbUrl = process.env.DB_URL;
const connection = mongoose.connection;

//Connect to MongonDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Connection information
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("database connected");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const store = new MongoStore({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 *60,
  crypto:{
    secret: secret
  }
})

store.on("error", function(e) {
  console.log("Session store error", e)
})

const sessionConfig = { 
  store: store,
  name: "session",
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24,
    maxAge: 1000 * 60 * 60 * 24
  }
}

app.use(session(sessionConfig))

//Use passport to deal whit user authentication
require("./passportConfig/passportConfig")(passport);
app.use(passport.initialize());
app.use(passport.session())

app.use((req, res, next) => {
  console.log(req.query)
  res.locals.currentUser = req.user;
  next();
});

//Routes to DB
app.use("/products", products)
app.use("/users", users);
app.use("/store", stores)

//Handling server errors
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  res.status(statusCode).send("error", { err });
});

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

//Start the server
app.listen(port, () => console.log(`On port ${port}`));
