function set_fontfamily(){
    let x= document.getElementById("set_family").value;
    document.getElementById("txt_box").style.fontFamily=x;
    // document.getElementById("div2").style.fontFamily=x;
}
// --------------------------------------------------------------
function set_fontsize(){
    let x= document.getElementById("sel_size").value;
    document.getElementById("txt_box").style.fontSize=x;
    // document.getElementById("div2").style.fontSize=x;
}
// ---------------------------------------------------------
function set_bold(){
    let x=document.getElementById("txthide_bold").value;
    

    if(x=="1"){
        document.getElementById("btn_bold").style.fontWeight="bold";
        document.getElementById("txt_box").style.fontWeight="bold";

        // document.getElementById("div2").style.fontWeight="bold";
        document.getElementById("txthide_bold").value=1;
    }else if(x=="0"){
        document.getElementById("btn_bold").style.fontWeight="normal";
        document.getElementById("txt_box").style.fontWeight="normal";
        // document.getElementById("div2").style.fontWeight="normal";
        document.getElementById("txthide_bold").value=0;
    }
}
// ------------------------------------------------------
function set_italic(){
    let x=document.getElementById("txthide_italic").value;

    if(x=="1"){
        document.getElementById("btn_italic").style.fontStyle="italic";
        document.getElementById("txt_box").style.fontStyle="italic";
        // document.getElementById("div2").style.fontStyle="italic";
        document.getElementById("txthide_italic").value=1;
    }else if(x=="0"){
        document.getElementById("btn_italic").style.fontstyle="normal";
        document.getElementById("txt_box").style.fontStyle="normal";
        // document.getElementById("div2").style.fontStyle="normal";
        document.getElementById("txthide_italic").value=0;
    }
}
// -------------------------------------------------------
function set_underline(){
    let x=document.getElementById("txthide_under").value;


    if(x=="0"){
        document.getElementById("btn_under").style.textDecoration="underline";
        document.getElementById("txt_box").style.textDecoration="underline";
        // document.getElementById("div2").style.textDecoration="underline";
        document.getElementById("txthide_under").value=1;
    }else if(x=="1"){
        document.getElementById("btn_under").style.textDecoration="none";
        document.getElementById("txt_box").style.textDecoration="none";
        // document.getElementById("div2").style.textDecoration="none";
        document.getElementById("txthide_under").value=0;
    }
}