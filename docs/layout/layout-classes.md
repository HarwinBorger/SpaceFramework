# Layout Classes
**Requirements:**
- Configure your custom [Layout-Presets](/settings/layout-presets.md) first.

**Table of content:**
[[toc]]


## What are Layout Classes?

Layout classes are global classes which you can use for consistency in your repeating layout elements. You can apply predefined `paddings`, `margins` and `positions` in different sizes. You can also add a direction or use it as negative value. On top of that you can choose a viewport size.  

**Different viewport, different sizes**<br>
What is unique for layout classes is that you can define an amount of space-units for each viewport. This way you can optimize your components quickly for each viewport. 

**The classes name exist out of the following parameters:** <br>
`.[viewport]-[name*]-[type*]-[direction]-[negative]`

**You can use classes like:**
- `.site-padding`
- `.section-margin-vertical`
- `.medium-block-margin-left-negative`


### Example
<Layout-Classes-Name content="site-padding"/>

```html
<div class="site-padding">content</div>
```

::: tip Tip
Resize your window smaller and larger to see how the padding of the component changes from **2 space-units**, **4 space-units** to **6 space-units**. 
:::



## Name
- **Classname format:** `[name*]-[type*]`<br>
`*` = required

Each class starts with the given `[name]` in the layout-presets. Like `[name]`. You always need to define the `[type]` as well. 

::: warning Type required
 The `[type]` is required for a layout class. The `[name]` and the `[type]` together are the base of a layout class.  Go to [Types](#types)  
:::

### `[name]` parameters
- `site`
- `section`
- `block`
- your `custom name` block 

By combining the `[name]` together with a `[type]` you can use classes such as:

### Example output classes
- `.site-[type]` 
- `.section-[type]`
- `.block-[type]`

## Type
 - **Classname format:** `[name*]-[type*]`<br>
`*` = required

There are 3 different types you can use by default for `[type]` in `[name]-[type]`
### `[type]` parameters
- `padding`
- `margin`
- `position` 

### Example output classes
- `.section-margin`
- `.section-padding`
- `.section-position`


### Example `.[name]-margin`
<Layout-Classes-SectionMargin content="content"/>

```html
<div class="section-margin">content</div>
```

### Example `.[name]-padding`
<Layout-Classes-SectionPadding content="content"/>

```html
<div class="section-padding">content</div>
```

### Example `.[name]-position`
<Layout-Classes-SectionPosition content="content"/>

```html
<div class="position-relative">
	<div class="section-position position-absolute">content</div>
</div>
```

## Direction
- **Classname format:** `.[name*]-[type*]-[direction]`<br>
`*` = required


Add a `[direction]` to your classname if you want to use a specific direction for your **padding** or **margin**.
 
 
### `[direction]` parameters
- `top`
- `right`
- `bottom`
- `left`
- `vertical`
- `horizontal`

### Example output classes
- `.site-padding-top`
- `.section-margin-horizontal`
- `.block-position-right`


### Example `.[name]-[type]-top`
<Layout-Classes-Top content="content"/>

```html
	<div class="section-margin-top">content</div>
```

### Example `.[name]-[type]-right`
<Layout-Classes-Right content="content"/>

```html
	<div class="section-margin-right">content</div>
```

### Example `.[name]-[type]-bottom`
<Layout-Classes-Bottom content="content"/>

```html
	<div class="section-margin-bottom">content</div>
```

### Example `.[name]-[type]-left`
<Layout-Classes-Left content="content"/>

```html
	<div class="section-margin-left">content</div>
```

### Example `.[name]-[type]-vertical`
<Layout-Classes-Vertical content="content"/>

```html
	<div class="section-margin-vertical">content</div>
```

### Example `.[name]-[type]-horizontal`
<Layout-Classes-Horizontal content="content"/>

```html
	<div class="section-margin-horizontal">content</div>
```

## Viewport
**Classname format:** `.[viewport]-[name*]-[type*]-[direction]`<br>
`*` = required

Add a  `[viewport]` before your class for responsive use.

### `[viewport]` parameters
- `small-only`
- `medium`
- `medium-only`
- `large`
- `large-only`

### Example output classes
- `.small-only-block-padding`
- `.medium-section-padding-top`
- `.large-section-margin-vertical`

::: tip Tip
The following examples are influenced by your window width. Up and downscale them to see how they work. 
:::
### Example `.small-only-[name]-[type]`


<Layout-Classes-SmallOnly content="content"/>

```html
	<div class="small-only-block-padding">content</div>
```

### Example `.medium-[name]-[type]-[direction]`
<Layout-Classes-Medium content="content"/>

```html
	<div class="medium-section-padding-top">content</div>
```

### Example `.large-[name]-[type]-[direction]`
<Layout-Classes-Large content="content"/>

```html
	<div class="large-section-margin-vertical">content</div>
```

## Negative
**Classname format:** `.[viewport]-[name*]-[type*]-[direction]-[negative]`<br>
`*` = required

::: warning
Negative cannot be used for the `[type]` **padding** . 
:::

### `[negative]` parameters
- `negative`


### Example output classes
- `.site-margin-left-negative` 
- `.medium-section-margin-top-negative` 
- `.large-only-section-margin-vertical-negative`

### Example `.[name]-[type]-[direction]-negative`
<Layout-Classes-MarginNegative content="content"/>

```html
	<div class="section-padding">
		<div class="section-margin-left-negative">content</div>
	</div>
```



