# SpaceLog

## [1.1] (unreleased)
- At font-weight and color support in text-presets
- Refactor `$layout-presets` to `$space-presets`, since this is more appropriate for the upcoming grid and template classes. Hopefully last time of changing this name (A). 
  - Simplify the code, 
  - Remove functionality to have different space sizes at each direction
  - Improve names of variables 
  - Rename settings file from `$layout-spresets-support` to `$space-presets-support` and improve readability. 
 

## [1.0] Stable release
- Bug fixes

#### [1.0.0-alpha.6] (unreleased)
- Set default space-unit size to 1rem instead of .875rem
- Add fallback message for deprecated `font-preset-classes()`

#### [1.0.0-alpha.5]
- Renamed `$font-presets` variable to `$text-presets` since this name fits it's purpose better
- Renamed `@include font-preset` mixin to `@include text-preset` since this name fits it's purpose better
- Renamed `font-preset-variables()` function to `text-preset-variables()` since this name fits it's purpose better
- Renamed `font-preset-classes()` function to `text-preset-classes()` since this name fits it's purpose better
 
#### [1.0.0-alpha.4] 
- Fix node problem causing white space in classnames
- Rename old `$space-class-settings` variable to `$layout-presets-support`

#### [1.0.0-alpha.3]
- Move documentation from docs folder to own repository
- Improve naming of core .scss files (`spaceframework.scss` and `init-spaceframework.scss`) 

#### [1.0.0-alpha.2]
- Add fallback with warning for situation when a used font-preset is not present within `$font-presets`. For example when `@include font-preset('hero')` is used when `hero` does not exist within `$font-presets`
- Remove secondary font from the pre-setup so no conflicts are given when using easy setup

#### [1.0.0-alpha.1]
- Replace Grunt with Webpack
- Add Travis CI for unit testing
- Add first documentation
- Add examples in documentation
- Add normalize code to mixin normalize()
- Replace space-classes for layout-classes
- Change scss implementation way of trim classes
- Change scss implementation way of implode classes
- Change scss implementation way of self classes
- Reorder multiple files for more logical places

## [0.17.1] Security fix 29-05-2019
- Replace old package for merging media queries

## [0.17.0] Self and reset classes
- Add several tests to stabilize code 
- Add self-fill and self-align classes and test
- Add align-reset class to reset vertical alignments

## [0.16.2] Fix calculation of capline and median values - 04-10-2018

## [0.16.1] Fix space unit variable - 07-09-2018
### Fixed
- Print space-unit-variables outside the media query instead of inside.
 This way the variable is no longer related to a viewport size and can it be used globally

## [0.16] Custom properties and optimize space - 16-07-2018
### Added
- Add support for min-height, max-height, min-width, max-width and possibility to add custom properties combined with space units 

### Optimize
- Optimize variable length and functions
- Cleanup old code

## [0.15.1] Space unit variable - 09-07-2018
### Optimize
- Optimize space units to save even more space

## [0.15] Shift en optimize - 08-07-2018
### Added
- Add shift utility to move objects by a number

### Optimize
- Optimize space dimensions

## [0.14] New fit and position functions - 08-07-2018
### Added
- Add helper function to turn on and off typography alignment classes if you not used
- Add support for *fit* in combination with baseline alignment, removing remaining line-height space
- Add support for *fit* in combination with capline alignment, removing remaining line-height space
- Add support for position offsets such as: top, left, right, bottom.  

## [0.13] Saving bytes - 04-07-2018
### Added
- Add optimize values function to generate less code by default

### Optimize
- Optimize typography values by using css variables to have small file size
	- from initial *51.970 bytes* to *40.442 bytes* saving potential *11.528 bytes* which is a total safe of *22%*
- Optimize offset mixins by using css variables to get smaller file sizes
	- from initial *40.422 bytes* to *40.270 bytes* saving *152 bytes* which is minimal safe of >*0,3%* but could be saving up to *1,3%*

### Drop support 
- Drop support for typography alignment classes for Edge < 15

### Fixed 
- Fix merge media in grunt

## [0.12] Global line-heights support- 03-07-2018
### Added
- Add global line-heights support

## [0.11.1] Clean up - 03-07-2018
### Removed
- Remove text-column concept, concept not ready for use yet

## [0.11] Standalone and extra utilities - 28-06-2018
### Added
- Add Foundation 6.3 unit functions 
- Add Foundation 6.3 breakpoint mixin / functions  
- Add the implode feature 
- Add normalize.css v8.0.0

### Changed
- Change name of area class to trim class

## [0.10]
### Added
- Add support for multiple fonts
- Add fallback support for breakpoints on line-height and font-size

### Changed
- Improved the font-preset array 

## [0.9] Inherit FontPreset support and Capline naming - 15-03-2018
### Added
- Add support for inherit font-preset falling back to default alignments
- Add support for align-median 

### Changed
- Change align-topline to align-capline conform typography naming conventions
- Replace $baseline-correction variable by $font-families to set x-height and cap-height attributes

## [0.8] Offset and lineheight - 14-03-2018
### Added
- Add line-height mixin so you can define customs line-heights
- Add side classes for space offset

## [0.7] Vertical alignment classes - 13-03-2018

### Added
- Add align-baseline so you can specify where you want to apply baseline alignment
- Add align-topline so you can specify where you want to apply topline alignment

### Remove
- Remove default alignment of main elements. 

## [0.6] Rework Font Presets - 12-03-2018
### Changed
- Rework of font-size variables to font-presets and mixin 

## [0.5] Space Units - 11-03-2018
### Added
- Add overall support for space units
- Add reset-child-margin mixin
- Add dimensions mixin so you make dimension in space unit grid
- Add basic text-column support

### Changed
- Changed space-model to space-classes for class support of space units 
- Add font-size for compatibility with space units

### Removed
- Remove pixel-perfect module

## [0.4] New file structure - 04-03-2018
### Changed
- Use ITCSS file structure 

## [0.3] New features - 07-09-2017
### Added
- Add negative classes for main object classes in space model
- Add line-space module
- Add font-size module
- Add line-height module
- Add pixel-perfect module

## [0.2.7] NPM - 07-09-2017
### Added
- Add support for NPM 

## [V0.2.4] Hotfix - 04-08-2017
### Fixed
- Add missing dot for position classes in space model
