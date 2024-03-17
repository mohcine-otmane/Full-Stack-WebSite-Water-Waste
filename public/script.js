const heroes = document.querySelectorAll('.hero');
let currentIndex = 0;

function showHero(index) {
    heroes.forEach((hero, i) => {
        const video = hero.querySelector('.back-video');
        if (i === index) {
            video.play(); // Play the video
            hero.style.visibility = 'visible';
            hero.style.opacity = '1';
        } else {
            video.pause(); // Pause the video
            hero.style.visibility = 'hidden';
            hero.style.opacity = '0';
        }
    });
}

function nextHero() {
    currentIndex = (currentIndex + 1) % heroes.length;
    showHero(currentIndex);
}

// Initially show the first hero
showHero(currentIndex);

// Automatically switch to the next hero every few seconds
setInterval(nextHero, 5000);


// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
    $clamp(box, {clamp: 6});
  });
  

