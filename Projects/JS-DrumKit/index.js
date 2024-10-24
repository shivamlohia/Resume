var drumButtons = document.querySelectorAll(".drum").length

for(i = 0 ; i < drumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",drumClick);
}
document.addEventListener("keydown", function(event){
    var keyBoard = event.key;
    drumSound(keyBoard);
    // drumAnimation(keyBoard);
    setTimeout(drumAnimation(key),20);
});

function drumClick() {
    var keyBoard = this.innerHTML;
    drumSound(keyBoard);
    // drumAnimation(keyBoard);
    setTimeout(drumAnimation(key),20);
}

function drumSound(keyBoard) {
    
    switch (keyBoard) {
        case "w": 
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
            // var animateDuration = audio.duration;
            
        break;
        case "a": 
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
        break;
        case "s": 
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
        break;
        case 'j': 
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
        break;
        case 'k': 
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
        break;
        case 'l' :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            audio.addEventListener('loadedmetadata', () => {
                var animateDuration = Math.floor(audio.duration * 1000);
                drumAnimation(keyBoard,animateDuration);
             });
        break;
        default : console.log();
    }
}

function drumAnimation(key,animateDuration) {
    var animate = document.querySelector("." + key);
    animate.classList.toggle("pressed");
    setTimeout(function() {
        animate.classList.toggle("pressed")
    },animateDuration);
    
}