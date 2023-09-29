
    $(document).ready(function(){

          
        $("#btn_1").click(function(){
            let x = $("#first_num").val();
             let y = $("#second_num").val();
            let z = parseInt(x) +parseInt(y);
            $("#result").val(z);
        });
        // --------------------------------------------
        $("#btn_2").click(function(){
            let x = $("#first_num").val();
             let y = $("#second_num").val();
            let z = parseInt(x) -parseInt(y);
            $("#result").val(z);
        });
        // ------------------------------------------------
        $("#btn_3").click(function(){
            let x = $("#first_num").val();
             let y = $("#second_num").val();
            let z = parseInt(x) *parseInt(y);
            $("#result").val(z);
        });
        // ------------------------------------------------

        $("#btn_4").click(function(){
            let x = $("#first_num").val();
             let y = $("#second_num").val();
            let z = parseInt(x) /parseInt(y);
            $("#result").val(z);
        });
        // ------------------------------------------------

        $("#btn_5").click(function(){
            let x = $("#first_num").val();
             let y = $("#second_num").val();
            let z = parseInt(x) %parseInt(y);
            $("#result").val(z);
        });








;








    // ------------------------------------------------
});