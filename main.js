

//Learn JavaScript In Arabic 2021 - #103 - Alert, Confirm, Prompt
// setTimeout And clearTimout
// clearTimout machen wir ein button und denn holen wir es mit (const) und geben wir es vor dem (setTimout ein veriabel)
//const mybtn = document.querySelector("button");
// const stop = setTimeout(sayhallo,1000);
// mybtn.onclick= function(){clearTimeout(stop) };



const myDiv = document.querySelector("div");
const mybtn = document.querySelector("button");

console.log(mybtn)


const myConfirom = confirm( "Do you want to open the website?");

 setTimeout(sayhallo,1000);

 function sayhallo(){
    mybtn.onclick = function(){
      if(mybtn.className === "test"){
        const myImage = document.createElement("img");
        const myP = document.createElement("p");
        myP.textContent = "Ich bin Imad";
        myImage.style.cssText = "width:100%;"
        myImage.src = "./img/tool-inc-XFW-r3ALz2M-unsplash.jpg";
        myDiv.appendChild(myP)
        myDiv.appendChild(myImage);
        myDiv.style.cssText = "width:150px;height:200px;background-color:#eee;border-radius:10px;padding:5px;"


        mybtn.className = "";


      }else{
        mybtn.className = "test";
        myDiv.textContent = "";
    
      }
}
 }

mybtn.onblur = function (){
    myDiv.style.cssText = "display:none";
}

// -------------------------------------------------setInterval and  clearIntervl
const myNumber = document.getElementById("number");
console.log(myNumber);

let conuter = setInterval(countdown,1000);
function countdown(){
    myNumber.innerHTML -= 1;
    if(  myNumber.innerHTML  === "0"){
        clearInterval(conuter);
    }
}

// setInterval(set,1000);

// function set(){
//     console.log("hallo Berlin")
// }

// setInterval(function(){
//     console.log("hallo Berlin ich bin----")
// },2000);

// --------------------------------------------------------------