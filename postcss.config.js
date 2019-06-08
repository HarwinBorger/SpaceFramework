module.exports = {
	syntax: 'postcss-scss',
	plugins: {
		'autoprefixer': {},
		'css-mqpacker': {
			sort: require('sort-css-media-queries')
		}
//		'cssnano': {
//			preset: 'default',
//		},
//		'postcss-import': {},
//		'postcss-preset-env': {},
	}
}