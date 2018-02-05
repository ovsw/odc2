import $ from 'jquery';
class IosFixes {
  constructor () {

    this.version = this.iOSversion();
    this.videoBgEl = document.querySelector('.large-hero__video-bg');
    this.largeHeroEl = document.querySelector('.large-hero');

    if (this.videoBgEl !== undefined && this.videoBgEl !== null) {
      
        //alert(this.version);
        
        if (this.version !== undefined && this.version !== null) {
          if (this.version[0] >= 10) {
            //alert(this.version + ' - This is running iOS 10 or later.');
            this.videoBgEl.style.display = 'block'
          }else{
            //alert('not running later than 10 ' + this.version[0]);
            this.videoBgEl.parentNode.removeChild(this.videoBgEl);
          }
        }else{
        // alert('not iOS!');
          this.videoBgEl.setAttribute("style","display: block;");
          this.largeHeroEl.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAF0lEQVQIW2NkYGD4z8DAwMgAI0AMDA4AI3EBBCKrOnQAAAAASUVORK5CYII=')";   
        }

    }

  }

  iOSversion() {
    
    if(window.MSStream){
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

}

export default IosFixes;