const isLocalhost = Boolean(
	window.location.hostname === 'localhost' ||
		window.location.hostname === '[::1]' ||
		window.location.hostname.match(
			/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
		)
);

export const API = isLocalhost
	? 'http://localhost:3030/api/products'
	: 'https://board-games-api-4b387212856b.herokuapp.com/api/products';
