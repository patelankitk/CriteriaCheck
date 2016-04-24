// creating Event Listner on Click of Button  //
var eventAge = document.getElementById("check");
eventAge.addEventListener('click',CheckCriteria,false);


// Function to assess the criteria //

function CheckCriteria()
{
    // variable to get the age of user//
    var UserAge = document.getElementById("age").value;
    
    // variable to get weight from user //
    var UserWeight = document.getElementById("weight").value;
    
    // variable to ger height from user //
    var UserHeight = document.getElementById("height").value;
    
    
    // if statement to check if all the criteria is correct //
    if (UserAge < 26 && (UserWeight > 50 && UserWeight < 90 ) && (UserHeight > 150 && UserHeight < 190))
        {
            // Display the result if all the criteria is satiesfied //
            document.getElementById("criteriacheckall").innerHTML ="<li>"+ "You have satisfactorily met the criteria and you can proceed and book             this course."+"</li>";
        }
    
    //  else statement to check whih criteria is not satisfied //
    else
    {
              // is statement to display the result if age criteria is not satisfied.
        if(UserAge >= 26)
            {
                document.getElementById("criteriacheckage").innerHTML ="<li>"+ "Sorry you do not satisfy our minimum required criteria, your Age                 exceeds out criteria of Maximum 25, your age is "+UserAge+"."+"</li>"+"<br>";           
            }
        // if statement to display result if weght criteria is not met //
        if (UserWeight < 50 || UserWeight > 90)
            {
                document.getElementById("criteriacheckweight").innerHTML ="<li>"+ "Sorry you do not satisfy our minimum required criteria,your                   Weight is outside our range of 50 to 90 kg, your weight is "+UserWeight+"."+"</li>"+"<br>";
            }
        // if statement to display result if height criteria is not met //
        if (UserHeight < 150 || UserHeight > 190)
            {
                document.getElementById("criteriacheckheight").innerHTML ="<li>"+"You do not satisfy our criteria, your Height is outside our                     range of 150 to 190 cm, your height is "+UserHeight+"."+"</li>"+"<br>";
            }
        
    }
}

