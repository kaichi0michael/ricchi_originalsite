$(document).ready(function() {
    // フェードイン効果を適用する要素を取得
    var $fadeElems = $('.fade-in');

    // スクロールイベントを設定
    $(window).on('scroll', function() {
        $fadeElems.each(function() {
            var $elem = $(this);
            // 要素がビューポートに入ったかをチェック
            if ($elem.offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $elem.addClass('visible');
            }
        });

        // スクロール量に応じてヘッダーの透過を制御
        if ($(window).scrollTop() > 50) { // 50px以上スクロールしたら
            $('.container').addClass('header-transparent');
        } else {
            $('.container').removeClass('header-transparent');
        }

        
    });

    // ページ読み込み時に一度実行
    $(window).trigger('scroll');
});

new Vivus('mask', {
    type: 'scenario-sync', // アニメーションのタイプを設定
    duration: 200, // アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
    animTimingFunction: Vivus.LINEAR, // 一定速度でアニメーション
    onReady: function (myVivus) {
        setTimeout(function() {
            var svgElements = document.querySelectorAll("#mask .cls-2, #mask .cls-1");
            svgElements.forEach(function(element) {
                element.classList.add("visible");
            });
        }, 1000); // 1秒後に表示を開始
    }
});

window.addEventListener('scroll', function() {
    const section = document.getElementById('photo');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        setTimeout(() => {
            document.querySelector('.backimg').classList.add('animate');
        }, 1000); // 2秒後にアニメーションを開始
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var tree = document.querySelector('.tree');

    function checkVisibility() {
        var rect = tree.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            tree.classList.add('visible');
        } else {
            tree.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初期チェック
});
