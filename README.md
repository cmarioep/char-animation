<h1 align="center">Char Animator</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/TagCloud"><img alt="npm" src="https://img.shields.io/npm/v/TagCloud.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/TagCloud"><img alt="downloads" src="https://img.shields.io/npm/dt/TagCloud?style=flat-square"></a>
</p>

A simple text animator: split strings text into single chars and applies animations to each one when the cursor passes over them.

# How to...
## Installation

```bash
$ npm i -S char-animator
```

## Import package

To use, you'll need to import `charAnimator`  into your js file.

```js
import {charAnimator} from 'char-animator';
```
## Use

```js
charAnimator(selector, animation, text-color, text-stroke);
```
## Parameters

| Param| Type | Description | Default | 
| ------------ | ------------ | ------------ | ------------ |
| selector    | string | Valid CSS selector:<br>class \| id \| tag<br>element which the animation will be applied | Required |
| animation   | string | Options:<br>rubberBand \| bounce \| pulse \| tada \| swing | Required |
| text-color  | string | Color format:<br> #hex \| rgb \| rgba \| hsl \| hsla<br>changes the font color when the cursor passes over the chars | Optional |
| text-stroke | string | Color format:<br> #hex \| rgb \| rgba \| hsl \| hsla<br>changes the stroke color when the cursor passes over the chars |  Optional |

## License
MIT