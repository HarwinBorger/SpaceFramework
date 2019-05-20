# Paddings
#### Add paddings defined in space units to your elements

- [@padding](#padding)


- [@padding-top](#padding-top)
- [@padding-right](#padding-right)
- [@padding-bottom](#padding-bottom)
- [@padding-left](#padding-left)


- [@padding-vertical](#padding-vertical)
- [@padding-horizontal](#padding-horizontal)


---
## @padding

```scss
@include padding($top, $right, $bottom, $left);
```

- **$top, $right, $bottom, $left** value in '**space-units**'
- If you only fill in the **top** value the other values will take over this value. Similar to vanille CSS

### Example 1
<!-- tabs:start -->

#### ** How to use **
```scss
@include padding(1);
``` 
#### ** Generated CSS **
[filename](_examples/padding.md ':include')

<!-- tabs:end -->

---
## @padding-top
**Mixin:** `@include padding-top($value)`

- **$value** value defined in **space-units**

---
## @padding-right
**Mixin:** `@include padding-right($value)`

- **$value** value defined in **space-units**

---
## @padding-bottom
**Mixin:** `@include padding-bottom($value)`

- **$value** value defined in **space-units**
---
## @padding-left
**Mixin:** `@include padding-left($value)`

- **$value** value defined in **space-units**

---
## @padding-vertical
**Mixin:** `@include padding-vertical($top, $bottom)`

- **$top, $bottom** value defined in **space-units**

**Two different ways to use:**
```scss
@include padding-vertical($value);               // padding-top: 4px; padding-bottom: 4px;
@include padding-vertical($top, $bottom);        // padding-top: 4px; padding-bottom: 8px;
```

---
## @padding-horizontal
**Mixin:** `@include padding-horizontal($left, $right)`

- **$left, $right** value defined in **space-units**

**Two Different ways to use:**
```scss
@include padding-horizontal($value);             // padding-left: 4px; padding-right: 4px;
@include padding-horizontal($left, $right);      // padding-left: 4px; padding-right: 8px;
```
