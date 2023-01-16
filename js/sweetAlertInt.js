const btnEntrevistado = document.querySelector(".btn-inscribe");


btnEntrevistado.addEventListener("click", () => {
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
  })