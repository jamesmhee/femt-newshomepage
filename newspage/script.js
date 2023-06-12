function toggleNav(x) {
    x.classList.toggle("change");
    
    let navbar = document.querySelector('#navbar');
    if(navbar.className === "navbar-items"){
        navbar.className += " menu-active";
    }
    else{
        navbar.className = "navbar-items";
    }
}