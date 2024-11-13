const app = Vue.createApp({
// where you write data, functions inside here.
   // if more complex html we use template it might get mess ==> template: '<h2>This is template</h2>'
   // so we just create in html file div#app


   data() {
      return {
        title: 'This ME',
        author: 'Zhou Joe',
        age: '19',
      }

   }

})


app.mount('#app')