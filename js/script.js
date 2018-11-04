$('#start-btn').click(() => {
    var items = $('td');
    var intervalId = setInterval(() => {
        var selected = items[Math.floor(Math.random() * items.length)];
        $('td.active').removeClass('active');
        $(selected).addClass('active');
        var timer = parseInt($('#timer').text());
        timer = timer - 1;
        $('#timer').text(timer);
        if (timer === 0) {
            var score = parseInt($('#score').text());
            var highScore = parseInt(localStorage.getItem('high-score'));
            highScore !== undefined && highScore !== null ? $('#high-score').text(score) : ('#high-score').text('0');
            window.clearInterval(intervalId);
            alert('GAME OVER');
            $('#score').text('0');
            $('#timer').text('120');
            $('td.active').removeClass('active');
            if (highScore !== undefined && highScore !== null && score > parseInt(highScore)) {
                highScore = score;
                $('#high-score').text(highScore);
                localStorage.setItem('high-score', highScore);
            }
        }
    }, 1000);

});
$('table').click((e) => {
    var score = parseInt($('#score').text());
    if ($(e.target).hasClass("active")) {
        score = score + 1;
    }
    else {
        if (score <= 0) {
            score = 0
        }
        else {
            score = score - 1;
        }
    }
    $('#score').text(score);
});