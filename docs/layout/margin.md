# Margins
Add margins defined in space units to your elements
[[toc]]

## @margin

**Mixin:** `@include margin($top, $right, $bottom, $left);`

- **$top, $right, $bottom, $left** value defined in **space-units**
- If you only fill in the **$top** value the other values (**$right, $bottom, $left**) will take over this value. Similar to vanille CSS

**Four different ways to use:**
```scss
@include margin($value);                        // margin: 4px;
@include margin($vertical, $horizontal);        // margin: 4px 8px;
@include margin($top, $horizontal, $bottom);    // margin: 4px 8px 12px;
@include margin($top, $right, $bottom, $left);  // margin: 4px 8px 12px 16px;
```

#### Example
<Layout-Margin-Margin/>

```scss {2}
.example-element {
	@include margin(5,1,1,1);
}
``` 



## @margin-top
- **Mixin:** `@include margin-top($space-units)`

**Example:**
<Layout-Margin-MarginTop/>

```scss {2}
.example-element {
	@include margin-top(1);
}
``` 


## @margin-right
- **Mixin:** `@include margin-right($space-units)`

**Example:**

<Layout-Margin-MarginRight/>

```scss {2}
.example-element {
	@include margin-right(1);
}
``` 



## @margin-bottom
- **Mixin:** `@include margin-bottom($space-units)`


**Example:**

<Layout-Margin-MarginBottom/>

```scss {2}
.example-element {
	@include margin-bottom(1);
}
``` 



## @margin-left
- **Mixin:** `@include margin-left($space-units)`

**Example:**

<Layout-Margin-MarginLeft/>

```scss {2}
.example-element {
	@include margin-left(1);
}
``` 


## @margin-vertical
**Mixin:** `@include margin-vertical($top, $bottom)`

- **$top, $bottom** value defined in **space-units**

**Two different ways to use:**
```scss
@include margin-vertical($value);               // margin-top: 4px; margin-bottom: 4px;
@include margin-vertical($top, $bottom);        // margin-top: 4px; margin-bottom: 8px;
```
::: warning
Examples will be added soon
:::


## @margin-horizontal
**Mixin:** `@include margin-horizontal($left, $right)`

- **$left, $right** value defined in **space-units**

**Two Different ways to use:**
```scss
@include margin-horizontal($value);             // margin-left: 4px; margin-right: 4px;
@include margin-horizontal($left, $right);      // margin-left: 4px; margin-right: 8px;
```

::: warning
Examples will be added soon
:::