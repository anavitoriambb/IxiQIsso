$(document).ready(function() {

    $('#table-animais').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Edição dos animais')

        let IDANIMAIS = `IDANIMAIS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDESPECIE,
            url: 'src/animais/model/view-animais.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/animais/view/form-animais.html', function() {
                        $('#PORTE').val(dado.dados.PORTE)
                        $('#IDANIMAIS').val(dado.dados.PORTE)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-animais').modal('show')
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