(() => {
  enum AudioLevel {
    min, //position 1
    first, //position 2
    second, //position 3
    max = 10, //position 10
  }

  let currentAudio: AudioLevel = AudioLevel.first;

  console.log(currentAudio);

  console.log(AudioLevel);
})();
