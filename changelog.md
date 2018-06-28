#Changelog

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