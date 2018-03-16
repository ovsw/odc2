function iOSversion() {
    
  if(navigator.userAgent.match(/Windows Phone/i)){
    // There is some iOS in Windows Phone...
    // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
   return false;
  }

  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    var ver = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    return ver;
  }
}

  var version = iOSversion();
  var videoBgEl = document.querySelector('.large-hero__video-bg');
  var largeHeroEl = document.querySelector('.large-hero');

  if (videoBgEl !== undefined && videoBgEl !== null) {
    
      //alert(version);
      
      if (version !== undefined && version !== null) {
        if (version[0] >= 10) {
          //alert(version + ' - This is running iOS 10 or later.');
          videoBgEl.style.display = 'block';
          largeHeroEl.style.background = "none";
        }else{
          //alert('not running later than 10 ' + version[0]);
          videoBgEl.parentNode.removeChild(videoBgEl);
        }
      }else{
      // alert('not iOS!');
        videoBgEl.setAttribute("style","display: block;");
        //largeHeroEl.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAF0lEQVQIW2NkYGD4z8DAwMgAI0AMDA4AI3EBBCKrOnQAAAAASUVORK5CYII=')";   
        largeHeroEl.style.background = "none";   
      }

  }