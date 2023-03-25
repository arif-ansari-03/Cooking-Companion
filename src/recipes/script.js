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

var timer = setInterval(update, 1000);
clearInterval(timer);

//document.getElementById("result").innerHTML = <a href="">old</a>;

document.getElementById("b1").style.display="inline";
document.getElementById("b2").style.display="none";

function start(t)
{
    if (b)
    {
        tm = t;
        b = false;
    }

    timer = setInterval(update, 1000);

    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline";
}
function stop()
{
    clearInterval(timer);
    document.getElementById("b1").style.display="inline";
    document.getElementById("b2").style.display="none";
}

function update()
{
    time.innerHTML = tm--;
}

function addKeys(keyword)
{
    const keys = Object.keys(names);

    keys.forEach
    ((key, index) => {
        if ((names[key].toLowerCase()).includes(keyword.toLowerCase()))
        {
            addLink(key);
        }
    })
}

function addLink(name)
{
    var result = document.getElementById("result");
    var a = document.createElement("a");
    var img = document.createElement("img");
    img.setAttribute("src", name+".jpeg");
    a.setAttribute("href", name+".html");
    a.appendChild(img);
    result.appendChild(a);
    
    var a2 = document.createElement("a");
    a2.setAttribute("href", name+".html");
    var linktext = document.createTextNode(names[name]+"\n");
    a2.appendChild(linktext);
    result.appendChild(a2);    
}





