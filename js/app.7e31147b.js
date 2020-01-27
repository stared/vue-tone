(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],h=0,f=[];h<i.length;h++)a=i[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-tone/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},3462:function(t,e,n){},"4a6c":function(t,e,n){t.exports=n.p+"media/A1.def044c7.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Minimalistic",{attrs:{prompt:"Click here to play"}}),r("SoundUI")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h3",[t._v("Minimalistic")]),t._m(0),n("p",[t._v(" To play a sound, click here: "),n("button",{on:{click:t.handleClick}},[t._v(t._s(t.prompt))])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" A minimalistic demo of "),n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Vue.js")]),t._v(" + "),n("a",{attrs:{href:"https://tonejs.github.io/",target:"_blank",rel:"noopener"}},[t._v("Tone.js")]),t._v(". Code in "),n("code",[t._v("components/Minimalistic.vue")]),t._v(". ")])}],c=n("8cc4"),l=n("4a6c"),u=n.n(l),h={name:"minimalistic",props:{prompt:String},components:{},data:function(){return{isLoaded:!1}},created:function(){var t=this;this.sampler=new c["Sampler"]({A1:u.a},{onload:function(){t.isLoaded=!0}}).toMaster()},methods:{handleClick:function(){this.sampler.triggerAttack("A1")}}},f=h,g=(n("7526"),n("2877")),p=Object(g["a"])(f,a,i,!1,null,"8dab81d0",null),m=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sound-ui"},[n("h3",[t._v("PJ's generator for QG")]),t.isInitialized?t._e():n("div",[t._v("Soundtrack not yet loaded."),n("br"),n("button",{on:{click:t.setupSoundtrack}},[t._v("Setup soundtrack")])]),t.isInitialized?n("div",[n("div",{staticClass:"control-block"},[n("div",{staticClass:"control-block-title"},[t._v(" trigger effect sound (with random pitch) ")]),n("div",{staticClass:"control-block-content"},t._l(t.effects,(function(e){return n("div",{key:"effect-"+e,staticClass:"control-button",on:{click:function(n){return t.activateEffect(e)}}},[t._v(" effect "+t._s(e)+" ")])})),0)]),n("div",{staticClass:"control-block"},[n("div",{staticClass:"control-block-title"},[t._v(" generative part: on/off tracks ")]),n("div",{staticClass:"control-block-content"},t._l(t.tracks,(function(e,r){return n("div",{key:"effect-"+r+"-"+e,staticClass:"control-button",class:{active:e},on:{click:function(e){return t.toggleTrack(r)}}},[t._v(" track "+t._s(r)+": "+t._s(e?"on":"off")+" ")])})),0)]),n("div",{staticClass:"control-block"},[n("div",{staticClass:"control-block-title"},[t._v(" volume ")]),n("div",{staticClass:"control-block-content"},t._l(t.volumeRange,(function(e){return n("div",{key:"volume-"+e,staticClass:"control-button control-button-volume",class:{active:e<=t.volume},on:{click:function(n){return t.setVolume(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])]):t._e()])},_=[],v=(n("d81d"),n("f5fe")),y=n.n(v),k=(n("ac1f"),n("1276"),n("d4ec")),b=n("bee2"),S=function(){function t(){Object(k["a"])(this,t),this.latency_hint="interactive",this.MIDI_NUM_NAMES=["C_1","C#_1","D_1","D#_1","E_1","F_1","F#_1","G_1","G#_1","A_1","A#_1","B_1","C0","C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8","C#8","D8","D#8","E8","F8","F#8","G8","G#8","A8","A#8","B8","C9","C#9","D9","D#9","E9","F9","F#9","G9"],this.samples=["sfx/C2-MP3.mp3","sfx/C4-MP3.mp3","sfx/drumla4-MP3.mp3","sfx/FlashBright_BWU228-MP3.mp3","sfx/flt-MP3.mp3","sfx/hit5-MP3.mp3","sfx/hit7-MP3.mp3","sfx/kiko1-MP3.mp3","sfx/kura2_D-MP3.mp3","sfx/kura2_D2-MP3.mp3","sfx/kura3_G-MP3.mp3","sfx/kura5_G-MP3.mp3","sfx/kura8_D-MP3.mp3","sfx/kura15_D-MP3.mp3","sfx/Multimedia_BWU11275-MP3.mp3","sfx/Multimedia_BWU112752-MP3.mp3","sfx/noise1-MP3.mp3","sfx/seq1-MP3.mp3","sfx/seq2-MP3.mp3","sfx/seq3-MP3.mp3","sfx/sfx_sh1-MP3.mp3","sfx/sfx_sh3-MP3.mp3","sfx/ShotgunRackFast_ZA02492-MP3.mp3","sfx/ShotgunRackFast_ZA024922-MP3.mp3","sfx/stopa-MP3.mp3","sfx/tape-MP3.mp3","sfx/Track02-MP3.mp3","sfx/Track08-MP3.mp3","sfx/Track11-MP3.mp3","sfx/TrolleyHornBeep_S08TT34-MP3.mp3"],this.scales=[[0,2,4,5,7,9,11],[0,2,3,5,7,8,10],[0,2,5,7,9],[0,2,4,6,10]],this.currentScale=1,this.transpositions=[-12,-10,-8,-6],this.transpose=this.transpositions[0],this.limiter,this.feedbackDelay,this.pingPongDelay,this.chorus,this.hip1,this.synth1,this.synth2,this.synth2_freeverb,this.synth3,this.synth4,this.effectSamplers=[],this.synth1_base_volume_factor=0,this.synth2_base_volume_factor=-19,this.synth3_base_volume_factor=-1,this.synth4_base_volume_factor=-3,this.synth1_ghostNoteTriggeredFlag=!1,this.synth2_ghostNoteTriggeredFlag=!1,this.synth3_ghostNoteTriggeredFlag=!1,this.synth4_ghostNoteTriggeredFlag=!1,this.useSynth1Flag=!0,this.useSynth2Flag=!0,this.useSynth3Flag=!0,this.useSynth4Flag=!0,this.initializedFlag=!1,this.current_transport_position={bars:0,beats:0,quarters:0,ticks:0},this.previous_transport_position={bars:0,beats:0,quarters:0,ticks:0}}return Object(b["a"])(t,[{key:"setGenerativeTrackStatus",value:function(t,e,n){var r,o,s;if(2===arguments.length)r=this,o=t,s=e;else{if(3!==arguments.length)return void console.log("[Soundtrack, setGenerativeTrackStatus] incorrect number of arguments: "+arguments.length);r=t,o=e,s=n}switch(s=s>0,o){case 0:r.useSynth1Flag=s;break;case 1:r.useSynth2Flag=s;break;case 2:r.useSynth3Flag=s;break;case 3:r.useSynth4Flag=s;break;default:console.log("Soundtrack, setGenerativeTrackStatus, unhandled temp_trackNumber: "+o)}}},{key:"getGenerativeTrackStatusAsString",value:function(t,e){var n,r;if(1===arguments.length)n=this,r=t;else{if(2!==arguments.length)return console.log("[Soundtrack, getGenerativeTrackStatusAsString] incorrect number of arguments: "+arguments.length),"error";n=t,r=e}return isNaN(r)?"error":n.getGenerativeTrackStatus(n,r)?"on":"off"}},{key:"getGenerativeTrackStatus",value:function(t,e){var n,r;if(1===arguments.length)n=this,r=t;else{if(2!==arguments.length)return console.log("[Soundtrack, getGenerativeTrackStatus] incorrect number of arguments: "+arguments.length),"error";n=t,r=e}if(isNaN(r))return"error";if(!n.initializedFlag)return!1;switch(r){case 0:return n.useSynth1Flag;case 1:return n.useSynth2Flag;case 2:return n.useSynth3Flag;case 3:return n.useSynth4Flag;default:console.log("Soundtrack, getGenerativeTrackStatus, unhandled temp_trackNumber: "+r)}return!1}},{key:"transportPositionSegmentEquals",value:function(t,e,n){switch(t=t.toLowerCase(),t){case"bars":return e.bars===n.bars;case"beats":return e.beats===n.beats;case"quarters":return e.quarters===n.quarters;case"ticks":return e.ticks===n.ticks;default:console.log("[transportEquals] unhandled _part = "+t)}return!1}},{key:"copyTransportPosition",value:function(t,e){e.bars=t.bars,e.beats=t.beats,e.quarters=t.quarters,e.ticks=t.ticks}},{key:"parseTransportPosition",value:function(t,e){var n=e.split(":");t.bars=parseInt(n[0]),t.beats=parseInt(n[1]);var r=n[2].split(".");t.quarters=parseInt(r[0]),t.ticks=parseInt(r[1])}},{key:"systemMillis",value:function(){var t=new Date;return t.getMilliseconds()+1e3*t.getSeconds()+1e3*t.getMinutes()*60+1e3*t.getHours()*60*60}},{key:"midiToName",value:function(t,e){return isNaN(e)&&(console.log("[Soundtrack, midiToName] _midi is NaN: "+e+" changed to 0"),e=0),e=Math.floor(e),e<0&&(console.log("[Soundtrack, midiToName] _midi < 0: "+e+" changed to 0"),e=0),e>=t.MIDI_NUM_NAMES&&(console.log("[Soundtrack, midiToName] _midi >= _holder.MIDI_NUM_NAMES: "+e+" changed to _holder.MIDI_NUM_NAMES - 1 ("+t.MIDI_NUM_NAMES-1+")"),e=t.MIDI_NUM_NAMES-1),t.MIDI_NUM_NAMES[e]}},{key:"nameToMidi",value:function(t,e){if(null===e)return console.log("[Soundtrack, nameToMidi] _name === null"),-1;if(void 0===e)return console.log("[Soundtrack, nameToMidi] _name === undefined"),-1;if(e.length<2)return console.log("[Soundtrack, nameToMidi] _name.length < 2: "+e.length),-1;if(e.length>4)return console.log("[Soundtrack, nameToMidi] _name.length > 4: "+e.length),-1;e=e.toUpperCase();for(var n=0;n<t.MIDI_NUM_NAMES.length;n++)if(e===t.MIDI_NUM_NAMES[n])return n;return console.log("[Soundtrack, nameToMidi] unhandled _name: "+e),-1}},{key:"mtof",value:function(t){return 440*Math.pow(2,(t-69)/12)}},{key:"isNoteTuned",value:function(t,e){if(isNaN(e))return!1;e=Math.abs(Math.floor(e)),e%=12;for(var n=0;n<t.scales[t.currentScale].length;n++){var r=t.scales[t.currentScale][n]+t.transpose;while(r<0)r+=12;if(r%=12,r===e)return!0}return!1}},{key:"randomChord",value:function(t,e,n,r){var o=[];if(isNaN(e))return o;if(e=Math.abs(Math.floor(e)),e<1)return o;o[0]=t.randomNote(t,n,r);for(var s=1;s<e;s++){o[s]=t.randomNote(t,n,r);var a=!0,i=100,c=0;while(a&&c<i){for(var l=!0,u=0;u<s;u++){if(o[u===o[s]]){o[s]=t.randomNote(t,n,r),l=!1;break}l&&(a=!1)}c+=1}}return o}},{key:"randomNote",value:function(t,e,n){if(isNaN(e)&&(e=0),isNaN(n)&&(n=0),e=Math.abs(Math.floor(e)),n=Math.abs(Math.floor(n)),e==n)return e;if(e>n){var r=e;e=n,n=r}var o=n-e+1,s=Math.floor(Math.random()*o)+e;if(t.isNoteTuned(t,s)&&s<=n&&s>=e)return s;var a=1;Math.random()<.5&&(a=-1),s>n&&(a=-1),s<e&&(a=1);var i=0,c=300;while(i<c){if(s+=a,s<0&&(s=127),s>127&&(s=0),t.isNoteTuned(t,s)&&s>=e&&s<=n)return s;i+=1}return s}},{key:"init",value:function(){var t=this;if(this.initializedFlag)console.log("[Soundtrack, init] warning: attempt to reinitialize a Soundtrack object that has already been initialized");else{c["context"].latencyHint=this.latency_hint,this.limiter=new c["Limiter"]({threshold:-2}),this.limiter.disconnect(),this.limiter.toMaster(),this.hip1=new c["Filter"](1e3,"highpass"),this.hip1.disconnect(),this.hip1.connect(this.limiter),this.feedbackDelay=new c["FeedbackDelay"]("8n",.7),this.feedbackDelay.disconnect(),this.feedbackDelay.connect(this.hip1),this.chorus=new c["Chorus"](4,2.5,.5),this.chorus.disconnect(),this.chorus.connect(this.hip1),this.pingPongDelay=new c["PingPongDelay"]("4n",.2),this.pingPongDelay.connect(this.hip1),this.synth1=new c["PolySynth"](4,c["Synth"],{oscillator:{type:"sine3"},envelope:{attack:.2,decay:.6,sustain:.3,release:1.1}}),this.synth1.disconnect(),this.synth1.connect(this.feedbackDelay),this.synth1.connect(this.pingPongDelay),this.synth1.volume.value=this.synth1_base_volume_factor,this.synth2_freeverb=new c["Freeverb"]({roomSize:.97,dampening:500,wet:1,dry:0}),this.synth2_freeverb.disconnect(),this.synth2=new c["PolySynth"](1,c["Synth"],{oscillator:{type:"sine"},envelope:{attack:.01,decay:.1,sustain:.1,release:.3}}),this.synth2.disconnect(),this.synth2.connect(this.chorus),this.synth2.connect(this.synth2_freeverb),this.synth2_freeverb.connect(this.hip1),this.synth2.volume.value=this.synth2_base_volume_factor,this.synth3=new c["AMSynth"]({harmonicity:.5,oscillator:{type:"amsine2",modulationType:"sine",harmonicity:1},envelope:{attack:.406,decay:1,sustain:.34,release:1.2},modulation:{volume:2,type:"amsine",modulationType:"triangle",harmonicity:2},modulationEnvelope:{attack:.006,decay:.2,sustain:.2,release:.4}}),this.synth3.volume.value=this.synth3_base_volume_factor,this.synth3.disconnect(),this.synth3.connect(this.limiter),this.synth4=new c["AMSynth"]({harmonicity:.5,oscillator:{type:"amsine2",modulationType:"sine3",harmonicity:1.5},envelope:{attack:.206,decay:.3,sustain:.34,release:2.2},modulation:{volume:2,type:"amsine3",modulationType:"sine4",harmonicity:2},modulationEnvelope:{attack:.2,decay:.2,sustain:.2,release:1.4}}),this.synth4.volume.value=this.synth4_base_volume_factor,this.synth4.disconnect(),this.synth4.connect(this.feedbackDelay),this.synth4.connect(this.pingPongDelay);for(var e=0;e<this.samples.length;e++)this.effectSamplers[e]=new c["Sampler"]({C4:this.samples[e]}),this.effectSamplers[e].disconnect(),this.effectSamplers[e].connect(this.chorus),this.effectSamplers[e].volume.value=.3;c["Transport"].scheduleRepeat((function(e){if(t.copyTransportPosition(t.current_transport_position,t.previous_transport_position),t.parseTransportPosition(t.current_transport_position,c["Transport"].position),!t.transportPositionSegmentEquals("bars",t.current_transport_position,t.previous_transport_position)&&t.current_transport_position.bars%2===0&&Math.random()>.8){var n=Math.floor(Math.random()*t.scales.length);t.currentScale=n,console.log("scale = "+n)}if(!t.transportPositionSegmentEquals("bars",t.current_transport_position,t.previous_transport_position)&&t.current_transport_position.bars%2===0&&Math.random()>.8){var r=Math.floor(Math.random()*t.transpositions.length);t.transpose=t.transpositions[r],console.log("transpose = "+r)}if(!t.transportPositionSegmentEquals("bars",t.current_transport_position,t.previous_transport_position)&&t.useSynth1Flag&&t.current_transport_position.bars%2===0&&(Math.random()>.6||t.synth1_ghostNoteTriggeredFlag)){t.synth1_ghostNoteTriggeredFlag=!1;for(var o=t.randomChord(t,4,40,60),s=0;s<o.length;s++){for(var a=!0,i=0;i<s;i++)if(o[i]==o[s]){a=!1;break}a&&t.synth1.triggerAttackRelease(t.mtof(o[s]),"1n")}}if(!t.transportPositionSegmentEquals("quarters",t.current_transport_position,t.previous_transport_position)&&t.current_transport_position.bars%2!==0&&0===t.current_transport_position.beats&&3===t.current_transport_position.quarters&&Math.random()>.7&&t.useSynth1Flag){t.synth1_ghostNoteTriggeredFlag=!0;for(var l=t.randomChord(t,3,40,60),u=0;u<l.length;u++){for(var h=!0,f=0;f<u;f++)if(l[f]==l[u]){h=!1;break}h&&t.synth1.triggerAttackRelease(t.mtof(l[u]),"4n")}}!t.transportPositionSegmentEquals("bars",t.current_transport_position,t.previous_transport_position)&&t.useSynth2Flag&&t.current_transport_position.bars%2===1&&(Math.random()>.7||t.synth2_ghostNoteTriggeredFlag)&&(t.synth2_ghostNoteTriggeredFlag=!1,t.synth2.triggerAttackRelease(t.mtof(t.randomNote(t,56,90)),"16n")),!t.transportPositionSegmentEquals("quarters",t.current_transport_position,t.previous_transport_position)&&t.current_transport_position.bars%2!==1&&0===t.current_transport_position.beats&&3===t.current_transport_position.quarters&&Math.random()>.7&&t.useSynth2Flag&&(t.synth2_ghostNoteTriggeredFlag=!0,t.synth2.triggerAttackRelease(t.mtof(t.randomNote(t,56,90)),"16n")),!t.transportPositionSegmentEquals("bars",t.current_transport_position,t.previous_transport_position)&&t.useSynth3Flag&&t.current_transport_position.bars%2===0&&(Math.random()>.5||t.synth3_ghostNoteTriggeredFlag)&&(t.synth3_ghostNoteTriggeredFlag=!1,t.synth3.triggerAttackRelease(t.mtof(t.randomNote(t,30,48)),"1n")),!t.transportPositionSegmentEquals("quarters",t.current_transport_position,t.previous_transport_position)&&t.useSynth3Flag&&2===t.current_transport_position.quarters&&(Math.random()>.5||t.synth3_ghostNoteTriggeredFlag)&&(t.synth3_ghostNoteTriggeredFlag=!1,t.synth3.triggerAttackRelease(t.mtof(t.randomNote(t,30,48)),"2n")),!t.transportPositionSegmentEquals("bars",t.current_transport_position,t.previous_transport_position)&&t.useSynth4Flag&&t.current_transport_position.bars%4===0&&(Math.random()>0||t.synth4_ghostNoteTriggeredFlag)&&(console.log(Math.random()),t.synth4_ghostNoteTriggeredFlag=!1,t.synth4.triggerAttackRelease(t.mtof(t.randomNote(t,26,46)),"1m"))}),"16n"),c["Transport"].start(),this.initializedFlag=!0,console.log("[Soundtrack, init] soundtrack initialized")}}},{key:"generativePartVolume",value:function(t,e){var n,r;1===arguments.length?(n=this,r=t):2===arguments.length?(n=t,r=e):console.log("[Soundtrack, generativePartVolume] incorrect number of arguments: "+arguments.length),n._generativePartVolume(n,r)}},{key:"_generativePartVolume",value:function(t,e){isNaN(e)?console.log("[Soundtrack, _generativePartVolume] _normPitch is NaN; "+e):(t.synth1.volume.value=t.synth1_base_volume_factor+e,t.synth2.volume.value=t.synth2_base_volume_factor+e,t.synth3.volume.value=t.synth3_base_volume_factor+e,t.synth4.volume.value=t.synth4_base_volume_factor+e)}},{key:"effectVolume",value:function(t,e,n){var r,o,s;2===arguments.length?(r=this,o=t,s=e):3===arguments.length?(r=t,o=e,s=n):console.log("[Soundtrack, effectVolume] incorrect number of arguments: "+arguments.length),r._effectVolume(r,o,s)}},{key:"_effectVolume",value:function(t,e,n){isNaN(e)?console.log("[Soundtrack, _effectVolume] _effectNumber is NaN; "+e):isNaN(n)?console.log("[Soundtrack, _effectVolume] _normPitch is NaN; "+n):(n<0&&(console.log("[Soundtrack, _effectVolume] _volume < 0.0: "+n+" changed to 0.0"),n=0),n>1&&(console.log("[Soundtrack, _effectVolume] _volume > 1.0: "+n+" changed to 1.0"),n=1),e=Math.floor(e),e<0&&(console.log("[Soundtrack, _effectVolume] _effectNumber < 0: "+e+" changed to 0"),e=0),e>=t.samples.length&&(console.log("[Soundtrack, _effectVolume] _effectNumber >= this.samples.length: "+e+" changed to this.samples.length - 1 ("+t.samples.length-1+")"),e=t.samples.length-1),t.effectSamplers[e].volume.value=n)}},{key:"triggerEffect",value:function(t,e,n){var r,o,s;2===arguments.length?(r=this,o=t,s=e):3===arguments.length?(r=t,o=e,s=n):console.log("[Soundtrack, triggerEffect] incorrect number of arguments: "+arguments.length),r._triggerEffect(r,o,s)}},{key:"_triggerEffect",value:function(t,e,n){if(isNaN(e))console.log("[Soundtrack, _triggerEffect] _effectNumber is NaN; "+e);else if(isNaN(n))console.log("[Soundtrack, _triggerEffect] _normPitch is NaN; "+n);else{n<0&&(console.log("[Soundtrack, _triggerEffect] _normPitch < 0.0: "+n+" changed to 0.0"),n=0),n>1&&(console.log("[Soundtrack, _triggerEffect] _normPitch > 1.0: "+n+" changed to 1.0"),n=1),e=Math.floor(e),e<0&&(console.log("[Soundtrack, _triggerEffect] _effectNumber < 0: "+e+" changed to 0"),e=0),e>=t.samples.length&&(console.log("[Soundtrack, _triggerEffect] _effectNumber >= this.samples.length: "+e+" changed to this.samples.length - 1 ("+t.samples.length-1+")"),e=t.samples.length-1);var r=t.nameToMidi(t,"C4")+Math.floor(25*n)-12,o=t.midiToName(t,r);t.effectSamplers[e].loaded?t.effectSamplers[e].triggerAttack(o):console.log("[Soundtrack, _triggerEffect] samples not loaded (yet?)")}}}]),t}(),M={name:"SoundUI",data:function(){return{soundtrack:new S,tracks:y()(4).map((function(){return!0})),effects:y()(30),volumeRange:y()(10).map((function(t){return 10*t-70})),volume:10}},created:function(){},computed:{isInitialized:function(){return this.soundtrack.initializedFlag}},methods:{setupSoundtrack:function(){this.soundtrack.init(),this.soundtrack.generativePartVolume(10),this.soundtrack.setGenerativeTrackStatus(0,!0),this.soundtrack.setGenerativeTrackStatus(1,!0),this.soundtrack.setGenerativeTrackStatus(2,!0),this.soundtrack.setGenerativeTrackStatus(3,!0)},activateEffect:function(t){this.soundtrack.triggerEffect(t,Math.random())},toggleTrack:function(t){this.$set(this.tracks,t,!this.tracks[t]),this.soundtrack.setGenerativeTrackStatus(t,this.tracks[t])},setVolume:function(t){this.volume=t,this.soundtrack.generativePartVolume(t)}}},N=M,P=(n("a4ba"),Object(g["a"])(N,d,_,!1,null,"481dcf53",null)),T=P.exports,F={name:"app",components:{Minimalistic:m,SoundUI:T}},E=F,C=(n("034f"),Object(g["a"])(E,o,s,!1,null,null,null)),D=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(D)}}).$mount("#app")},7526:function(t,e,n){"use strict";var r=n("3462"),o=n.n(r);o.a},"85ec":function(t,e,n){},a4ba:function(t,e,n){"use strict";var r=n("e83e"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e83e:function(t,e,n){}});
//# sourceMappingURL=app.7e31147b.js.map