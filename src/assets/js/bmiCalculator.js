const calculateMetricBMI = (weight, height) => {
    let result
    result = weight / ((height / 100) * (height / 100))
    return result = (weight / ((height / 100) * (height / 100))).toFixed(2)
}
const getBMIclassification = value => {
    if (value < 18.5){
        return "underweight"
    } else if (value < 25){
        return "Healty"
    } else if (value < 30){  
        return "Overweight"     
    }

}