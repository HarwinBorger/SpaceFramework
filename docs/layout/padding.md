# Paddings
Add paddings defined in space units to your elements
[[toc]]

## @padding

**Mixin:** `@include padding($top, $right, $bottom, $left);`

- **$top, $right, $bottom, $left** value defined in **space-units**
- If you only fill in the **$top** value the other values (**$right, $bottom, $left**) will take over this value. Similar to vanille CSS

### Multiple input methods
- `@include padding($space-units);`
- `@include padding($vertical, $horizontal);`
- `@include padding($top, $horizontal, $bottom);`
- `@include padding($top, $right, $bottom, $left);`

### Example
<Layout-Padding-Padding content="1 space-unit padding top and bottom, 2 space units left and right"/>

```scss {2,4}
.example-element {
	@include padding(1,2,1,2);
	//or shorthand
	@include padding(1,2);
}
``` 



## @padding-top
- **Mixin:** `@include padding-top($space-units)`

### Example
<Layout-Padding-PaddingTop/>

```scss {2}
.example-element {
	@include padding-top(1);
}
``` 


## @padding-right
- **Mixin:** `@include padding-right($space-units)`

### Example

<Layout-Padding-PaddingRight/>

```scss {2}
.example-element {
	@include padding-right(1);
}
``` 



## @padding-bottom
- **Mixin:** `@include padding-bottom($space-units)`


### Example

<Layout-Padding-PaddingBottom/>

```scss {2}
.example-element {
	@include padding-bottom(1);
}
``` 



## @padding-left
- **Mixin:** `@include padding-left($space-units)`

### Example

<Layout-Padding-PaddingLeft/>

```scss {2}
.example-element {
	@include padding-left(1);
}
``` 


## @padding-vertical
- **Mixin:** `@include padding-vertical($top, $bottom)`

### Multiple input methods
- `@include padding-vertical($space-units);`
- `@include padding-vertical($top, $bottom);`

### Example

<Layout-Padding-PaddingVertical content="2 space-unit padding on top and bottom"/>

```scss {2}
.example-element {
	@include padding-vertical(2);
}
``` 


## @padding-horizontal
- **Mixin:** `@include padding-horizontal($left, $right)`

### Multiple input methods
- `@include padding-horizontal($space-units);`
- `@include padding-horizontal($left, $right);`

### Example

<Layout-Padding-PaddingHorizontal content="2 space-unit padding on left and right"/>

```scss {2}
.example-element {1
	@include padding-horizontal(2);
}
``` 