var Howler = require('howler').Howl

window.addEventListener('load', function () {
  var audio = new Howler({
    src: ['/audio/inicioc.webm', '/audio/inicioc.mp3'],
    autoplay: true,
    loop: true
  })
  audio.play()
  // document.addEventListener('click', function () { audio.play(playing.unoA) })
  // var playing = {}
  // var spriteKeys = Object.keys(audio._sprite)
  // spriteKeys.forEach(function (k) {
  //   playing[k] = audio.play(k)
  //   console.log(playing)
  // })
  // audio.volume(0.0)
  // audio.mute(false, playing.unoA)
  // window.audio = audio
  // var els = document.getElementsByTagName('span')
  // var observer = new IntersectionObserver(play)
  // var prev = 'unoA'
  // audio.play('unoA')
  // audio.fade(0.0, 1.0, 1000, playing['unoA'])
  // function play (entries) {
  //   entries.forEach( function (entry) {
  //     var id = entry.target.id
  //     if (entry.intersectionRatio > 0) {
  //       // console.log('entra', id, 'sale', prev)
  //       audio.fade(0, 1, 2000, playing[id])
  //       console.log(prev)
  //       if (id !== prev) {
  //         window.setTimeout(function (){
  //       audio.mute(true, playing[prev])
  //       prev = id 
  //         },2000)
  //       }
  //     }
  //   })
  // }
  // for (var i = 0; i < els.length; i ++) {
  //   observer.observe(els[i])
  // }
})
