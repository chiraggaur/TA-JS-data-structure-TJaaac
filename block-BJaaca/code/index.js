//  Follow instructions below and write code accordingly.


//  - Create a variable named `character` using `let` assign a value of empty object.
    //   let character = {

    //   }

//  - Go to this [Arya Stark](https://awoiaf.westeros.org/index.php/Arya_Stark)

//  Re-assign the value of `character` variable to and object with the key `characterName` and value of "Arya"
       //   let character = {
            //    characterName : "Arya";
    //   }


// - A variable named `age` is predefined with value 20. Add a new key named `character-age` with the value of `age` variable i.e 20 (don't use the value 20)

let age = 20;
      //   let character = {
        //   characterName : "Arya";
        //   character-age : age;
    //   }


// - Add a new key `sur name` with the value of the surname of the character i.e "Stark". (Don't remove the space between `sur` and `name`)

       //   let character = {
        //   characterName : "Arya";
        //   character-age : age;
        //    "sur name" : "Stark";
        //   }


// - Add a new key `title` with the value title of the character i.e "Lady of Winterfell"

       //   let character = {
        //   characterName : "Arya";
        //   character-age : age;
        //   "sur name" : "Stark";
        //   title :  "Lady of Winterfell";
        //   }


// - Add another property named `greet` and value should be a function when called should alert `I am [NAME HERE] and my title is [TITLE HERE]`.


       //   let character = {
        //   characterName : "Arya";
        //   character-age : age;
        //   "sur name" : "Stark";
        //   title :  "Lady of Winterfell";
        //   greet : function () {
        //                alert (`I am + ${characterName} + and my title is + ${title}`); }
        //   }

// - Add a new property to the character object named `isFemale` and value will be `true`
     
        //  let character = {
        //   "characterName" : "Arya",
        //   "character-age" : age ,
        //   "sur name" : "Stark",
        //   title :  "Lady of Winterfell",
        //   greet : function(){ alert (`I am ${character.characterName} and my title is ${character.title}`); },
        //   "isFemale" : true 
        //   }

// - Execute the function stored in the greet key of the character object
      
    //  character.greet() ;

//  - Change the method `greet` to now alert `She is [NAME HERE] and her title is [TITLE HERE]`.

//   character.greet = function () {alert (`she is  ${character.characterName} and her title is  ${character.title}`); }

// - Check by calling `greet` and see if the message changed or not.

//character.greet();

//  - Add a new property in the character object `isAdult`. The value will be true if age is greater than 18 or it will be false.

//    let character = {
//     "characterName" : "Arya",
//     "character-age" : age ,
//     "sur name" : "Stark",
//     title :  "Lady of Winterfell",
//     greet : function(){ alert (`I am ${character.characterName} and my title is ${character.title}`); },
//     "isFemale" : true,
//     isAdult : function () { if (age >= 18) {
//                            console.log(true);   
//                                   }else console.log(false); }
//     }

// - Add a new method (function inside objects are called methods) named `changeIsAdult`. When called should be able to flip the value of `isAdult` from true to false and false to true.

    //    let character = {
    //     "characterName" : "Arya",
    //     "character-age" : age ,
    //     "sur name" : "Stark",
    //     title :  "Lady of Winterfell",
    //     greet : function(){ alert (`I am ${character.characterName} and my title is ${character.title}`); },
    //     "isFemale" : true,
    //     isAdult : function () { if (age >= 18) {
    //                            console.log(true);   
    //                                   }else console.log(false); },
    //     changeIsAdult : function (){ if (character.isAdult = true){
    //                                    console.log(false);
    //                                  } else {
    //                                     console.log(true);
    //                                  }
                               
    //                                 }                            
        
    //     }
  

// - Add a new key with the name stored in variable `keyName` defined below i.e `playedBy` (use [] for computed property) and the value of "Maisie Williams"

let keyName = 'playedBy';


let character = {
    "characterName" : "Arya",
    "character-age" : age ,
    "sur name" : "Stark",
    title :  "Lady of Winterfell",
    greet : function(){ alert (`I am ${character.characterName} and my title is ${character.title}`); },
    "isFemale" : true,
    isAdult : function () { if (age >= 18) {
                           console.log(true);   
                                  }else console.log(false); },
    changeIsAdult : function (){ if (character.isAdult = true){
                                   console.log(false);
                                 } else {
                                    console.log(true);
                                 }
                           
                                },
    playedBy :  "Maisie Williams" ,
    key : '42',
    totalSeason : 1 + 2 + 3 + 2                                                   
    
    }

// - Using `alert` alert the value stored in key you added above `keyName` use the variable name to access

//    alert (character.playedBy);

// - Using the function `console.log` log the value of the key `42`. You don't have to add the key
 
//   console.log(character.key);

// - Add a new key named `totalSeasons` with the value of `1 + 2 + 3 + 2`. Use this expression

// totalSeason :`1 + 2 + 3 + 2`   

// - Access the value of the key `totalSeason` (it should be 8)

//    console.log(character.totalSeason);
