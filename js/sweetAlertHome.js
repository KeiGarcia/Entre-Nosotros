const btnInterview = document.getElementById("btn-interview");
const btnMentor = document.getElementById("btn-mentor");

const addEventToInterviewerBtn = () => {
    btnInterview.addEventListener("click", () => {
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
    })
}

const addEventToMentortn = () => {
    btnMentor.addEventListener("click", () => {
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
                    timer: 4000,
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
    })
}

addEventToInterviewerBtn();
addEventToMentortn();