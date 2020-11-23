const canvasshift = (canvas, offsetx, offsety) => {
  
  if (!canvas || !canvas.getContext) {
    console.error(`Can't find canvas :(`);
    return false;
  }

  let c = canvas;
  let cx = canvas.getContext('2d');
  let slice = {};
  let image = {};

  if (Math.abs(offsetx) >= c.width || Math.abs(offsety) >= c.height) {
    console.error('Offset out of range');
    return false;
  }

  const render = (image,slice) => {
    let imagedata = cx.getImageData(image.x, image.y, image.w, image.h);
    let slicedata = cx.getImageData(slice.x, slice.y, slice.w, slice.h);
    if (image.x !== null) {
      cx.putImageData(imagedata, image.tox, image.toy);
      cx.putImageData(slicedata, slice.tox, slice.toy);
    }
  }

  if (offsetx !== 0) {
    if (offsetx > 0) {
      slice = { 
        x: c.width - offsetx, y: 0,
        w: offsetx, h: c.height, 
        tox: 0, toy: 0
      }
      image = { 
        x: 0, y: 0, 
        w: c.width - offsetx, h: c.height,
        tox: offsetx, toy: 0
      }
    }
    if (offsetx < 0) {
      slice = { 
        x: 0, y: 0, 
        w: -offsetx, h: c.height, 
        tox: c.width - -offsetx, toy: 0
      }
      image = { 
        x: -offsetx, y: 0, 
        w: c.width - -offsetx, h: c.height,
        tox: 0, toy: 0
      }
    }
    render(slice, image);
  }
  if (offsety !== 0) {
    if (offsety > 0) {
      slice = { 
        x: 0, y: c.height - offsety, 
        w: c.width, h: offsety, 
        tox: 0, toy: 0
      }
      image = { 
        x: 0, y: 0, 
        w: c.width, h: c.height - offsety,
        tox: 0, toy: offsety
      }
    }
    if (offsety < 0) {
      slice = { 
        x: 0, y: 0, 
        w: c.width, h: -offsety, 
        tox: 0, toy: c.height - -offsety
      }
      image = { 
        x: 0, y: -offsety, 
        w: c.width, h: c.height - -offsety,
        tox: 0, toy: 0
      }
    }
    render(slice, image);
  }
};

