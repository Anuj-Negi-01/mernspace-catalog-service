import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middlewares/globalErrorHandler";
import categoryRouter from "./category/category-router";
import cookieParser from "cookie-parser";
import productRouter from "./product/product-router";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello from catalog service!",
    });
});

app.use(express.json());
app.use(cookieParser());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.use(globalErrorHandler);

export default app;
