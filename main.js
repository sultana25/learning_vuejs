Vue.component('message',{
   props:['title','body'],
    data(){
      return {visible:true};  
    },
    template:`
       <article class="message" v-show="visible">
          <div class="message-header">
            {{title}}
            <button type="button" @click="hideModel">x</button>
          </div >
          <div class="message-body">
            {{body}}
          </div>
        </article> 
    `,
   methods:{
        hideModel(){
            this.visible=false;
        }
    } 
});

new Vue({
   el:'#root' 
    
});

