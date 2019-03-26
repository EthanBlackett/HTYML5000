//NOTES: Oh, and make more areas and finish unfinished stuff. Change the alerts, cut down on stuff. Fix the time, and day counter ~
//CHANGE GAME BEFORE REAL, PLAY-TESTING!!! ~
{
var haveCoat=false
var theThing=false
var tookShower=false
var fireGoing=false
var rugMoved=false
var dishesWashed=false
var haveFood=false
var actualFood=false
var moreActualFood=false
var drRichardHere=false
var inSearch=false
var justWokeUp=false
var isHungry=true
var heJustTalked=false
var naked=false
var tookShowerAgain=false
var toastMaster=false
var ethanWin=false
var a1KeyDoorUnLocked=false
var frontDoorUnlocked=false
var middleDoorUnlocked=false
var hall2DoorUnlocked=false
var garageDoorOpen=false
var garageUnlocked=false
var storageRoomFirstTime=false
var ICERoomUnlocked=false
var gettingReady=false
var basementDoorUnlocked=false
var storageRoomUnlocked=false
var havePaint=false
var haveTools=false
var brushedTeeth=false
var shaved=false
var drankJuice=false
var ateRawMeat=false
var isVegan=false
var weirdo=false //Maybe...
var dry=false
var gottaGun=false
var strikeOne=false
var haveJob=false
var demonEnding=false
var theChuteEnding=false
var convinceEnding=false
}//Variables ~
{
var stupidCount=1
var toastcount=0
var min=1
var max=10
var clothesCount=0
var time=0
var paperClips=0
var pencils=0
var papers=0
var dynamite=0
var erasers=0
var rootNum=0
var day=1
var cash=0
}//Numbers ~
{
var a1Key=false //This one's in the toilet
var frontDoorKey=false //This one's on your sink
var middleDoorKey=false //This one's under the garbage can
var mainRoomKey=false //~Not placed
var backDoorKey=false //This one's in the kitchen
var garageKey=false //This one's in your bed on day 2
var northKey=false //This one's on your desk
var ICEKey=false //~Not placed
var basementDoorKey=false //This one's on your lamp
var storageRoomKey=false //~Not placed
}//Keys ~
{
function randNum(max,min){
    return Math.floor(Math.random() * (+max - +min)) + +min;
    }
function check(){
    if(time >= 1200){
        alert("You should go to bed now.")
        }
    if(stupidCount >= 50){
        if(strikeOne == false){
        alert("Careful, you're getting stupid.")
        strikeOne = true
        }
        if(strikeOne == true){}
    }
}
function gameOver(){
   alert("--GAME OVER--")
   alert("Your stupid level was" +stupidCount+ "Your toast level was" +toastCount+ ".")
   page.close
}//This is the game over screen ~
function win(){
   if(toastMaster == true){
       alert("You got the Toast Master ending. Your stupid level was " +stupidCount+ ". Your toast level was " +toastCount+ ".")
       page.close
   }
   if(ethanWin == true){
       alert("You named yourself Ethan and won. Good job. Your stupid level was " +stupidCount+ ". Your toast level was " +toastCount+ ".")
       page.close
   }
    if(demonEnding == true){
        alert("Wow, congratulations. You had a pretty low chance of this happening, but you did it anyway. Good job. Your stupid level was " +stupidCount+ ". Your toast level was " +toastCount+ ".")
        page.close
    }
    if(theChuteEnding == true){
        alert("Well, that could have gone better. But, hey. You did something. Your stupid level was " +stupidCount+ ". Your toast level was " +toastCount+ ".")
        page.close
    }
    if(convinceEnding == true){
        alert("Well you make a friend with your landloard. Shocker. Your stupid level was " +stupidCount+ ". Your toast level was " +toastCount+ ".")
        page.close
    }
    else{
        alert("Well, you have died. But you saw the realish ending. So that's fun. Your stupid level was " +stupidCount+ ". Your toast level was " +toastCount+ ".")
        page.close
    }
}//This is the win screen ~
}//Mechanics ~
{
// theIntroduction();
// function theIntroduction(){
// //Name variable
// while (1==1){
// var name = prompt("What do you call yourself?").toLowerCase();
//     if(name == "dr. richard" || name == "richard"){
//         alert("You think you're funny, don't you? Change it.")
//         stupidCount += 1
//     }
//     else if(name == "ethan"){
//         alert("Congratulations! For being such an amazing person, YOU WIN!")
//         ethanWin = true
//         win();
//     }
//     else if(name == "kal" || name == "sterling" || name == "derolan" || name == "adin"){
//         alert("Hey, good job. Kudos to you. But seriously, no, this isn't happening.")
//         stupidCount += 1
//     }
//     else if(name == "shawn"){
//         alert("Correct")
//         break;
//     }
//     else if(name == "ben"){
//         alert("Really? Well good to see you again.")
//         alert("I'm kidding of course,")
//         alert("Gad I hate you.")
//         stupidCount += 1
//         break;
//     }
//     else if(name == "micah"){
//         alert("Really? Welcome. It's a huge surprise to have someone this gay here.")
//         break;
//     }
//     else if(name == ""){
//         alert("Blank, is not a name you dip. Try again.")
//         stupidCount += 1
//     }
//     else{
//         confirm("Wait, the, " +name+ "? I've heard so much about you!")
//         alert("I'm joking. I've never heard of you in my life. And with luck I'll never hear of you again.")
//         break;
//     }
// }
// //Place variable
// while (1==1){
// var place = prompt("Here's an interesting question for you, if you could go anywhere in the world, where would it be?").toLowerCase();
//     if(place == "vermont" || place == "rutland" || place == "rutland city" || place == "rutland city vermont"){
//         alert("Alright then, let's get started.")
//         break;
//     }
//     else if(place == "thorim"){
//         alert("Well...")
//         alert("I did say in the world, but eh, whatever. Thorim is fine.")
//         break;
//     }
//     else if(place == ""){
//         alert("How many times do I have to tell you? Blank, is not, a place. Try again... Again.")
//         stupidCount += 1
//     }
//     else if(place == name){
//         alert("No, that's your name.")
//         stupidCount += 1
//     }
//     else{
//         alert("Really, " +place+ ", that's interesting... I've heard it's grubby there.")
//         alert("Well " +place+ " is nice and all, but I'm going to put you in... oh, Rutland City Vermont. How's that grab you?")
//         alert("Never mind, I don't actually care.")
//         break;
//     }
// }
// //Gender variable
// while (1==1){
// var gender = prompt("Are you a boy or a girl? This one's rather important.").toLocaleLowerCase();
//     if(gender == "boy"){
//         alert("Good, good, this makes things easier.")
//         break;
//     }
//     else if(gender == "girl"){
//         confirm("Are you sure?")
//         alert("...")
//         confirm("You're sure?")
//         alert("...")
//         confirm("Are you quite sure? Because it's not too late to change that.")
//         alert("Really, you're that sure of yourself...")
//         alert("Well then fine, have it your way, but I'll have you know that this will be more complicated than it should, and maybe even a bit awkward in places.")
//         break;
//     }
//     else{
//         alert("If you think you're being funny, no one is laughing.")
//         stupidCount += 1
//     }
// }
// alert("Good, glad we knocked that one out. Now one last one before we can continue to the story.")
// //Job variable
// while (1==1){
// var job = prompt("What do you do for your meager living? Do you work at a grocery store? Do you work at a hospital? Are you a scientist? Or do you do something else?").toLowerCase();
//     if(job == "grocer" || job == "Grocer"){
//         alert("Good choice. You must like vegetables.")
//         alert("That's not an observation or anything, that's just a personality trait you have now.")
//         break;
//     }
// else if(job == "doctor"){
//     alert("Sorry, that ones already taken. Try again bucko.")
// }
// else if(job == "nurse"){
//     alert("Neat, that means your more of a people person or something. I don't know.")
//     break;
// }
// else if(job == "scientist" || job == "Scientist"){
//     alert("Very good...")
//     break;
// }
// else if(job == ""){
//     alert("Blank is not a job. Try again.")
//     stupidCount += 1
// }
// else if(job == name){
//     alert("No, that's your name.")
//     stupidCount += 1
// }
// else if(job == place){
//     alert("No, that's the grubby place.")
//     stupidCount += 1
// }
// else{
//     alert("Cool, you're a " +job+ ". That might not be a job, but whatever, it doesn't have a lot to do with anything anyway.")
//     break;
// }

// }

// alert("Alright, that seems to be everything. And correct me if I'm wrong, but you're a " +gender+ ", that works as a " +job+ ", and your name is " +name+ ".")
// alert("That's not a question, that's statement. You can't change it.")
// alert("Let's get started,")

// alert("You have moved to Rutland City Vermont. You think Vermont just seems like a nice place to go.")
// if(name == "shawn" && place == "thorim" && gender == "boy" && job == "scientist"){
// alert("That's right, you don't get to go home. Not yet. So stop whining.")
// alert("And you've been offered a job there. Your benefactor is a wealthy gentleman doctor.")
// }
// alert("You've decided to take up a vacancy in a large house. You don't really know who it is you're moving in with, but other than that, the rent is pretty cheap.")
// alert("You arrive in the middle of the night, and awake the next morning.")
// }
}//The Introduction ~
function theIntroduction(){
    name = "shawn"
    place = "thorim"
    gender = "boy"
    job = "scientist"
}//Fake Introduction ~
while(1==1){
hall1();
time = 360
function hall1(){
    check();
	if(gettingReady == true){
		alert("To the kitchen, double quick.")
	}
   if(inSearch == true){
       alert("Yes, yes, you're getting close now, up the stairs. I'm sure. Hope you've got the key...")
   }
   var q0 = prompt("You're in the hall outside of your room. To the south, there are some stairs. To the west are two doors. Do you; \n -Go North? \n -Go East? \n -Go South up the stairs? \n -Go West?").toLowerCase();
       if(q0 == "north" || q0 == "n"){
           alert("You run into a wall and feel stupid.")
           time += 1
           stupidCount += 1
           hall1();
       }
       else if(q0 == "east" || q0 == "e"){
           alert("You run into a wall and feel stupid.")
           time += 1
           stupidCount += 1
           hall1();
       }
       else if(q0 == "south" || q0 == "s"){
           time += 1
           mainToA1Stairs();
       }
       else if(q0 == "west" || q0 == "w"){
           var q1 = prompt("Which door? \n -Your Room? \n -Or the Entry?").toLowerCase();
               if(q1 == "room"){
                   time += 1
                   yourRoom();
               }
               else if(q1 == "entry"){
                   time += 1
                   entryWay();
               }
               else{
                   alert("I don't understand.")
                   time += 1
                   stupidCount += 1
                   hall1();
               }
       }
       else{
           alert("I don't understand.")
           time += 1
           stupidCount += 1
           hall1();
       }
  
}//This is the first hall ~
function mainToA1Stairs(){
    check();
   if(inSearch == true){
       alert("You're really getting close to him now, just open that door and he'll be somewhere around here.")
   }
   var q2 = prompt("You're at the top of some stairs. There is a door to the north here. And the way you came up is behind you to the south. Do you; \n -Go through the door to the north? \n -Or go back down the stairs?").toLowerCase();
       if(q2 == "door" || q2 == "north" || q2 == "n" || q2 == "open" || q2 == "open door"){
           if(a1Key == false){
               alert("The Door is locked.")
               time += 1
               mainToA1Stairs();
           }
           else if(a1Key==true){
               if(a1KeyDoorUnLocked == false){
                   alert("You unlock the door.")
                   a1KeyDoorUnLocked = true
                   time += 2
                   a1Hall();
               }
               else if(a1KeyDoorUnLocked == true){
                   time += 1
                   a1Hall();
               }
           }
       }
       else if(q2 == "down" || q2 == "d" || q2 == "south" || q2 == "s"){
           alert("You go downstairs.")
           time += 1
           hall1();
       }
       else{
           alert("I recommend using your hands when typing.")
           time += 1
           stupidCount += 1
           mainToA1Stairs();
       }
}//These are the stairs from the main level to A1 ~
function yourRoom(){
    check();
   var q3 = prompt("This is your room. There is a bed, a desk, a lamp, a dresser, and a door to the south and the east. Do you; \n -Go to bed? \n -Go to your desk? \n -Go over to your lamp? \n -Go through the door to the South? \n -Or go to your Dresser? \n -Leave?").toLowerCase();
       if(q3 == "bed"){
           yourBed();
       }
       else if(q3 == "desk"){
           yourDesk();
       }
       else if(q3 == "lamp"){
           yourLamp();
       }
       else if(q3 == "door" || q3 == "south" || q3 == "s"){
           yourBathroom();
       }
       else if (q3 == "leave" || q3 == "east" || q3 == "e"){
           hall1();
       }
       else if(q3 == "dresser"){
           yourDresser();
       }
       else{
           alert("Look, this isn't difficult, just speak words.")
           stupidCount += 1
           yourRoom();
       }
}//This is your room ~
function entryWay(){
    check();
   if(inSearch == true){
       alert("Now in the entryway, you feel that he went through the door to your room, just a suspicion though...")
   }
   var q4 = prompt("This is the Entryway. It's got two tables with decorations, a front door to the west, a coat rack, a little thing that umbrellas should go in, and the door you came through. And the three doors on the east wall. Do you; \n -Look at the Tables? \n -Go to the Front Door? \n -Go to the Coat Rack? \n -Take a coat? \n -Go to the thing? \n -Or go to the doors to the East?").toLowerCase();
       if(q4 == "table" || q4 == "tables"){
           alert("They're tables, honestly, what did you expect? Oh, you're probably wondering about the decorations.")
           alert("Well, they're just decorations. Nothing special. Like, you know, flowers and thing. Normal stuff. Nothing worth taking note about.")
           time += 4
           entryWay();
       }
       else if(q4 == "front door" || q4 == "front" || q4 == "w" || q4 =="west"){
           if(frontDoorKey == true){
               if(frontDoorUnlocked == false){
                   alert("You unlock the door.")
                   frontDoorUnlocked = true
                   time += 2
                   westYard();
               }
               else if(frontDoorUnlocked == true){
                   time += 1
                   westYard();
               }
           }
           if(frontDoorKey == false){
               alert("Well, that's funny, the front door is locked from the inside...")
               time += 1
               entryWay();
           }
       }
       else if(q4 == "coat" || q4 == "rack" || q4 == "coat rack" || q4 == "coatrack" || q4 == "coat-rack"){
           alert("It's just a coat rack. As it happens, none of the coats are yours.")
           time += 2
           entryWay();
       }
       else if(q4 == "take coat"){
           if(haveCoat == false){
               alert("Well, that's not very nice, that coat wasn't yours. But now it is. Fairs fair.")
               haveCoat=true
               stupidCount += 1
               time += 2
               entryWay();
           }
           else if(haveCoat == true){
               alert("Earlier, when I insinuated that there was more than one coat, I was lying. There was just the one that you took.")
               time += 1
               entryWay();
           }
       }
       else if(q4 == "thing" || q4 == "umbrella" || q4 == "umbrella thing" || q4 == "the thing"){
           if(day == 2){
                if(theThing == false){
                    alert("Yeah, I don't know what it's called either. But now that you're looking at it, it seems as if there's something in the bottom...")
                    var q5 = prompt("Do you take it? \n -Yes \n -No").toLowerCase();
                        if(q5 == "yes" || q5 == "y"){
                            alert("Now you have... A thing...")
                            theThing = true
                            time += 3
                            if(name == "shawn" && place == "thorim" && gender == "boy" && job == "scientist"){
                                alert("It's an identifier. That's what the thing is... Neat.")
                                entryWay();
                            }
                            entryWay();
                        }
                        else if(q5 == "no" || q5 == "n"){
                            alert("Good choice. It 100% would have ended your miserable life.")
                            time += 1
                            entryWay();
                        }
                        else{
                            alert("I believe I asked you a yes, or no question.")
                            stupidCount += 1
                            time += 1
                            entryWay();
                        }
                   }
                if(theThing == true){
                    alert("It's just an umbrella stand. Oh, that's what it's called. Huh.")
                    time += 1
                    entryWay();
                }
            }
       if(day == 1){
           alert("It's just an umbrella stand. Oh, that's what it's called. Huh...")
           time += 1
           entryWay();
       }
       }
       else if(q4 == "door" || q4 == "east" || q4 == "e"){
           var q6 = prompt("Which door? \n -The Front? \n -The South? That's the one that goes to your room and other stuff. \n -The Middle? \n -Or the North?").toLowerCase();
               if(q6 == "front"){
                   if(frontDoorKey == true){
                       if(frontDoorUnlocked == false){
                           alert("You unlock the door.")
                           time += 2
                           frontDoorUnlocked = true
                           westYard();
                       }
                       if(frontDoorUnlocked == true){
                           time += 1
                           westYard();
                       }
                   }
                   else if(frontDoorKey == false){
                       alert("The door is locked.")
                       time += 1
                       stupidCount += 1
                       entryWay();
                   }
               }
               else if(q6 == "south" || q6 == "s"){
                   time += 1
                   hall1();
               }
               else if(q6 == "middle"){
                    if(middleDoorKey == true){
                       if(middleDoorUnlocked == false){
                           alert("You unlock the door.")
                           middleDoorUnlocked = true
                           time += 2
                           liveKitchen();
                       }
                       if(middleDoorUnlocked == true){
                           time += 1
                           liveKitchen();
                       }
                   }
                   if(middleDoorKey == false){
                       alert("The door is locked.")
                       stupidCount += 1
                       time += 1
                       entryWay();
                   }
               }
               else if(q6 == "north" || q6 == "n"){
                  if(hall2DoorUnlocked == false){
                      if(northKey == true){
                          alert("You unlock the door")
                          time += 2
                          hall2DoorUnlocked = true
                          hall2();
                      }
                      if(hall2DoorUnlocked == true){
                          time += 1
                          hall2();
                      }
                  }
                  if(northKey == false){
                      alert("The door is locked.")
                      time += 1
                      stupidCount += 1
                      entryWay();
                  }
               }
               else{
                   alert("I don't understand.")
                   time += 1
                   stupidCount += 1
                   entryWay();
               }
    }
}//This is the entryway ~
function a1Hall(){
    check();
   if(inSearch == true){
       alert("YES YES! He's around here somewhere! The Library! That's gotta be it! Any second now...")
   }
   var q16 = prompt("You are in the hall upstairs. There's an archway a little ways to the east, a door on the west wall, and another one further along. Oh, and the table at the end of the hall. Do you; \n -Go through the archway? \n -Go through one of the doors on the west wall? \n -Inspect the table? \n -Or do you go back downstairs?").toLowerCase();
   if(q16 == "archway" || q16 == "east" || q16 == "e"){
       time += 1
       theLibrary();
   }
   else if(q16 == "door" || q16 == "west" || q16 == "w")
       var q17 = prompt("Which door? \n -The left one? \n -Or the right one?").toLowerCase();
           if(q17 == "left" || q17 == "l"){
               if(mainRoomKey==false){
                   alert("The door is quite locked.")
                   time += 1
                   a1Hall();
               }
               if(mainRoomKey==true){
                   alert("Hey, where'd you get that key?")
                   time += 1
                   mainRoom();
               }
           }
           else if(q17 == "right"){
               time += 1
               a1ToA2Stairs();
           }
   else if(q16 == "table" || q16 == "north" || q16 == "n"){
       alert("It's just a table, and doesn't have anything on it.")
       time += 2
       a1Hall();
   }
   else if(q16 == "back down" || q16 == "back" || q16 == "down"){
       time += 1
       hall1();
   }
   else{
       alert("That's a negative chief.")
       time += 1
       stupidCount += 1
       a1Hall();
   }
}//This is the large hall in A1 ~
function yourBed(){
    check();
    if(garageKey == false){
        alert("Hey, there's a key in the bed. Cool, I guess. Now you have another key.")
        garageKey = true
        yourRoom();
        }
    else{
        if(time < 1200){
            alert("It's day, and you're in bed. Get out.")
            stupidCount += 1
            time += 2
            yourRoom();
        }
        if(time >= 1201){
            alert("You go to bed because it is night, and you are tired.")
            day += 1
            justWokeUp = true
            morningRoutine();
        }
    }
}//This is your bed ~ 
function yourDesk(){
    check();
    var q10 = prompt("This is your desk. Do you; \n -Leave the desk? \n -Take the key sitting on the desk? \n -Stay.").toLowerCase();
        if(q10 == "leave"){
           time += 1
            yourRoom();
        }
        else if(q10 == "key" || q10 == "take" || q10 == "take key"){
            if(northKey == false){
                alert("You take the key.")
                northKey = true
                time += 1
                yourDesk();
           }
           if(northKey == true){
                alert("You already have the key.")
               time += 1
                stupidCount += 1
                yourDesk();
           }
        }
        else if(q10 == "stay"){
            alert("You don't leave your desk, like the dingus you are.")
            time += 2
            yourDesk();
        }
        else{
            alert("I DO NOT COMPREHEND.")
            time += 1
            stupidCount += 1
            yourDesk();
            }
}//This is your desk ~
function yourLamp(){
    check();
   var q10 = prompt("This is your lamp. It's a lamp. Do you return to your room? \n -Yes? \n -No? \n -Take the key.").toLowerCase();
       if(q10 == "yes" || q10 == "y"){
           time += 1
           yourRoom();
       }
       else if(q10 == "no" || q10 == "n"){
           alert("You stay at the lamp.")
           time += 1
           yourLamp();
       }
        else if(q10 == "take the key" || q10 == "take key" || q10 == "key" || q10 == "the key"){
            if(basementDoorKey == false){
                alert("You take the key.")
                time += 1
                basementDoorKey = true
                yourLamp();
            }
            if(basementDoorKey == true){
                alert("You already have that key.")
                stupidCount += 1
                time += 1
                yourLamp();
            }
        }
       else{
           alert("I DON'T UNDERSTAND.")
           stupidCount += 1
           time += 1
           yourLamp();
       }
}//This is your lamp ~ !KEEP ADDING TIME HERE!
function yourBathroom(){
    check();
   var q11 = prompt("This is your Bathroom. Its a very functional bathroom. In the sense that it is in fact, a bathroom. Suffice it to say, this is a bathroom. There is a Shower, a toilet, a sink, and a garbage can. Do you; \n -Go over to the shower? \n -Go over the the toilet? \n -Go over to the sink? \n -Go to the garbage can. \n -Leave?").toLowerCase();
       if(q11 == "shower"){
		   if(gettingReady == true && tookShower == false){
			   alert("You get in the shower and take a shower. You have showered in the shower.")
			   tookShower = true
			   morningRoutine();
		   }
		   else{
			alert("You go into the shower. With your clothes on.")
			yourShower();
		   }
       }
       else if(q11 == "toilet"){
           alert("You go over to your toilet. And sit on it. That's what going over to it would imply.")
           yourToilet();
       }
       else if(q11 == "sink"){
           alert("You go over to the sink.")
           yourSink();
       }
       else if(q11 == "garbage" || q11 == "can" || q11 == "garbage can"){
           alert("You walk over to your garbage can.")
           yourGarbageCan();
       }
       else if(q11 == ""){
           alert("You did not type anything.")
           stupidCount += 1
           yourBathroom();
       }
       else if(q11 == "leave"){
           alert("You leave the bathroom, you used to not be able to do that, but now you can.")
           yourRoom();
       }
       else{
           alert("I'm afraid I don't understand.")
           stupidCount += 1
           yourBathroom();
       }
}//This is your Bathroom ~
function yourDresser(){
    check();
    var q12 = prompt("This is your dresser. At this point, I feel it important to tell you that you are in fact, wearing clothes. Do you; \n -Take some clothes? \n -Go back?").toLowerCase();
        if(q12 == "take some clothes" || q12 == "take clothes" || q12 == "take" || q12 == "clothes"){
            if(clothesCount == 0){
                alert("You take some clothes. Now you have " +clothesCount+ " set of clothes.")
            }
            if(clothesCount >= 1){
                alert("You take some more clothes. Now you have " +clothesCount+ " sets of clothes.")
                stupidCount += 1
            }
        }
   
}//This is your Dresser ~
function liveKitchen(){
    check();
   var q19 = prompt("You have now entered the large and spacious living-room. It also happens to be the kitchen. There are some tables, couches, you know. Stuff. You're currently in the living-room portion. In the south east corner is a door that presumably leads outside. Do you; \n -Go into the Kitchen? \n -Sit on one of the couches and watch TV? \n -Sit at the table and wait for some food? \n -Go through the door to the outside? \n -Or do you leave through the door you came through to the west?").toLowerCase();
       if(q19 == "go into the kitchen" || q19 == "kitchen"){
           alert("You go into the Kitchen.")
           theKitchen();
       }
       else if(q19 == "sit on couch" || q19 == "couch" || q19 == "tv" || q19 == "watch tv"){
           alert("You go over to the couch and sit on it.")
           theCouch();
       }
       else if(q19 == "table" || q19 == "sit at table" || q19 == "wait for food"){
           alert("You go sit at the table.")
           kitchenTable();
       }
       else if(q19 == "outside" || q19 == "escape" || q19 == "backdoor"){
           if(backDoorKey==false){
               alert("Huh, that door's locked. Shocker.")
               liveKitchen();
           }
           if(backDoorKey==true){
               alert("This door is unlocked. Or it is now. Because you happen to have the key.")
               eastYard();
           }
       }
       else if(q19 == "leave" || q19 == "west" || q19 == "w"){
           alert("You go back into the entryway.")
           entryWay();
       }
       else{
           alert("Hey, you did not, in fact, type anything coherent in the prompt box. Try again.")
           liveKitchen();
       }
}//This is the Living-Room and Kitchen area thing ~
function yourShower(){
    check();
   if(tookShower == false){
       var q18 = prompt("This is your shower. Do you want to take a shower? \n -Yes? \n -No?")
           if(q18 == "yes" || q18 == "y"){
               alert("You take a shower. But you didn't take off your clohtes, so now you're really wet. At least you're clean.")
               tookShower = true
               stupidCount += 5
               yourBathroom();
           }
           else{
               alert("You did not take a shower. But you still can.")
               yourBathroom();
       }
   }
   else if(tookShower == true){
       var q18 = prompt("You already took a shower. But do you want to take another shower?")
            if(q18 == "yes" || q18 == "y"){
               alert("You take another shower. But you didn't take off your clohtes, so now you're really, really wet. At least you're really clean.")
               tookShowerAgain = true
               stupidCount += 10
               yourBathroom();
           }
           else{
               alert("You did not take another shower. Because you're not, i mean, that, stupid.")
               yourBathroom();
       }
   }
}//This is your Shower ~
function yourToilet(){
    check();
   alert("You are now on your toilet, just sitting there.")
   var q14 = prompt("Do you, \n -Go back to the bathroom? \n -Stay? \n -Inspect the toilet?").toLowerCase();
       if(q14 == "go back to the bathrooom" || q14 == "go back" || q14 == "bathroom" || q14 == "back"){
           alert("You get up off of the toilet, and go back to the bathroom.")
           yourBathroom();
       }
       else if(q14 == "stay"){
           alert("You stay on the toilet and sit there.")
           yourToilet();
       }
       else if(q14 == "inspect the toilet" || q14 == "inspect"){
           if(a1Key == false){
               alert("Upon closer inspection, you realize that there is in fact, a key in the toilet.")
               var q15 = prompt("Weird how someone would put a key in the toilet... Do you; \n -Take it? \n -Be a normal human being and not take it.").toLowerCase();
                   if(q15 == "take it" || q15 == "take key" || q15 == "key" || q15 == "take"){
                       alert("You reach your hand into the toilet. Lucky for you it's clean, and hasn't seen a lot of use. You now have a key. You're still gross. And still on the toilet.")
                       a1Key = true
                       yourToilet();
                   }
               }
               else if(a1Key == true){
                   alert("The toilet is still a toilet. There was a key, but now you have it.")
                   alert("...")
                   alert("That sounded pretty neat.")
                   alert("I should write a song.")
                   stupidCount += 1
                   yourToilet();
               }      
           else{
               alert("I'll take that as a no, good choice too.")
               if(name == "shawn" && gender == "boy" && job == "scientist" && place == "thorim"){
                   alert("And you're not human by the way.")
                   stupidCount += 1
               yourToilet();
               }
           }
       }
       else{
           alert("Do what I told you. Now.")
           stupidCount += 1
           yourToilet();
       }
}//This is your Toilet ~
function yourSink(){
    check();
   var q20 = prompt("This is your mirror and also your sink. You have a toothbrush here. Do you; \n -Look in the mirror? \n -Brush your teeth? \n -Take the key that's covered in toothpaste? \n -Shave? \n -Or go back the the main bathroom?").toLowerCase();
       if(q20 == "look" || q20 == "mirror"){
           alert("You look in the mirror and, AUGH! Boy are you ugly!")
           if(name == "shawn" && place == "thorim" && gender == "boy" && job == "scientist"){
               alert("And your head is a stupid square shape.")
           }
           yourSink();
       }
       else if(q20 == "brush teeth" || q20 == "brush" || q20 == "teeth"){
		   if(gettingReady == true && brushedTeeth == false){
			   alert("Good job. You have brushed your teeth chompers.")
			   brushedTeeth = true
               morningRoutine();
		   }
		   else{
			alert("You brush your teeth.")
			alert("...")
			alert("Wow, you're pretty good at brushing your teeth.")
			brushedTeeth = true
			yourSink();
		   }
       }
       else if(q20 == "key" || q20 == "take key" || q20 == "take"){
           alert("You take the key. It's sticky, but eh, you take it anyway.")
           frontDoorKey = true
           yourSink();
       }
	   else if(q20 == "shave"){
		   if(gettingReady == true){
			   alert("You shave your filthy face. Depending. Now you are ready for the day. Time for breakfast.")
			   breakfast();
		   }
		   else{
			alert("You shave your face. Good job.")
			shaved = true
			yourSink();
		   }
	   }
       else if(q20 == "leave" || q20 == "back" || q20 == "bathroom" || q20 == "main"){
           alert("You go back to the main portion of the bathroom.")
           yourBathroom();
       }
       else{
           alert("HmWha? Did you say something?")
           stupidCount += 1
           yourSink();
       }
   }//This is your sink. And mirror ~
function yourGarbageCan(){
    check();
   var q24 = prompt("This is your garbage can. It has nothing in it, seeing as you just arrived. Do you; \n -Go back to your bathroom? \n -Lift up the garbage can? \n -Or do a funny dance?").toLowerCase();
       if(q24 == "back" || q24 == "bathroom"){
           alert("You stop looking at your garbage can and go back to your bathroom.")
           yourBathroom();
       }
       else if(q24 == "lift up" || q24 == "lift" || q24 == "can" || q24 == "garbage can" || q24 == "garbage can"){
           if(middleDoorKey == false){
               alert("You lift up the garbage can. Underneath it is a key. You seem to keep finding these in weird places... It's as if the landlord hates you...")
               middleDoorKey = true
               yourGarbageCan();
           }
           else if(middleDoorKey == true){
               alert("Lifting up the garbage can reveals tiled floor. You already have the key..")
               stupidCount +=1
               yourGarbageCan();
           }
       }
       else if(q24 == "dance" || q24 == "do dance" || q24 == "funny dance"){
           alert("You do a funny dance, luckily for you, no one was watching.")
           stupidCount += 1
           yourGarbageCan();
       }
       else{
           alert("I don't understand.")
           stupidCount += 1
           yourGarbageCan();
       }
}//This is your Garbage Can ~
function theLibrary(){
    check();
   if(inSearch == true && heJustTalked == false){
       alert("YES! There he is! Just sitting in that chair. Reading a book.")
       if(fireGoing == true){
           alert("Just sitting in front of the fire you made.")
       }
       inSearch = false
   }
   if(drRichardHere == true && heJustTalked == false){
       alert("He turns and looks over his shoulder at you.")
       if(name == "shawn" && place == "thorim" && gender == "boy" && job == "scientist"){
           alert("\"Ah yes, hello Shawn... I've been expecting you...\"")
//Continue this as the actual story
       }
       else if(name != "shawn"){
           var q25 = prompt("\"Yes? What do you want Bailey?\" he says calmly. What do you reply? \n 1 -\"My name is not Bailey.\" \n 2 -\"Uh,\" \n 3 -\"I want to talk.\" \n 4 -Sit down and read a book.")
               if(q25 == "1"){
                   var newName = prompt("\"My name isn't Bailey,\" you tell him hesitantly. He looks over his shoulder at you. \"Oh? Then what is it?\"")
                   alert("" +newName+ ", you tell him.")
                   alert("\"Well, that's very nice, Burton, run along to bed now.\" You don't like the condescending tone in his voice, but that doesn't stop you from going to bed, you are tired after all...")
                   day1 = false
                   heJustTalked = true
                   day2 = true
                   justWokeUp = true
                   yourRoom();
               }
               else if(q25 == "2"){
                   if(stupidCount == 0){
                       alert("\"Well, you're not stupid, so that's good.\" He says. He gets up and leaves. You watch him go across the hall and into his room. You go to bed as well.")
                   }
                   else if(stupidCount >= 5){
                       alert("\"You're not very bright are you? Don't ruin my house.\" He gets up and goes to bed. You go to bed.")
                   }
                   else if(stupidCount >= 20){
                       alert("\"Wow, you're really stupid? Aren't you?\" He gets up and leaves. You go to bed.")
                   }
                   else if(stupidCount >= 50){
                       alert("\"Okay, wow, you're not a good rentor, I'm going to have to evict you.\"")
                       alert("You have been evicted.")
                       gameOver();
                   }
                   else if(stupidCount >= 100){
                       alert("\"You're too stupid to live.\" He shoots you dead. You have died.")
                       gameOver();
                   }
                   day1 = false
                   heJustTalked = true
                   day2 = true
                   justWokeUp = true
                   yourRoom();
               }
               else if(q25 == "3"){
                   var topic = prompt("\"What do you want to talk about Bart?\" He puts his book down, and turns in his chair to face you.").toLowerCase();
                       alert("\"Well I don't know anything about" +topic+ "But I do know that I'm tired, good night.\"")
                       alert("He brushes past you, and enters his room with a key. Feeling tired, you decide to turn in as well.")
                       day1 = false
                       day2 = true
                       heJustTalked = true
                       justWokeUp = true
                       yourRoom();
               }
               else if(q25 == "4"){
                   var q31 =prompt("You sit down to read a book. There's an awkward silence. He looks over the brim of his book at you. Once you catch his eyes, he goes back to reading his book. After a while he tires of your presence and heads off to bed. Do you do the same? \n -Yes. \n -No.").toLowerCase();
                       if(q31 == "yes" || q31 == "y"){
                           alert("You go to bed.")
                           day1 = false
                           day2 = true
                           heJustTalked = true
                           justWokeUp = true
                           yourRoom();
                       }
                       else if(q31 == "no" || q31 == "n"){
                           alert("You don't go to bed. It is now night.")
                           isNight = true
                           heJustTalked = true
                           theLibrary();
                       }
               }
               else{
                   alert("He turns to face you, \"I don't understand.\" He stands up, brushes past you, and goes to his room. Presumably to sleep.")
                   alert("You feel that you're tired, and decide to go to bed yourself.")
                   day1 = false
                   day2 = true
                   heJustTalked = true
                   justWokeUp = true
                   yourRoom();
               }
       }
   }
   else if(drRichardHere == true && day1 == true && heJustTalked == true){
       alert("Your landlord is still here. Just sitting there. Reading.")
   }
   var q21 = prompt("Hey, this is the Library. It's cool, it's got some books and things. Do you; \n -Sit in a chair and read some books? \n -Start a fire in the fire place? \n -Move the rug? \n -Or do you leave?").toLowerCase();
       if(q21 == "sit and read" || q21 == "sit" || q21 == "read" || q21 == "read a book"){
           if(randNum(max,min) == 1){
               alert("You open a book titled; \"The Gentleman's Guide to Ruling the World.\" It's not terrible interesting.")
           }
           else if(randNum(max,min) == 2){
               alert("You open a book titled; \"Quantum Mechanics, a Rudimentary Guide.\" You don't understand it's concepts.")
           }
           else if(randNum(max,min) == 3){
               alert("You open a book titled; \"So You Want to Build a Rocket?\" It is about rockets. And building them.")
           }
           else if(randNum(max,min) == 4){
               alert("You open a book titled; \"Our Government's Basic Flaws, & How to Abuse Them.\" It doesn't sound legal, even though it says it is.")
           }
           else if(randNum(max,min) == 5){
               alert("You open a book titled; \"What The Don't Teach You Ever\". It's a rather backwards book.")
           }
           else if(randNum(max,min) == 6){
               alert("You open a book titled; \"@*&?&!?//+-=---_7__\",.[ It _-+_@#*?!`~")
           }
           else if(randNum(max,min) == 7){
               alert("You open a book titled; \"How To Raise The Dead. At Home!\" Nice.")
           }
           else if(randNum(max,min)== 8){
               alert("You open a book titled; \"How To Get Rich By Stealing From Those That Have Gotten Rich Honestly\" This one is most definetly not legal.")
           }
           else if(randNum(max,min) == 9){
               alert("You open a book titled; \"Why You Don't Want Children, 30 Accounts From Real Life\".")
           }
           else if(randNum(max,min) == 10){
               alert("You open a book titled; \"Mein Kampf\". It sounds familiar...")
           }
           else{
               alert("You don't read a book, even though you wanted to. Eh.")
           }
           theLibrary();
       }
       else if(q21 == "start a fire" || q21 == "fire" || q21 == "start fire"){
           if(fireGoing == false){
           alert("You go over the the large stone fire place in the center of the east wall. It has the proper stuff to light a fire. You then proceed to light a fire.")
               fireGoing = true
               theLibrary();
           }
           if(fireGoing == true){
               alert("There's already a fire in the fireplace.")
               stupidCount += 1
               theLibrary();
           }
       }
       else if(q21 == "move rug" || q21 == "rug"){
           alert("You move the rug. Nothing changes, underneath the rug is more carpet. Now we have a moved rug.")
           rugMoved = true
           stupidCount += 1
           theLibrary();
       }
       else if(q21 == "leave"){
           alert("You leave the library and go back out into the hall.")
           a1Hall();
       }
       else{
           alert("I don't understand.")
           stupidCount += 1
           theLibrary();
       }
}//This is the Library ~
function mainRoom(){
    check();
   alert("You aren't supposed to be here.")
   page.close
}//This is Dr. Richard's room and it isn't done yet. If ever ~
function westYard(){
    check();
   var q33 = prompt("You are now in the front yard. You can see across the street and there are a couple of houses. And some forest. Oh yeah, and the door you came in through to the east. The front door that is. Do you; \n -Cross the street? \n -Go into the forest? \n -Go back inside? \n -Go around the house to the North? \n -Or go around the house to the South? \n -Or go on a walk?").toLowerCase();
       if(q33 == "cross" || q33 == "street" || q33 == "cross street"){
           if(randNum(max,min) == 3){
               alert("Not looking where you were going, you have died.")
               gameOver();
           }
           else{
           otherSide();
           }
       }
       else if(q33 == "forest" || q33 == "go into forest" || q33 == "i want to get eaten by wild animals"){
               if(isNight == true){
                   alert("It being night, you are eaten by wild animals or something. You have died.")
                   gameOver();
               }
               if(isNight == false){
                   alert("You go into the forest. I don't know why. You might get eaten or something. By what? I don't know... Uh, a wild animal or something. Or maybe a domestic animal.")
                   theForest();
               }
       }
       else if(q33 == "back" || q33 == "inside" || q33 == "leave"){
           alert("Not being able to handle the stress of normal life, you head back inside.")
           entryWay();
       } 
       else if(q33 == "go around north" || q33 == "around north" || q33 == "north"){
           alert("You go around the house to the north yard area.")
           northYard();
       }
       else if(q33 == "go around south" || q33 == "around south" || q33 == "south"){
           alert("You have gone around the house to the south yard area.")
           southYard();
       }
        else if(q33 == "go on a walk" || q33 == "walk"){
            alert("You go on a walk.")
            theWalk();
        }
       else{
           alert("I don't understand.")
           stupidCount += 1
           westYard();
       }
}//This is Outside, the front yard, or west yard ~
function hall2(){
    check();
    var q50 = prompt("You are in a small hallway identical to the one outside your room. Do you; \n -Go through one of the doors to the west? \n -Or go down the stairs?").toLowerCase();
        if(q50 == "west" || q50 == "doors"){
            var q51 = prompt("Which door? \n -Entr. \n -Office").toLowerCase();
                if(q51 == "entry"){
                    entryWay();
                }
                else if(q51 == "office"){
                    theOffice();
                }
                else{
                    alert("I don't understand.")
                    stupidCount += 1
                    hall2();
                }
        }
        else if(q50 == "stairs" || q50 == "down"){
            basement1Hallway();
        }
        else{
            alert("I don't understand.")
            hall2();
        }
}//This is the second hall. I suppose... ~
function theKitchen(){
    check();
   var q22 = prompt("This is the kitchen. It has all the proper things that a kitchen should have. Do you; \n -Wash some dishes? \n -Make some toast? \n -Make some food that isn't toast? \n -Search the cupboards? \n -Take the kay?\n -Or leave the kitchen?").toLowerCase();
       if(q22 == "wash dishes" || q22 == "wash" || q22 == "dishes"){
           if(dishesWashed == false){
               alert("How very kind of you. This won't lower the rent of course.")
               dishesWashed = true
               theKitchen();
           }
           if(dishesWashed == true){
               alert("You already washed the dishes.")
               stupidCount += 1
               theKitchen();
           }
       }
       else if(q22 == "make toast" || q22 == "toast"){
           if(toastCount >= 100){
               alert("The floor, is now covered in toast. You must like toast, A LOT. But, since toast is so good, and you have so much, you win!")
               toastMaster = true
               win();
           }
           else if(toastCount >= 10){
               alert("Wow, that's a lot of toast... you must like toast. But you make moare. You have " +toastCount+ " toasts.")
               toastCount +=1
               theKitchen();
           }
           else if(toastCount == 0){
               alert("You make some toast.")
               toastCount += 1
               theKitchen();
           }
           else if(toastCount >= 1){
               alert("You make more toast.")
               toastCount += 1
               theKitchen();
           }
       }
       else if(q22 == "search cupboards" || q22 == "cupboards"){
           alert("You look through the cupboards in search of food. Finding food, you now have some food.")
           haveFood = true
           theKitchen();
       }
       else if(q22 == "make food" || q22 == "food"){
           if(haveFood == false){
               alert("You don't have the preliminary food to make more actual food with. Try searching the cupboards.")
               theKitchen();
           }
           else if(haveFood == true){
               if(actualFood == false){
                   alert("You make some more advanced, actual food.")
                   actualFood = true
                   theKitchen();
               }
               if(actualFood == true){
                   if(haveFood == false){
                       alert("You need some more food to make any more food. Not like that makes any sense though. Just search the cupboards again.")
                       theKitchen();
                   }
                   if(haveFood == true){
                       alert("Having the proper \"Stuffs\" you make some more good food.")
                       moreActualFood = true
                       theKitchen();
                   }
               }
           }
       }
       else if(q22 == "leave"){
           alert("You leave the kitchen and go into the living room.")
           liveKitchen();
       }
        else if(q22 == "take the key" || q22 == "take key" || q22 == "the key" || q22 == "key"){
            if(backDoorKey == false){
                alert("You take the key.")
                backDoorKey = true
                theKitchen();
            }
            if(backDoorKey == true){
                alert("You already have the key. Someone should fix that.")
                stupidCount += 1
                theKitchen();
            }
        }
       else{
           alert("I don't understand.")
           stupidCount += 1
           theKitchen();
       }
}//This is the kitchen ~
function theCouch(){
    check();
   while(1==1){
   alert("You sit on the couch. My but it's comfortable. You then grab the remote off of the coffee table in front of you. You take notice of it's distinct lack of coffee, and turn on the TV.")
   alert("Bored, you flip throuhgh the dull local television. After a while, you hear the front door open, and then close. You turn to look over the couch at the door to the entryway. But you don't see anything.")
   alert("Once you turn back to the TV, the door to the entryway opens, and in walks your landlord. He yells at you, drops his stuff, pulls out a gun, and points it at you.")
   alert("\"WHAT ARE YOU DOING IN MY HOUSE!?\"")
   var q23 = prompt("Do you say; \n 1 -\"I'm the rentor\" \n 2 -*scream and hide* \n 3 -\"Big Smoke, it's me!\"")
       if(q23 == "1"){
           alert("\"I'M THE RENTOR!\" you shout at him. A look crosses his face, and he puts his gun away. \"Yes, so you are.\" He walks over to the kitchen table and unloads what he's carrying. Groceries... And stuff.")
           break;
       }
       else if(q23 == "2"){
           alert("You scream and hide. A couple of shots ring out and hit the couch. He stops shooting and pauses for a moment. \"Wait, are you staying here?\" you look up and nod at him. He shrugs and puts his load on the kitchen table.")
           break;
       }
       else if(q23 == "3"){
           alert("You shout; \"Big Smoke, it's me!\"  he looks at you, throws his stuff on the floor, and says, \"Oooooohhhhh...\"")
           stupidCount += 1
           break;
       }
       else{
           alert("Not having time to react you are shot. Not dead, but enough that you will have to be on life support for the rest of your, er, life. I suppose.")
           gameOver();
       }
   }
   drRichardHere = true
   var q24 = prompt("Having that done with, he leaves you alone to watch some more TV. Do you; \n -Keep watching TV? \n -Get up and talk to your landlord? \n -Get off the couch and do something else?").toLowerCase();
       if(q24 == "keep watching" || q24 == "tv" || q24 == "watch"){
           alert("You stay on the couch and keep on watching TV. The shows aren't very good, and after a while, you fall asleep. It was rather late at night after all...")
           day1 = false
           day2 = true
           justWokeUp = true
           theCouch();
       }
       else if(q24 == "get up" || q24 == "up" || q24 == "talk" || q24 == "Get up and talk"){
           alert("Feeling discomforted with the way that things are going, you search out your landlord. You saw him go back through the entry way, but from there, you're not sure where he went.")
           inSearch = true
           entryWay();
       }
       else if(q24 == "get off couch" || q24 == "off" || q24 == "leave" || q24 == "something else"){
           alert("Feeling that you have watched enough TV, you get up off the couch and go in search of something more constructive to do.")
           liveKitchen();
       }
       else{
           alert("I don't understand.")
           stupidCount += 1
           q24();
       }
}//The Couch ~
function kitchenTable(){
    check();
   alert("Here you are, sitting at the kitchen table. You are waiting for food. You are the only one home, so...")
   alert("...")
   if(haveFood == true){
       var q27 = prompt("Would you like to eat some of the food you have? \n -Yes? \n -No.").toLowerCase();
           if(q27 == "yes" || q27 == "y"){
               alert("You eat some of the mediocre food you have.")
               isHungry = false
               haveFood == false
               kitchenTable();
           }
           else if(q27 == "no" || q27 == "n"){
               alert("You don't eat any food. And you stay at the table.")
               if(isHungry == true){
                   alert("You're still hungry by the way.")
               }
               kitchenTable();
           }
           else{
               alert("I don't understand.")
               stupidCount += 1
               kitchenTable();
           }
   }
   else if(actualFood == true || moreActualFood == true){
       var q28 = prompt("Would you like to eat some of the food you have? \n -Yes? \n -No.").toLowerCase();
           if(q28 == "yes" || q28 == "y"){
               alert("You eat some of the very good food you have.")
               if(actualFood == true){
                   actualFood = false
               }
               else if(morActualFood == true){
                   moreActualFood = false
                   ActualFood = true
               }
               isHungry = false
               theKitchen();
           }
           else if(q28 == "no" || q28 == "n"){
               alert("You don't eat any food.")
               kitchenTable();
           }
           else{
               alert("I don't understand.")
               stupidCount += 1
               kitchenTable();
           }
   }
   else if(actualFood == false && haveFood == false && moreActualFood == false && toastMade == false && moreToast == false){
       var q29 = prompt("Do you; \n -Leave?").toLowerCase();
           if(q29 == "leave"){
               alert("You get up, and go back into the kitchen.")
               theKithcen();
           }
           else{
               alert("There's not really anything else for you to do. So...")
               stupidCount += 1
               kitchenTable();
           }
   }
   if(toastMade == true || moreToast == true){
       var q30 = prompt("Do you want to eat some of the yummy toast you made? \n -Yes? \n -No. But why, because it's toast, and toast is good.").toLowerCase();
           if(q30 == "yes" || q30 == "y"){
               alert("You eat some of the toast. You feel good.")
               stupidCount -= 1
               if(moreToast == true){
                   moreToast = false
                   toastMade = true
               }
               else if(toastMade == true){
                   toastMade = false
               }
               kitchenTable();
           }
           else if(q30 == "no" || q30 == "n" || q30 == "i'm an awful human being with no taste"){
               alert("You don't eat any of the really tasty toast you have. I don't know why, because toast is good.")
               stupidCount += 1
               kitchenTable();
           }
           else{
               alert("I don't understand.")
               stupidCount += 1
               kitchenTable();
           }
   }
}//This is the kitchen table ~
function eastYard(){
    check();
   var q32 = prompt("You are now in the backyard. There is a stairwell here, the door you came out of to the south, another door to the north of the stairwell, or you could go around the house either south or north. Do you; \n -Go down the stairwell. \n -The door back inside to the south. \n -The door to the north. \n -Go around to the South. \n -Go around to the North.").toLowerCase();
       if(q32 == "stairwell" || q32 == "down"){
           alert("You go down the stairwell.")
           theStairWell();
       }
       else if(q32 == "back" || q32 == "leave" || q32 == "inside"){
           alert("You go back inside the house and find yourself in the living room.")
           liveKitchen();
       }
       else if(q32 == "door" || q32 == "north door"){
           if(garageKey == true){
               if(garageUnlocked == false){
                    alert("You unlock the door.")
                    theGarage();
               }
               if(garageUnlocked == true){
                   theGarage();
               }
           }
           else if(garageKey == false){
               alert("Wow, this doors locked. It's not like it's outside and your landlord's paranoid about doors and keys. So yeah, it's locked.")
               eastYard();
           }
       }
       else if(q32 == "around south" || q32 == "south"){
           alert("You go around the house to the south yard area.")
           southYard();
       }
       else if(q32 == "around north" || q32 == "north"){
           alert("You go around the house to the north yard area.")
           northYard();
       }
       else{
           alert("I don't understand.")
           stupidCount += 1
           eastYard();
       }
}//This is the backyard or east yard ~
function theStairWell(){
    check();
    var q52 = prompt("You are at the bottom of a stairwell outside of the house. There's a door to the west here. \n -Go back up \n -Door").toLowerCase();
        if(q52 == "go back up" || q52 == "go up" || q52 == "go up" || q52 == "back up" || q52 == "back" || q52 == "up"){
            eastYard();
        }
        else if(q52 == "door"){
            if(basementDoorKey == true){
                if(basementDoorUnlocked == false){
                    alert("You unlock the door.")
                    basement1();
                }
                if(basementDoorUnlocked == true){
                    basement1();
                }
            }
            if(basementDoorKey == false){
                alert("The door is locked.")
                theStairWell();
            }
            else{
                alert("I don't understand.")
                stupidCount += 1
                theStairWell();
            }
        }
        else{
            alert("I don't understand.")
            stupidCount += 1
            theStairWall();
        }
}//This is the stairwell ~
function theGarage(){
    check();
    if(drRichardHere == true){
        var q35 = prompt("You are in the garage. It's hard to see anything as there's a black Minicooper in the way of anything. Do you; \n -Leave. \n -Stay.").toLowerCase();
            if(q35 == "leave"){
                eastYard();
            }
            else if(q35 == "stay"){
                stupidCount += 1
                theGarage();
            }
            else{
                alert("I don't understand.")
                stupidCount += 1
                theGarage();
            }
    }
    if(drRichardHere == false){
        if(theThing == true){
            var q36 = prompt("You are in the garage. There's not much here to be honest. Just a table with some stuff on it. Do you; \n -Inspect the table \n -Open the garage door \n -Or leave \n -The Thing has started to beep").toLowerCase();
                if(q36 == "inspect the table" || q36 == "inspect table" || q36 == "table" || q36 == "inspect"){
                    garageTable();
                }
                else if(q36 == "open the garage door" || q36 == "open garage door" || q36 == "garage door" || q36 == "open door" || q36 == "door"){
                    if(garageDoorOpen == false){
                        alert("You open the garage door.")
                        garageDoorOpen = true
                        theGarage();
                    }
                    if(garageDoorOpen == true){
                        alert("The garage door is already open, so you close it.")
                        garageDoorOpen = false
                        theGarage();
                    }
                }
                else if(q36 == "leave"){
                    eastYard();
                }
                else if(q36 == "the thing has started to beep" || q36 == "the thing beeped" || q36 == "the thing" || q36 == "thing" || q36 == "beep"){
                    alert("Why yes, so it has. It's pointing to the south wall of the garage. But now that you look at it, there's a button concealed on the wall. You press it, and a stairway opens beneath you. You fall, but you're not badly hurt.")
                    basement2();
                }
        }
        if(theThing == false){
            var q37 = prompt("You are in the garage. There's not much here to be honest. Just a table with some stuff on it. Do you; \n -Inspect the table \n -Open the garage door \n -Or leave").toLowerCase();
                if(q37 == "inspect the table" || q37 == "inspect table" || q37 == "table" || q37 == "inspect"){
                    garageTable();
                }
                else if(q37 == "open the garage door" || q37 == "open garage door" || q37 == "garage door" || q37 == "open door" || q37 == "door"){
                    if(garageDoorOpen == false){
                        alert("You open the garage door.")
                        garageDoorOpen = true
                        theGarage();
                    }
                    if(garageDoorOpen == true){
                        alert("The garage door is already open, so you close it.")
                        garageDoorOpen = false
                        theGarage();
                    }
                }
                else if(q37 == "leave"){
                    westYard();
                }
                else{
                    alert("I don't understand.")
                    stupidCount += 1
                    theGarage();
                }
        }
    }
}//This is the garage ~
function southYard(){
    check();
    var q53 = prompt("You are on the south side of the hosue. There are some windows here. Do you; \n -Look in a window? \n -Go west? \n -Go east?").toLowerCase();
        if(q53 == "look in a window" || q53 == "window" || q53 == "look"){
            if(randNum(max,min) == 1 || randNum(max,min) == 2 || randNum(max,min) == 3){
                alert("This window looks into your bathroom. Or at least it would if it wasn't one of those cloudy windows.")
                southYard();
            }
            if(randNum(max,min) == 4 || randNum(max,min) == 5 || randNum(max,min) == 6 || randNum(max,min) == 7){
                alert("This window looks into the living room. You can see a couch.")
                southYard();
            }
            if(randNum(max,min) == 8 || randNum(max,min) == 9 || randNum(max,min) == 10){
                alert("This window looks into the living room. You can see a chair.")
                southYard();
            }
        }
        else if(q53 == "go west" || q53 == "west" || q53 == "w"){
            westYard();
        }
        else if(q53 == "go east" || q53 == "east" || q53 == "e"){
            eastYard();
        }
        else{
            alert("I don't understand.")
            stupidCount += 1
            southYard();
        }
}//This is the south yard ~
function northYard(){
    check();
    var q54 = prompt("This is the north side of the house. The driveway's here. You can see your car. And then there's the garage. Do you; \n -Go into the garage? \n -Go west? \n -Or go east?").toLowerCase();
        if(q54 == "go into garage" || q54 == "garage"){
            if(garageKey == true){
                if(garageDoorOpen == false){
                    alert("You unlock the door.")
                    garageDoorOpen = true
                    theGarage();
                }
                if(garageDoorOpen == true){
                    theGarage();
                }
            }
            if(garageKey == false){
                alert("The door is locked.")
            }
        }
        else if(q54 == "go west" || q54 == "west" || q54 == "w"){
            westYard();
        }
        else if(q54 == "go east" || q54 == "east" || q54 == "e"){
            eastYard();
        }
        else{
            alert("I don't understand")
            stupidCount += 1
            northYard();
        }
}//This is the north yard ~
function otherSide(){
    check();
    var q63 = prompt("You're on the other side of the street. You're in front of a house. There's another house to the south, and two more to the north. Whose house do you go to? \n -Ben's? (in front of you) \n -FON's? (to the south) \n -Dean's? (to the north) \n -Murphy's? (furhter to the north) \n -Or yours?").toLowerCase();
        if(q63 == "ben's" || q63 == "bens" || q63 == "ben"){
            bensHouse();
        }
        else if(q63 == "fon's" || q63 == "fons" || q63 == "fon"){
            fonsHouse();
        }
        else if(q63 == "dean's" || q63 == "deans" || q63 == "dean"){
            deansHouse();
        }
        else if(q63 == "murphy's" || q63 == "murphys" || q63 == "murphy"){
            murphysHouse();
        }
        else if(q63 == "yours" || q63 == "go home" || q63 == "back"){
            westYard();
        }
        else{
            alert("Where is " +q63+ "'s house?")
            stupidCount += 1
            otherSide();
        }
}//This is opposite Dr. Richard's house ~ 
function theForest(){
    check();
   if(randNum(max,min) == 8){
       alert("Right as you arrive in the forest, you are eaten by a wild animal. You have died.")
       gameOver();
   }
   else{
       var q34 = prompt("Well, now that you're in a forest, what do you want to do? \n -Go back to where you came from? \n -Climb a tree? \n -Get eaten by a wild animal? \n -Or wait for help?").toLowerCase();
           if(q34 == "back" || q34 == "go back"){
               if(randNum(max,min) == 1 || 2){
                   alert("On your way back to wherever you came from, you are eaten by a wild animal. You have died.")
                   gameOver();
               }
               else{
                   alert("You go back.")
                   westYard();
               }
           }
           else if(q34 == "climb a tree" || q34 == "climb" || q34 == "tree"){
               if(randNum(max,min) == 3 || 4){
                   alert("You've been eaten by a wild animal. And have died.")
                   gameOver();
               }
               else{
                   alert("You climb a tree. Whoopdeedoo.")
                   stupidCount += 1
                   aTree();
               }
           }     
           else if(q34 == "get eaten" || q34 == "eaten" || q34 == "wild animal" || q34 == "get eaten by a wild animal"){
               stupidCount += 1
               if(randNum(max,min) == 5){
                   alert("There aren't any wild animals for you to get eaten by.")
                   theForest();
               }
               else{
                   alert("You are eaten by a wild animal. And shocker, you're dead.")
                   stupidCount += randNum(max,min)
                   gameOver();
               }
           }
           else if(q34 == "wait" || q34 == "wait for help"){
               if(randNum(max,min) == 6 || 7){
                   alert("Wow, someone actually comes to help you. Here they are now.")
                   alert("\"Hey, what are you doing out here alone?\" He asks you with a smile. \"Don't you know that there are wild animals out here?\" He smiles and leads you back to his house.")
                   bensHouse();
               }  
               else{
                   alert("No one comes to help you.")
                   theForest();
               }
           }
           else{
               alert("I don't understand.")
               stupidCount +=1
               theForest();
           }
   }
}//This is the forest ~
function aTree(){
    check();
   alert("This is a tree, and you are in it.")
   stupidCount += 1
   theForest();
}//This is a tree ~
function bensHouse(){
    check();
   alert("You are now inside the house with the person who calls themselves \"Ben\". This is fitting because his name is ben.")
    }//This is Ben's house. Do more here ~
function garageTable(){
    check();
    var q58 = prompt("This is the work table in the garage. There's some tools here. Oh, and paint. Do you; \n -Take some tools? \n -Take some paint? \n -Go back to the garage?").toLowerCase();
        if(q58 == "take some paint" || q58 == "take paint" || q58 == "paint"){
            if(havePaint == false){
                alert("You take some paint. I don't know what you're going to do with paint, but now you have some.")
				havePaint = true
				garageTable();
            }
            if(havePaint == true){
				alert("The paint slot in your inventory has been filled. Not that you had a paint slot, but what would you do with two cans of paint?")
				garageTable();
            }
        }
        else if(q58 == "take some tools" || q58 == "take tools" || q58 == "tools"){
            if(haveTools == false){
				alert("You take some of the tools that were sitting there.")
				haveTools = true
				garageTable();
            }
            if(haveTools == true){
				alert("No, you don't need any more tools.")
				garageTable();
            }
        }
        else if(q58 == "go back to the garage" || q58 == "go back" || q58 == "back"){
            theGarage();
        }
        else{
            alert("I don't understand.")
            stupidCount += 1
            theGarage();
        }
}//This is the table in the garage ~
function basement2(){
    check();
    var q42 = prompt("Hey, wow. You really aren't supposed to be here. Bu it's not too late. I can put you back in you're bed. It'll be a new day. What do you say? \n -Venture forth \n -Turn back").toLowerCase();
        if(q42 == "venture forth" || q42 == "continue" || q42 == "venture" || q42 == "forth"){
            alert("...Have it your way...")
            var q43 = prompt("There's an elevator here. What's the password? \n ___").toLowerCase();
                if(q43 == "394"){
                    alert("Correct. The elevator dings open, and I assume that you go downstairs. Yes, you do. It's too late for you now.")
                    basement3();
                }
                else if(q43 == "leave" || q43 == "back"){
                    alert("You retreat to the safety of the garage.")
                    stupidCount -= 1
                    theGarage();
                }
                else{
                    alert("~~INCORRECT~~")
                    stupidCount += 1
                    q43();
                }
        }
        else if(q42 == "turn back" || q42 == "back"){
            alert("That is the correct answer...")
            day3 = true
            yourRoom();
        }
        else{
            alert("...")
            day3 = true
            yourRoom();
        }
}//This is the second basement ~
function basement3(){
    check();
    alert("You're in the elevator for quite a while. Wherever you're going seems to be a long ways underground.")
    alert("...")
    alert("You're still going down.")
    alert("...")
    alert("*ding*")
    var q44 = prompt("Well, you're here. As the elevator doors slide open, a large room is revealed to you. There's many tables and shelve scattered around. And a plethura of doors. \n -Tables \n -Shelves \n -Doors").toLowerCase();
        if(q44 == "tables"){
            var q45 = prompt("Which table? \n -1 \n -2 \n -3 \n -4 \n -5 \n -6 \n -7 \n -8").toLowerCase();
        }
        else if(q44 == "shelves"){
            var q46 = prompt("Which shelf? \n -1 \n -2 \n -3 \n -4").toLowerCase();
        }
        else if(q44 == "doors"){
            var q47 = prompt("Which door? \n -NW \n -N \n -NE \n -SE \n -SW (The one you came in through.)").toLowerCase();
                if(q47 == "nw"){
                    if(storageRoomFirstTime == false){
                        alert("This door is unlocked, surprisingly.")
                        storageRoomFirstTime = true
                        theStorageRoom();
                    }
                    else{
                        theStorageRoom();
                    }
                }
                else if(q47 == "n"){
                    if(ICEKey == true){
                        if(ICERoomUnlocked == false){
                            alert("You unlock the door.")
                            ICERoom();
                        }
                        if(ICERoomUnlocked == true){
                            ICERoom();
                        }
                    }
                    if(ICEKey == false){
                        alert("The door is locked.")
                        }
                }
            }
        }//This is the third and final basement ~
function theStorageRoom(){
    check();
}//This is the storage room in basement 3 ~
function ICERoom(){
    check();
    if(drRichardHere == false){
        alert("The door is locked. There doesn't seem to be anything you can do to unlock it.")
        basement3();
    }
    if(drRichardHere == true){
        alert("Oddly enough, the door is unlocked... There's a loud rushing of air and some lights coming from down the hallway. You journey forward a bit more.")
        alert("Once you come to the end of the hallway, there's a closed door, you can see light shining under it, and this appears to be where all of the wind was coming from.")
        alert("You reach for the handle and open the door. The door swings open quickly as you turn the knob, forced by the wind. Inside the room, sillhoueted by the light you see,")
        alert("Your landlord. He's leaning hard on a table. He looks at you. \"What are you doing here.\" He says. You look at him. \"What are you doing?\" You shout over the wind.")
        alert("He looks at the table, and then back up at you. \"...You won't have any part in this. You're not supposed to be here.\" \n \"WHAT ARE YOU DOING?\" You shout at him again.")
        alert("He steps back away from the table, revealing a small setup, a rock, a computer, and a small orb floating above a pedastal. The light and wind is coming from it.")
        if(weirdo == true){
            alert("He looks at you solemnly and walks forward. \"You've seen much too much. ...For what it's worth, I'm sorry.\" He grabs you by the shoulders and throws you into the orb, he's surprisingly strong for his appearance. You fall into the orb.")
            alert("")
            alert("")
            alert(".")
            alert("Ơ̵̧̲̼̟͊́̇ͨ̂̓̑͐̈́̀ͬ͒͛̚͝͡K̶̷̓̓̈͋́ͭͯ̌͊͏҉͖̯͉̝̬̘̪̺̖̜̙̲͉͍")
            alert("")
            alert("Darkness. It's very dark. Really dark. But not that dark. You're floating. You're in space. So you feel. But you're not dead, no, you're definetly not dead. You don't know what you are. You look down at your hand, it's there. You look at the rest of you body, it's there too.")
            alert("Even though it's dark, you can see around you. There's some stars, yes, you're probably in space. Not any stars that you recognize, but stars nonetheless. You turn around, this is surprisingly easy in zero gravity. You see  planet that's rather close to you. You don't feel pulled towards it.")
            alert("All of a sudden, the planet's gone. Now it's a tree, pretty close to you, but on the underside, instead of roots, it's another tree, exactly the same. It jumps towards you. And then past you. It hits a whale, and they explode into pirates. You look away.")
            if(randNum(max,min) == 10){
                alert("You spend a long, long time in this place. And then you're found. Found by people who claim to be friends. You join their ranks. And live a happy life.")
                demonEnding = true
                stupidCount -= 10
                win();
            }
            else{
                alert("You stay in this place until the end of your days.")
                theChuteEnding = true
                win();
            }
        }
        if(gottaGun == true){
            alert("He looks at you, and begins to walk toward you. \"Stop right there,\" You tell him as you pull out a gun. He looks at you, incredulous. \"You'd shoot me? Really?\" He runs up to you, breaks your wrist, and takes the gun. \"I've never been one to be threatened.\" He shoots you dead.")
            win();
        }
        if(rugMoved == true){
            alert("You shout at him \"I don't know what you're doing, but it's not good! You have to stop!\" He looks at you, looks at the orb. He looks down. He presses a button on the keyboard. The orb dissappears as the wind and light fade. \"I suppose you're right... It is pretty dangerous...\" You seem to have convinced him.")
            convinceEnidng = true
            win();
        }
        if(dry == true){
            alert("You yell, \"STOP\" And slap the machine off the table before he can stop you. He looks at you, \"You don't know what you've done...\" Explosion. You both die, and the house explodes too.")
            stupidCount += 5
            win();
        }
    }
}//This is the ICE room. Maybe change the way this works later... ~
function theOffice(){
    check();
    var q59 = prompt("You are inside of a small office. There's a filing cabinet, a small desk, and a book-shelf. Do you; \n -Inspect the filing cabinet? \n -Sit at the desk? \n -Go over to the book-shelf? \n -Or Leave?").toLowerCase();
        if(q59 == "inspect the filing cabinet" || q59 == "inspect" || q59 == "filing cabinet" || q59 == "cabinet"){
            theFilingCabinet();
        }
        else if(q59 == "sit at the desk" || q59 == "sit at desk" || q59 == "sit" || q59 == "desk"){
            theDesk();
        }
        else if(q59 == "go over to the book shelf" || q59 == "go over to the bookshelf" || q59 == "go over to the book-shelf" || q59 == "bookshelf"){
            officeShelf();
        }
        else if(q59 == "leave" || q59 == "back"){
            hall2();
        }
        else{
            alert("What does \"" +q59+ "\" mean?")
            stupidCount += 1
            theOffice();
        }
}//This is the office ~
function basement1(){
    check();
    var q57 = prompt("This is the main area of the basement. There's a TV, a pool table, a small kitchen, some shelves, a door, and an archway to the west. Do you; \n -Watch some TV? \n -Play pool? \n -Go into the kitchen area? \n -Go over to the shelves? \n -The door? \n -Or go through the archway?").toLowerCase();
        if(q57 == "watch tv" || q57 == "tv" || q57 == "watch some tv"){
            if(randNum(max,min) == 1){
                alert("You watch some random TV.")
                basement1();
            }
            if(randNum(max,min) == 2){
                if(day == 2){
                    alert("You watch the news. There was a bank robbery today.")
                }
                if(day == 1){
                    alert("You watch the news.")
                }
            }
            if(randNum(max,min) == 3){
                alert("You watch one of those stupid game shows.")
            }
            if(randNum(max,min) == 4){
                alert("You watch a soap opera.")
            }
            if(randNum(max,min) == 5){
                alert("You watch an old TV show.")
            }
            if(randNum(max,min) == 6){
                alert("You watch one of those cheesy sci-fi movies.")
            }
            if(randNum(max,min) == 7){
                alert("You watch a children's show.")
                if(drRichardHere == true){
                    alert("Your landlord was standing behind you the whole time.")
                }
            }
            if(randNum(max,min) == 8){
                alert("You watch an action movie")
            }
            if(randNum(max,min) == 9){
                alert("You watch \"Willy Wonka and the Chocolate Factory\"")
            }
            if(randNum(max,min) == 10){
                alert("You watch an anime.")
                if(drRichardHere == true){
                    alert("Your landlord was standing behind you the whole time.")
                }
            }
            basement1();
        }
        else if(q57 == "play pool" || q57 == "pool"){
            if(drRichardHere == true){
                alert("You play a game of pool with your landlord.")
                if(randNum(max,min) == 1 || randNum(max,min) == 3 || randNum(max,min) == 5 || randNum(max,min) == 7 || randNum(max,min) == 9){
                    alert("You won. And your rent has subsequently gone up.")
                    basement1();
                }
                if(randNum(max,min) == 2 || randNum(max,min) == 4 || randNum(max,min) == 6 || randNum(max,min) == 8 || randNum(max,min) == 10){
                    alert("You lost.")
                    basement1();
                }
            }
            if(drRichardHere == false){
                alert("You play a game of pool by yourself.")
                basement1();
            }
        }
        else if(q57 == "go into the kitchen" || q57 == "kitchen" || q57 == "the kitchen"){
            basement1Kitchen();
        }
        else if(q57 == "go over to the shelves" || q57 == "shelves"){
            basement1Shelves();
        }
        else if(q57 == "the door" || q57 == "door"){
            if(basementDoorKey == true){
                if(basementDoorUnlocked == false){
                    alert("You unlock the door.")
                    theStairWell();
                }
                if(basementDoorUnlocked == true){
                    theStairWell();
                }
            }
            if(basementDoorKey == false){
                alert("The door is locked.")
                basement1();
            }
        else{
            alert("I don't understand.")
            stupidCount += 1
            basement1();
            }
        }
        else if(q57 == "archway" || q57 == "go through the archway"){
            basement1Hallway();
        }
        else{
            alert("I don't understand.")
            stupidCount += 1
            basement1();
        }
}//This is the first basement's main area ~
function basement1Hallway(){
    check();
    var q55 = prompt("You are in a hallway in the basement. There are two doors to the west, an archway to the east, and a stairway that goes to the main level. Do you; \n -Go through one of the doors? \n -Go through the archway? \n -Or go up the stairs?").toLowerCase();
        if(q55 == "doors" || q55 == "west" || q55 =="w"){
            var q56 = prompt("Which door? \n -Storage room? \n -Laundry room?").toLowerCase();
                if(q56 == "storage room" || q56 == "storage"){
                    if(storageRoomKey == true){
                        if(storageRoomUnlocked == false){
                            alert("You unlock the door.")
                            storageRoomUnlocked = true
                            basement1StorageRoom();
                        }
                        if(storageRoomUnlocked == true){
                            basement1StorageRoom();
                        }
                    }
                    if(storageRoomKey == false){
                        alert("The door is locked.")
                    }
                }
            else if(q56 == "laundry room" || q56 == "laundry"){
                theLaundryRoom();
            }
            else{
                alert("I don't understand.")
                stupidCount += 1
                basement1Hallway();
            }
        }
        else if(q55 == "go through the archway" || q55 == "archway"){
            basement1();
        }
        else if(q55 == "go up the stairs" || q55 == "up" || q55 == "stairs" || q55 == "up the stairs" || q55 == "go up"){
            hall2();
        }
        else{
            alert("I don't understand.")
            stupidCount += 1
            basement1Hallway();
        } 
}//This is the hallway in the first basement ~
function basement1StorageRoom(){
    check();
}//This is the basement 1 storage room ~
function theLaundryRoom(){
    check();
    var q60 = prompt("You are in the laundry room. There's a washer here, and a dryer. Do you; \n -Use the washer? \n -Use the dryer? \n -Steal some clothes? \n -Drink bleach?").toLowerCase();
        if(q60 == "use the washer" || q60 == "washer"){
            alert("You go over to the washer. But there's nothing worth doing with it. I don't know...")
            theLaundryRoom();
        }
        else if(q60 == "use the dryer" || q60 == "dryer"){
            alert("The dryer is a dryer. You are now dry.")
            dry = true
            theLaundryRoom();
        }
        else if(q60 == "steal some clothes" || q60 == "steal" || q60 == "clothes" || q60 == "steal clothes"){
            alert("You steal some clothes.")
            stupidCount += 1
            clothesCount += 1
            theLaundryRoom();
        }
        else if(q60 == "drink bleach" || q60 == "bleach" || q60 == "drink" || q60 == "i'm a stupid idiot who wants to die"){
            alert("You drink some bleach. I don't know what you were thinking, but you die.")
            stupidCount += 3
            gameOver();
        }
        else{
            alert("When you say \"" +q60+ "\" what do you mean?")
            stupidCount += 1
            theLaundryRoom();
        }
}//This is the laundry room ~
function basement1Kitchen(){
    check();
}//This is the kitchen in basement 1 ~
function basement1Shelves(){
    check();
}//These are the shelves in basement 1 ~
function theFilingCabinet(){
    check();
    var q61 = prompt("You're at the filing cabinet now. It has 3 drawers. Do you; \n -Open drawer 1? \n -Open drawer 2? \n -Open drawer 3? \n -Not be a prying jerk and leave?").toLowerCase();
        if(q61 == "open drawer 1" || q61 == "drawer 1" || q61 == "1"){
            var q62 = prompt("It's full of office supples. You know. Paper clips, pencils, paper. That sort of thing. Do you; \n -Take some stuff? \n -Don't?").toLowerCase();
                if(q62 == "take some stuff" || q62 == "take stuff" || q62 == "take"){
                    if(rootNum >= 7){
                        alert("The drawer is empty.")
                        stupidCount += 1
                        theFilingCabinet();
                    }
                    if(randNum(max,min) == 1 || 2){
                        alert("You take some paper clips.")
                        paperClips += 1
                        rootNum += 1
                        theFilingCabinet();
                    }
                    if(randNum(max,min) == 3 || 4){
                        alert("You take some pencils.")
                        pencils += 1
                        rootNum += 1
                        theFilingCabinet();
                    }
                    if(randNum(max,min) == 5 || 6){
                        alert("You take some paper.")
                        papers += 1
                        rootNum += 1
                        theFilingCabinet
                    }
                    if(randNum(max,min) == 7 || 8){
                        alert("You take some erasers.")
                        erasers += 1
                        rootNum += 1
                        theFilingCabinet();
                    }
                    if(randNum(max,min) == 9){
                        alert("You take some dynamite.")
                        dynamite += 1
                        rootNum += 1
                        theFilingCabinet();
                    }
                    if(randNum(max,min) == 10){
                        alert("You don't take anything.")
                        theFilingCabinet();
                       }
                }
                else if(q62 == "don't" || q62 == "dont"){
                    alert("You don't take anything. Good job.")
                    theFilingCabinet();
                }
                else{
                    alert("I don't know what you mean when you say " +q62+ ".")
                    stupidCount += 1
                    theFilingCabinet();
                }
        }
        else if(q61 == "open drawer 2" || q61 == "drawer 2" || q61 == "2"){
            if(randNum(max,min) == 1){
                alert("It's a file with paper inside of it. The papers are blank.")
                theFilingCabinet();
            }
            if(randNum(max,min) == 2){
                alert("It's a file. It's empty.")
                theFilingCabinet();
            }
            if(randNum(max,min) == 3){
                alert("It's two pieces of paper taped together to make a file. Inside of it are actual files.")
                theFilingCabinet();
            }
            if(randNum(max,min) == 4){
                alert("It's some recipts. You've never heard of a store called, \"Bob's Grocery\".")
                theFilingCabinet();
            }
            if(randNum(max,min) == 5){
                alert("It's a black file with papers inside. The papers are some sort of blueprints for something. It just says \"ICE\".")
                theFilingCabinet();
            }
            if(randNum(max,min) == 6){
                if(drRichardHere == true){
                alert("You're about to look inside of this envelope when your landlord walks in. He's got a gun. You have died.")
                gameOver();
                }
                if(drRichardHere == false){
                    alert("It's just a regular old file. With some taxes inside it or something.")
                    theFilingCabinet();
                }
            }
            if(randNum(max,min) == 7){
                alert("Papers, papsers, and more papers. Why are you reading thes?")
                theFilingCabinet();
            }
            if(randNum(max,min) == 8){
                alert("It's a file. Inside are more files.")
                theFilingCabinet();
            }
            if(randNum(max,min) == 9){
                alert("It's a tiny filing cabinet. Inside of it, there are tiny files.")
                theFilingCabinet();
            }
            if(randNum(max,min) == 10){
                alert("It's a gun.")
                gottaGun = true
                theFilingCabinet();
            }
        }
        else if(q61 == "open drawer 3" || q61 == "drawer 3" || q61 == "3"){
            alert("There's a single piece of paper here. It says; \n\"394\"")
        }
        else if(q61 == "leave"){
            theOffice();
        }
        else{
            alert("I've never heard of " +q61+ ", before.")
            stupidCount += 1
            theFilingCabinet();
        }
}//This is the filing cabinet in the office ~
function theDesk(){
    check();
    var q64 = prompt("You sit down at the desk. There's a computer here. And some papers. Do you; \n -Use computer? \n -Read papers? \n -Get up?").toLowerCase();
        if(q64 == "use computer" || q64 == "computer"){
            time += 1
            theComputer();
        }
        else if(q64 == "read papers" || q64 == "papers" || q64 == "papers"){
            alert("The papers are in a language you don't understand. But they seem to say insulting things about you.")
            time += 3
            theDesk();
        }
        else if(q64 == "get up" || q64 == "leave" || q64 == "back"){
            theOffice();
        }
        else{
            alert("" +q64+ " wasn't an option.")
            time += 1
            stupidCount += 1
            theDesk();
        }
}//This is the desk in the office ~
function officeShelf(){
    check();
}//This is the bookshelf in the office ~
function fonsHouse(){
    check();
}//This is FON's house ~
function deansHouse(){
    check();
}//This is Dean's house ~
function murphysHouse(){
    check();
}//This is Murphy's house ~
function a1ToA2Stairs(){
    check();
    var q65 = prompt("You're in a smallish room. There's a staircase here. Do you; \n -Go upstairs \n -Leave").toLowerCase();
        if(q65 == "go upstairs" || q65 == "upstairs"){
            time += 1
            a2();
        }
        else if(q65 == "leave" || q65 == "back"){
            time += 1
            a1Hall();
        }
        else{
            alert("I don't understand.")
            time +=  1
            stupidCount += 1
            a1ToA2Stairs();
        }
}//This is the area where there's a staircase from a1 to a2 ~
function morningRoutine(){
    check();
    if(justWokeUp == true && gettingReady == false){
       alert("You wake up, feeling invigorated after a good night of sleep. You roll over in your bed and stand up in your room. It is at this point I should point out, you are not decent.")
       time = 360
       drRichardHere = false
	   brushedTeeth = false
       shaved = false
           var q26 = prompt("Do you want to put some clothes on? \n -Yes! \n -Absolutely! \n -100%!").toLowerCase();
              if(q26 == "yes" || q26 == "absolutely" || q26 == "100%" || q26 == "y"){
                  if(clothesCount >= 1){
                      alert("You put on some of the clothes that you have. Then you go to the bathroom to get ready for the day.")
                      clothesCount -= 1
                      gettingReady = true
                      time += 3
                  }
                  if(clothesCount == 0){
                      stupidCount += 1
                      var q48 = prompt("You don't have any clothes to put on. Would you like to get some from your dresser? \n -Yes \n -No").toLowerCase();
                        if(q48 == "yes" || q48 == "y"){
                            var q49 = prompt("You go over to the dresser and get some of the clothes out of it. Do you want to put the clothes on? \n -Yes \n -No").toLowerCase();
                                if(q49 == "yes" || q49 == "y"){
                                    alert("Good choice. You're not that stupid. Now you go to the bathroom to get ready for the day.")
                                    gettingReady = true
                                    time += 5
                                } 
                                if(q49 == "no" || q49 == "n"){
                                    alert("Okay then. You go into the bathroom to get ready for the day.")
                                    stupidCount += 1
                                    naked = true
                                    gettingReady = true
                                    time += 2
                                }
                                else{
                                    alert("You put on the clothes you got anyway and go into the bathroom to get ready for the day.")
                                    stupidCount += 1
                                    gettingReady = true
                                    time += 5
                                }
                        }
                        else if(q48 == "no" || q48 == "n"){
                            alert("Very well. You go into the bathroom to get ready for the day.")
                            naked = true
                            stupidCount += 1
                            gettingReady = true
                            time += 4
                        }
                        else{
                            alert("You go over to the dresser anyway and get some clothes and put them on. Then you go to the bathroom to get ready for the day.")
                            stupidCount += 1
                            gettingReady = true
                            time += 5
                        }
                  }
              }
              else if(q26 == "no" || q26 == "n"){
                  alert("Okay then, you go into the bathroom to get ready for the day.")
                  naked = true
                  stupidCount += 1
                  gettingReady = true
                  time += 1
              }
              else{
                  stupidCount += 1
                  time += 1
                  q26();
              }
    }
    if(gettingReady == true){
		if(tookShower == false){
			alert("Well, here you are in the bathroom. Yes, it's a very fine bathroom indeed. You should take a shower.")
            yourBathroom();
		}
		if(brushedTeeth == false && tookShower == true){
			alert("My heavens, you need to brush your teeth.")
            bathroom();
		}
		if(shaved == false && brushedTeeth == true && tookShower == true){
			alert("And you need to shave. That should be all you need to do to get ready for the day. Except for breakfast.")
            bathroom();
		}
	}
}//These are the things that you do in the morning ~
function theComputer(){
    check();
}//This is the computer in the office ~
function a2(){
    check();
    var q66 = prompt("This is the top level of the house. There are some telescopes here. And a table, and some computer equipment. Do you; \n -Look through the telescopes? \n -Inspect the table? \n -Use the computer?").toLowerCase();
        if(q66 == "look through the telescopes" || q66 == "look" || q66 == "telescope" || q66 == "telescopes"){
            var q67 = prompt("Which telescope? \n -North \n -East \n -South \n -West")
                if(q67 == "north" || q67 == "n"){
                    //Keep working here ~
                }
        }
}//This is the uppest stairs ~ !KEEP WORKING HERE!
function breakfast(){
    check;
    var drink = prompt("Well, now that you're all washed up, you can eat a proper meal and be on your way. First, what would you like to drink? \n -Milk \n -Water \n -Orange Juice \n -...Juice...").toLowerCase();
			if(drink == "milk"){
				alert("Good choice.")
			}
			else if(drink == "water"){
				alert("Bland and colorless. Just like you.")
			}
			else if(drink == "orange juice"){
				alert("But you just brushed your teeth...")
				stupidCount += 1
			}
			else if(drink == "...juice..." || drink == "juice" || drink == "...juice" || drink == "juice..."){
				alert("Oookaaay...")
				stupidCount += 1
				drankJuice = true
			}
			else{
				alert("That's not in the fridge.")
				stupidCount += 1
				drink();
			}
		var mainMeal = prompt("Okay, you're going to be drinking " +drink+ ". Now what will you be eating? \n -Eggs \n -Toast \n - Breakfast Sandwich \n -Raw Meat").toLowerCase();
			if(mainMeal == "eggs"){
				alert("Eggs it is.")
			}
			else if(mainMeal == "toast"){
				alert("Good choice. Toast is a personal favorite.")
				stupidCount -= 5
				toastCount += 2
			}
			else if(mainMeal == "breakfast sandwich" || mainMeal == "sandwich"){
				alert("It took a while to make, but it's going to be worth it.")
			}
			else if(mainMeal == "raw meat" || mainMeal == "meat"){
                if(randNum(max,min) == 10){
                    alert("You get salmonella and die.")
                    gameOver();
                }
                else{
				alert("...Okay then.")
				stupidCount += 3
				ateRawMeat = true
                }
			}
			else{
				alert("Nope, that doesn't appear to be here.")
				stupidCount += 1
				mainMeal();
			}
		var side = prompt("Now what would you like on the side? \n -Hash Browns \n -Sausage \n -Bacon \n -Vegan Bacon \n -Bent nails, dead bees, and cigarette butts").toLowerCase();
			if(side == "hash browns"){
				alert("Nice.")
			}
			else if(side == "sausage"){
				alert("Nice, nice.")
			}
			else if(side == "bacon"){
				alert("Nice, very nice.")
			}
			else if(side == "vegan bacon"){
				alert("Ni- wait, where'd you get that?")
				stupidCount += 3
				isVegan = true
			}
			else if(side == "bent nails, dead bees, and cigarette butts" || side == "bent nails" || side == "dead bees" || side == "cigarette butts"){
				alert("There is something very wrong with you.")
				weirdo = true
				stupidCount += 2
			}
		alert("After showing good surival techniques, you gather a breakfast of " +drink+ "and " +mainMeal+ " with a side of " +side+ ". Remarkable.")
		gettingReady = false
        theKitchen();
    }//This is breakfast ~
function theWalk(){
    check();
    var q68 = prompt("You go on a walk. While walking, you come to \"Bob's Grocery\". Do you; \n -Go inside? \n -Keep walking? \n -Go home.").toLowerCase();
        if(q68 == "go inside" || q68 == "inside"){
            bobsGrocery();
        }
        else if(q68 == "keep walking"){
            theWalk2();
        }
        else if(q68 == "go home" || q68 == "home"){
            westYard();
        }
        else{
            alert("Where's " +q68+ "?")
            stupidCount += 1
            time += 1
            theWalk();
        }
}//This is you going on a walk ~
function bobsGrocery(){
    check();
    var q69 = prompt("This is Bob's Grocery. It's a nice store. Do you; \n -Go shopping? \n -Get a job? \n -Leave?").toLowerCase();
        if(q69 == "go shopping" || q69 == "shopping"){
            if(cash == 0){
                alert("You don't have any money to go shopping with.")
                time += 1
                bobsGrocery();
            }
            if(cash >= 1){
                time += 1
                shopping();
            }
        }
        else if(q69 == "get a job" || q69 == "job"){
            if(haveJob == false){
                alert("You go over to the store director. \"Bob\". As it happens, he's hiring. And now you have a job. He has given you a job. With instruction to start tomorrow at 9 o'clock.")
                haveJob = true
                time += 10
                bobsGrocery();
            }
            if(hoveJob == true){
                time += 1
                alert("You already have a job.")
                bobsGrocery();
            }
        }
        else if(q69 == "leave"){
            time += 2
            theWalk();
        }
        else{
            alert("" +q69+ " isn't an option.")
            stupidCount += 1
            time += 1
            bobsGrocery();
        }
}//This is Bob's Grocery ~ !KEEP WORKING HERE!
function theWalk2(){
    check();
}
function shopping(){
    check();
}//This is you shoppping ~
<<<<<<< HEAD
}//This bracket is the game. Don't delete ~
=======
}//This bracket is the game. Don't delete ~


>>>>>>> README.md
