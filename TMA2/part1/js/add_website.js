 function validateForm() {
    var website_link = document.getElementById("website_link").value;
    if(website_link == ""){
    	alert("Enter a website link");
    	return false;
    }
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
    if(!pattern.test(website_link)){
    	alert("Enter valid website link with https");
    	return false;
    }

    return true;
}