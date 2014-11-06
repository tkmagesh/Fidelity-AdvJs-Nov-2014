function SalaryCalculator(){
    this.basic = 0;
    this.hra = 0;
    this.da = 0;
    this.tax = 0;
    this.salary = 0;
    this.calculate = function(){
        var net = this.basic + this.hra + this.da;
        this.salary = net * ((100-this.tax)/100);
    }
}
