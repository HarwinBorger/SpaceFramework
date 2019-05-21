# Support & Legacy Browsers

## Typography support
Using automatic generation of typographic classes takes much space, you can turn off typography alignment if you don't intend to use it.

```scss
$space-support:(
	align-baseline: true,   //.align-baseline
	align-capline: true,    //.align-capline
	align-median: true,     //.align-median
	fit-baseline: true,     //.align-baseline.fit 
	fit-capline: true,      //.align-capline.fit
	align-reset: true       //.align-reset
);
```

> We will add documentation soon

## Legacy Browsers
**Variable:** `$space-legacy: true|false;`

Use `$space-legacy` if you want to provide support to old browser such as:


- IE 11
- < Edge 15
- < Android 4.4.4

 
 SpaceFramework uses CSS3 functions like 'css-variables' to avoid large stylesheets. Check your browser support at https://caniuse.com/#feat=css-variables 
 
 Space legacy is **true** by **default**, providing max reliability.
 If you are certain you are up for it, check the provided sources and change `$space-legacy: true` to `$space-legacy: false`