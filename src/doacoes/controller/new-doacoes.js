$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar nova doações')

        $('.modal-body').load('src/doacoes/view/form-doacoes.html', function() {
            // Popular o select dos tipos de usuários
            $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    url: 'src/doadores/model/all-doadores.php',
                    success: function(dados) {
                        for (const dado of dados) {
                            $('#DOADORES_IDDOADORES').append(`<option value="${dado.IDDOADORES}">${dado.NOME}</option>`)
                        }
                    }
                })
                // Popular o select das espécies
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/tipo_doacoes/model/all-tipo_doacoes.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#TIPO_DOACOES_IDTIPO_DOACOES').append(`<option value="${dado.IDTIPO_DOACOES}">${dado.DESCRICAO}</option>`)
                    }
                }
            })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-doacoes').modal('show')
    })
})