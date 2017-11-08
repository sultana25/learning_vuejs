Vue.component('model',{
   template:`
       <div class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-content">
                <div class="box">
                    <p>নাকোন্ডাকে সর্বসমক্ষে প্রথম পরিচয় করিয়ে দেন ১৯৯২ সালে ভেনিজুয়েলার এক গবেষক। তার নাম জেসাস রিভার্স। এনাকোন্ডা মূলতঃ ল্যাটিন আমেরিকার জীব হলেও এর নামটি এসেছে শ্রীলঙ্কান ভাষা থেকে। একটি আমেরিকান সাপের নাম কীভাবে এত দূরের দেশ শ্রীলঙ্কার ভাষা থেকে এসেছে তা.নাকোন্ডাকে সর্বসমক্ষে প্রথম পরিচয় করিয়ে দেন </p>
                </div>
              </div>
              <button class="modal-close" @click="$emit('close')"></button>
            </div> 
   `,
});

new Vue({
   el:"#root",
    data:{
        showModel:false
    }
});