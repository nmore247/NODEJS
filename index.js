import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import productRoute from "./routes/product.route.js";

// middleware
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

connect(
  "mongodb+srv://nikmore:X0Va0frRsCpiggvO@backenddb.xmb7yyf.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Connection failed!"));
