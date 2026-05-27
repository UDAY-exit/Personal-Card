let form = document.querySelector("form");
let main = document.querySelector("#main");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit",function(val){
    val.preventDefault();

        if(
        inputs[0].value.trim() === "" ||
        inputs[1].value.trim() === "" ||
        inputs[2].value.trim() === "" ||
        inputs[3].value.trim() === ""
    ){
        alert("Please fill all fields");
        return;
    }
    
let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("profile");

let img = document.createElement("img");
img.setAttribute("src", inputs[0].value);

let h2 = document.createElement("h2");
h2.classList.add("h2");
h2.textContent = inputs[1].value;

let h5 =  document.createElement("h5");
h5.classList.add("h5");
h5.textContent = inputs[2].value;

let p = document.createElement("p");
p.classList.add("p");
p.textContent = inputs[3].value;

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(h2);
card.appendChild(h5);
card.appendChild(p);

main.appendChild(card);


inputs.forEach(function(val){
    if(val.type !== "submit"){
        val.value = "";
    }
})
})
