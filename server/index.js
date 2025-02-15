const express = require("express");
const cors = require("cors");
const connectDB = require("./databases/db");
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
const helmet = require("helmet");
connectDB();

const bookingRouter = require("./routes/bookRoute");
const commentRouter = require("./routes/commentRoute");
const adminRouter = require("./routes/adminRoute");
const carsRouter = require("./routes/carsRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(limiter);
app.use(helmet());

app.use("/api/booking", bookingRouter);
app.use("/api/comments", commentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cars", carsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is up and running"));
