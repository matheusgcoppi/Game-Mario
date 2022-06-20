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
        
        if(pipePositionLeft <= 120) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePositionLeft}px`;
            
        }

    }, 10);
    


document.addEventListener('keypress', jump);


