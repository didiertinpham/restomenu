const burgerButton = document.getElementById('burgerButton');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'burgerButton'){
        burgerButton.classList.remove('active');
        sidebar.classList.remove('active')
    }
}
burgerButton.onclick = function(){
    burgerButton.classList.toggle('active');
    sidebar.classList.toggle('active')
}

function myfunction() {
    var contact = document.getElementById("myContact");
    contact.classList.toggle("show");
}
function myFunction() {
    var schedule = document.getElementById("mySchedule");
    schedule.classList.toggle("show");
}