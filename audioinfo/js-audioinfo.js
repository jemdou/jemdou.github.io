
function showInfoDivWithID(divID) {
    var infoDivs = document.querySelectorAll(".infoDiv");

    infoDivs.forEach(function(div) {
        if(div.id === divID) {
            div.style.display = "block";
        }
        else {
            div.style.display = "none";
        }
    });
}