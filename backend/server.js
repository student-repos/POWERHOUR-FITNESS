import express from "express";
import connectDB from "./config/connectDB.js";
import colors from "colors";
import reviewRouter from "./routes/reviewRouter.js";
import offerRouter from "./routes/offerRouter.js";
import courseRouter from "./routes/courseRouter.js";
import eventRouter from "./routes/eventRouter.js";
import contactRouter from "./routes/contactRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await connectDB();

app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/offer", offerRouter);
app.use("/course", courseRouter);
app.use("/event", eventRouter);
app.use("/contact", contactRouter);
app.use("/booking", bookingRouter);

app.listen(PORT, () =>
  console.log(
    `:::`.green.bold,
    `Server running on port`.yellow.bold,
    `http://localhost:${PORT}`.green.underline.bold
  )
);
