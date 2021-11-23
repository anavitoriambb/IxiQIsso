$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo tipo de voluntário')

        $('.modal-body').load('src/tipo_voluntarios/view/form-tipo_voluntarios.html', function() {
            // Popular o select das espécies
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/voluntarios/model/all-voluntarios.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#VOLUNTARIOS_IDVOLUNTARIOS').append(`<option value="${dado.IDVOLUNTARIOS}">${dado.NOME}</option>`)
                    }
                }
            })
        })
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-tipo_voluntarios').modal('show')
    })
})