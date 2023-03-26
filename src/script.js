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

var b = true;
var tm;
var h, m, s;

var timer = setInterval(update, 1000);
clearInterval(timer);

function start()
{
    

    h = document.getElementById("H").value;
    m = document.getElementById("M").value;
    s = document.getElementById("S").value;
    if (!h) h = "00";
    if (!m) m = "00";
    if (!s) s = "00";

    tm = Number(h)*3600 + Number(m)*60 + Number(s);
    if (tm > 0)
    {
        document.getElementById("H").disabled = true;
        document.getElementById("M").disabled = true;
        document.getElementById("S").disabled = true;
        timer = setInterval(update, 1000);

        document.getElementById("start").style.display="none";
        document.getElementById("stop").style.display="inline";
        document.getElementById("stop text").innerHTML = "";
    }
    if (tm <= 0)
    {
        document.getElementById("stop text").innerHTML = "Set Valid Time";
    }
}
function stop()
{
    document.getElementById("H").disabled = false;
    document.getElementById("M").disabled = false;
    document.getElementById("S").disabled = false;
    clearInterval(timer);
    document.getElementById("start").style.display="inline";
    document.getElementById("stop").style.display="none";
}

function reset()
{
    tm = 0;
    h = Math.floor(tm/3600).toString();
    if (h.length == 1) h = "0" + h;

    m = Math.floor(tm/60).toString();
    if (m.length == 1) m = "0" + m;

    s = (tm%60).toString();
    if (s.length == 1) s = "0" + s;

    document.getElementById("H").value = h;
    document.getElementById("M").value = m;
    document.getElementById("S").value = s;
}

if (localStorage.getItem("search"))
{
    add_Keys(localStorage.getItem("search"));
    localStorage.removeItem("search");
}

function update()
{
    tm--;

    var h = Math.floor(tm/3600).toString();
    if (h.length == 1) h = "0" + h;

    var m = Math.floor(tm/60).toString();
    if (m.length == 1) m = "0" + m;

    var s = (tm%60).toString();
    if (s.length == 1) s = "0" + s;

    document.getElementById("H").value = h;
    document.getElementById("M").value = m;
    document.getElementById("S").value = s;

    if (tm == 0)
    {
        document.getElementById("stop text").innerHTML = "TIMER ENDED!";
        stop();
    }
}



function searchButton()
{
    var srch = document.getElementById("searchbar").value;

    if (srch)
    {
        localStorage.setItem("search", srch);
        window.location.href = "search_result.html";
    }
}

function addKeys()
{
    const keys = Object.keys(names);

    keys.forEach
    ((key, index) => {
        addLink(key);
    })
}


function add_Keys(keyword)
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





