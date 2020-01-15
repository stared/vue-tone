<template>
  <div class="sound-ui">
    <h3>PJ's generator for QG</h3>
    <p v-if="!isInitialized">Loading...</p>
    <button @click="setupSoundtrack">Setup soundtrack</button>
  </div>
</template>

<script>
import Soundtrack from "../soundtrack.js";

export default {
  name: 'SoundUI',
  data: function() {
    return {
      soundtrack: new Soundtrack(),
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
