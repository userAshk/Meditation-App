const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline cercle');
    const video = document.querySelector('.vid-container video');
    
    //SOUNDS
    const sounds = document.querySelectorAll('.sound-picker button');
    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    //get the length of the outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outline.length;
    
}


app();