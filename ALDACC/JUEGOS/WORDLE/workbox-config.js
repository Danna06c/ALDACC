module.exports = {
	globDirectory: 'Wordleee/',
	globPatterns: [
		'**/*.{png,html,json,js,css}'
	],
	swDest: 'Wordleee/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};