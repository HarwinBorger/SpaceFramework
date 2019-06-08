module.exports = {
	syntax: 'postcss-scss',
	plugins: {
		'autoprefixer': {},
		'css-mqpacker': {
			sort: require('sort-css-media-queries')
		},
		'cssnano': {
			preset: ['default', {
				discardComments: {
					removeAll: true,
				},
			}],
		},
	}
};