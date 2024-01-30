var var1 = "variable1";
var var2 = "variable2";
var var3 = "variable3";

var dict = {
  var1 : 0,
  var2 : 0,
  var3: 0,
}

function useFunction() {
    var str = "";
    for(var key in dict) {
        if(dict[key] >= 0) {
            str += key + " : " + dict[key] + "<br>";

        }
    }
    document.getElementById("textbox").innerHTML = str;
}
