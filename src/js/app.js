let gasPrice = 0;
let mpg = 0;
let annualMilesDriven = 0;
let reductionPercentage = 0;
let boosterGasReductionPercentage = reductionPercentage / 100;

let annualFuelConsumption = 0;
let annualFuelCost = 0;
let monthlyFuelCost = 0;

function Calculate(){
  gasPrice = document.getElementById("form-gasPrice").value;
  mpg = document.getElementById("form-mpg").value;
  annualMilesDriven = document.getElementById("form-annualMilesDriven").value;
  reductionPercentage = document.getElementById("form-reductionPercentage").value;

  SetBaseCosts();
  CalculateSavings();
}

function SetBaseCosts() {
  HandleElementsByClassName(document.getElementsByClassName("GasPrice"), gasPrice);
  HandleElementsByClassName(document.getElementsByClassName("AnnualMilesDriven"), annualMilesDriven);

  document.getElementById("Mpg").innerText = mpg.toString();

  //Calculated
  annualFuelConsumption =  (annualMilesDriven/mpg).toFixed(2);
  annualFuelCost = (annualFuelConsumption * gasPrice).toFixed(2);
  monthlyFuelCost = (annualFuelCost/12).toFixed(2);

  let annualFuelCostFormatted = formatMoney.format(annualFuelCost);
  let monthlyFuelCostFormatted = formatMoney.format(monthlyFuelCost);

  document.getElementById("AnnualFuelConsumption").innerText = annualFuelConsumption.toString();
  document.getElementById("AnnualFuelCost").innerText = annualFuelCostFormatted;
  document.getElementById("MonthlyFuelCost").innerText = monthlyFuelCostFormatted;
}


function CalculateSavings() {
  let boosterMpg = mpg + (mpg * boosterGasReductionPercentage);
  let boosterAnnualFuelConsumption = (annualMilesDriven/boosterMpg).toFixed(2);
  let boosterAnnualFuelCost = (boosterAnnualFuelConsumption * gasPrice).toFixed(2);
  let boosterMonthlyFuelCost = (boosterAnnualFuelCost / 12).toFixed(2);
  let savingsAnnual = (annualFuelCost - boosterAnnualFuelCost).toFixed(2);;
  let savingsMonthly = (monthlyFuelCost - boosterMonthlyFuelCost).toFixed(2);;

  boosterAnnualFuelCost = formatMoney.format(boosterAnnualFuelCost);
  boosterMonthlyFuelCost = formatMoney.format(boosterMonthlyFuelCost);
  savingsAnnual = formatMoney.format(savingsAnnual);
  savingsMonthly = formatMoney.format(savingsMonthly);

  document.getElementById("BoosterMpg").innerText = boosterMpg.toString();
  document.getElementById("BoosterAnnualFuelConsumption").innerText = boosterAnnualFuelConsumption;
  document.getElementById("BoosterAnnualFuelCost").innerText = boosterAnnualFuelCost;
  document.getElementById("BoosterMonthlyFuelCost").innerText = boosterMonthlyFuelCost;

  document.getElementById("AnnualSavings").innerText = savingsAnnual;
  document.getElementById("MonthlySavings").innerText = savingsMonthly;
}

function HandleElementsByClassName(collection, valueToHandle) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].innerText = valueToHandle.toString();
  }
}

const formatMoney = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

Calculate();
