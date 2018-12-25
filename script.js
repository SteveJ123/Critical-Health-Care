

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
    console.log("test");
}
oheRange.oninput = function () {
    OutofPocketHealthcareExpenses.value = oheRange.value;
    console.log("test");
}
hmeRange.oninput = function () {
    homeModificationExpenses.value = hmeRange.value;
    console.log("test");
}
mheRange.oninput = function () {
    medicalHomecareExpenses.value = mheRange.value;
    console.log("test");
}
oeRange.oninput = function () {
    otherExpenses.value = oeRange.value;
    console.log("test");
}
rpRange.oninput = function () {
    recoveryPeriod.value = rpRange.value;
    console.log("test");
}


function calculate() {




    // Construct options first and then pass it as a parameter
    var options1 = {
        animationEnabled: true,
        title: {
            text: ""
        },
        data: [{
            type: "column", //change it to line, area, bar, pie, etc
            legendText: "", //Try Resizing with the handle to the bottom right
            showInLegend: true,
            dataPoints: [
                {
                    y: (Number(desiredReplacementIncome.value) + Number(OutofPocketHealthcareExpenses.value) +
                        Number(homeModificationExpenses.value) + Number(medicalHomecareExpenses.value)) - Number(otherExpenses.value)
                },
                {
                    y: (Number(desiredReplacementIncome.value) + Number(OutofPocketHealthcareExpenses.value) +
                        Number(homeModificationExpenses.value)) * 1.2 / Number(recoveryPeriod.value)
                }

            ]
        }]

    };
    console.log(Number(desiredReplacementIncome.value), Number(OutofPocketHealthcareExpenses.value), Number(homeModificationExpenses.value), Number(otherExpenses.value));

    $("#resizable").resizable({
        create: function (event, ui) {
            //Create chart.
            $("#chartContainer1").CanvasJSChart(options1);
        },
        resize: function (event, ui) {
            //Update chart size according to its container size.
            $("#chartContainer1").CanvasJSChart().render();
        }
    });
}








