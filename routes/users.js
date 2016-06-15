var express = require( 'express' ),
	router = express.Router(),
	knex = require( "../db/knex" ),
	methodOverride = require( 'method-override' );

router.get( '/', function( req, res ) {
	knex( 'users' ).then( function( result, err ) {
		console.log( result );
		res.render( 'users/index' );
	} );
} );
// Index
// All the posts
// .get()

router.get( '/posts', function( req, res ) {
	res.render( 'show/posts' );
} );

// Create
router.post( '/', function( req, res ) {
	knex( 'users' ).insert( req.body.user )
		.returning( 'id' )
		.then( function( id ) {
			res.redirect( '/users/index' );
		} )
		.catch( function( err ) {
			console.log( err );
		} );
} );

router.route( '/new' )
	.get( function( req, res ) {
		res.render( 'users/new' );
	} );




module.exports = router;
