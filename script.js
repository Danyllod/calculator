function insert(num)
{
    document.querySelector(".display").innerHTML += num;

}
function clean(){

    document.querySelector(".display").innerHTML = "";
}
function back ()
{
    let display = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML =display.substring(0,display.length -1);
}
function sum(){
    let sum = document.querySelector(".display").innerHTML;
    if(sum){
         document.querySelector(".display").innerHTML= eval(sum);
    }
    else{
        document.querySelecto(".display").innerHTML= "nenhum comando";
    }
}
