# Positions
#### Add the top, right, bottom and left position defined in space units to your elements
- [@top](#top)
- [@right](#right)
- [@bottom](#bottom)
- [@left](#left)


**Requirements:** the `position` attribute has to be set to `fixed` , `absolute` or `relative`


## @top
**Mixin:** `@include top($space-units)`

### Example
<Layout-Position-Top content="1 space-unit top"/>

```scss {2}
.example-element {
	@include top(3);
}
``` 

## @right
**Mixin:** `@include right($value)`

- **$value** value defined in **space-units**

## @bottom
**Mixin:** `@include bottom($value)`

- **$value** value defined in **space-units**


## @left
**Mixin:** `@include left($value)`

- **$value** value defined in **space-units**
