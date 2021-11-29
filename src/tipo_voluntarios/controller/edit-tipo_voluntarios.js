$(document).ready(function() {
    $('#table-tipo_voluntarios').on('click', 'button.btn-edit', function(e) {
        e.preventDefault()
            // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()
            // Criar um novo título para minha janela modal
        $('.modal-title').append('Edição do tipo de voluntário')
        let IDTIPO_VOLUNTARIOS = `IDTIPO_VOLUNTARIOS=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDTIPO_VOLUNTARIOS,
            url: "src/tipo_voluntarios/model/view-tipo_voluntarios.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo_voluntarios/view/form-tipo_voluntarios.html', function() {
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#IDTIPO_VOLUNTARIOS').val(dado.dados.IDTIPO_VOLUNTARIOS)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-tipo_voluntarios').modal('show')
                }
            }
        })
    })
})