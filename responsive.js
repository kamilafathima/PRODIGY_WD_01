let sidenav=document.querySelector(".side_navbar")
function show_navbar()
{
sidenav.style.display="block"
}

function close_navbar()
{
    sidenav.style.display="none"
}
function home()
{
    document.getElementById("home").scrollIntoView({behavior: 'smooth'});
}
function menu()
{
    document.getElementById("menu").scrollIntoView({behavior: 'smooth'});
}
function specials()
{
    document.getElementById("specials").scrollIntoView({behavior: 'smooth'});
}
function contact()
{
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
}
