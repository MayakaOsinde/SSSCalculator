/* Code Challange #2
   Code written by: Mayaka Osinde Onwanga, #El Mooncho*

   Steps to solutions;
   1. Create speed limit function.
   2. Create variable for the value to be input by user.
   3. Collect value from  HTML input element.
   4. Assign the requirements to variables.
   5. print respective output in HTML.  
   
*/



function speedLimit() {
    let speed = parseInt(document.getElementById("speed").value, 10);
  
    console.log(typeof speed); // verify my input is a number
    console.log(speed); // print value in console
  
    let demerits = 0;
  
    if (speed >= 0 && speed <= 70) {
      document.getElementById("speed-output").textContent = "OK"; // Any values within the range of 0 - 70 are returned as having an "OK" status
    } else if (speed > 70) {
      let speedDifference = speed - 70;
  
      /* To find the total number of demerit points i would have to print, I have divided the total speed above 70 (let speedDifference = speed - 70)  by 5 in the code below.*/
  
      demerits = Math.floor(speedDifference / 5);
  
      /* Math.floor allows me to use the floor value of my speed increment.
       This ensures there has to be a complete value increment of 5 above 70 to issue one demerit.*/
  
      if (speed > 130) {
        document.getElementById("speed-output").textContent = "License revoked"; // If speed exceed 130, license revoked message is printed.
      } else {
        document.getElementById("speed-output").textContent =
          "Demerit points: " + demerits;
      }
    } else {
      document.getElementById("speed-output").textContent = //Error message for any input that is below 0. Unlike velocity, there is no negative speed.
        "Speed can only be greater than 0";
    }
  }