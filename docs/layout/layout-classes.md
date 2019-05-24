# Layout Classes

Layout classes are global classes which you can use for consistency in your layout elements. You can apply predefined `paddings`, `margins` and `positions` in different sizes. You can also add a direction or use it as negative value. On top of that you can choose a viewport size.  

The classes name exist out of the following parts: <br>
`.[viewport]-[name*]-[type*]-[direction]-[negative]`

You can use classes like:
- `.site-padding`
- `.section-margin-vertical`
- `.medium-block-margin-left-negative`

**Requirements:**
- Configure your custom [Layout-Presets](settings/layout-presets.md) first.

**Table of content:**
[[toc]]

## Name
- **Classname format:** `[name*]-[type*]`<br>
`*` = required

Each class starts with the given `[name]` in the layout-presets. Like `[name]`. You always need to define the `[type]` as well. 

::: warning Type required
 The `[type]` is required for a layout class. The `[name]` and the `[type]` together are the base of a layout class.  Go to [Types](#types)  
:::

### `[name]` options
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
### `[type]` options
- `padding`
- `margin`
- `position` 

### Example output classes
- `.section-padding`
- `.section-margin`
- `.section-position`


## Direction
- **Classname format:** `.[name*]-[type*]-[direction]`<br>
`*` = required


Add a `[direction]` to your classname if you want to use a specific direction for your **padding** or **margin**.
 
 
### `[direction]` options
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


## Viewport
**Classname format:** `.[viewport]-[name*]-[type*]-[direction]`<br>
`*` = required

Add a  `[viewport]` before your class for responsive use.

### `[viewport]` options
- `small-only`
- `medium`
- `medium-only`
- `large`
- `large-only`

### Example output classes
- `.small-only-block-padding`
- `.medium-section-padding-top`
- `.large-only-section-margin-vertical`


## Negative
**Classname format:** `.[viewport]-[name*]-[type*]-[direction]-[negative]`<br>
`*` = required

::: warning
Negative cannot be used for the `[type]` **padding** . 
:::

### `[negative]` options
- `negative`


### Example output classes
- `.site-margin-left-negative` 
- `.medium-section-margin-top-negative` 
- `.large-only-section-margin-vertical-negative`





