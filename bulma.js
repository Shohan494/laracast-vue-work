Vue.component('message', {
  props: ['title', 'body'],
  
  data(){
    return {
      isVisible : true
    };
  }, 
  template: 
  `<article class="message" v-show="isVisible">
  <div class="message-header">
    {{ title }}
    <button type="button" @click="hideMessage">X</button>
  </div>
  <div class="message-body">
    {{ body }}
  </div>
</article>`,
  methods:
  {
    hideMessage()
    {
      this.isVisible = false;
    }
  }

});


Vue.component('modal', 
{
  template: 
  `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
      <P>HEY LOREM IPSUM DOLOR SIT AMET</P>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
    
    </div>
`

});

new Vue({
	el: "#root",
  data:
  {
    showModal : false
  }
});


