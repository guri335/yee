var colors=["red","blue","green","purple","orange","black","maroon","lime"]
function changecolor(){
    var num=Math.floor(Math.random()*(colors.length))
    document.getElementById("target").style.backgroundColor =colors[num];
}
