// var Howler = require('howler').Howl
const {Howl, Howler} = require('howler');

  var audio = new Howl({
    src: ['/audio/tresc.webm', '/audio/tresc.mp3'],
    preload: true,
    pool: 10,
    sprite: {
      cuatroA: [0, 47933, true],
      cincoA: [47933, 84033, true],
      seisA: [84033, 114053, true],
      sieteA: [114053, 136126, true],
      nueveA: [136126, 178627, true]
    }
  })

window.addEventListener('load', function () {
  window.audio = audio
  var playing = {}
  var spriteKeys = Object.keys(audio._sprite)
  spriteKeys.forEach(function (k) {
    playing[k] = audio.play(k)
    audio.loop(true, playing[k])
    // console.log(playing)
  })
  audio.mute(true)
  audio.mute(false, playing['cuatroA'])
  var els = document.getElementsByTagName('p')
  var observer = new IntersectionObserver(script)
  var prev = 'cuatroA'
  function script (entries) {
    entries.forEach( function (entry) {
      var id = entry.target.id
      // if (entry.isIntersecting) {
      //   // console.log('entra', id, 'sale', prev)
      //   audio.mute(false, playing[id])
      //   if (id !== prev && id !== 'nueveA') {
      //   audio.mute(true, playing[prev])
      //   prev = id 
      //   }
      // }
      if (id === 'cincoA') {
        audio.mute(false, playing[id])
        audio.mute(true, playing['cuatroA'])
      }
    })
  }
  for (var i = 0; i < els.length; i ++) {
    observer.observe(els[i])
  }

})
