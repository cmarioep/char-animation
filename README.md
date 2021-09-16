<h1 align="center">Char Animation<span></h1>

<div align="center">
  <a href="https://www.npmjs.com/package/char-animation"><img alt="package version" src="https://img.shields.io/npm/v/char-animation?color=success&logo=npm&style=flat-square"></a>
<a href="https://www.npmjs.com/package/char-animation"><img alt="npm downloads" src="https://img.shields.io/npm/dt/char-animation?color=success&logo=npm&style=flat-square"></a>
<a href="https://github.com/cmarioep/char-animation"><img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/cmarioep/char-animation?color=sucess&logo=github&style=flat-square"></a>
</div>

<br>
Simple text animator: splits strings text into single chars and applies animations to each one when the cursor passes over them.
<br>

<div align="center">
<img alt="Example animations"  src="https://user-images.githubusercontent.com/53541185/126826480-d13e1f1c-cc33-49ba-b40a-548bdd45f954.gif">
</div>

# How to...

## Installation
```bash
$ npm i -S char-animation
```

## Import package
To use, you'll need to import `charAnimation`  into your js file.
```js
import charAnimation from './node_modules/char-animation/dist/char-animation.js';
```

## Use
```js
charAnimation({selector, animation, color, stroke});
```


## Parameters

The function receive an object with the follow parameters:

| Param| Type | Description | Default | 
| ------------ | ------------ | ------------ | ------------ |
| selector    | string | Valid CSS selector:<br>class \| id \| tag<br>element which the animation will be applied | Required |
| animation   | string | Options:<br>rubberBand \| bounce \| pulse \| tada \| swing | Required |
| color  | string | Color format:<br> #hex \| rgb \| rgba \| hsl \| hsla<br>changes the font color when the cursor passes over the chars                                                                     | Optional |
| stroke | string | Color format:<br> #hex \| rgb \| rgba \| hsl \| hsla<br>changes the stroke color when the cursor passes over the chars |  Optional |


##  Example
```js
charAnimation(
	{
		selector: "h1", 
		animation: "rubberBand",  
		color: "green", 
		stroke: "blue"
	}
);

```

## License
MIT
