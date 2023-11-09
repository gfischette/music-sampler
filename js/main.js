let covers = document.querySelectorAll('.album');
let songs = document.querySelectorAll('.song');


let feather = document.querySelector('#feather');
let thumbs = document.querySelector('#thumbs');
let girl = document.querySelector('#girl');
let look = document.querySelector('#look');

songs.forEach(function(el) {
    el.style.display = 'none';
});

covers.forEach(function(el) {
    el.onclick = (e) => {
        let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
            switch (e.target.getAttribute('id')) {
                case 'emails':
                    feather.style.display = 'block';
                    thumbs.style.display = 'none';
                    girl.style.display = 'none';
                    look.style.display = 'none';
                    break;
                case 'eyes':
                    girl.style.display = 'block';
                    thumbs.style.display = 'none';
                    feather.style.display = 'none';
                    look.style.display = 'none';
                    break;
                case 'evolution':
                    thumbs.style.display = 'block';
                    feather.style.display = 'none';
                    girl.style.display = 'none';
                    look.style.display = 'none';
                    break;
                case 'singular':
                    look.style.display = 'block';
                    thumbs.style.display = 'none';
                    girl.style.display = 'none';
                    feather.style.display = 'none';
                    break;
            }
    }
});