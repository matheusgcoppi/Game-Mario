const mario = document.querySelector('.mario');

const jump = function () {
    mario.classList.add('jump');
    setTimeout(() => { 
        mario.classList.remove('jump');
    }, 500); // wait 500ms to remove class jump, because the time of jump is 500ms
}

document.addEventListener('keypress', jump);


