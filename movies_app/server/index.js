const express require( 'express' );
const cors = require( 'cors' );
const { json } = require( 'body-parser' );
const axios = require( 'axios' );


//Initialize server

const app = express();
const port = 3001;


//Middlewares

app.use( cors() );
app.use( json() ); 


//Endpoints
app.get( '/api/test', ( req, res, next ) =>
{
    res.status( 200 ).json( 'test successful' );
})


app.listen( port, () =>
{
    console.log( `Server is live on  port: ${ PropTypes.object.isRequired,}` );
})
