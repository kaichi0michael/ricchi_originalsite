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
