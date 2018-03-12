// Get the element which is first and click on it
document.getElementsByClassName("tablink")[0].click();

setInterval(function tabsize() {
tablinks = document.getElementsByClassName("tablink");
let w=(100/tablinks.length);
for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.width = w + "%";
    }
},10);
