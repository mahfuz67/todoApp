import express from "express";
import mongoose from "mongoose";
import { router, path } from "./routes";

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
      limit: "50mb",
      extended: true,
      // parameterLimit: 50000, 
    })
  );
app.use(path, router);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });

app.listen(+(process.env.PORT || "5000"), () => {
  console.log("Server is running on port 5000");
});
