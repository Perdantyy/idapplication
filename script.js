const levels = [
    { answer: 'Moby', nextPoster: 'Rams.png', nextAudio: "Sound2.mp3" },
    { answer: 'Rammstein', nextPoster: 'PinkF.png', nextAudio: "Sound3.mp3" },
    { answer: 'Pink Floyd', nextPoster: 'Blon.jpg', nextAudio: "Sound4.mp3" },
    { answer: 'Blondie', nextPoster: 'JD.jpg', nextAudio:"AA.mp3" },
    { answer: 'Joy Division', nextPoster: 'DM.jpg', nextAudio: "BB.mp3" }, 
    { answer: 'Depeche Mode', nextPoster: 'Muse.jpg', nextAudio: "AAA.mp3" },
    { answer: 'Muse', nextPoster: 'Smashing.jpg', nextAudio: "19.mp3" },
    { answer: 'Smashing Pumpkins', nextPoster: 'RXT.jpg', nextAudio: "LI.mp3"},
    { answer: 'Roxette'}
];


function check(event) {
    event.preventDefault();
    let score = document.getElementById('score');
    let level = document.getElementById('level'); 
    const inputValue = event.target.userAnswer.value;
    const video = document.getElementById('videoPlayer');
    const currentLevel = Number(level.value) - 1;

    if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
        alert("Answer correct");
        score.value = Number(score.value) + 1;
        level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].nextAudio) {
            video.poster = levels[currentLevel].nextPoster;
            video.children[0].src = levels[currentLevel].nextAudio;
            video.load();
        }
    } else {
        score.value = Number(score.value) - 1;
        alert("Answer incorrect or wrong level!");
    }

    return false;
}