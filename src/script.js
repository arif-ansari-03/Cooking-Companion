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

add_Keys(localStorage.getItem("search"));

function update()
{
    time.innerHTML = tm--;
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





