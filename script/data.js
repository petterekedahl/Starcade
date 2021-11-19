const STATE = {
    userID: userID,
    users: [],
    planets: [],
    scores: []
}

const path = window.location.pathname;
let whatFile = path.substring(path.lastIndexOf('/') + 1);

const profileImages = ["blue_alien.png", "blueredlips_alien.png", "gradientblue_alien.png", "gradientorange_alien.png", "green_alien.png", "grey_alien.png", "greybrown_alien.png", "militarygreen_alien.png", "neongreen_alien.png", "orange_alien.png", "peargreen_alien.png", "purple_alien.png", "red_alien.png", "twotoothed_alien.png", "violet_alien.png"];

const aboutUs = [
    {name: "Ludvig Stridsberg", info: "... is responsible for the UI and graphic design on the Starcade website. With his imaginative creativity and exceptional drawing skills, he made mascot Allan to lead you the way through the galaxy and enjoy our games without any doubt. Ludvig loves the arcade game Pacman and Earth is his favorite planet, since it is acually inhabitable. He rates the Starcade website a 9 out of 10 stars. "}, 
    {name: "Johanna Christensson" , info: "... is the project lead of the Starcade Crew. She keeps an eye on every part of the project, from presenting prototypes to dividing work into sprints in Trello and keeping structured meetings. Johanna’s aim is to get each team member to pass the course. Her favorite planet is Pluto and Snake is her most played arcade game. Johanna gives the Starcade website 9/10 stars"}, 
    {name: "Karoline Lindroos", info:"... is the Starcade Crew’s great back-end developer. By showing major skills in php - the popular scripting language - she made it possible to secure login- and register-procedure, for you enjoy multiple games and keep track of your rank. Karoline’s favorite planet is Saturn, and Labyrinth is her most played arcade game. She gives the Starcade website a 10/10 stars."}, 
    {name: "Petter Ekedahl", info: "... is the Starcade Crew’s front-end developer. He works incredible fast and impresses with his solution focused thinking. Petter uses javascript - a dynamic object-based programming language - to give you and all users an interactive experience to enjoy while trying to out-win each other. His favorite arcade game is Star Wars Episode I: Racer and he likes the Venus planet. Petter gives 10 stars out of 10 to the Starcade website."}
]

const games = [
    // {
    //     gameID: 0,
    //     gameName: "Yathzee",
    //     description: "Roll the dice and steal the rice! A classic game of Yatzy where the objective is to collect as high dice numbers as possible to fit in each category. Collect five of the same number and get the amazing Yatzeee!",
    //     rules: "Maximal points: Highest number in each category, rewards you with a total of 374 points.",
    //     gameImg: "../media/screendump_yatzy.JPG"
    // },
    {
        gameID: 1,
        gameName: "Whack-a-target",
        description: "You gotta go fast! This Shooter-game keeps you on your toes when you get a new target each second for a minute straight. Don\u2019t lose focus, the more hits you get the more points you get! ",
        rules: "Maximal points: Each hit gives 5 points, and if you catch them all, you will be rewarded with 300 points.",
        gameImg: "../media/screendump_shooter.JPG"
    },
    {
        gameID: 2,
        gameName: "Harry Potter Quiz",
        description: "Are you a Potterhead? This Harry Potter quiz will take you away on the magic Hogwarts Express and on the train, you\u2019ll meet all the fun characters! Guess right, and they might not turn you into a rat.",
        rules: "Maximal points: Each correct answer rewards you with 2 points, and 20 points is maximal points.",
        gameImg: "../media/screendump_quiz.JPG"
    },
    {
        gameID: 3,
        gameName: "Carl Barks Moving Memory Game",
        description: "This game\u2019s objective is pretty simple. Flip the cards and try to find its match. But be aware, this is not a regular game of memory. Our cards are moving, so don\u2019t lose focus!",
        rules: "Maximal points: Get 15 points for each correct match, earn a total of 120 points.",
        gameImg: "../media/screendump_memory.JPG"
    }
]