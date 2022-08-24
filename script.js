const notes = document.querySelectorAll('button')
const donote = new Audio("do.wav")
const re = new Audio("re.wav")
const mi = new Audio("mi.wav")
const fa = new Audio("fa.wav")
const sol = new Audio("sol.wav")
const la = new Audio("la.wav")
const si = new Audio("si.wav")

notes.forEach(btn => {
    btn.addEventListener('click', startMusic);
 });


function startMusic(e) {

    const clickedButton = e.target

        if(clickedButton.classList.contains('do')) {
            donote.play() 
        }
        else if(clickedButton.classList.contains('re')) {
            re.play()
        }
        else if(clickedButton.classList.contains('mi')) {
            mi.play()
        }
        else if(clickedButton.classList.contains('fa')) {
            fa.play()
        }
        else if(clickedButton.classList.contains('sol')) {
            sol.play()
        }
        else if(clickedButton.classList.contains('la')) {
            la.play()
        }
        else if(clickedButton.classList.contains('si')) {
            si.play()
        }
 }
