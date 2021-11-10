$(document).ready(function() {

    $('#table-tipo_doacoes').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para minha janela modal
        $('.modal-title').append('Edição do tipo de doação')

        let IDTIPO_DOACOES = `IDTIPO_DOACOES=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDTIPO_DOACOES,
            url: "src/tipo_doacoes/model/view-tipo_doacoes.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo_doacoes/view/form-tipo_doacoes.html', function() {
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#IDTIPO_DOACOES').val(dado.dados.IDTIPO_DOACOES)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-tipo_doacoes').modal('show')
                }
            }
        })
    })
})