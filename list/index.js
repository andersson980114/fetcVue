const app = new Vue({
    el: '#app',
    data:{
      users: JSON.parse(localStorage.getItem('usuarios')),
      user:  JSON.parse(localStorage.getItem('user')),
           

    },
    methods:{
        eliminar(index){
            console.log(index)
            this.users.splice(index, 1)
         },
         logout(){
            window.location = "../index.html";
         }
      
    },
    created(){
         
    },
    
})