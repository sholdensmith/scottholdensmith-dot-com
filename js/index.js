let getGif = function () {
  let gif = [];
  $('img').each(function () {
    let data = $(this).data('alt');
    gif.push(data);
  });
  return gif;
};

let gif = getGif();

let image = [];

$.each(gif, function (index) {
  image[index] = new Image();
  image[index].src = gif[index];
});

$('figure').on('click', function () {
  var $this = $(this),
    $index = $this.index(),
    $img = $this.children('img'),
    $imgSrc = $img.attr('src'),
    $imgAlt = $img.attr('data-alt'),
    $imgExt = $imgAlt.split('.');

  if ($imgExt[1] === 'gif') {
    $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
  } else {
    $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
  }
});
