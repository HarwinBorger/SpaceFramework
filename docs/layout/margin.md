# Margins
Add margins defined in space units to your elements
[[toc]]

## @margin

**Mixin:** `@include margin($top, $right, $bottom, $left);`

- **$top, $right, $bottom, $left** value defined in **space-units**
- If you only fill in the **$top** value the other values (**$right, $bottom, $left**) will take over this value. Similar to vanille CSS

### Multiple input methods
- `@include margin($space-units);`
- `@include margin($vertical, $horizontal);`
- `@include margin($top, $horizontal, $bottom);`
- `@include margin($top, $right, $bottom, $left);`

### Example
<Layout-Margin-Margin content="1 space-unit margin on each side and 5 space-units on top"/>

```scss {2}
.example-element {
	@include margin(5,1,1,1);
}
``` 



## @margin-top
- **Mixin:** `@include margin-top($space-units)`

### Example
<Layout-Margin-MarginTop/>

```scss {2}
.example-element {
	@include margin-top(1);
}
``` 


## @margin-right
- **Mixin:** `@include margin-right($space-units)`

### Example

<Layout-Margin-MarginRight/>

```scss {2}
.example-element {
	@include margin-right(1);
}
``` 



## @margin-bottom
- **Mixin:** `@include margin-bottom($space-units)`


### Example

<Layout-Margin-MarginBottom/>

```scss {2}
.example-element {
	@include margin-bottom(1);
}
``` 



## @margin-left
- **Mixin:** `@include margin-left($space-units)`

### Example

<Layout-Margin-MarginLeft/>

```scss {2}
.example-element {
	@include margin-left(1);
}
``` 


## @margin-vertical
- **Mixin:** `@include margin-vertical($top, $bottom)`

### Multiple input methods
- `@include margin-vertical($space-units);`
- `@include margin-vertical($top, $bottom);`

### Example

<Layout-Margin-MarginVertical content="2 space-unit margin on top and bottom"/>

```scss {2}
.example-element {
	@include margin-vertical(2);
}
``` 


## @margin-horizontal
- **Mixin:** `@include margin-horizontal($left, $right)`

### Multiple input methods
- `@include margin-horizontal($space-units);`
- `@include margin-horizontal($left, $right);`

### Example

<Layout-Margin-MarginHorizontal content="2 space-unit margin on left and right"/>

```scss {2}
.example-element {1
	@include margin-horizontal(2);
}
``` 