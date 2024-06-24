const texts = ["I'm Publisher", "I'm Frontend", "also!!", "I know how to design a little bit :)"];
let index = 0;
const textElement = document.getElementById('text');

function changeText() {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
    setTimeout(hideText, 2000); // 3초 후 텍스트 숨기기
}

function hideText() {
    textElement.classList.add('hide-animation'); // 애니메이션 클래스 추가
    setTimeout(() => {
        textElement.classList.remove('hide-animation');
        changeText(); // 애니메이션이 끝나면 다음 텍스트 표시
    }, 1000); // 1초 후에 다음 텍스트로 변경
}

changeText();