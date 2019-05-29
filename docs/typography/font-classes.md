# Font Classes
#### Font classes are generated from the font-presets

By default the SpaceFramework generates a set of pre-made classes for you. You can change and add more font preset as you need them. [Learn how to configurate your own font-presets](settings/font-presets).

**Table of content**

- [Font-preset classes](#font-preset-classes)
- [Font-size classes](#font-size-classes)
- [Custom classes](#custom-classes)


## Font-preset classes
**Classname format:** `.font-preset-[size]`

**Classnames:** 
- `.font-preset-xlarge` 
- `.font-preset-large` 
- `.font-preset-median`
- `.font-preset-default`
- `.font-preset-small`
- `.font-preset-tiny`

In most situations it's best to use the **font-preset** class. By using the font-preset also the **line-height** and **font-family** are set. Also you can make use of the vertical alignment classes such as `.align-baseline`.

**Mixin:** `@include font-preset-classes()`

Use the mixin to output the classes when font-preset classes are not generated

<Typography-FontClasses-FontPreset/>

## Font-size classes
**Classname format:** `.font-size-[size]`

**Classnames:** 
 - `.font-size-xlarge` 
 - `.font-size-large` 
 - `.font-size-median`
 - `.font-size-default`
 - `.font-size-small`
 - `.font-size-tiny`
 
In some situations you only want to output the **font-size** of a font-preset and not the **line-height** or **font-family**. In this case you can just use the `.font-size-[size]` class. If you want the full font-preset then you should use `.font-preset-[size]` instead.   

<Typography-FontClasses-FontSize/>


**Mixin:** `@include font-size-classes()`

Use the mixin to output the classes when font-size classes are not generated


## Custom classes
You can change the font-presets to your needs. Which we explain in the [font-preset](settings/font-presets) article.

Lets say you added a `xx-large` font. Then the following classes would be generated:

**Classnames:** 
 - `.font-preset-xxlarge`
 - `.font-size-xxlarge`

 
 Or when you added a special font preset for your `hero` font: 
 
 **Classnames:** 
 - `.font-preset-hero`
 - `.font-size-hero`
 
