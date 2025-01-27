// let x=document.createElement("h1");
// x.innerText="Dyanamic creation of element from html from JS"
// //x.id="demo"
// x.setAttribute("id" , "demo");

// console.log(x);
// document.body.appendChild(x);
// let image=document.createElement("img");
// image.src="./images/burger1.png";
// console.log(image);
// document.body.appendChild(image);


// let mainEle=document.createElement("div");
// mainEle.setAttribute("class","mainBlock");
// // console.log(mainEle);

// let topEle=document.createElement("div");
// topEle.setAttribute("class","topBlock");

// let image=document.createElement("img");
// image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6yT7oBWFeKJH-85mTe_LX8XL5RXw1mRFow&s";
// image.width="300"
// image.height="300"

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");

// let h1=document.createElement("h1");
// h1.innerText="Heading";

// let btn=document.createElement("button");
// btn.innerText="view More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);
let form=document.querySelector("form");
let username = document.getElementById("uName");

let password = document.getElementById("uPass");

let gen = document.getElementsByName("gender");
// console.log(gen);

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})
