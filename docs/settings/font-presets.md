# Font Presets
#### It can be hard to manage all different font-styles in your website. Font-Presets help you with this. Centralizing all different font-styles at one place.

Whether want to apply a font-style directly in your html code or include a font-style in your custom SCSS code. Font-presets supports it. Also by using font-preset you can use advanced vertical alignment classes such as `.align-baseline`.  


## Adding a new font-preset

Adding a new font-preset is easy. Open the `1.settings/_font-presets.scss` file from your repository. 
Don't have a font-preset file yet?  [Learn how to integrate the font-preset here](getting-started/integration.md)

You will see a code just like this:
```scss{2}
$font-presets: (
	// -> add your new font-preset here
	xlarge:(//Mostly used for H1
		font-size: (1.5rem, 2.25rem, 3rem),
		line-height: (3su, 4su, 5su),
		font: secondary
	),
	//...
``` 

Now add your own Font-Preset using the following format:
```scss{2-6}
$font-presets: (
	your-custom-name:( // Your custom font-preset
		font-size: (1.5rem, 2.25rem, 3rem),
		line-height: (3su, 4su, 5su),
		font: secondary
	),
	xlarge:(//Mostly used for H1
	//...
```

`(array)` **font-size:** ($value, $value, $value, etc)

Add a font-size value for each viewport configurated in `1.settings/viewports.scss` (small, medium, large).
  
`(array)` **line-height:** ($value, $value, $value, etc)

Add a line-height value for each viewport. You need to use [space-units](base-principles/space-unit-grid.md) here in order to align with the [Space-Unit grid](base-principles/space-unit-grid.md)  and to use [Vertical Alignment Classes](/typography/vertical-alignments)

`(string)` **font:** (optional)
 
Add a font from the list in `1.settings/fonts.scss/`. It wil use the *default* font by default 



## Changing a font-preset
Changing a font-preset is easy, just change the name, font-size, line-height or fonts however you want it. 

> Note: when you change the name of the preset. You have to refactor the classes and mixin you already used for that font-preset. 
