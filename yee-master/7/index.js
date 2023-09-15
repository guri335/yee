function func(){
    var x=document.getElementById("num").value
    document.getElementById("Para").style.fontSize="90px"
    document.getElementById("Para").style.color="RED"
    document.getElementById("Para").innerHTML="Hello "+x
    var x=document.getElementById("num").value=""
    alert("Hello " + x)
} 
function table()
{
    var n=document.getElementById("num").value
    var arr=[]
    for(var i=1;i<=10;i++){
        arr.push(" " +n+ "X" + i + "="+n*i+" ")
    }
    document.getElementById("Para").innerHTML=arr
}
function odd_even()
{
    document.getElementById("Para").style.fontSize="50px"
    var dig=document.getElementById("num").value
    if(dig&1){
        document.getElementById("Para").style.color="RED"
        document.getElementById("Para").innerHTML=("The number "+dig + " Is Odd")
    }
    else{
        document.getElementById("Para").style.color="Blue"
        document.getElementById("Para").innerHTML=("The number "+dig + " Is Even")
    }
    var x=document.getElementById("num").value=""
}