# Width & Height
#### Define the dimensions of your element in space-units to your elements

[[toc]]


## @Width
- **Mixin:** `@include width($space-units)`


### Width variants
- **Min-width:** `@include min-width($space-units)`
- **Max-width:** `@include max-width($space-units)`

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



## @Height
- **Mixin:** `@include height($space-units)` <br>
- **Mixin:** `@include min-height($space-units)`<br>
- **Mixin:** `@include max-height($space-units)`<br>

- **$value** value defined in **space-units**


### Example
<Layout-Dimensions-Height content="5 space-units height"/>

```scss {2,6,10}
.example-element-1 {
	@include height(5);
}

.example-element-2 {
	@include height(10);
}

.example-element-3 {
	@include height(15);
}
``` 
