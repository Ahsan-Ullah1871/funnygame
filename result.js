var rendomNumber = Math.floor(Math.random()*90+1);

// This is head function:

function hello(){

    document.querySelector(".overlay").style.width = "100%";
    var select = this;
    var classlist = select.className;
    results(classlist);

}


// This is note function

function Note(select) {
    function noteCall(){
        document.querySelector("h5").style.display = "block";
    
    }

    if (rendomNumber >= 80 ) {
        noteCall();
        document.querySelector("h5").textContent = "(Note: Hello !! You are very successful in your " +select+ "!!)";

    }
    else if (rendomNumber >= 55 ) {
        noteCall();
        document.querySelector("h5").textContent = "(Note:If you try hard,you will succeed.)";

    }

    else {
    noteCall();
    document.querySelector("h5").textContent = "(Note: You are very lazy man. Please try  so much.)";
  }
    
}


// this is question and result function

function results(result){
    switch (result) {
        case "dream":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
            var dream = prompt("What is your Life Dream?")


             document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your dream, you will be a " + dream + ". On the way to fulfilling your dream you have crossed "+ rendomNumber+ " % ." ;
            
             Note("dream");
            break;
    
    
        case "love":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
    
            var love = prompt("What is your their name?")

           document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your lover name is  " + love + ". Percentage Of love between " + rendomNumber+ " % ." ;
    
            Note("love");

            break;


        case "work":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
    
            var work = prompt(" What are you doing?")

               document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your are busy in " + work + ". You have completed "+  rendomNumber+ " % of your work";
    

               Note("work");

            break;


        case "today":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
    
            var today = prompt("What is your target today?")
          
    
               document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your today target is " + today + ". You have completed "+ rendomNumber + " % of your target";
         
               Note("target")

            break;
    

        default:
            alert("hello"); 
            break;
    }
}


// This is head section:

var numberOfButtons = document.querySelectorAll("button").length;
for (var i = 0; i < numberOfButtons; i++) {
     
    document.querySelectorAll("button")[i].addEventListener("click",hello);
    
}

document.querySelector(".close-button").addEventListener("click",function(){
    
        document.querySelector(".overlay").style.width = "0%";
        window.location.reload();
    
})