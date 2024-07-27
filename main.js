const togglebtn = document.querySelector(".toggle-btn");
const togglebtnicon = document.querySelector(".toggle-btn i");
const togglebtn = document.querySelector(".dropdown-menu");

togglebtn.onclick =function () {
    dropdownmenu.classlist.toggle(.open)
    const isopen = dropdownmenu.classlist.contains('open')

    togglebtnicon.classlist = isopen
    ?''
}
