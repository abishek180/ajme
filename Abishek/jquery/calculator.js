$(document).ready(function(){
    $(".clk").click(function(){
        $("#txt_rslt").val($("#txt_rslt").val() + $(this).val());
    });

    $(".clear").click(function(){
        $("#txt_rslt").val("");
    });
    $(".equal").click(function(){
        $("#txt_rslt").val(eva($("#txt_rslt").val()));
    });
});

