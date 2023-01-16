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
        },

        /* HOME */
        addEventToInterviewerBtn(){
            Swal.fire({
                html: '<h3 class="modal-title">¿Querés ser entrevistador?</h3><h4 class="modal-p">Completa el siguiente formulario y te contactaremos lo más pronto posible para comentarte más sobre la iniciativa y cómo seguimos.</h4><form class="modal-form"><input type="text" placeholder="Nombre *"><input type="text" placeholder="Apellido *"><input type="text" placeholder="Edad *"><input type="email" placeholder="Correo electrónico *"><input type="text" placeholder="Linkedin *"><textarea name="comment-why" placeholder="Contanos por qué querés ser entrevistador"></textarea></form>',
    
                width: '50%',
                confirmButtonText: 'Enviar',
                showCloseButton: true,
                buttonsStyling: false,
                background: 'rgba(0,0,123,1)',
                backdrop: 'rgba(0,0,123,0.4)',
        
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'modal-popup',
                    confirmButton: 'modal-btn',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        html: '<p class="modal-p_success">Tus respuestas se enviaron correctamente</p><p class="modal-p_success-msg">¡Gracias por querer formar parte de Entre-Nosotros!</p><p class="modal-p_success-msg">Nos contactaremos con vos a la brevedad.</p>',
    
                        width: '40%',
                        icon: 'success',
                        iconColor: '#01e25b',
                        timer: 3500,
                        showConfirmButton: false,
                        buttonsStyling: false,
                        background: 'rgba(0,0,123,1)',
                        backdrop: 'rgba(0,0,123,0.4)',
                
                        showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                        },
                        customClass: {
                            popup: 'modal-popup',
                            confirmButton: 'modal-btn interviewer',
                        },
                })
                }
            })
        },
        
        addEventToMentortn(){
            Swal.fire({
                html: '<h3 class="modal-title">¿Querés ser mentor?</h3><h4 class="modal-p">Completa el siguiente formulario y te contactaremos lo más pronto posible para comentarte más sobre la iniciativa y cómo seguimos.</h4><form class="modal-form"><input type="text" class="user-name" placeholder="Nombre *"><input type="text" class="user-surname" placeholder="Apellido *"><input type="text" class="user-age" placeholder="Edad *"><input type="email" class="user-email" placeholder="Correo electrónico *"><input type="text" class="user-likedin" placeholder="Linkedin *"><select id="time" name="time"><option id="time" name="time" value="" selected disabled>¿En qué horarios podrías brindar las mentorías?</option><option id="time" name="time" value="Mañana">Por la mañana (entre las 8:00 y las 12:00)</option><option id="time" name="time" value="Tarde">Por la tarde (entre las 12:00 y las 18:00)</option><option id="time" name="time" value="Noche">Por la noche (entre las 18:00 y las 21:00)</option></select><textarea name="comment-why" placeholder="Contanos por qué querés ser mentor"></textarea></form>',
    
                width: '50%',
                confirmButtonText: 'Enviar',
                showConfirmButton: true,
                showCloseButton: true,
                buttonsStyling: false,
                background: 'rgba(0,0,123,1)',
                backdrop: 'rgba(0,0,123,0.4)',
        
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'modal-popup',
                    confirmButton: 'modal-btn',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        html: '<p class="modal-p_success">Tus respuestas se enviaron correctamente</p><p class="modal-p_success-msg">¡Gracias por querer formar parte de Entre-Nosotros!</p><p class="modal-p_success-msg">Nos contactaremos con vos a la brevedad.</p>',
                        
                        width: '40%',
                        icon: 'success',
                        iconColor: '#01e25b',
                        showConfirmButton: false,
                        timer: 3500,
                        buttonsStyling: false,
                        background: 'rgba(0,0,123,1)',
                        backdrop: 'rgba(0,0,123,0.4)',
                
                        showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                        },
                        customClass: {
                            popup: 'modal-popup',
                            confirmButton: 'modal-btn',
                        },
                })
                }
            })
        },

        /* TIPS INTERVIEWS */
        eventBefore(){
            Swal.fire({
                html: '<h2 class="modal-title">Preparate bien para la entrevista</h2><p class="modal-p">La entrevista es el momento más importante del proceso, tenes la oportunidad de conocer la oferta y que te conozcan. Trabaja en tu actitud y emociones para dar lo mejor de vos. Y por supuesto, seguí estos tips!</p><ul class="modal-list"><li><span>1</span>Lee la descripción del puesto, entendé lo que la empresa está buscando y cómo eso matchea con tu perfil. De esta manera, podrás enfocar tu relato en lo que buscan y convencerlos de que sos el candidato ideal. Por ejemplo, si sabes que buscan una persona con conocimientos en una herramienta: Excel, intenta incluir en tu relato tu experiencia con la misma.</li><li><span>2</span>Averigua sobre la empresa y la persona que te entrevistará. Eso demuestra interés.</li><li><span>3</span>Es importante que al menos una vez practiques tu relato. Practicar te servirá para que al momento de la entrevista sepas lo que querés decir pero también es importante que no suene a un relato memorizado, recordá que este paso es solo para tener claro lo que queremos transmitir.</li><li><span>4</span>Un buen tip es grabar audios con las respuestas a posibles preguntas para ver cuánto tardas y si debes modificar algún concepto que utilices.</li><li><span>5</span>Las respuestas son importantes...pero las preguntas también! No olvides preparar algunas para el reclutador. Podés preguntar sobre la posición, tu equipo de trabajo, o la clase de proyectos que te serían asignados.</li></ul>',
                width: '70%',
                confirmButtonText: 'Volver',
                padding: '1rem',
                showCloseButton: true,
                buttonsStyling: false,
                background: 'black url(../imgs/particlesPhoto.jfif)',
                backdrop: 'rgba(0,0,123,0.4)',
        
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'modal-popup',
                    confirmButton: 'modal-btn',
                },
            })
        },

        eventIn(){
            Swal.fire({
                html: '<h2 class="modal-title">El momento de la entrevista</h2><p class="modal-p">Llegada esta instancia, intenta no ponerte tan nervioso. Recordá que es solo una instancia más del proceso de selección, donde el entrevistador querrá conocerte y ver si tus valores y ética coinciden con los de la empresa. Por ello, es importante que tengas claro cuáles son tus valores y que puedas contar quién sos.</p><ul class="modal-list"><li><span>1</span>Si la entrevista es virtual, busca un lugar tranquilo, con buena iluminación, buen wifi y no te olvides de prender la cámara. Tene tu cv a mano para no olvidarte de nada importante.</li><li><span>2</span>No te apures en responder, tomate el tiempo de entender a qué apunta cada pregunta. Es importante que puedas pensar en experiencias que puedan dar cuenta de tus conocimientos y habilidades. Si estas aplicando a tu primer empleo, podes hablar de algún proyecto personal o de la facultad.</li><li><span>3</span>En lugar de decir un listado de virtudes sobre ti mismo que no puedas demostrar, habla de experiencias pasadas que demuestren el valor que podes aportar. Cita logros concretos, hechos y datos.</li><li><span>4</span>No le temas a dar respuestas elaboradas. Desarrolla todo lo que hayas hecho o hagas actualmente ya sea en trabajo o estudios lo mejor posible, no des nada por entendido, mejor que sobre y no que falte.</li><li><span>5</span>Por último y no menos importante, recorda que, como dijo Oscar Wilde, no existe una segunda oportunidad para una primera impresión. Cuida tu imagen, es tu carta de presentación. </li></ul>',
                width: '70%',
                confirmButtonText: 'Volver',
                padding: '1rem',
                showCloseButton: true,
                buttonsStyling: false,
                background: 'black url(../imgs/particlesPhoto.jfif)',
                backdrop: 'rgba(0,0,123,0.4)',
        
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'modal-popup',
                    confirmButton: 'modal-btn',
                },
            })
        },

        eventAfter(){
            Swal.fire({
                html: '<h2 class="modal-title">El post entrevista también importa</h2><p class="modal-p">La mayoría de los candidatos no suele planificar una estrategia post entrevista, y por esto, si tú lo haces tendrás unos puntitos a tu favor, todo cuenta. Si realmente estás muy interesado en un puesto de trabajo, no dejes de mostrar ese interés después de la entrevista.</p><ul class="modal-list"><li><span>1</span>Analiza tu parte en la entrevista: ¿Hubo preguntas nuevas que te sorprendieron?, ¿Diste la mejores respuestas?, ¿Cómo podrías mejorarlas?, ¿Ha habido preguntas a las que te ha costado responder?</li><li><span>2</span>Enviá un mail de agradecimiento a la persona que te ha entrevistado recordándole el puesto para el que aplicabas y dándole las gracias por la oportunidad. De esta manera, mostrarás tu interés por la oferta de trabajo y por continuar en el proceso de selección.</li><li><span>3</span> Pregunta cómo va el proceso de selección. Si ves que ya han pasado los días y aún no sabes nada, podes enviar un mail mostrando tu interés sobre cómo va el proceso de selección.</li><li><span>4</span>Preparate para la decisión. Tanto si el puesto de trabajo es tuyo como si no, preparate para el momento en que vayas a leer la respuesta.</li><li><span>5</span>El feedback del entrevistador podrá brindarte información sobre tu desempeño que podrás utilizar para no cometer los mismos errores en tu próxima entrevista. Esto demuestra compromiso con tu crecimiento profesional y puede ayudarte a mantener las puertas abiertas para futuras oportunidades. </li></ul>',
                width: '70%',
                confirmButtonText: 'Enviar',
                padding: '1rem',
                showCloseButton: true,
                buttonsStyling: false,
                background: 'black url(../imgs/particlesPhoto.jfif)',
                backdrop: 'rgba(0,0,123,0.4)',
        
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'modal-popup',
                    confirmButton: 'modal-btn',
                },
            })
        },

        /* INTERVIEWS */
        eventInscribe(){
            Swal.fire({
                html: '<h3 class="modal-title">¿Querés ser entrevistador?</h3><h4 class="modal-p">Completa el siguiente formulario y te contactaremos lo más pronto posible para comentarte más sobre la iniciativa y cómo seguimos.</h4><form class="modal-form"><input type="text" placeholder="Nombre *"><input type="text" placeholder="Apellido *"><input type="text" placeholder="Edad *"><input type="email" placeholder="Correo electrónico *"><input type="text" placeholder="Linkedin *"><textarea name="comment-why" placeholder="Contanos brevemente sobre vos y por qué te gustaría ser entrevistado"></textarea></form>',
          
                width: '50%',
                confirmButtonText: 'Enviar',
                showCloseButton: true,
                buttonsStyling: false,
                background: 'rgba(0,0,123,1)',
                backdrop: 'rgba(0,0,123,0.4)',
          
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    popup: 'modal-popup',
                    confirmButton: 'modal-btn',
                },
            }).then((result) => {
              if (result.isConfirmed) {
                  Swal.fire({
                      html: '<p class="modal-p_success">¡Ya estás participando por una entrevista!</p><p class="modal-p_success-msg">Nos contactaremos con vos el día Jueves para contarte quiénes son los convocados. ¡Mucha suerte!</p>',
          
                      width: '40%',
                      icon: 'success',
                      iconColor: '#01e25b',
                      timer: 4000,
                      showConfirmButton: false,
                      buttonsStyling: false,
                      background: 'rgba(0,0,123,1)',
                      backdrop: 'rgba(0,0,123,0.4)',
              
                      showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                      },
                      customClass: {
                          popup: 'modal-popup',
                          confirmButton: 'modal-btn interviewer',
                      },
              })
              }
          })  
        },

        scroll(){
            window.scroll({
                top: 100,
                left: 0,
                behavior: 'smooth'
              });
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