
$(function (){
    $("#btnCalculate").click(calculate);
    $("#selectOperator").change(calculate);
    $(":text").blur(validateData);
});
function isValueValid(value){
    return !(value == "" || isNaN(value));
}
function validateData(){
    var $this = $(this);
    var isValid = isValueValid($this.val());
    if (!isValid){
        $this.css("border","1px solid red");
    } else {
        $this.css("border","");
    }
    $("#btnCalculate").attr("disabled", !isValid);
}
function calculate(){
    var value1 = parseInt($("#txtNumber1").val(),10);
    var value2 = parseInt($("#txtNumber2").val(),10);
    var operator = $("#selectOperator").val();
    var result = 0;
    switch (operator){
        case "add" :
            result = value1 + value2;
            break;
        case "subtract" :
            result = value1 - value2;
            break;
        case "multiply" :
            result = value1 * value2;
            break;
        case "divide" :
            result = value1 / value2;
            break;
    }
    $("#divResult").html(result);
}
