// STARTUP
window.onload = function() {

    setAge()

    setEvent()

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


// EVENT TEXT
function setEvent() {

    const specialDays = {
        "1 0": "New Years! 🎉",
        "14 0": "My Birthday! 🎂",
        "14 1": "Valentines Day! 💘",
        "1 3": "April Fools! 🎉",
        "31 9": "Halloween! 🎃",
        "11 10": "Remembrance Day! 🎖️",
        "24 11": "Christmas Eve! 🎅",
        "25 11": "Christmas! 🎅",
        "26 11": "Boxing Day! 🎅",
        "31 11": "New Years Eve! 🎉",
    };

    let date = new Date();

    let currentDateKey = date.getDate() + " " + date.getMonth();


    if (currentDateKey in specialDays) {

        console.log("Today its " + specialDays[currentDateKey])

        specialDayID = document.getElementById("dynamicEvent");

        specialDayID.innerHTML = "Today its " + specialDays[currentDateKey];

    }

}


// THEME SWITCHER 
const theme1 = document.getElementById("dark");
const theme2 = document.getElementById("light");

const toggle = (dark, light) => {

    if (dark.hasAttribute('disabled')) {

        dark.removeAttribute('disabled');
        light.setAttribute('disabled', '');

        document.getElementById("themeIcon").innerHTML = "light_mode";

        showPopup("Theme Switched!")

    } else {

        dark.setAttribute('disabled', '');
        light.removeAttribute('disabled');

        document.getElementById("themeIcon").innerHTML = "dark_mode";

        showPopup("Theme Switched!")

    }

}


// SHARE LINK
function copyLink() {

    text = "https://synth.fyi";
    copyTextToClipboard(text);

    showPopup("Link Copied!")

  }
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);

  } catch(err) {

    console.log('Error in copying text: ', err);

  }
}


// POPUP
function showPopup(text) {

    var x = document.getElementById("popup");
    x.className = "show";
    x.innerHTML = text
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}