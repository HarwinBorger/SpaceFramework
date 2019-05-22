# Margins
#### Add margins defined in space units to your elements

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

#### Example 1

**How to use**
```scss
.example{
	@include margin(1);
}
``` 

<Layout-Margin-Margin/>


**Generated CSS**

<<< @/docs/layout/_examples/margin.css


---
## @margin-top
**Mixin:** `@include margin-top($value)`

- **$value** value defined in **space-units**

**One way to use:**
```scss
@include margin-top($value);   // margin-top: 4px; 
```
> We will add documentation soon

---
## @margin-right
**Mixin:** `@include margin-right($value)`

- **$value** value defined in **space-units**

**One way to use:**
```scss
@include margin-right($value);   // margin-right: 4px; 
```
> We will add documentation soon

---
## @margin-bottom
**Mixin:** `@include margin-bottom($value)`

- **$value** value defined in **space-units**

**One way to use:**
```scss
@include margin-bottom($value);   // margin-bottom: 4px; 
```
> We will add documentation soon

---
## @margin-left
**Mixin:** `@include margin-left($value)`

- **$value** value defined in **space-units**

**One way to use:**
```scss
@include margin-left($value);   // margin-left: 4px; 
```
> We will add documentation soon


---
## @margin-vertical
**Mixin:** `@include margin-vertical($top, $bottom)`

- **$top, $bottom** value defined in **space-units**

**Two different ways to use:**
```scss
@include margin-vertical($value);               // margin-top: 4px; margin-bottom: 4px;
@include margin-vertical($top, $bottom);        // margin-top: 4px; margin-bottom: 8px;
```
> We will add examples soon

---
## @margin-horizontal
**Mixin:** `@include margin-horizontal($left, $right)`

- **$left, $right** value defined in **space-units**

**Two Different ways to use:**
```scss
@include margin-horizontal($value);             // margin-left: 4px; margin-right: 4px;
@include margin-horizontal($left, $right);      // margin-left: 4px; margin-right: 8px;
```

> We will add examples soon
