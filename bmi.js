function bmi(weight, heightcm) {
    var height = heightcm/100;
    var result = weight / (height * height);
    return result;
}