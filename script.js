var desiredReplacementIncome = document.getElementById('dri');
var OutofPocketHealthcareExpenses = document.getElementById('ohe');
var homeModificationExpenses = document.getElementById('hme');
var medicalHomecareExpenses = document.getElementById('mhe');
var otherExpenses = document.getElementById('oe');
var recoveryPeriod = document.getElementById('rp');

//for ranges - slider
var driRange = document.getElementById("driRange");
var oheRange = document.getElementById("oheRange");
var hmeRange = document.getElementById("hmeRange");
var mheRange = document.getElementById("mheRange");
var oeRange = document.getElementById("oeRange");
var rpRange = document.getElementById("rpRange");

// var dri = document.getElementById("dri");
// output.innerHTML = slider.value;

// Display the default slider value

// Update the current slider value (each time you drag the slider handle)
driRange.oninput = function () {
    desiredReplacementIncome.value = driRange.value;

}
oheRange.oninput = function () {
    OutofPocketHealthcareExpenses.value = oheRange.value;

}
hmeRange.oninput = function () {
    homeModificationExpenses.value = hmeRange.value;

}
mheRange.oninput = function () {
    medicalHomecareExpenses.value = mheRange.value;

}
oeRange.oninput = function () {
    otherExpenses.value = oeRange.value;

}
rpRange.oninput = function () {
    recoveryPeriod.value = rpRange.value;

}


function calculate() {


    $('#chart').empty();
    $('#chart').html('<canvas id="myChart"  width="400" height="400"></canvas>'); // then load chart.
    var myChart = document.getElementById("myChart").getContext('2d');



    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';



    let first = 0;
    let second = 0;
    first = (Number(desiredReplacementIncome.value) + Number(OutofPocketHealthcareExpenses.value) +
        Number(homeModificationExpenses.value) + Number(medicalHomecareExpenses.value)) - Number(otherExpenses.value);
    second = (Number(desiredReplacementIncome.value) + Number(OutofPocketHealthcareExpenses.value) +
        Number(homeModificationExpenses.value)) * 1.2 / Number(recoveryPeriod.value);


    let massPopChart = new Chart(myChart, {
        type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: ['cost today', 'cost in 10 years'],
            datasets: [{
                label: 'Estimated cost today',
                data: [
                    first,
                    second
                ],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'

                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        }

    });
}


calculate();        //to create chart on page load









