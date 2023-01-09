window.onload = function() {

    setAge();

    initClock();

    bgv();
    bgs
    
    httpGetAsync("https://api.spotify.com/v1/me/player/currently-playing", httpGetAsyncResponse, httpGetAsyncResponseError)
    
    setInterval(function() { 
        httpGetAsync("https://api.spotify.com/v1/me/player/currently-playing", httpGetAsyncResponse, httpGetAsyncResponseError)
    }, 60000);

}

// RANDOM BG
function bgv(){  
    var thediv = document.getElementById("bgv");  
    var imgarray = new Array("./media/bg/background-1.mp4", "./media/bg/background-2.mp4", "./media/bg/background-3.mp4") 
    var spot = Math.floor(Math.random()* imgarray.length);  
    thediv.setAttribute('src', imgarray[spot]);
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

// TIME
Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};
  
function updateClock() {
    var now = new Date();
    var milli = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hou = now.getHours(),
      mo = now.getMonth(),
      dy = now.getDate(),
      yr = now.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}
  
function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

// SPOTFIY
function httpGetAsync(theUrl, callback, callbackError)
{
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.response);
        } 
        if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
          httpGetAsyncResponseError()
        }
    }

    xmlHttp.open("GET", theUrl, true);
    xmlHttp.responseType = "json"
    xmlHttp.setRequestHeader("Accept", "application/json")
    xmlHttp.setRequestHeader("Content-Type", "application/json")
    xmlHttp.setRequestHeader("Authorization", "Bearer ---Thats my token, Not yours!---")
    xmlHttp.send(null);
}

function httpGetAsyncResponseError() {
  var spotifyNameHolder = document.getElementById("spotify-name")
  spotifyNameHolder.innerText = "Error"

  var spotifyArtistHolder = document.getElementById("spotify-artists")
  spotifyArtistHolder.innerText = "Error"

}

function httpGetAsyncResponse(response)
{

  console.log(response)
  var spotifyName = response.item.name
  var spotifyNameHolder = document.getElementById("spotify-name")
  spotifyNameHolder.innerText = spotifyName

  var spotifyArtist = response.item.artists[0].name
  var spotifyArtistHolder = document.getElementById("spotify-artists")
  spotifyArtistHolder.innerText = spotifyArtist

}