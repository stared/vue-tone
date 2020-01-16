<template>
  <div class="sound-ui">
    <h3>PJ's generator for QG</h3>
    <div v-if="!isInitialized">Soundtrack not yet loaded.<br>
      <button @click="setupSoundtrack">Setup soundtrack</button>
    </div>
    <div v-if="isInitialized">
      <div class="control-block">
        <div class="control-block-title">
          trigger effect sound (with random pitch)
        </div>
        <div class="control-block-content">
          <div
            v-for="i in effects"
            :key="`effect-${i}`"
            class="control-button"
            @click="activateEffect(i)"
            >
            effect {{ i }}
          </div>
        </div>
      </div>
      <div class="control-block">
        <div class="control-block-title">
          generative part: on/off tracks
        </div>
        <div class="control-block-content">
          <div
            v-for="(isOn, i) in tracks"
            :key="`effect-${i}-${isOn}`"
            class="control-button"
            :class="{ active: isOn }"
            @click="toggleTrack(i)">
            track {{ i }}: {{ isOn ? 'on' : 'off' }}
          </div>
        </div>
      </div>
      <div class="control-block">
        <div class="control-block-title">
          volume
        </div>
        <div class="control-block-content">
          <div
            v-for="i in volumeRange"
            :key="`volume-${i}`"
            class="control-button control-button-volume"
            :class="{ active: i <= volume }"
            @click="setVolume(i)">
          {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import range from "lodash.range";
import Soundtrack from "../soundtrack.js";

export default {
  name: 'SoundUI',
  data: function() {
    return {
      soundtrack: new Soundtrack(),
      tracks: range(4).map(() => true),
      effects: range(30),
      volumeRange: range(10).map((x) => 10 * x - 70),
      volume: 10,
    };
  },
  created() {
  },
  computed: {
    isInitialized() {
      return this.soundtrack.initializedFlag;
    }
  },
  methods: {
    setupSoundtrack() {
      this.soundtrack.init();
      this.soundtrack.generativePartVolume(10);
      this.soundtrack.setGenerativeTrackStatus(0, true);
      this.soundtrack.setGenerativeTrackStatus(1, true);
      this.soundtrack.setGenerativeTrackStatus(2, true);
      this.soundtrack.setGenerativeTrackStatus(3, true);
    },
    activateEffect(i) {
      this.soundtrack.triggerEffect(i, Math.random());
    },
    toggleTrack(i) {
      this.$set(this.tracks, i, !this.tracks[i]);
      this.soundtrack.setGenerativeTrackStatus(i, this.tracks[i]);
    },
    setVolume(i) {
      this.volume = i;
      this.soundtrack.generativePartVolume(i);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.control-block {
  background-color: rgb(85, 36, 148);
  color: white;
  padding: 10px;
  margin: 20px;
  cursor: default;
}

.control-button {
  display: inline-block;
  background-color: black;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  width: 120px;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
.control-button.control-button-volume {
  width: 60px;
}
.control-button:hover {
  background-color: white;
  color: black;
}

.active {
  border-color: rgba(255, 0, 0, 0.7);
}
</style>
