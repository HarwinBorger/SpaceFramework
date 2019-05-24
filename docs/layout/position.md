# Positions
#### Add the top, right, bottom and left position defined in space units to your elements
[[toc]]


**Requirements:** the `position` attribute has to be set to `fixed` , `absolute` or `relative`


## @top
- **Mixin:** `@include top($space-units)`

### Example
<Layout-Position-Top content="3 space-unit top"/>

```scss {2}
.example-element {
	@include top(3);
	position: absolute;
	left: 0;
	right: 0;
}
``` 

## @right
- **Mixin:** `@include right($space-units)`


### Example
<Layout-Position-Right content="3 space-unit right"/>

```scss {2}
.example-element {
	@include right(3);
	position: absolute;
	left: 0;
}
``` 


## @bottom
**Mixin:** `@include bottom($space-units)`


### Example
<Layout-Position-Bottom content="3 space-unit bottom"/>

```scss {2}
.example-element {
	@include bottom(3);
	position: absolute;
	left: 0;
	right: 0;
}
``` 



## @left
**Mixin:** `@include left($space-units)`


### Example
<Layout-Position-Left content="3 space-unit left"/>

```scss {2}
.example-element {
	@include left(3);
	position: absolute;
	right: 0;
}
``` 

