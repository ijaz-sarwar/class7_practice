console.log("Before Prepare food");

function prepareFood(callback){
    setTimeout(() => {
        console.log("prepare food");
        callback("Food is ready");
    },10);
        
    }
    function prepareFrenchTost(callback ){
        setTimeout(() => {
            console.log("Prepare French Toast");
            callback("French Tost is ready")
            
        },20);
    }
    function prepareCoffe(callback ){
        setTimeout(() => {
            console.log("Prepare Coffe");
            callback("Coffe is ready");
            
        },20);
    }
   
   
    

    prepareFood( function (value){
        console.log("Food is ready callback = ",value);
        prepareFrenchTost( function (value){
            console.log("French Tost is ready callback = ",value);
            prepareCoffe(function (value){
                console.log("Coffe is ready callback = ",value);
              });
           }); 
    });
 



console.log("After preparing food dinner is ready");