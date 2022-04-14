const heinAudioElement = document.querySelector('#hein-audio');

heinAudioElement.addEventListener('play', () => {
  amplifyMedia(heinAudioElement, 5);
})

function amplifyMedia(mediaElem, multiplier) {
  var context = new (window.AudioContext || window.webkitAudioContext),
    result = {
      context: context,
      source: context.createMediaElementSource(mediaElem),
      gain: context.createGain(),
      media: mediaElem,
      amplify: (multiplier) => result.gain.gain.value = multiplier,
      getAmpLevel: () => result.gain.gain.value
    };

  result.source.connect(result.gain);
  result.gain.connect(context.destination);
  result.amplify(multiplier);
  return result;
}
