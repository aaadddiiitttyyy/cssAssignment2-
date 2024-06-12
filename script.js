document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('#lyrics span');
    let index = 0;

    function highlightWord() {
        if (index > 0) {
            words[index - 1].classList.remove('highlight');
        }
        if (index < words.length) {
            words[index].classList.add('highlight');
            index++;
            setTimeout(highlightWord, 500); // Adjust the delay as needed
        }
    }

    highlightWord();
});
