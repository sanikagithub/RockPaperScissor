const hands = ['rock' , 'paper', 'scissors'];
function getHand(){
    return hands[parseInt(Math.random()*10)%3];  
}
let playerA=
{ 
    name: 'playerA', getHand: function() { return getHand(); }
} 

let playerB=    
{    
    name: 'playerB', getHand: function() { return getHand(); }
}

function playRound(playerA, playerB)
{
    let playerAHand = playerA.getHand();
    let playerBHand = playerB.getHand();
    console.log("Hands played  playerA "  + playerAHand + ' playerB ' + playerBHand);
    
    if(playerAHand == playerBHand)
    {
        console.log('Its a tie');
    }
    else if(playerAHand == 'rock' && playerBHand == 'scissors')
    {
        console.log(playerA.name + ' wins')    
        return playerA;   
    }
    else if(playerAHand == 'scissors' && playerBHand == 'rock')
    {
        console.log(playerB.name + ' wins')    
        return playerB;  
    }
    else if(playerAHand == 'rock' && playerBHand == 'paper')
    {
        console.log(playerB.name + ' wins')    
        return playerB;  
    }
    else if(playerAHand == 'paper' && playerBHand == 'rock')
    {
        console.log(playerA.name + ' wins')    
        return playerA;   
    }
    else if(playerAHand == 'paper' && playerBHand == 'scissors')
    {
        console.log(playerB.name + ' wins')    
        return playerB;   
    }
    else if(playerAHand == 'scissors' && playerBHand == 'paper')
    {
        console.log(playerA.name + ' wins')    
        return playerA;   
    }
}

function playGame(playerA, playerB, playUntil)
{
    let playerAWinCount = 0;
    let playerBWinCount = 0;
    let round = 1;
    do
    {
        console.log('Begin Round ' + round +  ' playerA wins ' + playerAWinCount + ' playerB wins ' + playerBWinCount);
        let winner = playRound(playerA, playerB);
        if(winner)
        {            
            if(winner.name == playerA.name)
                playerAWinCount++;
            else
                playerBWinCount++;
        }
        round++;
    } while(playerAWinCount < playUntil && playerBWinCount < playUntil);

    if(playerAWinCount == playUntil)
        console.log('Final winner is ' + playerA.name )
    else
        console.log('Final winner is ' + playerB.name )

}

playGame(playerA, playerB, 5);