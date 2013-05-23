// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
var count = 3;
var msg = "the next one is in " + count + " seconds";

/*

function alert_me(){
  
  alert("this is working " + count);
}
*/

function onDeviceReady() {

/*   var int = setInterval(showAlert(),5000); */

/*
  setInterval( function(){
      
      navigator.notification.vibrate(2000);
      
    
  }, 3000);
*/
  
  alert("this is ouside");
    
}

// alert dialog dismissed
function alertDismissed() {

  count += 3;
  msg = "This is the next one. It's been " + count + " secs already";
/*
    setTimeout(showAlert(),50000);
*/
    // do something
}

// Show a custom alertDismissed
//
function showAlert() {
    navigator.notification.alert(
        msg, // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );

function vibrate(){

}
/*
  alert(msg);
  count += 3;
*/
}