function Signval() {
 
    var first = document.forms.signchuchu.FIRST.value
    var second = document.forms.signchuchu.SECOND.value
    var email = document.forms.signchuchu.EMAIL.value;
    var pass = document.forms.signchuchu.PASS.value;
    var confirm = document.forms.signchuchu.CONFIRM.value;


    if( first == '' || second == '' || email == '' || pass == '' || confirm == '') {
        alert("Butngi Tanan Pre");
        return false;
    }

    if (pass != confirm){
        alert("Passwords do Not Match!");
        return false;
    }

    if (pass.length < 6 && pass.length <6){
        alert("Password should be More than 6 characters");
        return false;
    }

   



    
    
    
    
    
}