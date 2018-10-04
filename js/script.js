// 總分預設為 0，頁數預設是 0
var total = 0;
var current = 0;

$('.button-answer').on('click', function(){
	score(this);
});

function score(element) {
	var $this = $(element);
	var $total = $('.total');
	var $hint = $('.hint');
	var $img = $('.score-img');
	var $restart = $('.btn-restart');
	var $gift = $('.btn-wrapper');

	// 當答案正確時，幫總分 +1 分
	if ($this.hasClass('success')) {
		total += 1;
	}

	// 當分數低於 4 分
	if (total <= 4) {
		$total.html(total);
        $hint.html('Hugo不愛Sara了...QQ');
		$img.attr('src', 'img/hugo_score1.png');

	// 當分數介於 5~8 分
	} else if (total >= 5 && total <= 8) {
		$total.html(total);
        $hint.html('Hugo好像有點在意Sara...?');
        $img.attr('src', 'img/hugo_score2.png');

	// 當分數介於 9~12 分
	} else if (total >= 9 && total <= 12) {
		$total.html(total);
        $hint.html('Hugo非常喜歡Sara呢！');
        $img.attr('src', 'img/hugo_score3.png');

	// 當分數為滿分時
	} else {
		$total.html(total);
        $hint.html('恭喜Hugo獲得神秘小禮物！');
        $img.attr('src', 'img/hugo_score4.png');
        $restart.hide();
        $gift.show();
	}

	// 目前頁數
	current += 1;

	// 呼叫換頁函式
	pagenation(current);
}

function pagenation(element) {

	// 如果目前所在頁數不是最後一題
	if (element < 13) {
		$('#q' + element).hide();
		$('#q' + (element + 1)).fadeIn('slow');

	// 如果現在是最後一題，顯示總分
	} else {
		$('#q' + element).hide();
		$('#score').fadeIn('slow');
	}
}
