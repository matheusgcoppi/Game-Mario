const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = function () {
    mario.classList.add('jump');
    
    setTimeout(() => { 
        mario.classList.remove('jump');
    }, 500); // wait 500ms to remove class jump, because the time of jump is 500ms
}
    const loop = setInterval(() => {

        const pipePositionLeft = pipe.offsetLeft;
        const marioPositionBottom = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
        // Here I put Number to become a Number instead of a string, without replace it's not possible
        // And window.. style(mario) is to get a bottom of a style
    
    
        
        if(pipePositionLeft <= 80 && pipePositionLeft > 0 && marioPositionBottom < 55) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePositionLeft}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPositionBottom}px`;

            mario.src = './assets/game-over.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '60px';

            clearInterval(loop); //to stop the loop
        }

    }, 10);
    


document.addEventListener('keypress', jump);


