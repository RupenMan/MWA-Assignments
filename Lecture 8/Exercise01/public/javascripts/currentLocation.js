window.onload = getMyLocation;
function getMyLocation(){
    var btnLocation = document.getElementById('btn-location');
    return navigator.geolocation.getCurrentPosition(success, fail);
}


function success(pos){
    var myLatitude = document.getElementById('myLatitude');
    var myLongitude = document.getElementById('myLongitude');
    myLatitude.value = pos.coords.latitude;
    myLongitude.value = pos.coords.longitude;
    var coords = [pos.coords.latitude, pos.coords.longitude];
    
    return coords;
}

function fail(err){
    console.log(err);
}