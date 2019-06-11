# Your project
There are several ways to include the SpaceFramework in your SASS/SCSS project.
 
 [[toc]]
 

## Method 1 - Easy setup
This method does output all classes and code from the SpaceFramework.

1. Open the SpaceFramework `scss` folder. You will find there the `spaceframework.scss` file. 
2. Include the `spaceframework.scss` file in the beginning of your project by using:

```scss
@import '{your-location}/scss/spaceframework.scss';
```
3. You're done. 

## Method 2 - Init setup (recommended when you use ITCSS or SMACSS)
This method does not output any classes or code by default. We recommend this method when you have project based on ITCSS or SMACSS. You can decide where you want to output the code for classes and elements. 

1. Open the SpaceFramework `scss` folder. You will find there the `init-spaceframework.scss` file. 
2. Include the `init-spaceframework.scss` file in the beginning of your project by using:

```scss
@import '{your-location}/scss/init-spaceframework.scss';
```

3. Read our instructions in [ITCSS](itcss) how to define the output in your project.
 
> We will add more documentation soon
