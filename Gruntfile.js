module.exports = function (grunt)
{
	const sass = require('node-sass');
	require('time-grunt')(grunt);

	grunt.config.init({
		docRoot: '',
		dir: {
			scss: 'scss',
			dist: 'dist'
		},
		sass: {
			style: {
				files: [
					{
						expand: true,
						cwd: "<%= dir.scss %>",
						src: ["*.scss"],
						dest: "<%= dir.dist %>/css",
						ext: '.min.css'
					}
				],
				options: {
					cleancss: true,
					implementation: sass,
					outputStyle: 'compressed',
					//sourceComments: 'map',
					sourceMap: true
				}
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({
						browsers: ['last 5 versions', 'ie >= 11']
					}),
					require('css-mqpacker')({
						sort: require('sort-css-media-queries')
					}),
					require('csswring')
				]
			},
			dist: {
				src: "<%= dir.dist %>/css/**/*.css"
			}
		},
		watch: {
			options: {
				livereload: true
			},

			sass: {
				files: ['<%= dir.scss %>/**/*.{scss,sass}'],
				tasks: ['sass', 'postcss']
			}
		},
		csscomb: {
			options: {
				config: '.csscomb.json'
			},
			dynamic_mappings: {
				expand: true,
				cwd: '<%= dir.assets %>/scss/',
				src: ['**/*.scss'],
				dest: '<%= dir.assets %>/scss/',
				ext: '.scss'
			}
		}
	});

	grunt.registerTask( 'default', ['csscomb', 'sass',  'postcss', 'watch'] );

	grunt.registerTask('optimize', ['csscomb']);

	grunt.registerTask('build', ['sass', 'postcss']);

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );
};
