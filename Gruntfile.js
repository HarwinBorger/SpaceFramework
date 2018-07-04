module.exports = function (grunt)
{

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
					require('autoprefixer')({browsers: ['last 5 versions', 'ie >= 9']}),
					require('csswring')
				]
			},
			dist: {
				src: "<%= dir.dist %>/css/**/*.css"
			}
		},
		merge_media: {
			options: {
				compress: true
			},
			files: {
				src: "<%= dir.dist %>/css/style.min.css",
				dest: "<%= dir.dist %>/css/style.min.css"
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

	grunt.registerTask( 'default', ['csscomb', 'sass',  'postcss', 'merge_media', 'watch'] );

	grunt.registerTask('optimize', ['csscomb']);

	grunt.registerTask('build', ['sass', 'postcss', 'merge_media']);

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );
};
