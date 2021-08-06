require( 'dotenv' ).config();
const express = require( 'express' );

const PORT = process.env.PORT || 3001;

const app = express();

app.get( '/', ( _, res ) => {
  res.send( '<h1>GPA LAB test server</h1>' );
} );

app.listen( PORT, () => {
  console.log( `Server listening on ${PORT}` );
} );
