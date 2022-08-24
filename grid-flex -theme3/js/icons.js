// const active = document.querySelector(".active");
const icons = document.querySelectorAll("i");

let i = 1
setInterval( () => {
    i++;
    const icon = document.querySelector(".icons .active")
    icon.classList.remove("active")
    for (let z = 0; z < 100; z++) {
    if( i > icons.length){
        icons[0].classList.add("active")
        i = 1

    }
    else{
        icon.nextElementSibling.classList.add("active")
        
    }

    
}

},1300)





