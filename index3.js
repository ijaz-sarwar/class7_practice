console.log("Before Prepare food");

function prepareFood(data){
    let promise =new Promise(function(resolve,reject){
          
    
    setTimeout(() => {
        if (data !==2){
        console.log("prepare food");
        resolve("Food is ready");
        }
        else {
            reject("Value not acceptable");
        }
    },10);
});
    return promise;
        
    }
    function prepareFrenchTost( ){
        let promise =new Promise(function(resolve,reject){
          
        
        
        setTimeout(() => {
            console.log("Prepare French Toast");
            resolve("French Tost is ready")
            
        },20);
    });
        return promise;
        
    }
    function prepareCoffe( ){
        let promise =new Promise(function(resolve,reject){
          
        
        setTimeout(() => {
            console.log("Prepare Coffe");
            resolve("Coffe is ready");
            
        },20);
    });
        return promise;
    }
    
    async function startProcess() {
        try{
        
        let foodValue= await prepareFood();
        console.log("Food ", foodValue);
        let frenchToastValue=await prepareFrenchTost();
        console.log("Toast  ", frenchToastValue);
        let prepareCoffeValue= await prepareCoffe();
        console.log(" Coffee ",prepareCoffeValue );
        }
        catch(error){
            console.log("Error in catch ", error);
        }
    }
    startProcess();
   
    
/*
    // prepareFood( function (value){
    //     console.log("Food is ready callback = ",value);
    //     prepareFrenchTost( function (value){
    //         console.log("French Tost is ready callback = ",value);
    //         prepareCoffe(function (value){
    //             console.log("Coffe is ready callback = ",value);
    //           });
    //        }); 
    // });
     let promise=prepareFood(2);
     //console.log("promise = ",promise);
     promise.then(function (value){
         console.log("Food is ready callback = ",value);
         return prepareFrenchTost();


     })
     .then(function (frenchToastValue) {
         console.log("French Toast is Ready callback = ",frenchToastValue);
         return prepareCoffe()
         
     })
     .then(function (coffeValue) {

         console.log("Coffe is Ready callback = ",coffeValue);
     })
     .catch(function (error) {
        console.log ("Error= ",error);
     });*/
console.log("After preparing food dinner is ready"); 