const express = require("express");
const cors = require("cors");
const connectDB = require("./databases/db");
require("dotenv").config();

const helmet = require("helmet");
connectDB();

const bookingRouter = require("./routes/bookRoute");
const commentRouter = require("./routes/commentRoute");
const adminRouter = require("./routes/adminRoute");
const carsRouter = require("./routes/carsRoute");

const app = express();
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization",
};
const allowedOrigins = [
  "http://localhost:3000",
  "https://oreen.molaraiche.com",
  "https://api.oreen.molaraiche.com",
];

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api/booking", bookingRouter);
app.use("/api/comments", commentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/cars", carsRouter);
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is up and running on port ${PORT} go to http://localhost:${PORT} and use the API Breakpoints`
  )
);
