// creating Event Listner on Click of Button to get the age from user //
var event1 = document.getElementById("age");
event1.addEventListener('click', CheckCriteria,false);

// creating Event Listner on Click of Button to get the Height from user //
var event2 = document.getElementById("height",false);
event2.addEventListener('click', CheckCriteria);

// creating Event Listner on Click of Button to get the Weight from user //
var event3 = document.getElementById("weight");
event3.addEventListener('click', CheckCriteria,false);


    
function CheckCriteria()
{
    var UserAge = document.getElementById("age").value;
    
    var UserHeight = document.getElementById("height").value;
    
    var UserWeight = document.getElementById("weight").value;
    
    if (UserAge < 26 && (UserWeight > 50 && UserWeight < 90 )&& (UserHeight > 150 && UserHeight < 190))
        {
            // Displaying the result for Underweight //
            document.getElementById("criteriacheck").innerHTML ="<li>"+ "You have satisfactorily met the criteria and you can proceed to booking this course."+"</li>";
        }
    else if
    {
        document.getElementById("criteriacheck").innerHTML ="<li>"+ "No"+"</li>";
    }
}

