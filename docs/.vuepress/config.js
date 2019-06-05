let sidebar = [
	{
		title: 'Getting started',
		children: [
			['getting-started/welcome', 'Welcome'],
			['getting-started/installation', 'Installation'],
			['getting-started/integration', 'Integration'],
			['getting-started/itcss', 'ITCSS']
		]
	},
	{
		title: 'Base Principles',
		children: [
			['base-principles/space-unit-grid.md', '! Space-Unit Grid'],
			['base-principles/modular.md', '! Modular'],
			['base-principles/responsive-typography.md', '! Responsive Typography'],
			['base-principles/responsive-layout.md', '! Responsive Layout'],
		]
	},
	{
		title: 'Settings',
		children: [
			['settings/viewports.md', 'Viewports'],
			['settings/space-units.md', 'Space Units'],
			['settings/layout-presets.md', 'Layout Presets'],
			['settings/fonts.md', 'Fonts'],
			['settings/font-presets.md', 'Font Presets'],
			['settings/support-legacy.md', 'Support & Legacy Browers'],
		]
	},
	{
		title: 'Layout',
		children: [
			['layout/layout-classes.md', 'Layout Classes'],
			['layout/margin.md', '@Margins'],
			['layout/padding.md', '@Paddings'],
			['layout/position.md', '@Positions'],
			['layout/width-height.md', '@Width & @Height'],
			['layout/property.md', '@Custom Properties'],
		]
	},
	{
		title: 'Typography & Content',
		children: [
			['typography/font-classes.md', 'Font Classes'],
			['typography/vertical-alignments.md', 'Vertical Alignment Classes'],
			['typography/self-classes.md', 'Self Classes'],
			['typography/font-mixins.md', '@Font'],
		]
	},
	{
		title: 'Utility Classes',
		children: [
			['utility-classes/trim.md', 'Trim'],
			['utility-classes/fit.md', 'Fit'],
			['utility-classes/implode.md', 'Implode'],
			['utility-classes/shift.md', 'Shift'],
		]
	},
	{
		title: 'Functions',
		children: [
			['functions/su.md', 'Su()'],
		]
	},
//	{
//		title: 'External Links',
//		children:[
//			['https://www.npmjs.com/package/spaceframework','NPM'],
//			['https://github.com/HarwinBorger/SpaceFramework','Github'],
//		]
//	},
];

const path = require("path");


let navbar = [
//	{text: 'Home', link: '/'},
	{text: 'DOCS', link: '/'},
//	{text: 'Examples', link: '/examples/'},
	{text: 'Github', link: 'https://github.com/HarwinBorger/SpaceFramework'},
];

module.exports = {
	title: 'SpaceFramework',
	description: 'Just playing around',
	base: '/',
	themeConfig: {
		sidebar: sidebar,
		nav: navbar,
	},
	markdown: {
		toc: {includeLevel: [2]},
	}
};
