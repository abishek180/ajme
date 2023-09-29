function set_img(){
    
     let x = document.getElementById("slct1").value;
     
      document.getElementById("myimg").src=x;
    // document.body.style.backgroundImage="url('flower.jpg')";

}
// ----------------------------------------------------------------------------
function set_color(){
    let x = document.getElementById("mycolor").value;
    document.getElementById("mainct").style.backgroundColor=x;
}