const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // let detailsOfPlayers = [];
    // Create players using for loop
    // Type your code here
    //var y=0;
    for(var i=0;i < players.length;i++)
    {
        if(i%2==0)
        {
        detailedPlayers[i]=
        {
            name: players[i],
            strength: getRandomStrength(),
            image: "images/super-"+(i+1)+".png",
            type:"hero"

        }
        
        }
else{
    detailedPlayers[i]=
    {
        name: players[i],
        strength: getRandomStrength(),
        image: "images/super-"+(i+1)+".png",
        type:"villain"

    }
}
    
}
    //     y++;
    //     if(y%2==0)
    //     {
    //         detailedPlayers.type ="villain";
    //     }
    //     else
    //     {
    //         detailedPlayers.type ="hero";
    //     }
    //     detailedPlayers[i++]= detailedPlayers[i]; 
    // }
    return detailedPlayers;
}
// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random()* 100 + 1);
};

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    let finalFragment=''
    for (let x = 0; x < players.length;x++) 
    {
        fragment = `
            <div class="player">
            <img src="${players[x].image}"alt="">
            <div class="name">${players[x].name}</div>
            <div class="strength">${players[x].strength}</div>
        </div>`
          finalFragment = finalFragment + fragment 
      }
    
    return finalFragment;
};
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, "hero");
    document.getElementById('villains').innerHTML = buildPlayers(players, "villain");

};

//  window.onload = () => {
//      viewPlayers(initPlayers(PLAYERS));
//  }