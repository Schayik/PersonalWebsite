window.onload = function myFunction() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      if (confirm("WebGL Minigame might not work on mobile. You can skip and go directly to the home page.")) {
          window.location.href = 'home.html';
      }
    }
}
