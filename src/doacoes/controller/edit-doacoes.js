$(document).ready(function() {

    $('#table-doacoes').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição das doações')

        let IDESPECIE = `IDDOACOES=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDESPECIE,
            url: 'src/doacoes/model/view-doacoes.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/doacoes/view/form-doacoes.html', function() {
                        $('#DATAENTRADA').val(dado.dados.DATAENTRADA)
                        $('#IDDOACOES').val(dado.dados.IDDOACOES)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-doacoes').modal('show')
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