const app = new Vue({
    el: '#app',
    data:{
      users: JSON.parse(localStorage.getItem('usuarios')),
      user:  JSON.parse(localStorage.getItem('user')),
      cant: undefined,
      genero: 'all',
      filtro: []
    },
    methods:{
        eliminar(index){
            this.filtro= []
            let use = this.users[index]
            this.users = JSON.parse(localStorage.getItem('usuarios'))
            this.users.map(user => {
            console.log()
            if(user.username != use.username){
              
              this.filtro.push(user)
              }
            })
            this.users = this.filtro
            localStorage.setItem('usuarios', JSON.stringify(this.users))
            this.filtrar()

         },
         logout(){
            window.location = "../index.html";
         },

         filtrar(){
          this.users = JSON.parse(localStorage.getItem('usuarios'))
          if(this.genero != 'all'){
            this.filtro = this.users.filter((user) => user.genero === this.genero)
            this.users = this.filtro
             
          }

          if(this.cant > 0){
              this.users.splice(this.user.id, 1)
              this.users.splice(this.cant, this.users.length - this.cant)
              this.filtro  = this.users
          }

         }
      
    },
    created(){
        
    },
    
})