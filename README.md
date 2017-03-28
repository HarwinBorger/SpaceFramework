## SpaceFramework 
### Front-end development made for a green future!

- Follows OOCSS principles
- Develop faster and more efficient. No more writing classes to set paddings, margins en positions. 
- Separates structure from styling 

### Requirements
- Space Framework is build on top of Foundation. Which can be found here: http://foundation.zurb.com/

### Installation

#### Bower: 
```
bower install spaceframework --save
```
### Getting started:
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


#### Use CSS classes like:
For padding:
```
.site-padding
.site-padding-top 
.site-padding-vertical
```

For margin:
```
.site-margin
.site-margin-left
.site-margin-horizontal
```

For positions:
```
.site-position
.site-position-vertical
```

For responsive websites:
```
.medium-site-padding
.large-site-margin
```
and

```
.small-only-site-padding
.medium-only-site-padding
.large-only-site-margin
```

For negative values:
```
.site-margin-horizontal-negative  
```

Proudly made in the Netherlands by Harwin Borger
