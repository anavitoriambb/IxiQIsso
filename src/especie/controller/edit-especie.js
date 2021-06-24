$(document).ready(function() {

    $('#table-especie').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição das especies')

        let IDESPECIE = `IDESPECIE=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDESPECIE,
            url: 'src/especie/model/view-especie.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/especie/view/form-especie.html', function() {
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#IDESPECIE').val(dado.dados.IDESPECIE)
                    })
                    $('.btn-save').show()
                    $('#modal-especie').modal('show')
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