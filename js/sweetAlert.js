const btnBefore = document.getElementById("btn-before");
const btnIn = document.getElementById("btn-in");
const btnAfter = document.getElementById("btn-after");

const addEventToButtons = () => {
    btnBefore.addEventListener("click", () => {
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
    });

    btnIn.addEventListener("click", () => {
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
    })

    btnAfter.addEventListener("click", () => {
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
    })
}

addEventToButtons();