

function UserAction() {
    var xhttp = new XMLHttpRequest();
    var url = "https://host/flifo/v3/flights/lax/d";
    xhttp.open("GET", url, false);
    xhttp.send();
    //var response = JSON.parse(xhttp.responseText);
    
    console.log(xhr.status);
	console.log(xhr.statusText);
}