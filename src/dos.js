var Howler = require('howler').Howl

window.addEventListener('load', function () {
  var audio = new Howler({
    src: ['/audio/dosc.webm', '/audio/dosc.mp3'],
    sprite: {
      tresA: [0, 56971],
      ochoA: [56971, 284902]
    }
  })
  // window.audio = audio
  // document.addEventListener('click', function () { audio.play(playing.tresA) })
  var playing = {}
  var spriteKeys = Object.keys(audio._sprite)
  spriteKeys.forEach(function (k) {
    playing[k] = audio.play(k)
    audio.loop(true, playing[k])
    console.log(playing)
  })
  audio.mute(true)
  audio.mute(false, playing['tresA'])
  window.audio = audio
  var els = document.getElementsByTagName('p')
  var observer = new IntersectionObserver(play)
  var prev = ''
  // audio.on('end', function (id) {audio.play(id)})
  // audio.play('tresA')
  function play (entries) {
    entries.forEach( function (entry) {
      var id = entry.target.id
      console.log(id, entry.isIntersecting)
      if (entry.isIntersecting) {
        console.log('entra', id)
        audio.mute(false, playing[id])
        audio.fade(0.0, 1.0, 5000, playing[id])
        // if (id !== prev) {
        // audio.mute(true, playing[prev])
       // prev = entry.target.id 
        // }
      }
      else {
        audio.fade(1.0, 0.0, 5000, playing[id])
        // audio.mute(true, playing[id])
       // prev = entry.target.id 
      }
    })
  }
  for (var i = 0; i < els.length; i ++) {
    observer.observe(els[i])
  }
  var container = document.getElementById('container')
  document.addEventListener('click', function (e) {
    if (e.target.className === 'biglink') console.log('catch'); return
    e.preventDefault()
    if (e.target.tagName === 'A') {
      container.scroll(e.target.parentElement.offsetLeft - 200, 0)
    }
  })
})

