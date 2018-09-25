window.onload = function myFunction() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        var x = document.getElementById("content");
        x.className = "mobOnly";
    }
}
