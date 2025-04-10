//Rock, paper, scissors
//r beats s
//s beats p
//p beats r
//etc.

//images for winner
let winnerImage='';
let tie='https://dataforceresearch.com/wp-content/uploads/2021/12/Untitled-design-4.png'
let rock='https://th.bing.com/th/id/OIP.RA1cSBr9-58E1O26htb1tQHaE7?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7'
let eRock='enemyRock.png'
let paper='paper.png';
let ePaper='enemyPaper.png';
let scissors='https://th.bing.com/th/id/OIP.t1zCh-WvfEthOga5pTcSQgHaEE?w=323&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
let eScissors='eScissors.png';
let water='water.png';
let eWater='eWater.png';
let fire='fire.png';
let eFire='eFire.png';
let air='air.png';
let eAir='eAir.png';
let sponge='sponge.png';
let eSponge='eSponge.png';
let human='human.jpg'
let eHuman='eHuman.jpg';
let gun='gun.jpg';
let eGun='eGun.jpg';
let tree='tree.jpg';
let eTree='eTree.jpg';
let lightning='lightning.jpg';
let eLightning='eLightning.jpg';
let wolf='wolf.png';
let eWolf='eWolf.png';
let snake='snake.png';
let eSnake='eSnake.png';

//variable to see how many times the player has failed, if it exceeds 5, they must go back to the previous level
let timesLost=0;

///WHAT TO ADD: SOUND EFFECTS AND SCORE

//function playHand() 
function playHand(){
    let playerScore='';
    let handOptions=["rock", "paper", "scissors"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    console.log("Enemy choice: "+randomPick);

    //get user's input
    let userPick=document.getElementById('select').value;
    console.log("User choice: "+ userPick);

    //compare user and enemy pick

        //if user and enemy choose the same choice
        if(userPick==randomPick){
        console.log("same choice - tied"); //works
        playerScore='You tied'
        winnerImage=tie;
        }

        //if user chooses rock:
        else if(userPick=='rock' && randomPick=='scissors'){
            console.log("player wins - rock beats scissors");
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='paper'){
            console.log('enemy wins - paper beats rock');
            playerScore = 'You lose'
            winnerImage=ePaper;
        }

        //if user chooses paper:
        else if(userPick=='paper' && randomPick=='rock'){
            console.log('player wins - paper beats rock')
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat paper')
            playerScore = 'You lose'
            winnerImage=scissors;
        }

        //if user chooses scissors:
        else if(userPick=='scissors' && randomPick=='paper'){
            console.log('player wins - scissors beat paper')
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick='scissors' && randomPick=='rock'){
            console.log('enemy wins - rock beats scissors')
            playerScore = 'You lose'
            winnerImage=eRock;
        }

    //show enemy's choice
    let enemyPick=document.getElementById('enemySelection');
    enemyPick.innerHTML=`<strong>${randomPick}</strong>`;

    //show who won & create play again OR next level button
    let body=document.getElementById('body');
    body.style.marginBottom='250px';

    let result=document.getElementById('result');
    result.style.visibility='visible';

    //next level
    if(playerScore=='You win'){
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play" onclick="nextLevel()">Play Next Level</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    //play again
    else{
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play" onclick="playAgain()">Play Again</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    
}

//function playHand2() for Next Level ////////////////////////////////////////////////////////////////////////////////////////////
function playHand2(){
    let playerScore='';
    let handOptions=["rock", "paper", "scissors", "water", "fire"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    console.log("Enemy choice: "+randomPick);

    //get user's input
    let userPick=document.getElementById('select').value;
    console.log("User choice: "+ userPick);

    //compare user and enemy pick

        //if user and enemy choose the same choice
        if(userPick==randomPick){
        playerScore='You tied'
        winnerImage=tie;
        }

        //if user chooses rock: WORKS
        else if(userPick=='rock' && randomPick=='scissors'){
            console.log("player wins - rock beats scissors");
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='paper'){
            console.log('enemy wins - paper beats rock');
            playerScore = 'You lose'
            winnerImage=ePaper;
            timesLost+=1;
        }
        else if(userPick=='rock' && randomPick=='water'){
            console.log('player wins - rock beats water');
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='fire'){
            console.log('enemy wins - fire beats rock');
            playerScore = 'You lose'
            winnerImage=fire;
            timesLost+=1;
        }

        //if user chooses paper: WORKS
        else if(userPick=='paper' && randomPick=='rock'){
            console.log('player wins - paper beats rock')
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat paper')
            playerScore = 'You lose'
            winnerImage=scissors;
            timesLost+=1;
        }
        else if(userPick=='paper' && randomPick=='water'){
            console.log('player wins - paper beats water');
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='fire'){
            console.log('enemy wins - fire beats paper');
            playerScore = 'You lose'
            winnerImage=eFire;
            timesLost+=1;
        }

        //if user chooses scissors: WORKS
        else if(userPick=='scissors' && randomPick=='paper'){
            console.log('player wins - scissors beat paper')
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='rock'){
            console.log('enemy wins - rock beats scissors')
            playerScore = 'You lose'
            winnerImage=eRock;
            timesLost+=1;
        }
        else if(userPick=='scissors' && randomPick=='water'){
            console.log('player wins - scissors beats water');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='fire'){
            console.log('enemy wins - fire beats scissors');
            playerScore = 'You lose'
            winnerImage=eFire;
            timesLost+=1;
        }

        //if user chooses water: WORKS
        else if(userPick=='water' && randomPick=='fire'){
            console.log('player wins - water beats fire')
            playerScore = 'You win'
            winnerImage=water;
            
        }
        else if(userPick=='water' && randomPick=='rock'){
            console.log('enemy wins - rock beats water')
            playerScore = 'You lose'
            winnerImage=eRock;
            timesLost+=1;
            
        }
        else if(userPick=='water' && randomPick=='paper'){
            console.log('enemy wins - paper beats water')
            playerScore = 'You lose'
            winnerImage=ePaper;
            timesLost+=1;
            
        }
        else if(userPick=='water' && randomPick=='scissors'){
            console.log('enemy wins - scissors beats water')
            playerScore = 'You lose'
            winnerImage=eScissors;
            timesLost+=1;
            
        }

        //if user chooses fire: WORKS
        else if(userPick=='fire' && randomPick=='rock'){
            console.log('player wins - fire beats rock')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='paper'){
            console.log('player wins - fire beats paper')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='scissors'){
            console.log('player wins - fire beats scissors')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='water'){
            console.log('player loses - water beats fire')
            playerScore = 'You lose'
            winnerImage=eWater;
            timesLost+=1;
        }
        else{
            console.log('something went wrong')
        }

    //show enemy's choice
    let enemyPick=document.getElementById('enemySelection');
    enemyPick.innerHTML=`<strong>${randomPick}</strong>`;

    //show who won & create play again OR next level button
    let body=document.getElementById('body');
    body.style.marginBottom='200px';

    let result=document.getElementById('result');
    result.style.visibility='visible';

    //next level
    if(playerScore=='You win'){
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play2" onclick="nextLevel3()">Play Next Level</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    //play again
    else{
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play2" onclick="playAgain2()">Play Again</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    
}

//function playHand3() for 3rd Level ////////////////////////////////////////////////////////////////////////////////////////////
function playHand3(){
    let playerScore='';
    let handOptions=["rock", "paper", "scissors", "water", "fire", "air", "sponge"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    console.log("Enemy choice: "+randomPick);

    //get user's input
    let userPick=document.getElementById('select').value;
    console.log("User choice: "+ userPick);

    //compare user and enemy pick

        //if user and enemy choose the same choice
        if(userPick==randomPick){
        playerScore='You tied'
        winnerImage=tie;
        }

        //if user chooses rock:
        else if(userPick=='rock' && randomPick=='scissors'){
            console.log("player wins - rock beats scissors");
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='paper'){
            console.log('enemy wins - paper beats rock');
            playerScore = 'You lose'
            winnerImage=ePaper;
        }
        else if(userPick=='rock' && randomPick=='water'){
            console.log('player wins - rock beats water');
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='fire'){
            console.log('enemy wins - fire beats rock');
            playerScore = 'You lose'
            winnerImage=fire;
        }
        else if(userPick=='rock' && randomPick=='air'){
            console.log('enemy wins - air beats rock');
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='rock' && randomPick=='sponge'){
            console.log('player wins - rock beats sponge');
            playerScore = 'You win'
            winnerImage=rock;
        }

        //if user chooses paper: 
        else if(userPick=='paper' && randomPick=='rock'){
            console.log('player wins - paper beats rock')
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat paper')
            playerScore = 'You lose'
            winnerImage=eScissors;
        }
        else if(userPick=='paper' && randomPick=='water'){
            console.log('player wins - paper beats water');
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='fire'){
            console.log('enemy wins - fire beats paper');
            playerScore = 'You lose'
            winnerImage=eFire;
        }
        else if(userPick=='paper' && randomPick=='air'){
            console.log('player wins - paper beats air');
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='sponge'){
            console.log('enemy wins - sponge beats paper');
            playerScore = 'You lose'
            winnerImage=eSponge;
        }

        //if user chooses scissors: 
        else if(userPick=='scissors' && randomPick=='paper'){
            console.log('player wins - scissors beat paper')
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='rock'){
            console.log('enemy wins - rock beats scissors')
            playerScore = 'You lose'
            winnerImage=eRock;
        }
        else if(userPick=='scissors' && randomPick=='water'){
            console.log('player wins - scissors beats water');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='fire'){
            console.log('enemy wins - fire beats scissors');
            playerScore = 'You lose'
            winnerImage=eFire;
        }
        else if(userPick=='scissors' && randomPick=='air'){
            console.log('player wins - scissors beats air');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='sponge'){
            console.log('player wins - scissors beats sponge');
            playerScore = 'You win'
            winnerImage=scissors;
        }

        //if user chooses water:
        else if(userPick=='water' && randomPick=='fire'){
            console.log('player wins - water beats fire')
            playerScore = 'You win'
            winnerImage=water;
            
        }
        else if(userPick=='water' && randomPick=='rock'){
            console.log('enemy wins - rock beats water')
            playerScore = 'You lose'
            winnerImage=eRock;
            
        }
        else if(userPick=='water' && randomPick=='paper'){
            console.log('enemy wins - paper beats water')
            playerScore = 'You lose'
            winnerImage=ePaper;
            
        }
        else if(userPick=='water' && randomPick=='scissors'){
            console.log('enemy wins - scissors beats water')
            playerScore = 'You lose'
            winnerImage=eScissors;
            
        }
        else if(userPick=='water' && randomPick=='air'){
            console.log('enemy wins - air beats water');
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='water' && randomPick=='sponge'){
            console.log('enemy wins - sponge beats water');
            playerScore = 'You lose'
            winnerImage=eSponge;
        }

        //if user chooses fire:
        else if(userPick=='fire' && randomPick=='rock'){
            console.log('player wins - fire beats rock')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='paper'){
            console.log('player wins - fire beats paper')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='scissors'){
            console.log('player wins - fire beats scissors')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='water'){
            console.log('player loses - water beats fire')
            playerScore = 'You lose'
            winnerImage=eWater;
        }
        else if(userPick=='fire' && randomPick=='air'){
            console.log('enemy wins - air beats fires');
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='fire' && randomPick=='sponge'){
            console.log('player wins - fire beats sponge');
            playerScore = 'You win'
            winnerImage=fire;
        }

        //if user chooses air:
        else if(userPick=='air' && randomPick=='rock'){
            console.log('player wins - air beats rock');
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='paper'){
            console.log('enemy wins - paper beats air');
            playerScore='You lose';
            winnerImage=ePaper;
        }
        else if(userPick=='air' && randomPick=='scissors'){
            console.log('enemy wins  - scissors beat air');
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='air' && randomPick=='water'){
            console.log('player wins - air beats water');
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='fire'){
            console.log('player wins - air beats fire');
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='sponge'){
            console.log('enemy wins  - sponge beats air');
            playerScore='You lose';
            winnerImage=eSponge;
        }

        //if user chooses sponge:
        else if(userPick=='sponge' && randomPick=='rock'){
            console.log('enemy wins - rock beats sponge');
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='sponge' && randomPick=='paper'){
            console.log('player wins - sponge beats paper');
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat sponge');
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='sponge' && randomPick=='water'){
            console.log('player wins - sponge beats water');
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='fire'){
            console.log('enemy wins  - fire beats sponge');
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='sponge' && randomPick=='air'){
            console.log('player wins - sponge beats air');
            playerScore='You win';
            winnerImage=sponge;
        }

        else{
            console.log('something went wrong')
        }

    //show enemy's choice
    let enemyPick=document.getElementById('enemySelection');
    enemyPick.innerHTML=`<strong>${randomPick}</strong>`;

    //show who won & create play again OR next level button
    let body=document.getElementById('body');
    body.style.marginBottom='200px';

    let result=document.getElementById('result');
    result.style.visibility='visible';

    //next level
    if(playerScore=='You win'){
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play3" onclick="nextLevel4()">Play Next Level</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    //play again
    else{
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play3" onclick="playAgain3()">Play Again</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    } 
}

//function playHand4() for 4th Level ////////////////////////////////////////////////////////////////////////////////////////////
function playHand4(){
    let playerScore='';
    let handOptions=["rock", "paper", "scissors", "water", "fire", "air", "sponge", "human", "gun"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    console.log("Enemy choice: "+randomPick);

    //get user's input
    let userPick=document.getElementById('select').value;
    console.log("User choice: "+ userPick);

    //compare user and enemy pick

        //if user and enemy choose the same choice
        if(userPick==randomPick){
        playerScore='You tied'
        winnerImage=tie;
        }

        //if user chooses rock:
        else if(userPick=='rock' && randomPick=='scissors'){
            console.log("player wins - rock beats scissors");
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='paper'){
            console.log('enemy wins - paper beats rock');
            playerScore = 'You lose'
            winnerImage=ePaper;
        }
        else if(userPick=='rock' && randomPick=='water'){
            console.log('player wins - rock beats water');
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='fire'){
            console.log('enemy wins - fire beats rock');
            playerScore = 'You lose'
            winnerImage=fire;
        }
        else if(userPick=='rock' && randomPick=='air'){
            console.log('enemy wins - air beats rock');
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='rock' && randomPick=='sponge'){
            console.log('player wins - rock beats sponge');
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='human'){
            console.log('player wins - rock beats human');
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='gun'){
            console.log('player wins - rock beats gun');
            playerScore = 'You win'
            winnerImage=rock;
        }


        //if user chooses paper: 
        else if(userPick=='paper' && randomPick=='rock'){
            console.log('player wins - paper beats rock')
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat paper')
            playerScore = 'You lose'
            winnerImage=eScissors;
        }
        else if(userPick=='paper' && randomPick=='water'){
            console.log('player wins - paper beats water');
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='fire'){
            console.log('enemy wins - fire beats paper');
            playerScore = 'You lose'
            winnerImage=eFire;
        }
        else if(userPick=='paper' && randomPick=='air'){
            console.log('player wins - paper beats air');
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='sponge'){
            console.log('enemy wins - sponge beats paper');
            playerScore = 'You lose'
            winnerImage=eSponge;
        }
        else if(userPick=='paper' && randomPick=='human'){
            console.log('enemy wins - human beats paper');
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='paper' && randomPick=='gun'){
            console.log('enemy wins - gun beats paper');
            playerScore = 'You lose'
            winnerImage=eGun;
        }

        //if user chooses scissors: 
        else if(userPick=='scissors' && randomPick=='paper'){
            console.log('player wins - scissors beat paper')
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='rock'){
            console.log('enemy wins - rock beats scissors')
            playerScore = 'You lose'
            winnerImage=eRock;
        }
        else if(userPick=='scissors' && randomPick=='water'){
            console.log('player wins - scissors beats water');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='fire'){
            console.log('enemy wins - fire beats scissors');
            playerScore = 'You lose'
            winnerImage=eFire;
        }
        else if(userPick=='scissors' && randomPick=='air'){
            console.log('player wins - scissors beats air');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='sponge'){
            console.log('player wins - scissors beats sponge');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='human'){
            console.log('player wins - scissors beat human');
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='gun'){
            console.log('enemy wins - gun beats scissors');
            playerScore = 'You lose'
            winnerImage=eGun;
        }

        //if user chooses water:
        else if(userPick=='water' && randomPick=='fire'){
            console.log('player wins - water beats fire')
            playerScore = 'You win'
            winnerImage=water;
            
        }
        else if(userPick=='water' && randomPick=='rock'){
            console.log('enemy wins - rock beats water')
            playerScore = 'You lose'
            winnerImage=eRock;
            
        }
        else if(userPick=='water' && randomPick=='paper'){
            console.log('enemy wins - paper beats water')
            playerScore = 'You lose'
            winnerImage=ePaper;
            
        }
        else if(userPick=='water' && randomPick=='scissors'){
            console.log('enemy wins - scissors beats water')
            playerScore = 'You lose'
            winnerImage=eScissors;
            
        }
        else if(userPick=='water' && randomPick=='air'){
            console.log('enemy wins - air beats water');
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='water' && randomPick=='sponge'){
            console.log('enemy wins - sponge beats water');
            playerScore = 'You lose'
            winnerImage=eSponge;
        }
        else if(userPick=='water' && randomPick=='human'){
            console.log('enemy wins - human beats water');
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='water' && randomPick=='gun'){
            console.log('player wins - water beats gun');
            playerScore = 'You win'
            winnerImage=water;
        }

        //if user chooses fire:
        else if(userPick=='fire' && randomPick=='rock'){
            console.log('player wins - fire beats rock')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='paper'){
            console.log('player wins - fire beats paper')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='scissors'){
            console.log('player wins - fire beats scissors')
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='water'){
            console.log('player loses - water beats fire')
            playerScore = 'You lose'
            winnerImage=eWater;
        }
        else if(userPick=='fire' && randomPick=='air'){
            console.log('enemy wins - air beats fires');
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='fire' && randomPick=='sponge'){
            console.log('player wins - fire beats sponge');
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='human'){
            console.log('player wins - fire beats human');
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='gun'){
            console.log('enemy wins - gun beats fire');
            playerScore = 'You lose'
            winnerImage=eGun;
        }

        //if user chooses air:
        else if(userPick=='air' && randomPick=='rock'){
            console.log('player wins - air beats rock');
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='paper'){
            console.log('enemy wins - paper beats air');
            playerScore='You lose';
            winnerImage=ePaper;
        }
        else if(userPick=='air' && randomPick=='scissors'){
            console.log('enemy wins  - scissors beat air');
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='air' && randomPick=='water'){
            console.log('player wins - air beats water');
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='fire'){
            console.log('player wins - air beats fire');
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='sponge'){
            console.log('enemy wins  - sponge beats air');
            playerScore='You lose';
            winnerImage=eSponge;
        }
        else if(userPick=='air' && randomPick=='human'){
            console.log('enemy wins - human beats air');
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='air' && randomPick=='gun'){
            console.log('player wins - air beats gun');
            playerScore = 'You win'
            winnerImage=air;
        }

        //if user chooses sponge:
        else if(userPick=='sponge' && randomPick=='rock'){
            console.log('enemy wins - rock beats sponge');
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='sponge' && randomPick=='paper'){
            console.log('player wins - sponge beats paper');
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat sponge');
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='sponge' && randomPick=='water'){
            console.log('player wins - sponge beats water');
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='fire'){
            console.log('enemy wins  - fire beats sponge');
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='sponge' && randomPick=='air'){
            console.log('player wins - sponge beats air');
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='human'){
            console.log('enemy wins - human beats sponge');
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='sponge' && randomPick=='gun'){
            console.log('player wins - sponge beats gun');
            playerScore = 'You win'
            winnerImage=sponge;
        }

        //if user chooses human:
        else if(userPick=='human' && randomPick=='rock'){
            console.log('enemy wins - rock beats human');
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='human' && randomPick=='paper'){
            console.log('player wins - human beats paper');
            playerScore='You win';
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='scissors'){
            console.log('enemy wins - scissors beat human');
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='human' && randomPick=='water'){
            console.log('player wins - human beats water');
            playerScore='You win';
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='fire'){
            console.log('enemy wins  - fire beats human');
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='human' && randomPick=='air'){
            console.log('player wins - human beats air');
            playerScore='You win';
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='sponge'){
            console.log('player wins - human beats sponge');
            playerScore = 'You win'
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='gun'){
            console.log('enemy wins - gun beats human');
            playerScore = 'You lose'
            winnerImage=eGun;
        }

        //if user chooses gun:
        else if(userPick=='gun' && randomPick=='rock'){
            console.log('enemy wins - rock beats gun');
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='gun' && randomPick=='paper'){
            console.log('player wins - gun beats paper');
            playerScore='You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='scissors'){
            console.log('enemy wins - gun beats scissors');
            playerScore='You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='water'){
            console.log('enemy wins - water beats gun');
            playerScore='You lose';
            winnerImage=eWater;
        }
        else if(userPick=='gun' && randomPick=='fire'){
            console.log('player wins - gun beats fire');
            playerScore='You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='air'){
            console.log('enemy wins - air beats gun');
            playerScore='You lose';
            winnerImage=eAir;
        }
        else if(userPick=='gun' && randomPick=='sponge'){
            console.log('enemy wins - sponge beats gun');
            playerScore = 'You lose'
            winnerImage=eSponge;
        }
        else if(userPick=='gun' && randomPick=='human'){
            console.log('player wins - gun beats human');
            playerScore = 'You win'
            winnerImage=gun;
        }

        else{
            console.log('something went wrong')
        }

    //show enemy's choice
    let enemyPick=document.getElementById('enemySelection');
    enemyPick.innerHTML=`<strong>${randomPick}</strong>`;

    //show who won & create play again OR next level button
    let body=document.getElementById('body');
    body.style.marginBottom='200px';

    let result=document.getElementById('result');
    result.style.visibility='visible';

    //next level
    if(playerScore=='You win'){
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play4" onclick="nextLevel5()">Play Next Level</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    //play again
    else{
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play4" onclick="playAgain4()">Play Again</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    
}

//function playHand5() for LAST Level ////////////////////////////////////////////////////////////////////////////////////////////
function playHand5(){
    let playerScore='';
    let handOptions=["rock", "paper", "scissors", "water", "fire", "air", "sponge", "human", "gun", "tree", "lightning", "wolf", "snake"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    console.log("Enemy choice: "+randomPick);

    //get user's input
    let userPick=document.getElementById('select').value;
    console.log("User choice: "+ userPick);

    //compare user and enemy pick

        //if user and enemy choose the same choice
        if(userPick==randomPick){
        playerScore='You tied'
        winnerImage=tie;
        }

        //if user chooses rock:
        else if(userPick=='rock' && randomPick=='scissors'){
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='paper'){
            playerScore = 'You lose'
            winnerImage=ePaper;
        }
        else if(userPick=='rock' && randomPick=='water'){
            playerScore = 'You lose'
            winnerImage=eWater;
        }
        else if(userPick=='rock' && randomPick=='fire'){
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='air'){
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='rock' && randomPick=='sponge'){
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='human'){
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='gun'){
            playerScore = 'You lose'
            winnerImage=eGun;
        }
        else if(userPick=='rock' && randomPick=='tree'){
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='lightning'){
            playerScore = 'You lose'
            winnerImage=eLightning;
        }
        else if(userPick=='rock' && randomPick=='wolf'){
            playerScore = 'You win'
            winnerImage=rock;
        }
        else if(userPick=='rock' && randomPick=='snake'){
            playerScore = 'You win'
            winnerImage=rock;
        }

        //if user chooses paper: 
        else if(userPick=='paper' && randomPick=='rock'){
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='scissors'){
            playerScore = 'You lose'
            winnerImage=eScissors;
        }
        else if(userPick=='paper' && randomPick=='water'){
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='fire'){
            playerScore = 'You lose'
            winnerImage=eFire;
        }
        else if(userPick=='paper' && randomPick=='air'){
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='sponge'){
            playerScore = 'You lose'
            winnerImage=eSponge;
        }
        else if(userPick=='paper' && randomPick=='human'){
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='paper' && randomPick=='gun'){
            playerScore = 'You won'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='tree'){
            playerScore = 'You lose'
            winnerImage=eTree;
        }
        else if(userPick=='paper' && randomPick=='lightning'){
            playerScore = 'You win'
            winnerImage=paper;
        }
        else if(userPick=='paper' && randomPick=='wolf'){
            playerScore = 'You lose'
            winnerImage=eWolf;
        }
        else if(userPick=='paper' && randomPick=='snake'){
            playerScore = 'You lose'
            winnerImage=eSnake;
        }

        //if user chooses scissors: 
        else if(userPick=='scissors' && randomPick=='paper'){
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='rock'){
            playerScore = 'You lose'
            winnerImage=eRock;
        }
        else if(userPick=='scissors' && randomPick=='water'){
            playerScore = 'You lose'
            winnerImage=eWater;
        }
        else if(userPick=='scissors' && randomPick=='fire'){
            playerScore = 'You lose'
            winnerImage=eFire;
        }
        else if(userPick=='scissors' && randomPick=='air'){
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='sponge'){
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='human'){
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='gun'){
            playerScore = 'You lose'
            winnerImage=eGun;
        }
        else if(userPick=='scissors' && randomPick=='tree'){
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='lightning'){
            playerScore = 'You lose'
            winnerImage=eLightning;
        }
        else if(userPick=='scissors' && randomPick=='wolf'){
            playerScore = 'You win'
            winnerImage=scissors;
        }
        else if(userPick=='scissors' && randomPick=='snake'){
            playerScore = 'You win'
            winnerImage=scissors;
        }

        //if user chooses water:
        else if(userPick=='water' && randomPick=='fire'){
            playerScore = 'You win'
            winnerImage=water;
        }
        else if(userPick=='water' && randomPick=='rock'){
            playerScore = 'You win'
            winnerImage=water;
        }
        else if(userPick=='water' && randomPick=='paper'){
            playerScore = 'You lose'
            winnerImage=ePaper;
            
        }
        else if(userPick=='water' && randomPick=='scissors'){
            playerScore = 'You win'
            winnerImage=water;
        }
        else if(userPick=='water' && randomPick=='air'){
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='water' && randomPick=='sponge'){
            playerScore = 'You lose'
            winnerImage=eSponge;
        }
        else if(userPick=='water' && randomPick=='human'){
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='water' && randomPick=='gun'){
            playerScore = 'You lose'
            winnerImage=eGun;
        }
        else if(userPick=='water' && randomPick=='tree'){
            playerScore = 'You lose'
            winnerImage=eTree;
        }
        else if(userPick=='water' && randomPick=='lightning'){
            playerScore = 'You win'
            winnerImage=water;
        }
        else if(userPick=='water' && randomPick=='wolf'){
            playerScore = 'You lose'
            winnerImage=eWolf;
        }
        else if(userPick=='water' && randomPick=='snake'){
            playerScore = 'You lose'
            winnerImage=eSnake;
        }

        //if user chooses fire:
        else if(userPick=='fire' && randomPick=='rock'){
            playerScore = 'You lose'
            winnerImage=eRock;
        }
        else if(userPick=='fire' && randomPick=='paper'){
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='scissors'){
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='water'){
            playerScore = 'You lose'
            winnerImage=eWater;
        }
        else if(userPick=='fire' && randomPick=='air'){
            playerScore = 'You lose'
            winnerImage=eAir;
        }
        else if(userPick=='fire' && randomPick=='sponge'){
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='human'){
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='gun'){
            playerScore = 'You lose'
            winnerImage=eGun;
        }
        else if(userPick=='fire' && randomPick=='tree'){
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='lightning'){
            playerScore = 'You lose'
            winnerImage=eLightning;
        }
        else if(userPick=='fire' && randomPick=='wolf'){
            playerScore = 'You win'
            winnerImage=fire;
        }
        else if(userPick=='fire' && randomPick=='snake'){
            playerScore = 'You win'
            winnerImage=fire;
        }

        //if user chooses air:
        else if(userPick=='air' && randomPick=='rock'){
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='paper'){
            playerScore='You lose';
            winnerImage=ePaper;
        }
        else if(userPick=='air' && randomPick=='scissors'){
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='air' && randomPick=='water'){
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='fire'){
            playerScore='You win';
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='sponge'){
            playerScore='You lose';
            winnerImage=eSponge;
        }
        else if(userPick=='air' && randomPick=='human'){
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='air' && randomPick=='gun'){
            playerScore = 'You win'
            winnerImage=air;
        }
        else if(userPick=='air' && randomPick=='tree'){
            playerScore = 'You lose'
            winnerImage=eTree;
        }
        else if(userPick=='air' && randomPick=='lightning'){
            playerScore = 'You win'
            winnerImage=eLightning;
        }
        else if(userPick=='air' && randomPick=='wolf'){
            playerScore = 'You lose'
            winnerImage=eWolf;
        }
        else if(userPick=='air' && randomPick=='snake'){
            playerScore = 'You lose'
            winnerImage=eSnake;
        }

        //if user chooses sponge:
        else if(userPick=='sponge' && randomPick=='rock'){
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='sponge' && randomPick=='paper'){
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='scissors'){
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='sponge' && randomPick=='water'){
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='fire'){
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='sponge' && randomPick=='air'){
            playerScore='You win';
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='human'){
            playerScore = 'You lose'
            winnerImage=eHuman;
        }
        else if(userPick=='sponge' && randomPick=='gun'){
            playerScore = 'You win'
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='tree'){
            playerScore = 'You lose'
            winnerImage=eTree;
        }
        else if(userPick=='sponge' && randomPick=='lightning'){
            playerScore = 'You win'
            winnerImage=sponge;
        }
        else if(userPick=='sponge' && randomPick=='wolf'){
            playerScore = 'You lose'
            winnerImage=eWolf;
        }
        else if(userPick=='sponge' && randomPick=='snake'){
            playerScore = 'You lose'
            winnerImage=eSnake;
        }

        //if user chooses human:
        else if(userPick=='human' && randomPick=='rock'){
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='human' && randomPick=='paper'){
            playerScore='You win';
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='scissors'){
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='human' && randomPick=='water'){
            playerScore='You win';
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='fire'){
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='human' && randomPick=='air'){
            playerScore='You win';
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='sponge'){
            playerScore = 'You win'
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='gun'){
            playerScore = 'You lose'
            winnerImage=eGun;
        }
        else if(userPick=='human' && randomPick=='tree'){
            playerScore = 'You win'
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='lightning'){
            playerScore = 'You lose'
            winnerImage=eLightning;
        }
        else if(userPick=='human' && randomPick=='wolf'){
            playerScore = 'You win'
            winnerImage=human;
        }
        else if(userPick=='human' && randomPick=='snake'){
            playerScore = 'You lose'
            winnerImage=eSnake;
        }

        //if user chooses gun:
        else if(userPick=='gun' && randomPick=='rock'){
            playerScore='You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='paper'){
            playerScore='You lose';
            winnerImage=ePaper;
        }
        else if(userPick=='gun' && randomPick=='scissors'){
            playerScore='You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='water'){
            playerScore='You lose';
            winnerImage=eWater;
        }
        else if(userPick=='gun' && randomPick=='fire'){
            playerScore='You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='air'){
            playerScore='You lose';
            winnerImage=eAir;
        }
        else if(userPick=='gun' && randomPick=='sponge'){
            playerScore = 'You lose';
            winnerImage=eSponge;
        }
        else if(userPick=='gun' && randomPick=='human'){
            playerScore = 'You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='tree'){
            playerScore = 'You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='lightning'){
            playerScore = 'You lose';
            winnerImage=eLightning;
        }
        else if(userPick=='gun' && randomPick=='wolf'){
            playerScore = 'You win';
            winnerImage=gun;
        }
        else if(userPick=='gun' && randomPick=='snake'){
            playerScore = 'You win';
            winnerImage=gun;
        }

        //if user chooses tree:
        else if(userPick=='tree' && randomPick=='rock'){
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='tree' && randomPick=='paper'){
            playerScore='You win';
            winnerImage=tree;
        }
        else if(userPick=='tree' && randomPick=='scissors'){
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='tree' && randomPick=='water'){
            playerScore='You win';
            winnerImage=tree;
        }
        else if(userPick=='tree' && randomPick=='fire'){
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='tree' && randomPick=='air'){
            playerScore='You win';
            winnerImage=tree;
        }
        else if(userPick=='tree' && randomPick=='sponge'){
            playerScore = 'You win';
            winnerImage=tree;
        }
        else if(userPick=='tree' && randomPick=='human'){
            playerScore = 'You win';
            winnerImage=tree;
        }
        else if(userPick=='tree' && randomPick=='gun'){
            playerScore = 'You lose';
            winnerImage=eGun;
        }
        else if(userPick=='tree' && randomPick=='lightning'){
            playerScore = 'You lose';
            winnerImage=eLightning;
        }
        else if(userPick=='tree' && randomPick=='wolf'){
            playerScore = 'You win';
            winnerImage=tree;
        }
        else if(userPick=='tree' && randomPick=='snake'){
            playerScore = 'You lose';
            winnerImage=eSnake;
        }

        //if user chooses: lightning:
        else if(userPick=='lightning' && randomPick=='rock'){
            playerScore='You win';
            winnerImage=lightning;
        }
        else if(userPick=='lightning' && randomPick=='paper'){
            playerScore='You lose';
            winnerImage=ePaper;
        }
        else if(userPick=='lightning' && randomPick=='scissors'){
            playerScore='You win';
            winnerImage=lightning;
        }
        else if(userPick=='lightning' && randomPick=='water'){
            playerScore='You lose';
            winnerImage=eWater;
        }
        else if(userPick=='lightning' && randomPick=='fire'){
            playerScore='You win';
            winnerImage=lightning;
        }
        else if(userPick=='lightning' && randomPick=='air'){
            playerScore='You lose';
            winnerImage=eAir;
        }
        else if(userPick=='lightning' && randomPick=='sponge'){
            playerScore = 'You lose';
            winnerImage=eSponge;
        }
        else if(userPick=='lightning' && randomPick=='human'){
            playerScore = 'You win';
            winnerImage=lightning;
        }
        else if(userPick=='lightning' && randomPick=='gun'){
            playerScore = 'You win';
            winnerImage=lightning;
        }
        else if(userPick=='lightning' && randomPick=='tree'){
            playerScore = 'You win';
            winnerImage=lightning;
        }
        else if(userPick=='lightning' && randomPick=='wolf'){
            playerScore = 'You lose';
            winnerImage=eWolf;
        }
        else if(userPick=='lightning' && randomPick=='snake'){
            playerScore = 'You win';
            winnerImage=lightning;
        }

        //if user chooses wolf:
        else if(userPick=='wolf' && randomPick=='rock'){
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='wolf' && randomPick=='paper'){
            playerScore='You win';
            winnerImage=wolf;
        }
        else if(userPick=='wolf' && randomPick=='scissors'){
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='wolf' && randomPick=='water'){
            playerScore='You win';
            winnerImage=wolf;
        }
        else if(userPick=='wolf' && randomPick=='fire'){
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='wolf' && randomPick=='air'){
            playerScore='You win';
            winnerImage=wolf;
        }
        else if(userPick=='wolf' && randomPick=='sponge'){
            playerScore = 'You win';
            winnerImage=wolf;
        }
        else if(userPick=='wolf' && randomPick=='human'){
            playerScore = 'You win';
            winnerImage=tree;
        }
        else if(userPick=='wolf' && randomPick=='gun'){
            playerScore = 'You lose';
            winnerImage=eGun;
        }
        else if(userPick=='tree' && randomPick=='lightning'){
            playerScore = 'You win';
            winnerImage=wolf;
        }
        else if(userPick=='wolf' && randomPick=='tree'){
            playerScore = 'You lose';
            winnerImage=eTree;
        }
        else if(userPick=='wolf' && randomPick=='snake'){
            playerScore = 'You lose';
            winnerImage=eSnake;
        }

        //if user chooses snake:
        else if(userPick=='snake' && randomPick=='rock'){
            playerScore='You lose';
            winnerImage=eRock;
        }
        else if(userPick=='snake' && randomPick=='paper'){
            playerScore='You win';
            winnerImage=snake;
        }
        else if(userPick=='snake' && randomPick=='scissors'){
            playerScore='You lose';
            winnerImage=eScissors;
        }
        else if(userPick=='snake' && randomPick=='water'){
            playerScore='You win';
            winnerImage=snake;
        }
        else if(userPick=='snake' && randomPick=='fire'){
            playerScore='You lose';
            winnerImage=eFire;
        }
        else if(userPick=='snake' && randomPick=='air'){
            playerScore='You win';
            winnerImage=snake;
        }
        else if(userPick=='snake' && randomPick=='sponge'){
            playerScore = 'You win';
            winnerImage=snake;
        }
        else if(userPick=='snake' && randomPick=='human'){
            playerScore = 'You win';
            winnerImage=snake;
        }
        else if(userPick=='snake' && randomPick=='gun'){
            playerScore = 'You lose';
            winnerImage=eGun;
        }
        else if(userPick=='snake' && randomPick=='lightning'){
            playerScore = 'You lose';
            winnerImage=eLightning;
        }
        else if(userPick=='snake' && randomPick=='wolf'){
            playerScore = 'You win';
            winnerImage=snake;
        }
        else if(userPick=='snake' && randomPick=='tree'){
            playerScore = 'You win';
            winnerImage=snake;
        }

        else{
            console.log('something went wrong')
        }

    //show enemy's choice
    let enemyPick=document.getElementById('enemySelection');
    enemyPick.innerHTML=`<strong>${randomPick}</strong>`;

    //show who won & create play again OR next level button
    let body=document.getElementById('body');
    body.style.marginBottom='250px';

    let result=document.getElementById('result');
    result.style.visibility='visible';

    //next level
    if(playerScore=='You win'){
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play5" onclick="youWin()">You win! Play from beginning</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    //play again
    else if(playerScore=='You lose'){
        result.innerHTML=`
        <h2>${playerScore}!</h2>
        <img src="${winnerImage}" alt="${winnerImage}"><br>
        <button class="play5" onclick="playAgain5()">Play Again</button>
    `;
        document.getElementById('playHand').style.visibility='hidden';
    }
    //if player has lost too many times
    if(timesLost>1){
        result.innerHTML=`
        <h2></h2>
        <button class="play5" onclick="idk()">Play</button>
        `;
    }
    
}

//next level function ////////////////////////////////////////////////////////////////////
function nextLevel(){
    window.open("level-2.html", "_blank");
};
//3rd level function
function nextLevel3(){
    window.open("level-3.html", "_blank");
};
//4th level function
function nextLevel4(){
    window.open("level-4.html", "_blank");
};
//5th level function
function nextLevel5(){
    window.open("level-5.html", "_blank");
};
//back to level 1
function youWin(){
    window.open("index.html", "_blank");
}

//play again function
function playAgain(){
    let handOptions=["rock", "paper", "scissors"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    document.getElementById('enemySelection').innerHTML='';
    document.getElementById('result').innerHTML='';
    document.getElementById('result').style.visibility='hidden';
    document.getElementById('playHand').style.visibility='visible';
}

//play again function for next level
function playAgain2(){
    let handOptions=["rock", "paper", "scissors", "water", "fire"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    document.getElementById('enemySelection').innerHTML='';
    document.getElementById('result').innerHTML='';
    document.getElementById('result').style.visibility='hidden';
    document.getElementById('playHand').style.visibility='visible';

    if(timesLost>1){
        window.open("index.html");
        window.close("level-2.html");
    }
}

//play again function for 3rd level
function playAgain3(){
    let handOptions=["rock", "paper", "scissors", "water", "fire", "air", "sponge"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    document.getElementById('enemySelection').innerHTML='';
    document.getElementById('result').innerHTML='';
    document.getElementById('result').style.visibility='hidden';
    document.getElementById('playHand').style.visibility='visible';
}

//play again for 4th level
function playAgain4(){
    let handOptions=["rock", "paper", "scissors", "water", "fire", "air", "sponge", "human", "gun"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    document.getElementById('enemySelection').innerHTML='';
    document.getElementById('result').innerHTML='';
    document.getElementById('result').style.visibility='hidden';
    document.getElementById('playHand').style.visibility='visible';
}

//play again for 5th level
function playAgain5(){
    let handOptions=["rock", "paper", "scissors", "water", "fire", "air", "sponge", "human", "gun", "tree", "lightning", "wolf", "snake"];
    let randomPick=handOptions[Math.floor(Math.random()*handOptions.length)];
    document.getElementById('enemySelection').innerHTML='';
    document.getElementById('result').innerHTML='';
    document.getElementById('result').style.visibility='hidden';
    document.getElementById('playHand').style.visibility='visible';
}

//show rules for each level

//select the element
const rules=document.getElementById('rules');
//function to display the rules
function showRules(){
    if(rules.textContent=='View Rules'){
        rules.innerHTML=`<ul>
                            <li><strong>Rock</strong> beats scissors</li>
                            <li><strong>Paper</strong> beats rock</li>
                            <li><strong>Scissors</strong> beat paper</li>
                        </ul>`
    }
    else if(rules.textContent=='View New Rules'){
        rules.innerHTML=`<ul>
                            <li><strong>Rock</strong> beats scissors & water</li>
                            <li><strong>Paper</strong> beats rock & water</li>
                            <li><strong>Scissors</strong> beats paper & water</li>
                            <li><strong>Water</strong> beats fire</li>
                            <li><strong>Fire</strong> beats rock, paper, & scissors</li>
                        </ul>`;
    }
    else if(rules.textContent=='View Newer Rules'){
        rules.innerHTML=`<ul>
                            <li><strong>Rock</strong> beats scissors, water & sponge</li>
                            <li><strong>Paper</strong> beats rock, water & air</li>
                            <li><strong>Scissors</strong> beats paper, water, air & sponge</li>
                            <li><strong>Water</strong> beats fire</li>
                            <li><strong>Fire</strong> beats rock, paper, scissors & sponge</li>
                            <li><strong>Air</strong> beats rock, water, & fire</li>
                            <li><strong>Sponge</strong> beats paper, water & air</li>
                        </ul>`
    }
    else if(rules.textContent=='View Newer Rules'){
        rules.innerHTML=`<ul>
                            <li><strong>Rock</strong> beats scissors, water & sponge</li>
                            <li><strong>Paper</strong> beats rock, water & air</li>
                            <li><strong>Scissors</strong> beats paper, water, air & sponge</li>
                            <li><strong>Water</strong> beats fire</li>
                            <li><strong>Fire</strong> beats rock, paper, scissors & sponge</li>
                            <li><strong>Air</strong> beats rock, water, & fire</li>
                            <li><strong>Sponge</strong> beats paper, water & air</li>
                        </ul>`
    }
    else if(rules.textContent=='View Newest Rules'){
        rules.innerHTML=`<ul>
                            <li><strong>Rock</strong> beats scissors, water, sponge, human & gun</li>
                            <li><strong>Paper</strong> beats rock, water & air</li>
                            <li><strong>Scissors</strong> beats paper, water, air, sponge & human</li>
                            <li><strong>Water</strong> beats fire & gun</li>
                            <li><strong>Fire</strong> beats rock, paper, scissors, sponge & human</li>
                            <li><strong>Air</strong> beats rock, water, & gun</li>
                            <li><strong>Sponge</strong> beats paper, water, air & gun</li>
                            <li><strong>Human</strong> beats paper, water, air & sponge</li>
                            <li><strong>Gun</strong> beats paper, scissors, fire, & human</li>
                        </ul>`
    }
    else if(rules.textContent=='View Ultimate Rules'){
        rules.innerHTML=`<ul>
                            <li><strong>Rock</strong> beats scissors, fire, sponge, human, tree, wolf, & snake</li>
                            <li><strong>Paper</strong> beats rock, water, air, gun & lightning</li>
                            <li><strong>Scissors</strong> beats paper, air, sponge, human, tree, wolf & snake</li>
                            <li><strong>Water</strong> beats rock, scissors, fire, & lightning</li>
                            <li><strong>Fire</strong> beats paper, scissors, sponge, human, tree, wolf & snake</li>
                            <li><strong>Air</strong> beats rock, water, fire, gun & lightning</li>
                            <li><strong>Sponge</strong> beats paper, water, air, gun & lightning</li>
                            <li><strong>Human</strong> beats paper, water, air, sponge, tree & wolf</li>
                            <li><strong>Gun</strong> beats rock, scissors, fire, human, tree, wolf & snake</li>
                            <li><strong>Tree</strong> beats paper, water, air, sponge & wolf</li>
                            <li><strong>Lightning</strong> beats rock, scissors, fire, human, gun, tree & snake</li>
                            <li><strong>Wolf</strong> beats paper, water, air, sponge, lightning</li>
                            <li><strong>Snake</strong> beats paper, water, air, sponge, human, tree & wolf</li>
                        </ul>`
    }
}
//event listener for click event
rules.addEventListener('click', showRules);
