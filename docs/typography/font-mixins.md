# Font Mixins
#### Use font-preset and font-size mixin to define your typography. Which is usually done in the as high as possible. 


## @font-preset
The use of Font-preset is required to make use of [vertical alignment classes](typography/vertical-alignments.md) such as `.align-baseline`.

```scss
@include font-preset($value = default, $vertical-align = true);
```

Were **$value** is one of the defined presets from your Font-presets setting file.

**Example:**
```scss
	@include font-preset(x-large);
```


#### Example 1 (no vertical align support)
<!-- tabs:start -->

#### ** How to use **
```scss
h2 {
	@include font-preset(large, false);
}
``` 
#### ** Generated CSS **
```css
h2 {
	font-size: 24px;
	line-height: 36px;
	font-family: Verdana, Arial, non-serif;
}

```

<!-- tabs:end -->




## @font-size
> We will add documentation soon

