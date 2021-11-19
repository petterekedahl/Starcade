'use strict';

const gridNr = 8

const data = [
    {
        //Info, kontext, Carlbarks, spel-bild
        id: "index",
        portrait: ["Carl_desktop.png", "Carl_mobile.png", "backside_frame.jpg"],
        logga: ["LoggamLaromedel.jpg", "FooterLoggamLaromedel.jpg", "logo.svg"],
        kontext: "This page is made as a project for the programme “Media production och process design” at Malmö University. The task was to make a page that was intended to educate children and it had to feature art in some way. The art pieces also had to have something in common with each other. When we (the creators, Ludvig Stridsberg and Karoline Lindroos) first started thinking about what the subject of our page could be one of the first ideas we had was that we could try to find some artist that painted clowns. That made Ludvig think about what other things children liked and that at the same time had something to do with pictures. He came to think about comics and that reminded him of a book he had; “Carl Barks bästa”. It featured several comics made by Carl Barks, mostly famous for creating comics featuring Donald Duck, and also a painting that served as a kind of cover for the comic. That made him suggest the idea that the page could be about Carl Barks and that the art featured could be his oil-paintings. Karoline thought that was a splendid idea.",
        
        description: "Carl Barks (March 27, 1901 – August 25, 2000) was an American cartoonist, author, and painter. He is best known for his work in Disney comic books, as the writer and artist of the first Donald Duck stories and as the creator of Scrooge McDuck. He worked anonymously until late in his career; fans dubbed him The Duck Man and The Good Duck Artist. In 1987, Barks was one of the three inaugural inductees of the Will Eisner Comic Book Hall of Fame."
    },
    {
        //Om oss
        id: "aboutUs",
        portrait: ["karroStreck_desktop.png", "luddeStreck_desktop.png"],
        portraitmobile: ["karroStreck_mobile.png", "luddeStreck_mobile.png"],
        karro: ["Karoline Lindroos", "Karoline is 28 years old, her relationship to Carl Barks and Donald Duck is positive. She basically grew up with Donald Duck. On every Christmas she watches Donald Duck and she has done it since forever. During her childhood her sister had all the comics of Donald Duck, which she sometimes borrowed to read."],
        ludde: ["Ludvig Stridsberg", "Ludvig is 20 years old as of writing and have a long relationship with both Barks and Donald, he has read the comics ever since he was seven years old. He has read a lot of issues of \"Kalle Anka & C:o\" and several \"Kalle Ankas Pocket\". Carl Barks is not his favourite illustrator though, that title goes to Don Rosa."]
    },
    {
        //bildinfo
        id: "andes",
        painting: ["startAndes_desktop.jpg", "../images/desktop/andesRamMain_desktop.jpg", "../images/desktop/andesRam1_desktop.jpg", "../images/desktop/andesRam2_desktop.jpg"],
        paintingMobile: ["startAndes_mobile.jpg", "../images/mobile/andesRamMain_desktop.jpg", "../images/mobile/andesRam1_mobile.jpg", "../images/mobile/andesRam2_mobile"], 
        imgText: ["Lost in The Andes", "Lost in the Andes comic cover.", "Image taken from the Lost in the Andes comic."],

        //meta info
        date: "October 21, 1948",
        hero: "Donald Duck",
        pages: "32",
        layout: "4 rows per page",
        apperances: "Donald Duck, Huey, Dewey and Louie",
        first_publ: "Four Color Comics #223 April 1949",

        //description
        p1: "The story features Donald and his nephews Huey, Dewey and Louie as members of a museum sponsored expedition searching for the source of a number of square artifacts held in the Duckburg museum, recently revealed to be square eggs when Donald drops one and it cracks open. There is a rising interest, both scientific and financial, to find the source of these eggs and the chicken that gave birth to them. However, the only thing known about them is that they came from Peru and were found somewhere in the Andes. ",
        
        p2: "Their search for the square eggs in the Andes seems hopeless, but finally they meet a very old man. The old man told that his father sold some of the stones, similar to their own, in a local village. He had found them on the body of an American explorer, Professor Rhutt Betlah, who had wandered the valley in the late 19th century. The Ducks follow the dead man's path into the mists and after days they find a populated valley in the Mountains. But the only way to get out of the valley and avoid capital punishment is for them to produce square bubbles. The Ducks convince the very hospitable locals to let them go. They give the Ducks the compass that the professor had left in Plain Awful, having been placed in a museum as a piece of art, and in turn, they teach them square dancing. When they leave the valley, the two chickens are still alive, but they had to eat the eggs. It is only when they return to Duckburg that they realise the entire expedition was a failure: both of the chickens are male and naturally can't reproduce. The story ends with Donald now giving an angry response to whoever mentions eggs and chicken to his face."
    },
    {
        //bildinfo
        id:"christmas",
        painting: ["startChristmas_desktop.jpg","../images/desktop/christmasRamMain_desktop.jpg", "../images/desktop/christmasRam1_desktop.jpg", "../images/desktop/christmasRam2_desktop.jpg"],
        paintingMobile: ["startChristmas_mobile.jpg", "../images/mobile/christmasRamMain_mobile.jpg", "../images/mobile/christmasRam1_mobile.jpg", "../images/mobile/christmasRam2_mobile.jpg"],
        imgText: ["A Christmas For Shacktown", "Season to be jolly in production by Carl Barks.", "Season to be jolly from 1974, picture taken from \“Carl Barks bästa\”."],

        //meta info
        date: "January 1952",
        hero: "Donald Duck",
        pages: "32",
        layout: "4 rows per page",
        apperances: "Donald Duck, Huey Dewey and Louie, Daisy Duck, Scrooge McDuck, Gladstone Gander, Jake McDuck",
        first_publ: "Four Color #367",

        //description
        p1: "The story begins with Donald's nephews passing through Shacktown, the most impoverished area of Duckburg. They progressively get more depressed as they see the living conditions there, children of their age dressed in rags and having tired expressions, hunger and sickness evident in many of them. They feel responsible for it and want to help those poor children find some happiness. Donald Duck has the idea to ask his Uncle Scrooge for the money. Scrooge refuses his nephew's request for a donation, but nevertheless offers to match Donald's own twenty-five dollars, if he can manage to raise that much. He tries to trick his Uncle into making the donation, but he is unable to do so. Only when he swallows his pride and asks for his cousin Gladstone Gander's help does he finally succeed in raising his twenty-five dollars.",
        
        p2: "When he arrives at his uncle's money bin, an apparently shocked Scrooge tells him it is too late. Enraged, Donald opens the vault door and discovers that inside, the overloaded floor had collapsed, and the money has been lost in the caverns below Duckburg. Now Donald still is twenty-five dollars short and has to take care of a shocked and depressed uncle. Dewey, Huey and Louie remember that they once explored Shacktown district and learned about a cavern that might lead to the lost money. Boys bring a toy train to retrieve the money and Scrooge promises that they can keep the first load of money, no matter how much it is. They manage to get a hefty pile of bills and Scrooge faints, and using the bills, the residents of Shacktown receives a grand Christmas party. Scrooge, however, resides in the cavern and complains how he must wait for 272 years for the toy train to bring out all the money from the bottom."
    },
    {
        //bildinfo
        id: "helmet",
        painting: ["startHelmet_desktop.jpg","../images/desktop/helmetRamMain_desktop.jpg", "../images/desktop/helmetRam1_desktop.jpg", "../images/desktop/helmetRam2_desktop.jpg"],
        paintingMobile: ["startHelmet_mobile.jpg", "../images/mobile/helmetRamMain_mobile.jpg", "../images/mobile/helmetRam1_mobile.jpg","../images/mobile/helmetRam2_mobile.jpg"],
        imgText: ["The Golden Helmet", "The Golden Helmet comic cover.", "The Golden Helmet sketch by Xavier Vives Mateu."],

        //meta info
        date: "July 1952",
        hero: "Donald Duck",
        pages: "32",
        layout: "4 rows per page",
        apperances: "Donald Duck, Huey, Dewey and Louie",
        first_publ: "Four Color #408",

        //description
        p1: "The museum's director enlists Donald and his nephews, Huey, Dewey and Louie, in a rival attempt to find the helmet first. Its location is estimated to be somewhere on the coast of Labrador, Canada. During their search, both rival expeditions lose all modern equipment, and by the time they find the helmet they must try to reach Labrador's coast traveling like the Vikings did. This is the least of their problems as the helmet changes hands between Azure Blue, the museum's director, Donald and Lawyer Sharky.",
        
        p2: "The helmet, an object of power, has the same effect on each of its successive owners: A cold glitter in their eyes betrays awakening greed and ambitions, as they become more ruthless, each of them in turn revealing the dreams of a would-be tyrant. The idealistic museum director is the worst of all, as he isn't interested in personal wealth, but changing North American culture and education to his own ideals, to the benefit of society. Finally, Donald's nephews manage to throw the helmet into the sea and end the madness, but not before Louie gets the same glitter in his eyes. Back at the museum after the adventure, Donald is again working as a guard, after all he decides to get acquainted with contemporary times and interest himself of the current exhibits that appeals to the masses."
    },
    {
        //ludvig tar detta och nedåt
        //bildinfo
        id: "island",
        painting: ["startIsland_desktop.jpg","../images/desktop/islandRamMain_desktop.jpg", "../images/desktop/islandRam1_desktop.jpg", "../images/desktop/islandRam2_desktop.jpg"],
        paintingMobile: ["startIsland_mobile.jpg", "../images/mobile/islandRamMain_mobile.jpg", "../images/mobile/islandRam1_mobile.jpg", "../images/mobile/islandRam2_mobile.jpg"],
        imgText: ["Island in the Sky", "The first panel of the comic that Island in the Sky is based on.", "Fanart by shira hedgie based on Barks' painting."],

        //meta info
        date: "June 15, 1959",
        hero: "Scrooge McDuck",
        pages: "18",
        layout: "4 rows per page",
        apperances: "Scrooge McDuck, Donald Duck, Huey, Dewey and Louie",
        first_publ: "Uncle Scrooge #29 March 1960",

        //description
        p1: "Island in the Sky is a Disney comics story written and drawn by Carl Barks. It was published in Uncle Scrooge #29, March 1960. The asteroid 2730 Barks was named after Barks by a scientist at Cornell University who was inspired by the story.",
        
        p2: "In this story Duckburg is far more technologically advanced than the rest of the world (Barks did not care about continuity) with bouncing cars and a much developed space- infrastructure. Scrooge wants to find a new place to hide his money and he thinks he found it - on a asteroid in the asteroid belt! Donald and the nephews are nervous about the trip, since it is extremely far away, even in a place like Duckburg. After shopping around for a rocket Scrooge decides on a cheap, used one. Since he does not want to make a pit-stop for refueling on the way (fuel in space costs $100 per litre) he uses every last inch of storage space for fuel and the ducks have to resort to eating crackers and drinking water. After several months they finally arrive at the asteroid belt and starts to look for a suitable asteroid. When they have tried for several days to no avail Scrooge is about to give up when they find a big asteroid that is like a tropical paradise with loads of trees and fruit. Since they have used up a lot of the fuel they decide to fill the space with fruit to eat on the way home. After leaving the big asteroid they see a tiny rock asteroid nearby. Scrooge thinks it is perfect to use as a money bin but when they are about to leave they are surrounded by aliens. They seem friendly but Donald decides to scare them by firing a gun which also results in every last bird on the asteroid leaving. With them, the only source of food for the aliens is gone. Scrooge decides to sacrifice some fuel by using the rocket to tie a rope between the asteroids and teaching the aliens how to climb it. His choice leads to the ducks not having enough fuel to reach Earth and having to resort to refuel on a space station for $100 per litre. Scrooge thinks he will not need to find a asteroid to store his money on since it will all be gone when they are home again."
    },
    {
        //bildinfo
        id: "poor",
        painting: ["startPoor_desktop.jpg","../images/desktop/poorRamMain_desktop.jpg", "../images/desktop/poorRam1_desktop.jpg", "../images/desktop/poorRam2_desktop.jpg"],
        paintingMobile: ["startPoor_mobile.jpg", "../images/mobile/poorRamMain_mobile.jpg", "../images/mobile/poorRam1_mobile.jpg", "../images/mobile/poorRam2_mobile.jpg"],
        imgText: ["Only a Poor Old Man", "The cover to the issue that Just a Poor Old Man was featured in.", "Pencil sketch that is traced from the painting."],

        //meta info
        date: "September 27, 1951",
        hero: "Scrooge McDuck",
        pages: "32",
        layout: "4 rows per page",
        apperances: "Scrooge McDuck, Donald Duck, Huey, Dewey, Louie and The Beagle Boys",
        first_publ: "March 1952",

        //description
        p1: "Scrooge McDuck had already made his debut as a supporting character in the 1947 Donald Duck story \"Christmas on Bear Mountain\", and made several other appearances in Donald Duck stories in Walt Disney's Comics and Stories, but \"Poor Old Man\" was the first comic book story with Scrooge as the main character. In this first story with Scrooge as the focus, Barks softened the character, making him appear emotionally and financially vulnerable, rather than the ruthless miser that he had been in previous guest appearances.",

        p2: "The story begins with Scrooge McDuck swimming in his money bin, speaking his now-famous line, \"I love to dive around in it like a porpoise, and burrow through it like a gopher, and toss it up and let it hit me on the head!\" While looking through the window, Scrooge is alarmed to see that the Beagle Boys have bought the lot next to the money bin. Scrooge understands that they plan to build a house on it so they can secretly drain Scrooge's money out of the bin. Scrooge forms a plan: with his nephews' help, he installs a chute that allows him to empty the bin slowly. They observe the trucks the Beagle Boys are using, which end up dumping the extra dirt at a lake. Scrooge buys the lake, then empties a load of money every time a truck drives by. When the Beagles finish their building, they are appalled to find an empty money bin. With his money on the bottom of the lake Scrooge begins to miss his daily swim in his coins. To make up for it, he decides to create a temporary money island but one of the Beagle Boys coincidentally observes him from afar. The Beagle Boys buy the land in the valley downstream from the lake as their plan is to destroy the dam at the end, causing the water and the money to flow down onto their property. Scrooge and his nephews defend against the Beagle Boys' varied assaults on the dam. After several attempts the Beagle Boys turn to breeding super-termites. One of them tricks Scrooge into buying them and the termites chew through the dam. The dam breaks, sending all the money flowing down onto the Beagle Boys' land. Scrooge, to his nephews' surprise, decides to admit defeat. The Beagle Boys crow over him, and he confesses that what he will miss most is swimming around in the money. The Beagle Boys are intrigued and they decide to take a dive in themselves – and end up bashing their heads on the hard, unyielding surface of the coins. When his nephews ask how he can dive through the money while the Beagle Boys couldn't, he admits, \"it's a trick.\" Scrooge pays his nephews their wages, and as they leave, Donald remarks that Scrooge's money is nothing but trouble, for all the work it takes to guard and preserve. Scrooge dismisses this advice, declaring \"No man is poor who can do what he likes to do once in a while!\" He then goes back to gleefully swimming through his money."
    },
    {
        //bildinfo
        id: "river",
        painting: ["startRiver_desktop.jpg","../images/desktop/riverRamMain_desktop.jpg", "../images/desktop/riverRam1_desktop.jpg", "../images/desktop/riverRam2_desktop.jpg"],
        paintingMobile: ["startRiver_mobile.jpg", "../images/mobile/riverRamMain_mobile.jpg", "../images/mobile/riverRam1_mobile.jpg", "../images/mobile/riverRam2_mobile.jpg"],
        imgText: ["The Terror of The River!!", "Photo of Barks standing next to the completed painting.", "A page from the comic that served as inspiration for Terror of the River!!"],

        //meta info
        date: "January 25, 1946",
        hero: "Donald Duck",
        pages: "28",
        layout: "4 rows per page",
        apperances: "Donald Duck, Huey, Dewey and Louie",
        first_publ: "Donald Duck Four Color #108 January 1946",

        //description
        p1: "\"Terror of the River\" is an original Carl Barks oil painting on Masonite board from 1974 based on the legendary work of the beloved \"Good Duck Artist.\" The painting is inspired by Barks' story for Four Color #108 (1946). It features Donald Duck and his nephews encountering an enormous sea monster. This is the only time Barks painted a scene based on Four Color #108, and it is unique in both mood and motion. It's well known that Barks painted multiple versions of several of his celebrated Duck paintings, but this one stands alone as the technical detail involved in creating it was intense and Barks felt that painting it once was enough! The painting is also known to be one of the most popular among fans of Barks' work. It was featured in the 1977-1978 Overstreet Price Guide in a special color section devoted to the best of Barks' Duck paintings.",

        p2: "This is one of a series of brilliant and extremely popular paintings that Carl Barks produced from 1971-1997 based on his comic book work following his retirement from comic books. Barks paintings are highly prized by collectors and his originals have sold for six figures. Barks is one of a handful of true geniuses who ever worked in comic books--right up at the top with Kirby, Eisner and Kurtzman. Though he did not invent Donald Duck, he infused the character with life in a world beloved by generations of international fans. Among Barks' own creations are Scrooge McDuck, Gladstone Gander, the Beagle Boys, The Junior Woodchucks, and Gyro Gearloose. His stories and artwork were inspired tales of imagination that entertained millions for decades. His work still has a massive following across the world, with collector enclaves of particular note in parts of Europe."
    },
    {
        //bildinfo
        id: "safari",
        painting: ["startSafari_desktop.jpg","../images/desktop/safariRamMain_desktop.jpg", "../images/desktop/safariRam1_desktop.jpg", "../images/desktop/safariRam2_desktop.jpg"],
        paintingMobile: ["startSafari_mobile.jpg", "../images/mobile/safariRamMain_mobile.jpg", "../images/mobile/safariRam1_mobile.jpg", "../images/mobile/safariRam2_mobile.jpg"],
        imgText: ["So Far and No Safari", "A page from the comic that served as inspiration for So Far and No Safari.", "A cover from the issue that the comic was first printed in."],

        //meta info
        date: "April 1, 1965",
        hero: "Scrooge McDuck",
        pages: "24",
        layout: "4 rows per page",
        apperances: "Scrooge McDuck, Donald Duck, Huey, Dewey, Louie and Flintheart Glomgold",
        first_publ: "Uncle Scrooge #61 Jan 1966",

        //description
        p1: "Uncle Scrooge McDuck and his nephews Donald Duck with the scintillating trio of little ducks, Huey, Dewey and Louie, are on their way to Africa so the patriarch of the clan can bid on -- and hopefully buy -- the famous Kaffir de Gaffir gold mine. Little does Scrooge know, however, that his arch rival, Flintheart Glomgold, also has eyes to own the mine and is determined to keep Scrooge from getting it! After their private plane is shot down, the ducks must rely on the boys' copy of the Junior Woodchucks Guide Book instruction section on how to make animal-taming whistles so they can 'hitch rides' on passing fauna and fowl: lions, hippopotamuses, crocodiles, cape buffaloes, warthogs, ostriches, elephants, giraffes, zebras, gemsboks, impalas, jackals and, yes, even rhinoceroses, to help convey them to their destination.",

        p2: "Far Out Safari was taken from a simple cover design Carl Barks drew for Uncle Scrooge #61, published in January 1966, illustrating the lead story inside, So Far and No Safari. Far Out Safari was printed by the Black Box of Chicago, image size 7 1/2x10 on 11x13 Opalesque Keramique, a paper constructed of 100% cotton fibre for strength and longevity, guaranteed not to fade under normal and stable storage conditions for hundreds of years. Limited signed edition of 595."
    },
    {
        //bildinfo
        id: "tree",
        painting: ["startTree_desktop.jpg","../images/desktop/treeRamMain_desktop.jpg", "../images/desktop/treeRam1_desktop.jpg", "../images/desktop/treeRam2_desktop.jpg"],
        paintingMobile: ["startTree_mobile.jpg", "../images/mobile/treeRamMain_mobile.jpg", "../images/mobile/treeRam1_mobile.jpg", "../images/mobile/treeRam2_mobile.jpg"],
        imgText: ["The Golden Christmas Tree", "The Golden Christmas Tree comic cover.", "Image taken from The Golden Christmas Tree comic."],

        //meta info
        date: "December 1948",
        hero: "Donald Duck",
        pages: "20",
        layout: "4 rows per page",
        apperances: "Huey, Dewey and Louie, Wicked Witch",
        first_publ: "Four Color #203",

        //description
        p1: "The Golden Christmas Tree is a 20-page Disney comics Christmas story written, drawn, and lettered by Carl Barks. The story was first published in Donald Duck Four Color #203 (December 1948), with a cover by Barks, a 12-page Mickey Mouse and Goofy Christmas story (Special Delivery) written, drawn, and lettered by Bill Wright. The cover, stories, and gag pages have been reprinted several times. Characters in the story include Donald Duck, his nephews Huey, Dewey, and Louie, and the Wicked Witch from Walt Disney's 1937 animated film, Snow White and the Seven Dwarfs. The Golden Christmas Tree is about the Wicked Witch and her plan to use the teardrops of the boys in a magic potion that will destroy all the Christmas trees on earth. ",
        
        p2: "Every Christmas, Barks's publisher urged him to do a Christmas story. In the case of The Golden Christmas Tree, the publisher even sent him a script. Barks did not like the final published product. His editors changed the dialogue in panels 2, 3, 4, and 5 on the last page. Barks thought the story's ending was moralistic rubbish. The story demonstrates Barks' penchant for adapting Donald's character and those of the nephews to plot purposes. Here, the nephews are more childlike than usual because they must fall for the Witch's ruses. Donald himself (ordinarily a bungling coward) sets off in this story to rescue his nephews without a glimmer of cowardice."
    }
]