$(document).ready(function(){

    $(".number, .operator").click(function(){

        var value = $(this).val();
        $("#display").val($("#display").val() + value)
        
    })
   
    $(".clear").click(function(){
        $("#display").val("")
    })

    $(".equal").click(function(){
        var result = eval($("#display").val());
        $("#display").val(result);
    })

})