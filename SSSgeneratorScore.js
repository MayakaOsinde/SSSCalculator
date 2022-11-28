/* Code Challange #1
   Code written by: Mayaka Osinde Onwanga, #El Mooncho*

   Redundunt steps to solutions;
   1. Create grade function.
   2. Create a variable for the value to be input by user.
   3. Collect value from  HTML input element as an integer.
   4. Assign grades to scores as directed.
   5. print respective output in paragraph within HTML.  
   
*/

// Student grade generator (Toy Problem)

function grade() {
    let score = parseInt(document.getElementById("score").value, 10); // parseInt converts my input to an integer.
  
    // the .value attribute was paramount to acquire input from html as a number. 10 is a radix.
  
    console.log(typeof score); // I needed to confirm the data type of my input value. Expected a number.
    console.log(score); // I used this to print the input value in the console to verify.
  
    if (score > 79 && score <= 100) {
      document.getElementById("result").textContent = "A"; // This code prints my outcome in the <p> section with the specified #ID.
    } else if (score >= 60 && score <= 79) {
      document.getElementById("result").textContent = "B"; // .textContent ensures my output is a string, such as are the grades.
    } else if (score > 49 && score <= 59) {
      document.getElementById("result").textContent = "C";
    } else if (score >= 40 && score <= 49) {
      document.getElementById("result").textContent = "D";
    } else if (score >= 0 && score < 40) {
      document.getElementById("result").textContent = "E";
    } else {
      document.getElementById("result").textContent = "Invalid Score"; 
    }
  }
  
  
  