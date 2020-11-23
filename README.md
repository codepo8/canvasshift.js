CanvasShift is a helper function that allows you to shift images on a canvas. 

This means you can rotate the images in themselves and users can save the results as images, something CSS sadly enough can't do. 

The easiest way to test this is to check the demo pages.

* [Simple shift Test](https://codepo8.github.io/canvasshift.js/simple-shift-test.html) is a bare-bones example. 
* [Shift Test](https://codepo8.github.io/canvasshift.js/shift-test.html) is the testing page I used to debug the script.

Here's a bare bones example:

```html
<script src="canvasshift.js"></script>
<script>
```
```javascript
    let c = document.createElement('canvas');
    let cx = c.getContext('2d');
    document.body.appendChild(c);
    let i = new Image();
    i.src = 'puking-unicorn.jpg';
    i.onload = function() {
      c.height = i.naturalHeight;
      c.width = i.naturalWidth;
      cx.drawImage(i, 0, 0);
      canvasshift(c, 100, 0);
    }
```
```html
</script>
```

If you don't want to do the loading of the image yourself, you can also use the `load()` method of `canvasshift.js`:

```javascript  
let c = document.createElement('canvas');
let button = document.querySelector('button');
button.appendChild(c);

const shift = _ => {
  canvasshift(c, -200);
}
canvasshift.load(c, 'puking-unicorn.jpg', shift);

button.addEventListener('click', e => {
  canvasshift(c, 100, 0);
  e.preventDefault();
});
```

More details are [in this blog post](https://christianheilmann.com/2020/11/23/shifting-an-image-with-canvas/).
<!-- https://codepen.io/codepo8/pen/OJXKgPR -->