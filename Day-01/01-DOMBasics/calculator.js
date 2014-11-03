 window.addEventListener("DOMContentLoaded",initialize);
        function initialize(){
            var btnCalculate = document.getElementById("btnCalculate");
            btnCalculate.addEventListener("click",calculate);
            
            var selectOperator = document.getElementById("selectOperator");
            selectOperator.addEventListener("change",calculate);
            
            document.getElementById("txtNumber1").addEventListener("blur",validateData);
            document.getElementById("txtNumber2").addEventListener("blur",validateData);
            
        }
        function validateData(){
            
            var txtNumber1 = document.getElementById("txtNumber1");
            var txtNumber2 = document.getElementById("txtNumber2");
            var btnCalculate = document.getElementById("btnCalculate");
            var value1 = txtNumber1.value;
            var value2 = txtNumber2.value;
            var isValid = true;
            if (value1 == "" || isNaN(value1)){
                txtNumber1.style.border = "1px solid red";
                isValid = false;
            } else {
                txtNumber1.style.border = "";
                isValid = true;
            }
            
            if (value2 == "" || isNaN(value2)){
                txtNumber2.style.border = "1px solid red";
                isValid = false;
            } else {
                txtNumber2.style.border = "";
                isValid = true;
            }
            
            if (!isValid){
                btnCalculate.disabled = true;
            } else {
                btnCalculate.disabled = false;
            }
        }
        function calculate(){
            var txtNumber1 = document.getElementById("txtNumber1");
            var value1 = parseInt(txtNumber1.value,10);
            var txtNumber2 = document.getElementById("txtNumber2");
            var value2 = parseInt(txtNumber2.value,10);
            
            var selectOperator = document.getElementById("selectOperator");
            var operator = selectOperator.value;
            var result = 0;
            /*if (operator == "add")
                result = value1 + value2;
            if (operator == "subtract")
                result = value1 - value2;
            if (operator == "multiply")
                result = value1 * value2;
            if (operator == "divide")
                result = value1 / value2;*/
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
            var divResult = document.getElementById("divResult");
            divResult.innerHTML = result;
        }