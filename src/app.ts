import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import linkRoutes from "./Links/linkRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/links', linkRoutes);

export default app;
