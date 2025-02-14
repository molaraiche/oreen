const express = require("express");
const cors = require("cors");
const connectDB = require("./databases/db");
require("dotenv").config();

connectDB();

const bookingRouter = require("./routes/bookRoute");
const commentRouter = require("./routes/commentRoute");
const adminRouter = require("./routes/adminRoute");
const carsRouter = require("./routes/carsRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/booking", bookingRouter);
app.use("/api/comments", commentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cars", carsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is up and running"));
