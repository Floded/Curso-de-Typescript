"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["first"] = 1] = "first";
        AudioLevel[AudioLevel["second"] = 2] = "second";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.first;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
