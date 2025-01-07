const toggle = document.querySelector(".navbar-toggler")
const toggleCollapsed = document.querySelector(".navbar-toggler.collapsed")
const searchIcon = document.querySelector(".nav-link.search")
const userIcon = document.querySelector(".nav-link.user")
    
toggle.addEventListener('click', function () {

    if(toggle) {
        userIcon.innerHTML = `<span>Login/Register</span>`
    }
    else {
        userIcon.innerHTML = `<i class="fa-solid fa-user"></i>`
    }
        
    })



    function openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
