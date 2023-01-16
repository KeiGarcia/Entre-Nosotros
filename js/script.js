const app = Vue.createApp({
    data() {
        return{

            mentors: [],
            mentorsFilter: [],
            specialty: ["Backend", "Data science/ Data Engineer", "Frontend", "QA", "All"],

            select: [],
            page: "home",
            inicioSesion: false,
            modal1: true,

            /* registro */
            emailRegistro: "",
            passwordRegistro: "",

            /* Inicio sesion */
            emailInicio: "",
            passwordInicio: ""          
        }
    },
    created(){
        fetch('../mentores.json')
        .then(res => res.json())
        .then(data => {
            this.mentors = data
            this.mentorsFilter = data
        })
        .catch(err => console.log(err))
    },
    methods: {

        mentoring(){
    
            if(this.inicioSesion === false){
        
                Swal.fire({
                    title: 'OH NO! <br> <br> Para poder solicitar una mentoría primero debes iniciar sesión.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    background: "#660866f3",
                    color: "#fff",
                    iconColor: "#ff00ff"
                  })
            }
        },
        
        crearUsuario(){
            if(this.emailRegistro.value != "" && this.passwordRegistro.value != ""){

                  this.emailRegistro.value = ""
                  this.passwordRegistro.value = ""
                
                  Swal.fire({
                    title: 'Tu cuenta ha sido creada con éxito!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    background: "#660866f3",
                    color: "#fff",
                    iconColor: "#ff00ff"
                    
                  })
                  
            }
        
            else{
                Swal.fire({
                    title: 'Por favor completa los campos requeridos!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    background: "#660866f3",
                    color: "#fff",
                    iconColor: "#ff00ff"
                  }) 
            }
        },
        
        iniciarSesion(){
            if(this.emailInicio.value != "" && this.passwordInicio.value != ""){
                // Signed in 
                this.emailInicio.value = ""
                this.passwordInicio.value = ""
                this.inicioSesion = true 

                this.modal1 = false
        
                Swal.fire({
                    title: 'Has iniciado sesion con éxito!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    background: "#660866f3",
                    color: "#fff",
                    iconColor: "#ff00ff"
                  })
            }
        },

        cerrarSesion(){
            this.inicioSesion = false
        }

    },
    computed: {

        filtro(){
            if(this.specialty != "All"){
                this.mentorsFilter = this.mentors.filter(e => {
                    return this.specialty.includes(e.specialty)
                })
            }
            else{
                this.mentorsFilter = this.mentors
            }
        }
    }
}).mount("#app")