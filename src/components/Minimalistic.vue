<template>
  <div class="demo">
    <h3>Minimalistic</h3>
      <p>
        A minimalistic demo of <a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js</a> + <a href="https://tonejs.github.io/" target="_blank" rel="noopener">Tone.js</a>. Code in <code>components/Minimalistic.vue</code>.
      </p>
      <p>
        To play a sound, click here: <button @click="handleClick">{{ prompt }}</button>
      </p>
  </div>
</template>

<script>
import { Sampler } from "tone";
import A1 from "../assets/A1.mp3";

export default {
  name: "minimalistic",
  props: {
    prompt: String
  },
  components: {},
  data: function() {
    return {
      isLoaded: false
    };
  },
  created() {
    this.sampler = new Sampler(
      { A1 },
      {
        onload: () => {
          this.isLoaded = true;
        }
      }
    ).toMaster();
  },
  methods: {
    handleClick() {
      this.sampler.triggerAttack("A1");
    }
  }
};
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
