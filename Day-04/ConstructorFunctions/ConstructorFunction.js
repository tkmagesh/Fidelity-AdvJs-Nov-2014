function SalaryCalculator(basic,hra,da,tax){
   this.basic = basic;
   this.hra = hra;
   this.da = da;
   this.tax = tax;
   this.salary = 0;
   this.calculate = function(){
      var net = this.basic + this.hra + this.da ;
      this.salary = net * ((100-this.tax)/100);
   }
}

function getSalaryCalculator(basic,hra,da,tax){
    var calc = {};
    calc.basic = basic;
    calc.hra = hra;
    calc.da = da;
    calc.tax = tax;
    calc.salary = 0;
    calc.calculate = function(){
      var net = this.basic + this.hra + this.da ;
      this.salary = net * ((100-this.tax)/100);
    }
    return calc;
}
