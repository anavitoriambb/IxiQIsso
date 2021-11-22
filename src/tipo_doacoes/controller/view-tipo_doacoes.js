$(document).ready(function() {
    $('#table-tipo_doacoes').on('click', 'button.btn-view', function(e) {
        e.preventDefault()
        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()
        // Criar um novo título para minha janela modal
        $('.modal-title').append('Visualização do tipo de doação.')
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
                        $('#QUANTIDADE').val(dado.dados.QUANTIDADE)
                        $('#QUANTIDADE').attr('readonly', 'true')
                        $('#VALOR').val(dado.dados.VALOR)
                        $('#VALOR').attr('readonly', 'true')
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#DESCRICAO').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-tipo_doacoes').modal('show')
                }
            }
        })
    })
})