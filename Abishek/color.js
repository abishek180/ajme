function set_color()
        {
            let value=document.getElementById("selct1").value;
            if(document.getElementById("check1").checked){
                document.body.style.backgroundColor=value;
            }else{
                document.body.style.backgroundColor="white";

            }
            // --------------------------
            if(document.getElementById("check2").checked){
                document.getElementById("div1").style.backgroundColor=value;
                document.getElementById("div2").style.backgroundColor=value;
            }else{
                document.getElementById("div1").style.backgroundColor="white";
                document.getElementById("div2").style.backgroundColor="white";
            }
        }