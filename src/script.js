var time = document.getElementById("timer");
var b = true;
var tm;

let names = 
{
    "ar01" : "Buffalo Chicken",
    "ar02" : "Turkey Sliders with Sesame Slaw",
    "ar03" : "Tortilla Pinwheels",
    "dr08" : "Baked Bhurro Bites",
    "dr09" : "Philadelphia Classic Cheesecake",
    "dr10" : "Rasmalai",
    "mr04" : "Classic Swedish Meatballs",
    "mr05" : "Italian Roulade",
    "mr06" : "Tabouleh",
    "mr07" : "Chicken Tikka Masala"
};
addKeys();
// var timer = setInterval(update, 1000);
// clearInterval(timer);

// //document.getElementById("result").innerHTML = <a href="">old</a>;

// document.getElementById("b1").style.display="inline";
// document.getElementById("b2").style.display="none";

// function start(t)
// {
//     if (b)
//     {
//         tm = t;
//         b = false;
//     }

//     timer = setInterval(update, 1000);

//     document.getElementById("b1").style.display="none";
//     document.getElementById("b2").style.display="inline";
// }
// function stop()
// {
//     clearInterval(timer);
//     document.getElementById("b1").style.display="inline";
//     document.getElementById("b2").style.display="none";
// }

// function update()
// {
//     time.innerHTML = tm--;
// }

function addKeys()
{
    const keys = Object.keys(names);

    keys.forEach
    ((key, index) => {
        addLink(key);
    })
}

function addLink(name)
{
    var div = document.createElement("div");

    var body = document.getElementById("body");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var img1 = document.createElement("img");

    var linktext = document.createTextNode(names[name]);
    var a2 = document.createElement("a");
    a2.setAttribute("href", "recipes/"+name+".html");

    img1.setAttribute("src", "recipes/"+name+".jpeg");
    div1.appendChild(img1);
    div1.classList.add("recipeimg");
    
    a2.appendChild(linktext);
    div2.appendChild(a2);
    div2.classList.add("recipename");

    div.appendChild(div1);
    div.appendChild(div2);
    div.classList.add("recipe");
    
    body.appendChild(div);
}





