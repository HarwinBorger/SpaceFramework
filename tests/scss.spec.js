const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob')
const sass = require('dart-sass');

describe('SCSS', () => {
    const sassTestFiles = glob.sync(
        path.resolve('./**/*.spec.scss')
    )

    sassTestFiles.forEach(file => {
            sassTrue.runSass(
                {
                    file: file
                },
                {
                    sass: sass,
                    describe,
                    it
                }
            );

        }
    )
})