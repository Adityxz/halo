const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*250)+1 ;
    const j=Math.floor(Math.random()*500)+1 ;

    b.style.left=i+"px"
    b.style.top=j+"px"
}

// get parameter link to overide title
const custName = window.location.search;
const urlParam = new URLSearchParams(custName);
const params = urlParam.get('name');
const first = "Hai"
const finalName = first.concat(" ", params, ",<br>"," Wanna Hangout Sometimes?")

document.getElementById("hai").innerHTML = (finalName);