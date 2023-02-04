// STARTUP
window.onload = function() {

    setAge();

}


// AGE CHANGER
function setAge() {
    birthDate = new Date("14 January 2010");
    otherDate = new Date();
    element = document.getElementById("dynamicAge");

    if (!element) return;

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    element.innerHTML = years;
}