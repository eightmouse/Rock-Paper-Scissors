//This is THE game function
const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //This is gonna start the game
    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        //This adds the fadeIn & fadeOut effect
        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Plays the match
    const playMatch = ()=> {
        const options = document.querySelectorAll('.options buttons');
        
    }
    //Call the inner functions
    startGame();
};

//Starts the game
game();