const toggle = document.querySelector(".navbar-toggler")
const toggleCollapsed = document.querySelector(".navbar-toggler.collapsed")
const searchIcon = document.querySelector(".nav-link.search")
const userIcon = document.querySelector(".nav-link.user")
    
toggle.addEventListener('click', function () {

    if(toggle) {
        searchIcon.innerHTML = `<span>Search</span>`
        userIcon.innerHTML = `<span>Login/Register</span>`
    }
    else {
        searchIcon.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
        userIcon.innerHTML = `<i class="fa-solid fa-user"></i>`
    }
        
    })



