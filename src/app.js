import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import {home} from "../controllers/globalController";
import globalRouter from "../routers/globalRouter";

const app = express();

// middleWares
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(routes.home,globalRouter);

export default app;