function set_unitprice1(){
   let x = document.getElementById("slctitem1").value;
   document.getElementById("txt_unit1").value=x;
   set_total1();  

}
// ---------------------------------------------------------------

function set_unitprice2(){
    let x = document.getElementById("slctitem2").value;
    document.getElementById("txt_unit2").value=x;
    set_total2();
}
// --------------------------------------------------------------

function set_unitprice3(){
    let x = document.getElementById("slctitem3").value;
    document.getElementById("txt_unit3").value=x;
    set_total3();
} 
// ----------------------------------------------------------------

function set_total1(){
    
    let x = document.getElementById("slctqty1").value;
    let y =  document.getElementById("txt_unit1").value;
    let z = (x * y);
    document.getElementById("txt_total1").value=z;
    set_grandtotal();
}
// --------------------------------------------------

function set_total2(){
    let x = document.getElementById("slctqty2").value;
    let y = document.getElementById("txt_unit2").value;
    let z = (x * y);
    document.getElementById("txt_total2").value=z;
    set_grandtotal();
}
// ---------------------------------------------------------------------

function set_total3(){
    let x = document.getElementById("slctqty3").value;
    let y = document.getElementById('txt_unit3').value;
    let z = (x * y);
    document.getElementById("txt_total3").value=z;
    set_grandtotal();

}
// --------------------------------------------------------------------

function set_grandtotal(){
    let x = 0;
    let y = 0;
    let z = 0;

    if(document.getElementById("chk_row1").checked){

    
     x = document.getElementById("txt_total1").value;
     document.getElementById("div_total1").style.backgroundColor="antiquewhite";
    }else{
        document.getElementById("div_total1").style.backgroundColor="red";
    }
// ---------------------------------------------------------
    if(document.getElementById("chk_row2").checked){

    
     y = document.getElementById("txt_total2").value;
     document.getElementById("div_total2").style.backgroundColor="antiquewhite";
    }else{
        document.getElementById("div_total2").style.backgroundColor="red";
    }
// ---------------------------------------------------------------
    if(document.getElementById("chk_row3").checked){
     z = document.getElementById("txt_total3").value;
     document.getElementById("div_total3").style.backgroundColor="antiquewhite";
    }else{
        document.getElementById("div_total3").style.backgroundColor="red";
    }
    // ------------------------------------------------------------
    let result = (parseInt(x) + parseInt(y)  + parseInt(z));
    document.getElementById("txt_grand_total").value=result;

}