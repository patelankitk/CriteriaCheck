// creating Event Listner on Click of Button to get the age from user //
var eventAge = document.getElementById("age");
eventAge.addEventListener('click',CheckCriteria,false);

// creating Event Listner on Click of Button to get the Height from user //
var eventHeight= document.getElementById("height");
eventHeight.addEventListener('click',CheckCriteria,false);

// creating Event Listner on Click of Button to get the Weight from user //
var eventWeight = document.getElementById("weight");
eventWeight.addEventListener('click',CheckCriteria,false);


function CheckCriteria()
{
    var UserAge = document.getElementById("age").value;
    
    var UserHeight = document.getElementById("height").value;
    
    var UserWeight = document.getElementById("weight").value;
    
    if ((UserAge < 26) && (UserWeight > 50 && UserWeight < 90 ) && (UserHeight > 150 && UserHeight < 190))
        {
            // Displaying the result for Underweight //
            document.getElementById("criteriacheck").innerHTML ="<li>"+ "You have satisfactorily met the criteria and you can proceed to booking this course." </li>";
        }
}
