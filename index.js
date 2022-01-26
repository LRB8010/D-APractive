let body = document.querySelector("body")


////////////////////////////////////////////// Reversed
let reverseform = document.createElement("form")
let reverseinput1 = document.createElement("input")
let reverseinput2 = document.createElement("input")
let inputText = ''
let reversed = document.createElement("h2")
let reversedResult = document.createElement("p")

reverseinput1.addEventListener("change",function(e){
    inputText = e.target.value
    console.log(e.target.value)
    console.log(inputText)
})

reverseinput2.type = "submit"

reverseform.addEventListener("submit",function(e){
    e.preventDefault()
    reverseString(inputText)
})

reversed.innerText = "Reverese a string!"
reverseform.append(reverseinput1,reverseinput2)
body.append(reversed,reverseform,reversedResult)
console.log(inputText)

function reverseString(string)
{
    let results = ''
    for(let i = 0;i<string.length;i++)
        {
            
            results = string[i] + results
        }
    //results = string.split('').reverse().join('')
    reversedResult.innerText = results
}

//////////////////////////Palindrome
let palindromsTitle = document.createElement("h2")
palindromsTitle.innerText = "Is It A Palindrome?!"
let palindromeForm = document.createElement("form")
let palindromeInput1 = document.createElement("input")
let palindromeInput2 = document.createElement("input")
let palindromeInputText = ''
let palindromeResult = document.createElement("p")
palindromeInput2.type = 'submit'

palindromeInput1.addEventListener('change',function(e){
palindromeInputText = e.target.value
console.log(palindromeInputText)
})

palindromeForm.addEventListener('submit',function(e){
e.preventDefault()
palindromeInputText == palindromeInputText.split('').reverse().join('')?palindromeResult.innerText = "True": palindromeResult.innerText = "False"
})
palindromeForm.append(palindromeInput1,palindromeInput2)
body.append(palindromsTitle,palindromeForm,palindromeResult)

///////////////////////////////////////Reverse Int
let rvITitle = document.createElement("h2")
rvITitle.innerText = "Reverse an Integer!"
let rvIForm = document.createElement("form")
let rvIInput1 = document.createElement("input")
let rvIInput2 = document.createElement("input")
let rvIInputText = ''
let rvIResult = document.createElement("p")
rvIInput2.type = 'submit'

rvIInput1.addEventListener('change',function(e){
    rvIInputText = e.target.value
    console.log(rvIInputText)
    })

    rvIForm.addEventListener('submit',function(e){
        e.preventDefault()
       if(parseInt(rvIInputText))
        {
            reverseInt(rvIInputText)
        }else
        {
            alert("Please Type in a Number")
        }
        })

rvIForm.append(rvIInput1,rvIInput2)
body.append(rvITitle,rvIForm,rvIResult)

function reverseInt(string)
{
    
    let results = ''
    for(let i = 0;i<string.length;i++)
        {
            results = string[i] + results
        }
    if(results[results.length - 1] == "-")
    //results =  results.slice(results.length - 1) + results.slice(0,results.length - 1)
    
    //results = string.split('').reverse().join('')
    console.log(results)
    rvIResult.innerText = parseInt(results) * Math.sign(parseInt(string))
}

////////////////////Max Char
let maxCharTitle = document.createElement("h2")
let maxCharResult = document.createElement("p")
maxCharTitle.innerText = 'Max Char!!!'
let maxCharForm = document.createElement("form")
let maxCharInput1 = document.createElement("input")
let maxCharInput2 = document.createElement("input")
let maxCharInputText = ''
maxCharInput2.type = "submit"

maxCharForm.append(maxCharInput1,maxCharInput2)
body.append(maxCharTitle,maxCharForm,maxCharResult)

maxCharForm.addEventListener("submit",function(e){
    e.preventDefault()
    maxChar(maxCharInputText)
})

maxCharInput1.addEventListener("change",function(e){
    maxCharInputText = e.target.value
    console.log(maxCharInputText)
})
//This list all the chracters that have duplicates
// function maxChar(string){
//     maxCharResult.innerText = ''
//     let results = {}
//     let toLower = string.toLowerCase()
//     for(let i = 0;i<toLower.length;i++)
//     {
//         results[toLower[i]]?results[toLower[i]] += 1 : results[toLower[i]] = 1
//     }
//     for(let obj in results)
//     {
//         if(results[obj] > 1){
            
//             maxCharResult.innerText = maxCharResult.innerText + ' ' + obj + ':'+ results[obj]
            
//         }
//         console.log(obj)
//     }
    
// }

//This finds the most used character
function maxChar(str) {
    let char = {}
    for(let i = 0;i<str.length;i++)
    {
        char[str[i]]?char[str[i]] += 1:char[str[i]] = 1
    }
    //This is achived without a js methods
    let min = 0
    let letter = ''

    for(let obj in char){
        if(char[obj]>min)
        {
            min = char[obj]
            letter = obj
        }
    }
    console.log(min,letter)
    maxCharResult.innerText = letter
    //This is achived by using a js method.
    //maxCharResult.innerText = Object.keys(char).reduce((a, b) => char[a] > char[b] ? a : b)
    
}

/////////This is for fizzbuzz
let fizzTitle = document.createElement("h2")
fizzTitle.innerText = "The famous fizzBuzz!!!"
let fizzResults = document.createElement("p")
let fizzForm = document.createElement("form")
let fizzInput1 = document.createElement("input")
let fizzInput2 = document.createElement("input")
fizzInput2.type = "submit"
let fizzInputText = ''
fizzForm.append(fizzInput1,fizzInput2)
body.append(fizzTitle,fizzForm,fizzResults)

fizzForm.addEventListener("submit",function(e){
    e.preventDefault()
    if(parseInt(fizzInputText)){
        fizzBuzz(fizzInputText)
    }else{
        alert("Please type a number")
    }
    
})
fizzInput1.addEventListener("change",function(e){
    fizzInputText = e.target.value
})

function fizzBuzz(int){
alert("Please Open Console")
//simple solution
    // for(let i = 1;i<=int;i++)
    // {
    //     if(i%5 == 0 && i%3 == 0)
    //     {
    //         console.log("fizzBuzz")
    //     }else if (i%3 == 0) {
    //         console.log("fizz")
    //     } else if (i%5 == 0) {
    //         console.log("Buzz")
    //     } 
    //     else {
    //         console.log(i)
    //     }
    // }
////optomized
for (var i = 1; i <= int; i++){    
    let toPrint = "";    
    if (i % 3 == 0){        
        toPrint += "fizz";    
    }    
    if (i % 5 == 0){
        toPrint += "buzz";    
    }    
    // if the string is empty print i    
    console.log(toPrint || i);
}
}