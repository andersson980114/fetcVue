const app = new Vue({
    el: '#app',
    data:{
      users: undefined,  
      username: undefined,
      password: undefined,
      mensaje: undefined,
      error: false, 
      logueo: false
    },
    methods:{
        ingresar(){
            this.users.map((user, index) => { 
                    if(user.login.username === this.username && user.login.password === this.password){
                        localStorage.setItem('user', JSON.stringify(
                            {'username':this.username, 
                            'password:': this.password,
                            'img': user.picture.thumbnail,
                            'firstName': user.name.first,
                            "lastName": user.name.last 
                            }
                        ))
                        window.location = "./list/index.html";
                        this.logueo = true
                        this.error=false
                    } 
                }
            )
            if(this.logueo===false){
                this.error = true
                this.mensaje = "Username o password incorrectos"
            }
        }
      
    },
    created(){ 

        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => {
            this.users = data.results
            data.results.map(user => {
                console.log( "username:", user.login.username)
                console.log( "Password:",user.login.password)
                
            })
            localStorage.setItem('usuarios', JSON.stringify(this.users))
        });

       
  
        
        
        
    },
    
})