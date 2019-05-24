# Custom Properties

## @Property
- **Mixin:** `@include property($attribute, $space-units)`

You can use almost any property you want to support Space-Units. For example `text-indent` based on Space-Units.

### Example text-indent
<Layout-Property-TextIndent content="3 space-units text-indent"/>

```scss
.example-element {
	@include property('text-indent', 3);
}
```

### Example border-width
<Layout-Property-BorderWidth content="1 space-units border-width"/>

```scss
.example-element {
	@include property('border-width', 1);
}
```

### Example letter-spacing
<Layout-Property-LetterSpacing content="1 space-unit letter-spacing"/>

```scss
.example-element {
	@include property('letter-spacing', 1);
}
```
