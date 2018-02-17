var promise = new Promise(function(resolve,reject){

    resolve("Promise is Resolved");

});
var timer;
var addTwoNumbers = function (num1,num2) { 
    console.log("Add Promise");
    
    return new Promise(function(resolve,reject){
        if (typeof(num1) === "number" && typeof(num2) === "number")
        {
           var result = num1 + num2;
             
            timer = setInterval(function(){ 
                result = num1 + num2
                resolve("Addtion : " + result);
            }, 5000, num1, num2);
                       
        }
        else{
            reject("Please enter valid number");
        }
    });
}



function excutePromise() {
    console.log("Executing Simpple Promise");
    promise.then(function(result){
        console.log(result);
    });
}

function addNumbers(num1, num2) {
    console.log("Adding Numbers");
    addTwoNumbers(num1, num2).then(function(result){
        clearInterval(timer);
        document.getElementById('message').innerHTML = result;
    },function(result){
        document.getElementById('message').innerHTML = result;
    })
}



function concatStrings(string1, string2) {
    console.log('concat string');
    concatingTwoStrings (string1,string2).then(function(result){
        document.getElementById('message').innerHTML = result;
    })
}

var concatingTwoStrings =function(str1, str2){ return new Promise(function(resolve){
resolve (str1 + str2);
});

}

function chainingPromise() {
    Promise.all([concatingTwoStrings("A","B"), addTwoNumbers(4,10)]).then(function(result){
        console.log(result);
    })
}
