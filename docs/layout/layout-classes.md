# Layout Classes

#### Layout classes are very powerful classes to achieve perfect layout rhythms.

**Requirements:**
- Configurate [Layout-Presets](settings/layout-presets.md) so it fits your design 


**Table of content**
- [Identifier / Name]()
- [Type]()
- [Direction]()
- [Viewport]()
- [Negative]()

---
## Identifier / Name
**Class format:** `[name*]-[type*]`<br>
`*` = required

Each class starts with the given `[name]` in the layout-presets. Like `[name]`. You always need to define the `[type]` as well. The `[name]` and the `[type]` together form the base of the className. 

There are 3 predefined class identifiers, which you can change or add more layout groups to your needs in layout-presets.

**Parameters:**
- `site`
- `section`
- `block`
- your `custom name` block 

By combining the `[name]` together with a `[type]` you can use classes such as:

`.site-padding` and `.section-padding`

---
## Types
There are 3 different types you can use by default for `[type]` in `[name]-[type]`

**Class format:** `[name*]-[type*]`<br>
`*` = required

**Parameters:**
- `padding`
- `margin`
- `position` 

**Example:**

`.section-padding`, `.section-margin`,  `.section-position`

---
## Directions
Add a `[direction]` to your classname if you want to use a specific direction for your **padding** or **margin**.
 
 
**Class format:** `.[name*]-[type*]-[direction]`<br>
`*` = required

**Parameters:**

- `top`
- `right`
- `bottom`
- `left`
- `vertical`
- `horizontal`

**Example:**

`.section-padding-top`, `.section-margin-horizontal`,  `.section-position`

---
## Viewport
Add a  `[viewport]` to your class for responsive use.

**Class format:** `.[viewport]-[name*]-[type*]-[direction]`<br>
`*` = required


**Parameters:**

- `small`
- `small-ony`
- `medium`
- `medium-only`
- `large`
- `large-only`

**Example:**

`.medium-section-padding-top`, `.large-only-section-margin-vertical`

---
## Negative
**Class format:** `.[viewport]-[name*]-[type*]-[direction]-[negative]`<br>
`*` = required

**Parameters:**
- `negative`

> Negative cannot be used for the `[type]` **padding** . 


**Example:**

`.medium-section-margin-top-negative`, `.large-only-section-margin-vertical-negative`





