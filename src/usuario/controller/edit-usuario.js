$(document).ready(function() {

    $('#table-usuario').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição dos usuários')

        let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDESPECIE,
            url: 'src/usuario/model/view-usuario.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/usuario/view/form-usuario.html', function() {
                        $('#LOGIN').val(dado.dados.LOGIN)
                        $('#IDUSUARIO').val(dado.dados.LOGIN)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-usuario').modal('show')
                } else {
                    Swal.fire({
                        title: 'TCC',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})