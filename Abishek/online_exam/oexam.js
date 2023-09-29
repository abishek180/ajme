function submit_fn(){
   let marks=0;

 if(document.getElementById("btn1_tru").checked){
    marks=marks +1;
    document.getElementById("qns1").style.color="black";
 }

 if(document.getElementById("btn2_tru").checked){
    marks=marks +1;
    document.getElementById("qns2").style.color="black";
 }

 if(document.getElementById("btn3_fal").checked){
    marks=marks +1;
    document.getElementById("qns3").style.color="black";
 }

 if(document.getElementById("btn4_fal").checked){
    marks=marks +1;
    document.getElementById("qns4").style.color="black";
 }

 if(document.getElementById("btn5_fal").checked){
    marks=marks +1;
    document.getElementById("qns5").style.color="black";
 }

 if(document.getElementById("btn6_fal").checked){
   marks=marks+ 1;
   document.getElementById('qns6').style.color="black";
 }

 if(document.getElementById("btn7_tru").checked){
   marks=marks+ 1;
   document.getElementById("qns7").style.color="black";
 }

 if(document.getElementById("btn8_tru").checked){
   marks=marks+1;
   document.getElementById("qns8").style.color="black"
 }
 alert(marks);



 if(document.getElementById("btn1_fal").checked){
     document.getElementById("qns1").style.color="red";
     
}

  if(document.getElementById("btn2_fal").checked){
     document.getElementById("qns2").style.color="red";
}

  if(document.getElementById("btn3_tru").checked){
     document.getElementById("qns3").style.color="red";
}

  if(document.getElementById("btn4_tru").checked){
     document.getElementById("qns4").style.color="red";
}

 if(document.getElementById("btn5_tru").checked){
    document.getElementById("qns5").style.color="red";
 }

 if(document.getElementById("btn6_tru").checked){
   document.getElementById("qns6").style.color="red";
 }

 if(document.getElementById("btn7_fal").checked){
   document.getElementById("qns7").style.color="red";
 }

 if(document.getElementById("btn8_fal").checked){
   document.getElementById("qns8").style.color="red";
 }

}

function reset_fn(){
   
    document.getElementById("btn1_temp").checked=true;
    document.getElementById("qns1").style.color="black";

    document.getElementById("btn2_temp").checked=true;
    document.getElementById("qns2").style.color="black";

    document.getElementById("btn3_temp").checked=true;
    document.getElementById("qns3").style.color="black";

    document.getElementById("btn4_temp").checked=true;
    document.getElementById("qns4").style.color="black";

    document.getElementById("btn5_temp").checked=true;
    document.getElementById("qns5").style.color="black";

    document.getElementById("btn6_temp").checked=true;
    document.getElementById("qns6").style.color="black";

    document.getElementById("btn7_temp").checked=true;
    document.getElementById("qns7").style.color="black";

    document.getElementById("btn8_temp").checked=true;
    document.getElementById("qns8").style.color="black";


}

function next_fn(){
   document.getElementById("qns_part_A").style.display="none";
   // document.getElementById("btn_reset1").style.display="none";
   document.getElementById("qns_part_B").style.display="block";
   // document.getElementById("btn_reset2").style.display="block";
}

function prev_fn(){
   document.getElementById("qns_part_A").style.display="block";
   // document.getElementById("btn_reset1").style.display="block";
   document.getElementById("qns_part_B").style.display="none";
   // document.getElementById("btn_reset2").style.display="none";
}