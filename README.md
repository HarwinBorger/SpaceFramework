# SpaceFramework 
Front-end development made for a green future!

- Follows OOCSS principles
- Develop faster and more efficient. No more writing classes to set paddings, margins en positions. 
- Separates structure from styling 

## Requirements
- Space Framework is build on top of Foundation. Which can be found here: http://foundation.zurb.com/

## Installation

### Bower: 
```
bower install spaceframework --save
```
## Getting started:
1. Make sure you have at least included the following Foundation files:
```
@import 'foundation-sites/scss/util/_unit.scss';
@import 'foundation-sites/scss/util/_breakpoint.scss';
```
2. Include the `scss/_spaceframework.scss` file into your SASS folder to initialize the SpaceFramework, for example:
```
@import '../../components/spaceframework/scss/spaceframework';
```

3. Make a copy of `scss/settings/settings.scss` and add it to your local SASS variable folder. I suggest you rename to: `spaceframework-settings.scss`
4. In `spaceframework-settings.scss` Remove the `!default` attribute from the variables `$space-settings` and `$space-object-settings`.
5. Add the code below to the location were you actually want to load the set of generated classes.
```
@include space-init();
``` 
6. You're all set! Enjoy 

## How to
### The Space Framework generates classes like:
#### Padding classes: 
```
.site-padding
```

#### Margin classes:
```
.site-margin
```


#### Position classes:
```
.site-position
```
You can add `-absolute` and `-fixed` classes to define the type of position:
```
.site-absolute
.site-fixed
```

#### Direction classes
You can use direction specific classes by adding `-top`, `left`, `-vertical` etc:
```
.site-padding-left
.site-padding-right
```
```
.site-margin-left
.site-margin-horizontal
```
```
.site-position-top
```

#### Responsive classes for advanced control:
```
.medium-site-padding
.large-site-margin
```
```
.small-only-site-padding
.medium-only-site-padding
.large-only-site-margin
```
- Notice: `.small-` classes are not generated, you should the base class instead. However `.small-only-` classes can be used.

#### Negative classes:
This generates negative values like: `margin: -2rem;` instead of `margin: 2rem;`
```
.site-margin-horizontal-negative  
```
## Credits
Proudly made in the Netherlands by @HarwinBorger
