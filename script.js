const notes = document.querySelectorAll('button')

notes.forEach(btn => {
    btn.addEventListener('click', startMusic);
 });


function startMusic(e) {
    let theNote = new Audio(`${e.target.className}.wav`)
    theNote.currentTime = 0
    theNote.play()
}