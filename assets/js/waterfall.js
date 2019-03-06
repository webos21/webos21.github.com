
/**
 * Initialized on loading
 */
(function() {
  /**
   * JSON Content
   */
  var demoContent = [
    {
      demo_link: 'https://webos21.github.io/PasswordBook',
      img_link: 'https://webos21.github.io/PasswordBook/PasswordBook-android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png',
      code_link: 'https://github.com/webos21/PasswordBook',
      title: 'PasswordBook',
      core_tech: 'Android',
      description: 'PasswordBook App for Android'
    }
  ];

  contentInit(demoContent);
  waitImgsLoad();
}());

/**
 * Initialize the content
 */
function contentInit(content) {
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
	htmlStr += '\n';
    htmlStr += '<div class="grid-item">\n';
    htmlStr += '   <a class="a-img" href="' + content[i].demo_link + '">\n';
    htmlStr += '       <img src="' + content[i].img_link + '">' + '   </a>\n';
    htmlStr += '   <h3 class="demo-title">\n';
    htmlStr += '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>\n';
    htmlStr += '   </h3>\n';
    htmlStr += '   <p>Tech：' + content[i].core_tech + '</p>\n';
    htmlStr += '   <p>' + content[i].description + '\n';
    htmlStr += '       <a href="' + content[i].code_link + '">Code <i class="fa fa-code" aria-hidden="true"></i></a>\n';
    htmlStr += '   </p>\n';
    htmlStr += '</div>\n';
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * Lazy-Loading Image
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img');
  var totalImgs = imgs.length;
  var count = 0;

  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      count++;
    } else {
      imgs[i].onload = function() {
        count++;
        if (count == totalImgs) {
          initGrid();
        }
      }
    }
  }
  if (count == totalImgs) {
     initGrid();
  }
}

/**
 * Initialize the grid
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  });
}
