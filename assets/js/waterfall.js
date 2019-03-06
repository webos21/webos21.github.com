
/**
 * Initialized on loading
 */
(function() {
  /**
   * JSON Content
   */
  var demoContent = [
    {
      demo_link: 'https://codepen.io/haoyang/pen/jrvrQq',
      img_link: 'https://ooo.0o0.ooo/2016/11/24/5836d81f48cd2.png',
      code_link: 'https://codepen.io/haoyang/pen/jrvrQq',
      title: 'Fisher-Yates 洗牌算法动画',
      core_tech: 'JavaScript',
      description: 'Fisher-Yates 洗牌算法动画。算法详情见 <a href ="https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/">这里</a>。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/test/headerTransition/',
      img_link: 'https://ooo.0o0.ooo/2016/06/20/5768c1597d1fe.png',
      code_link: 'https://github.com/Gaohaoyang/test/tree/master/headerTransition',
      title: 'Header Transition 渐变动画',
      core_tech: 'jQuery BootStrap CSS3',
      description: '花费不到半小时帮师兄做了一个简单的 CSS3 动画效果，当页面滚动到指定距离时，header 区的背景色由透明变为蓝色。仿照了网站 <a href ="https://quorrajs.org/">https://quorrajs.org/</a> 的 Header 区动画效果。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_4.html',
      img_link: 'http://ww2.sinaimg.cn/large/7011d6cfjw1f3ba2krzs0j207005y0sv.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '输入框即时提示',
      core_tech: 'JavaScript',
      description: '对input监听，使用正在表达式高亮匹配，实现输入联想效果。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_3.html',
      img_link: 'http://ww2.sinaimg.cn/large/7011d6cfjw1f3ba04okoqj20eq093wh1.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '轮播图',
      core_tech: 'JavaScript',
      description: '变速运动，运动终止条件的应用。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_2.html',
      img_link: 'http://ww4.sinaimg.cn/large/7011d6cfjw1f3b9w6xpz5j20ae02pgm3.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '倒计时',
      core_tech: 'JavaScript',
      description: 'setInterval()，Date 对象的学习和使用。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/ife/task/task0002/work/Gaohaoyang/task0002_1.html',
      img_link: 'http://ww3.sinaimg.cn/large/7011d6cfjw1f3b9tmyuh2j20au0aaaar.jpg',
      code_link: 'https://github.com/Gaohaoyang/ife/tree/master/task/task0002/work/Gaohaoyang',
      title: '处理兴趣爱好列表',
      core_tech: 'JavaScript',
      description: '对JavaScript正则表达式和字符串的练习。'
    }, {
      demo_link: 'http://gaohaoyang.github.io/learning-AngularJS/2-4-UiRouterPractice',
      img_link: 'http://ww2.sinaimg.cn/large/7011d6cfjw1f3b8zumfqij20q40nh76x.jpg',
      code_link: 'https://github.com/Gaohaoyang/learning-AngularJS/tree/master/2-4-UiRouterPractice',
      title: 'AngularJS UI-router 练习',
      core_tech: 'AngularJS UI-router',
      description: 'UI-router 作为 AngularJS 中路由的扩充，实现了多级路由的效果。使得前端界面跳转更加方便。'
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
    htmlStr += '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>\n';
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
