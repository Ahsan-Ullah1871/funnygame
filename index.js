var rendomNumber = Math.floor(Math.random()*90+1);



function hello(){

var select = this;
var classlist = select.className;
// buttonAnimation(classlist);
results(classlist);

}



function Note(select) {
    function noteCall(){
        document.querySelector("h5").style.display = "block";
    
    }

    if (rendomNumber >= 80 ) {
        noteCall();
        document.querySelector("h5").textContent = "(Note: Hello !! You are very successful in your " +select+ "!!)";

    }
    else if (rendomNumber >= 60 ) {
        noteCall();
        document.querySelector("h5").textContent = "(Note:If you try hard,you will succeed.)";

    }

    else {
    noteCall();
    document.querySelector("h5").textContent = "(Note: You are very lazy man. Please try  so much.)";
  }
    
}





// function buttonAnimation(fixbutton){
//    var button = document.querySelector("."+fixbutton)
//    button.classList.add("pressed");

//    setTimeout(function(){
//     button.classList.remove("pressed");
//    }, 4000);

// }





function results(result){
    switch (result) {
        case "dream":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
            var dream = prompt("What is your Life Dream?")



             function dreamOn(){
              document.querySelector(".main-container").classList.add("result");

             document.querySelector("h2").innerHTML = "Result" ; 
             document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your dream, you will be a " + dream + ". On the way to fulfilling your dream you have crossed "+ rendomNumber+ " % ." ;
             }

             dreamOn();
            
             Note("dream");
            break;
    
    
        case "love":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
    
            var love = prompt("What is your their name?")



            function loveOn(){
                document.querySelector(".main-container").classList.add("result");

                 document.querySelector("h2").innerHTML = "Result"  ;
                 document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your lover name is  " + love + ". Percentage Of love between " + rendomNumber+ " % ." ;
             }

             loveOn();

             Note("love");





            break;
        case "work":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
    
            var work = prompt(" What are you doing?")


            function workOn(){
                document.querySelector(".main-container").classList.add("result");
  
               document.querySelector("h2").innerHTML = "Result" ; 
               document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your are busy in " + work + ". You have completed "+  rendomNumber+ " % of your work";
               }
  
               workOn();

               Note("work");




            break;
        case "today":
            var name =  prompt("What is Your name?");
            name =  name.toUpperCase();
    
            var today = prompt("What is your target today?")
          


            function todayon(){
                document.querySelector(".main-container").classList.add("result");
  
               document.querySelector("h2").innerHTML = "Result" ; 
               document.querySelector("p").innerHTML = "Hello "+ name +" !!" + " Your today target is " + today + ". You have completed "+ rendomNumber + " % of your target";
               }
  
              todayon();
               Note("target")


            
            break;
    
        default:
            alert("hello"); 
            break;
    }
}









 var numberOfbuttons = document.querySelectorAll ("button").length 
 
for (var i = 0; i < numberOfbuttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",hello);
    
}







   
   
   
   
   
   
   
//    var btns = document.querySelectorAll('button');
//     btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//     var clickedOne = e.currentTarget;
//     var cls = clickedOne.classList.value;
//     console.log(cls)
//     })
//     })


// var numberOfbutton = document.querySelectorAll(".position").length
// for (var i = 0; i < numberOfbutton; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",Dream);
    
// }


// var yourName = prompt("What is your name?");
// var yourDream = prompt("What is your Life Dream?")+".";
// var rendomNumber = Math.floor(Math.random()*90+1);

// alert( "Hello "+ yourName +" !!" + " Your dream, you will be a " + yourDream + " On the way to fulfilling your dream you have crossed "+ rendomNumber+ " % .");