
/**
 * Side-bar for PC
 */
(function() {
    if (window.innerWidth > 770) {
        var sidebarWrap = document.querySelector('.right>.wrap');

        sidebarWrap.style.width = sidebarWrap.offsetWidth + "px";
        window.onscroll = function() {
            var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

            var htmlHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
                // console.log(htmlHeight);
            var scrollBottom = htmlHeight - window.innerHeight - scrollTop;

            if (scrollTop < 53) {
                sidebarWrap.classList.remove('fixed');
                sidebarWrap.classList.remove('scroll-bottom');
            } else if (scrollBottom >= (190 - 38)) {
                sidebarWrap.classList.remove('scroll-bottom');
                sidebarWrap.classList.add('fixed');
            } else if (isMaxHeight()) {
                sidebarWrap.classList.remove('fixed');
                sidebarWrap.classList.add('scroll-bottom');
            }
        }
        setContentMaxHeightInPC();
    }
    moveTOC();
}());

/**
 * Set the Max-Height for PC
 */
function setContentMaxHeightInPC() {
    var windowHeight = window.innerHeight;
    var contentUl = document.querySelector('.content-ul');
    var contentMaxHeight = windowHeight - 77 - 60;
    contentUl.style.maxHeight = contentMaxHeight + 'px';
}

/**
 * Check the Max-Height
 */
function isMaxHeight() {
    var windowHeight = window.innerHeight;
    var contentUl = document.querySelector('.content-ul');
    var contentMaxHeight = windowHeight - 77 - 60;
    var contentHeight = contentUl.offsetHeight;
    return contentMaxHeight === contentHeight;
}


//-------------mobile--------------

/**
 * Side-bar for Mobile
 */
(function() {
    if (window.innerWidth <= 770) {
        var anchorBtn = document.querySelector('.anchor');
        var rightDiv = document.querySelector('.right');

        anchorBtn.onclick = function(e) {
            e.stopPropagation();
            rightDiv.classList.add('right-show');
            anchorBtn.classList.add('anchor-hide');
        }

        document.querySelector('body').addEventListener('click', function() {
            rightDiv.classList.remove('right-show');
            anchorBtn.classList.remove('anchor-hide');
        });

        ancherPostion(anchorBtn, rightDiv);
        setContentMaxHeight();
    }
}());

/**
 * Calculate the Position
 */
function ancherPostion(anchorBtn, rightDiv) {
    window.addEventListener('scroll', function() {
        var top = anchorBtn.getBoundingClientRect().top;
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollTop > 50) {
            anchorBtn.style.top = '20px';
            rightDiv.style.top = '20px';
        } else {
            anchorBtn.style.top = '76px';
            rightDiv.style.top = '76px';
        }
    });
}

/**
 * Set the Max-Height for Mobile
 */
function setContentMaxHeight() {
    var windowHeight = window.innerHeight;
    var contentUl = document.querySelector('.content-ul');
    var contentMaxHeight = windowHeight - 180;
    contentUl.style.maxHeight = contentMaxHeight + 'px';
}


//-------------post Content----------------------

/**
 * Table of Contents
 */
function moveTOC() {
    if (document.querySelector('#markdown-toc') !== null) {
        var TOCString = document.querySelector('#markdown-toc').innerHTML;
        var contentUl = document.querySelector('#content-side');
        contentUl.insertAdjacentHTML('afterbegin', TOCString);

        // if (!isAndroidWechatBrowser()) {
            var aTags = document.querySelectorAll('#content-side a')
            for (var i = 0; i < aTags.length; i++) {
                // if (!aTags[i].classList.contains('scroll')) {
                //     aTags[i].classList.add('scroll');
                // }
                if (!aTags[i].hasAttribute('data-scroll')) {
                  aTags[i].setAttribute('data-scroll','');
                }
            }
        // }
    }
}

/**
 * Check the WeChatBrowser
 */
function isAndroidWechatBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(ua) && /android/.test(ua2);
}
