var bulb = document.querySelector(".bulb")
var btn = document.querySelector(".bton")
var n = document.querySelector("h1")

var flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0)
    {
        n.innerHTML = "Click To OFF The Bulb"
        n.style.color = "crimson"
        bulb.style.backgroundColor = "greenyellow"
        bulb.style.borderColor="white"
        btn.innerHTML = "OFF"
        btn.style.color = "red"
        btn.style.borderColor = "red"
        flag=1
    }
    else
    {
        n.innerHTML = "Click To ON The Bulb"
        n.style.color = "black"
        bulb.style.backgroundColor = "grey"
        bulb.style.borderColor="black"
        btn.innerHTML = "ON"
        btn.style.color = "black"
        btn.style.borderColor = "black"
        // btn.style.backgroundColor = "white"
        flag=0
    }
});
