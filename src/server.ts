import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// Route Params: Indentificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// Ouvir requesições http
// localhost:3333
app.listen(3333);
