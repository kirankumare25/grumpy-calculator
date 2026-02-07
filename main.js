// for the result 0-10 result

const toddlerList = ["A toddler could have done that on a napkin. Why are you using my CPU for this?",,

"Wow. Single digits. I bet you’re proud of yourself.",

"I’ve seen faster math from a literal potato.",

"Did you really need a global satellite network to figure that out?",

"I'm actually embarrassed for both of us right now."]

// Result: 11 - 1000

const averageList = ["Boringly average. Just like your choice in fonts.",

"You used a computer for this? My calculator from 1994 is laughing at you.",

"I've seen more exciting math on a tax return.",

"Congratulations on being completely middle-of-the-road.",

"This result is so basic it just ordered a pumpkin spice latte.",

"Is this what you do for fun? We need to get you a hobby.",

"Correct, but nobody's going to put this on the fridge.",

"I've seen faster calculations from a sundial in a thunderstorm."]

// Result: 1,001 - 1,000,000

const mathList = ["What are we calculating? Your student loans or the cost of a single avocado toast?",

"Calm down, Mr. Moneybags. You’re not actually going to see that much money anyway.",

"Is this a heist? Should I call the authorities, or do you want me to hold the bag?",

"That’s a big number for someone with such small bandwidth.",

"Counting your imaginary followers again, I see."]

// for decimals 

const decimalList = [

"Oh, look at you with the decimals. Trying to impress me with your 'precision'?",

"Nobody likes a show-off. Just round it up and move on.",

"I'm not reading all those numbers. Let's just say 'a lot' and call it a day.",

"You’re really stressing my circuits for a result no one cares about."]


// for 0 and negatives 

const negativeList = ["Zero. Just like your chances of getting a date this weekend.",

"Total emptiness. Reminds me of your social life.",

"Negative? Just like your bank account and your outlook on life.",

"Going into the negatives? Bold strategy. Let's see if it pays off "
]


// specific

const specificList = ["69 - Nice. Very original. I bet you think you’re the peak of comedy.",
"420 - We get it. You’re 'cool.' Now go do something productive.",
"1 -The loneliest number. Just like you sitting there typing into a website.",
"666 Checking the budget for your underworld takeover?"]




function generateRoast(){
    let display = document.getElementById("result")
    let input = document.getElementById("calarea").value;
    let roast = document.getElementById("roast");

    if(!input){
            display.innerHTML = "The silence is defeaning, do something !!!";
            roast.innerHTML = "";
            return;
        }

    
    try{
        let result = eval(input);
        display.innerHTML = result;

        const specificMatch = specificList.find(item => item.startsWith(result.toString()));


        if(specificMatch){
            roast.innerHTML = specificMatch.split(" - ")[1] || specificMatch;
        }       
        else if (result <=0) {
            roast.innerHTML = 
            roast.innerHTML = negativeList[Math.floor(Math.random()* negativeList.length)]
        }
        else if (result <= 10) {1
            roast.innerHTML = toddlerList[Math.floor(Math.random() * toddlerList.length)]
        }
        else if (result > 11 && result <= 1000){
            roast.innerHTML = averageList[Math.floor(Math.random()* averageList.length)]
        }
        else if (result > 1000){
            roast.innerHTML = mathList[Math.floor(Math.random()* mathList.length)]
        }
        

        display.innerHTML = result
    } catch (e) {
        display.innerHTML = "This is not math! Now Cry for Help"
    }


}