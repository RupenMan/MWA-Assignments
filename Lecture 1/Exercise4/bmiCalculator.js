/**
 * Written on April 2, 2019
 * Calculates the BMI and returns the BMI Information based on BMI Ratio
 * Uses the web page based on assignment
 * 55. Exercise
 * @author Rupendra Maharjan
 */

'use strict';
(function () {
    $(document).ready(function () {
        class BMICalculator {
            constructor(height, weight) {
                this.height = height;
                this.weight = weight;
            }

            /**
             * Validates entered value of height and weight
             */
            checkValidity() {
                if (this.height < 50 || this.height > 237 || this.weight < 2 || this.weight > 650) {
                    return false;
                }else if(this.height ==NaN || this.weight==NaN){
                    return false;
                }
                return true;
            }

            /**
             * Calculates the BMI ratio
             */

            getBMIRatio() {
                const htInMeter = this.height / 100; // converts height to meter
                console.log(htInMeter);
                return this.weight / (htInMeter * htInMeter);
            }

            /**
             * Displays the BMI Information based on BMI ratio
             */
            getBMInfo() {
                if (this.getBMIRatio() >= 25) {
                    return "Overweight";
                } else if(this.getBMIRatio() > 18.5){
                    return "Healthy";
                }else{
                    return "Underweight";
                }
            }
        }

        $('#calculate').click(function () {
            var ht = $('[name="height"]').val();
            console.log(ht);
            var wt = $('[name="weight"]').val();
            console.log(wt);
            var bmiCalc = new BMICalculator(ht, wt);
            if(bmiCalc.checkValidity()){
                $('#output').html(
                    "Your BMI Ratio" +" : "+ bmiCalc.getBMIRatio() + "<br>" +
                    "Your BMI Index"+" : "+bmiCalc.getBMInfo()
                );
            }else{
                $('#output').html('Invalid height or weight');
            }
        });
    });
}());
