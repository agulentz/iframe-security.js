// JavaScript Document

window.onload = function( ) {
	if ( self != top ) {
		document.getElementsByTagName( 'body' )[0].firstChild.style.display = 'none';
		var iframnotallowed = document.createElement( 'div' );
		iframnotallowed.style.display = 'none';
		iframnotallowed.id = 'iframeMessage';
		var ele = document.getElementsByTagName( 'body' )[0].firstChild;
		ele.parentNode.insertBefore( iframnotallowed, ele );
		var textMessage = document.createTextNode( "We are Sorry! You are trying to inject this page! This Action is not allowed!" )
		document.getElementById( 'iframeMessage' ).appendChild( textMessage );
		document.getElementById( 'iframeMessage' ).style.display = 'inline';

	}
};