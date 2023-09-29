function set_fontfamily(){
    let x= document.getElementById("sel_family").value;
    document.getElementById("txt_area").style.fontFamily=x;
}
// --------------------------------------------------------------
function set_fontsize(){
    let x= document.getElementById("sel_size").value;
    document.getElementById("txt_area").style.fontSize=x;
}
// ------------------------------------------------------------
function set_bold(){
    let x= document.getElementById("txt_bx1").value;
    if(x=="0"){
    document.getElementById("btn_bold").style.fontWeight="bold";
    document.getElementById("txt_area").style.fontWeight="bold";
    document.getElementById("txt_bx1").value="1";
    }else if(x=="1"){
        document.getElementById("btn_bold").style.fontWeight="normal";
    document.getElementById("txt_area").style.fontWeight="normal";
    document.getElementById("txt_bx1").value="0";
    }
}
// ------------------------------------------------------------------
function set_italic(){
    let x = document.getElementById("txt_bx2").value;
    if(x=="0"){
        document.getElementById("btn_italic").style.fontStyle="italic";
        document.getElementById("txt_area").style.fontStyle="italic";
        document.getElementById("txt_bx2").value="1";
    }else if(x=="1"){
        document.getElementById("btn_italic").style.fontStyle="normal";
        document.getElementById("txt_area").style.fontStyle="normal";
        document.getElementById("txt_bx2").value="0";
    }
}
// ---------------------------------------------------------------------
function set_under(){
    let x = document.getElementById("txt_bx3").value;
    if(x=="0"){
        document.getElementById("btn_under").style.textDecoration="underline";
        document.getElementById("txt_area").style.textDecoration="underline";
        document.getElementById("txt_bx3").value="1"
    }else if(x=="1"){
        document.getElementById("btn_under").style.textDecoration="none";
        document.getElementById("txt_area").style.textDecoration="none";
        document.getElementById("txt_bx3").value="0";
    }
}
// ------------------------------------------------------------------------
function set_align(){
    let x= document.getElementById("sel_place").value;
    document.getElementById("txt_area").style.textAlign = x;
}