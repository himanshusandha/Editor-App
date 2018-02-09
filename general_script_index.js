// Get the element with id="defaultOpen" and click on it
document.getElementsByClassName("tablink")[0].click();

setInterval(function tabsize() {
tablinks = document.getElementsByClassName("tablink");
var w=(100/tablinks.length);
for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.width = w + "%";
    }
},10);
