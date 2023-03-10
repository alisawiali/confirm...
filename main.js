

//Learn JavaScript In Arabic 2021 - #103 - Alert, Confirm, Prompt
// setTimeout And clearTimout
// clearTimout machen wir ein button und denn holen wir es mit (const) und geben wir es vor dem (setTimout ein veriabel)
//const mybtn = document.querySelector("button");
// const stop = setTimeout(sayhallo,1000);
// mybtn.onclick= function(){clearTimeout(stop) };



const myDiv = document.querySelector("div");
const mybtn = document.querySelector("button");

console.log(mybtn)



// const myConfirom = confirm( "Do you want to open the website?");

//  setTimeout(sayhallo,1000);

//  function sayhallo(){
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
//   }

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


const myClick = document.getElementById("click");
const myShow = document.getElementById("show");

const myTime = setInterval( writmassege,2000);

function writmassege(){
    console.log("hallo Every 2 Secondary");
}
// myClick.onclick= function(){
//     clearInterval(myTime);
// }


function writmassege(){

    if(myShow.textContent <= 0){
        myShow.textContent = "Done.... ";
        clearInterval(myTime);

    }
else{
   myShow.textContent = myShow.textContent -1;
}


}

// ------------------------------offsetHeight/ width...... clientWidth / height.....---------------->
// console.log(mybtn.offsetHeight);
// console.log(mybtn.clientWidth);
// dann können wir den Beide benuzten,um die höhe und bereite die Webwiesen....

const myCite = document.getElementById("cite");


console.log(myCite)
onscroll = function(){
    if(scrollY >= 200){
      myCite.style.cssText = "display: block;background:green";
    }else{
       myCite.style.cssText = "display:none";
    }

}
myCite.onclick = function(){
    this.scroll({
        top:0,
        left:0,
        behavior:"smooth",

    })
}

// ---------- Window location Object------------>


console.log(location);
console.log(location.href);

// location.href = "https://www.google.com/";
//location.href = "/#number";
// location.href = "https://developer.mozilla.org/en-US/";

// console.log(location.host);
// console.log(location.hostname)

// console.log(location.protocol)

//console.log(location.hash) // id meinte er hier
console.log(location.reload)

// ---------- Window Open And close------------>

// setTimeout(function(){
//     window.open("https://google.com","_blank","width=400,height=400,left=200,top=200")
// },2000);


// ---------- Window History object------------>
console.log(history)

