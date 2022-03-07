/*
 * This files holds all the code to for your card game
 */
function updateButton(id){ 
    document.getElementById(id)
        .addEventListener("click",function(e){
            const element = document.getElementById(id);
            const style = getComputedStyle(element);
            switch(style.backgroundColor){
                case "rgb(52, 54, 55)":
                    document.getElementById(id).style.backgroundColor = "yellow";
                    break;
                case "rgb(27, 28, 29)":
                    document.getElementById(id).style.backgroundColor = "yellow";
                    break;
                case "rgb(255, 255, 0)":
                    document.getElementById(id).style.backgroundColor = "green";
                    break;
                case "rgb(0, 128, 0)":
                    document.getElementById(id).style.backgroundColor = "#1b1c1d";
                    break;
            }  
        },false);
}

function add_to_list(word){
    for(let i = 1; i < 7; i++){
        if(document.getElementById("r"+i).innerHTML==""){
            document.getElementById("r"+i).innerHTML = word;
            break;
        }
    }
}

function print_word(word){
    word.split("").forEach((letter,index) => {
        document.getElementById("l"+(index+1)).innerHTML = letter
    });
}

//Run once broswer has loaded everything
window.onload = function () {


updateButton("l1");
updateButton("l2");
updateButton("l3");
updateButton("l4");
updateButton("l5");

document.getElementById("enter")
    .addEventListener("click",function(e){
        console.log("Enter");
        document.getElementById("enter").innerHTML = "Next word"
        print_word("Hello");
        add_to_list("Hello");
    },false);

};
