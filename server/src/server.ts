import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import beverageRoutes from "./routes/beverageRoutes";


const app = express();
const port = process.env.PORT || 3000;
const url = "http://localhost";

app.use( cors() );
app.use( bodyParser.json() );

// Use routes
app.use( "/", beverageRoutes );


app.listen( port, () => {
  console.log( `Server is running at ${ url }:${ port }` );
} );
