// creating Event Listner on Click of Button to get the age from user //
var eventAge = document.getElementById("check");
eventAge.addEventListener('click',CheckCriteria,false);




function CheckCriteria()
{
    var UserAge = document.getElementById("age").value;
    
    var UserWeight = document.getElementById("weight").value;
    
    var UserHeight = document.getElementById("height").value;
    
    
    
    if ((UserAge < 26) && (UserWeight > 50 && UserWeight < 90 )&& (UserHeight > 150 && UserHeight < 190))
        {
            // Displaying the result for Underweight //
            document.getElementById("criteriacheck").innerHTML ="<li>"+ "You have satisfactorily met the criteria and you can proceed to booking    this course."+"</li>";
        }
    
    // If Age more then 25
    else
    {
              
        if(UserAge>=26)
            {
                document.getElementById("criteriacheckage").innerHTML ="<li>"+ "Sorry you do not satisfy our minimum required criteria, your Age exceeds out criteria of Maximum 25, your age is "+UserAge+"."+"</li>"+"<br>";           
            }
        if(UserWeight <50 || UserWeight >90)
            {
                document.getElementById("criteriacheckweight").innerHTML ="<li>"+ "Sorry you do not satisfy our minimum required criteria,your Weight is outside our range of 50 to 90 kg, your weight is "+UserWeight+"."+"</li>"+"<br>";
            }
        if(UserHeight <150 || UserHeight >190)
            {
                document.getElementById("criteriacheckheight").innerHTML ="<li>"+"You do not satisfy our criteria, your Height is outside our range of 150 to 190 cm, your height is "+UserHeight+"."+"</li>"+"<br>";
            }
    }
}

