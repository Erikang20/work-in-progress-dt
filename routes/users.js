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
//
router.get( '/new', function( req, res ) {
	res.render( 'users/new' );
} );

// Create
router.post( '/', function( req, res ) {

	knex( 'users' ).insert( req.body.user )
		.returning( 'id' )
		.then( function( id ) {
			res.redirect( '/users/new' );
		} )
		.catch( function( err ) {
			console.log( err );
		} );
} );


router.get( '/:id', function( req, res ) {
	var user_id = req.params.id;
	knex( 'users' ).where( 'id', user_id ).first().then( function( result, err ) {
		var user = result;
		res.render( 'users/show', {
			user: user
		} );
	} );
} );


router.post( '/:id', function( req, res ) {
	var user_id = req.params.id;
	var user = req.body;

	knex( 'users' ).where( 'id', user_id ).first().update( {
		user: user.name,
		post: user.post
	}, 'id' ).then( function( result, err ) {
		eval( locus );
		res.redirect( '/users' );
	} );
} );

router.route( '/new' )
	.get( function( req, res ) {
		res.render( 'users/new' );
	} );




module.exports = router;
