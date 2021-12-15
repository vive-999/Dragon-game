score = 0
cross = true

audiostart= new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')

setInterval(() => {
     audiostart.play()   
}, 1000);


document.onkeydown = function (e) {
        if (e.code == "ArrowUp") {
                dino = document.querySelector('.dino');
                dino.classList.add('animateDino')
                setTimeout(() => {
                        dino.classList.remove('animateDino')

                }, 700);
        }

        if (e.code == "ArrowRight") {
                dino = document.querySelector('.dino');
                dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
                dino.style.left = dinoX + 120 + "px";
        }
        if (e.code == "ArrowLeft") {
                dino = document.querySelector('.dino');
                dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
                dino.style.left = dinoX - 120 + "px";
        }
}


setInterval(() => {
        dino = document.querySelector('.dino')
        gameOver = document.querySelector('.gameOver')
        obstacle = document.querySelector('.obstacle')

        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

        offsetX = Math.abs(dx - ox)
        offsetY = Math.abs(dy - oy)

        if (offsetX < 93 && offsetY < 52) {
                gameOver.innerHTML = "GAME OVER -- Reload to start Again!"
                obstacle.classList.remove('obstacleAni');
                audiogo.play()
                setTimeout(() => {
                        audiogo.pause();
                        audiostart.pause();
                }, 1000);
        }
        else if (offsetX < 145 && cross) {
                score += 1;
                updateScore(score);
                cross = false;
                setInterval(() => {
                        cross = true;
                }, 1000);
                setTimeout(() => {
                        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
                        newDur = aniDur - 0.1
                        obstacle.style.animationDuration = newDur + "s";
                }, 500);

        }

}, 10);

function updateScore(score) {
        scoreCont.innerHTML = "Your Score: " + score;
}