window.Event=new class{
    constructor(){
        this.vue=new Vue;
    }
    fire(event,data=null){
        this.vue.$emit(event,data);
    }
    listen(event,callback){
        this.vue.$on(event,callback);
    }
}

Vue.component('cupon',{
   template:'<input placeholder="enter something" @blur="onCuponApplied">',
    methods:{
        onCuponApplied(){
//            alert("is was applied");
            Event.fire('applied');
        }
    }
});

new Vue({
   el:'#root',
    data:{
      cuponApplied:false 
    },
   created(){
       Event.listen('applied',()=>alert('handling it!'));
   }
});