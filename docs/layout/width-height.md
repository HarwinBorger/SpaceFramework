# Width & Height
#### Define the dimensions of your element in space-units to your elements

- [@width](#width)
- [@min-width](#width)
- [@max-width](#width)
- [@height](#height)
- [@min-height](#height)
- [@max-height](#height)

---
## @Width
**Mixin:** `@include width($value)`<br>
**Mixin:** `@include min-width($value)`<br>
**Mixin:** `@include max-width($value)`<br>

- **$value** value defined in **space-units**


### Example
<Layout-Dimensions-Width content="10 space-units width"/>

```scss {2,6,10}
.example-element-1 {
	@include width(10);
}

.example-element-2 {
	@include width(20);
}

.example-element-3 {
	@include width(15);
}
``` 


---
## @Height
**Mixin:** `@include height($value)` <br>
**Mixin:** `@include min-height($value)`<br>
**Mixin:** `@include max-height($value)`<br>

- **$value** value defined in **space-units**

