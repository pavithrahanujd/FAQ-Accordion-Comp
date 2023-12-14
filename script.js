function buttonminus(plusId, answerId) {
    var plus = document.getElementById(plusId);
    var answer = document.getElementById(answerId);

    if (plus.src.endsWith("icon-plus.svg")) {
        plus.src = './assets/images/icon-minus.svg';
        answer.style.display = 'block';
    
    } else {
        plus.src = './assets/images/icon-plus.svg';
        answer.style.display = 'none';
    }
}
