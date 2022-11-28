/* Code Challange #3
   Code written by: Mayaka Osinde Onwanga.

   Steps to solutions;
   1. Create a function for the net salary.
   2. Create variables for values to be input by user.
   3. Collect value from the HTML input elements and convert to integer.
   4. Create variables to host the PAYE, NSSF and NHIF data points.
   5. Create computes that tabulate and output a net salary.
   6. Print output in HTML paragraph.  
   
*/



// Net Salary Calculator (Toy Problem)

function netSalaryCalculator() {
    let basicSalaryInput = parseInt(
      document.getElementById("basicSalaryInput").value,
      10
    );
    let benefitsInput = parseInt(
      document.getElementById("benefitsInput").value,
      10
    );
  
    // The above declared variables are initialized by a value input by the user.
    // This value is converted to an integer using the .value, 10 attribute.
  
    let grossSalary = basicSalaryInput + benefitsInput;
  
    // To find taxable pay, I declare a variable grossSalary that is a sum total of both the benefits and basic salary inputs.
  
    // DEDUCTIONS
    
    let paye = 0;
  
    if (grossSalary <= 24000) {
      paye = (24000 * 0.1);
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary > 32333) {
      paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    } else {
    }
  // In the above code, the tax is assesed cumulatively.
    let nhif = 0;
  
    if (grossSalary <= 5999) {
      nhif = 150;
    } else if (grossSalary <= 7999) {
      nhif = 300;
    } else if (grossSalary <= 11999) {
      nhif = 400;
    } else if (grossSalary <= 14999) {
      nhif = 500;
    } else if (grossSalary <= 19999) {
      nhif = 600;
    } else if (grossSalary <= 24999) {
      nhif = 750;
    } else if (grossSalary <= 29999) {
      nhif = 850;
    } else if (grossSalary <= 34999) {
      nhif = 900;
    } else if (grossSalary <= 39999) {
      nhif = 950;
    } else if (grossSalary <= 44999) {
      nhif = 1000;
    } else if (grossSalary <= 49999) {
      nhif = 1100;
    } else if (grossSalary <= 59999) {
      nhif = 1200;
    } else if (grossSalary <= 69999) {
      nhif = 1300;
    } else if (grossSalary <= 79999) {
      nhif = 1400;
    } else if (grossSalary <= 89999) {
      nhif = 1500;
    } else if (grossSalary <= 99999) {
      nhif = 1600;
    } else if (grossSalary >= 100000) {
      nhif = 1700;
    } else {
    }
  
    // As per the rates provided in the NHIF website, the above assumptions were made.
  
    let nssf = 0;
  
    if (grossSalary < 18000) {
      nssf = (grossSalary * 0.06); // 0.06 is the 6% charge issued by nssf
    } else if (grossSalary > 18000) {
      nssf = (18000 * 0.06);
    } else if (grossSalary <= 0) {
      document.getElementById("salaryBenefitsOutput").textContent =
        "Invalid input. Salary must be greater than 0.";
    } else {
    }
  
    // As per the rates provided in the NSSF website, the above assumptions were made.
  
    let netDeductions = nssf + paye + nhif;

    let personalTaxRelief = 2400;
    if (grossSalary < 24000){
      personalTaxRelief = (grossSalary * 0.1) //To avoid a situation where more tax reliefe is paid than tax withheld.
    } else {}
    // the above if ensures tier one taxable income doesn't recieve more money from tax relief.
  
    let netSalary = (grossSalary + personalTaxRelief) - netDeductions;
    document.getElementById("netSalaryOutput").textContent = netSalary;
}
  
    /* In a bid to ensure precision of my code, 
    I simply assigned values where the rates were defined and created a singular arithmetic equation that would tabulate all assigned values at the end of the code,
    to output the net salary*/