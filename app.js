var express = require( "express" ),
	app = express(),
	morgan = require( 'morgan' ),
	bodyParser = require( 'body-parser' ),
	methodOverride = require( 'method-override' ),
	usersRouter = require( './routes/users' );

require( "locus" );

app.set( 'view engine', 'ejs' );
app.set( 'views', ( __dirname + '/views' ) );
app.use( express.static( __dirname + '/public' ) );
app.use( morgan( 'tiny' ) );
app.use( bodyParser.urlencoded( {
	extended: true
} ) );
app.use( methodOverride( '_method' ) );


app.get( '/', function( req, res ) {
	res.render( 'statics/home' );
} );



// Routes
// var postsRouter = require( './routes/posts' );

app.use( '/users', usersRouter );
// app.use( '/posts', postsRouter );


// app.get("*", function(req,res){
//   res.render("404");
// });

app.listen( 3000, function() {
	console.log( "Server is listening on port 3000" );
} );
