const {Howl, Howler} = require('howler');

var audios = {
  cuatroA: new Howl({src: ['/audio/cuatroA.webm', '/audio/cuatroA.mp3'], autoplay: true, loop: true, volume: 0.0}), 
  cincoA: new Howl({src: ['/audio/cincoA.webm', '/audio/cincoA.mp3'], autoplay: true, loop: true, volume: 0.0}), 
  seisA: new Howl({src: ['/audio/seisA.webm', '/audio/seisA.mp3'], autoplay: true, loop: true, volume: 0.0}), 
  sieteA: new Howl({src: ['/audio/sieteA.webm', '/audio/sieteA.mp3'], autoplay: true, loop: true, volume: 0.0}) 
}


window.audios = audios
window.howler = Howler


  var els = document.getElementsByTagName('p')
  var observer = new IntersectionObserver(script)
  function script (entries) {
    entries.forEach( function (entry) {
      var id = entry.target.id
      console.log(id)
      if (entry.isIntersecting) {
        if (id === 'cincoA'){
          // audios.seisA.fade(0, 1, 5000)
          // audios.seisA.fade(1, 0, 5000)
          audios.cuatroA.fade(1, 0, 5000)
          return audios.cincoA.fade(0, 1, 5000)
        }
        if (id === 'cuatroA'){
          return audios.cuatroA.fade(0, 1, 5000)
        }
        if (id === 'sieteA') {
          audios.seisA.fade(0, 1, 15000)
          return audios.sieteA.fade(0, 1, 5000)
        }
      } else {
        // console.log(entry)
        // return audios[id].mute(true)
      }
    })
      //   // console.log('entra', id, 'sale', prev)
      //   audio.mute(false, playing[id])
      //   if (id !== prev && id !== 'nueveA') {
      //   audio.mute(true, playing[prev])
      //   prev = id 
      //   }
      
    }
  for (var i = 0; i < els.length; i ++) {
    observer.observe(els[i])
  }

  var container = document.getElementById('container')
  document.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.tagName === 'A') {
      if (e.target.parentElement.id === 'cincoA') return container.scroll(0, 0)
      container.scroll(e.target.parentElement.offsetLeft - 200, 0)
    }
  })
