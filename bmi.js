const BMI = {
    height: 175,
    weight: 70,
    calcBMI: function() {
        var result = this.weight / ((this.height/100) * (this.height/100));
        return result;
    }
}