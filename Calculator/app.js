let input = document.getElementById("display")
let buttons = document.querySelectorAll("button")

let string = ""
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener("click" , (e) =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
         }
        else if(e.target.innerHTML == "AC"){
        string = "";
        input.value = string
        }
        else if(e.target.innerHTML == "C"){
            string = string.substring(0, string.length-1);
            input.value = string

        }
        else{
            string += e.target.innerHTML;
            input.value = string
        }

    })
})

// let input = document.getElementById("display")
// let buttons = document.querySelectorAll("button")

// let string = ""
// let lastClickedButton = null;

// let arr = Array.from(buttons)
// arr.forEach(button => {
//     button.addEventListener("click" , (e) =>{
//         if(e.target.innerHTML == "="){
//             string = eval(string);
//             input.value = string;
//             lastClickedButton = null;
//         }
//         else if(e.target.innerHTML == "AC"){
//             string = "";
//             input.value = string;
//             lastClickedButton = null;
//         }
//         else if(e.target.innerHTML == "C"){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//             lastClickedButton = string.slice(-1);
//         }
//         else if (["+", "-", "*", "/"].includes(e.target.innerHTML)){
//             if (lastClickedButton != null && ["+", "-", "*", "/"].includes(lastClickedButton)){
//                 // Do nothing, because the user clicked an operator button twice in a row.
//             } else {
//                 string += e.target.innerHTML;
//                 input.value = string;
//                 lastClickedButton = e.target.innerHTML;
//             }
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//             lastClickedButton = null;
//         }

//     })
// })
