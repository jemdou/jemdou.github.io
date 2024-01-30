

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



/**
 * Toggles a div to be shown or hidden
 * @param {*} divID The id of the div or span that will be hidden or shown
 * @param {*} linkID The id of the link that will be clicked to hide or show the div or span
 * @param {*} linkName The name of the link that will be clicked on
 */
function toggleDiv(divID, linkID, linkName) {
    var div = document.getElementById(divID);
    var link = document.getElementById(linkID);

    if(div.style.display == 'none') {
        div.style.display = '';
        link.innerText = '- ' + linkName;
    } else {
        div.style.display = 'none';
        link.innerText = '+ ' + linkName;
    }
}