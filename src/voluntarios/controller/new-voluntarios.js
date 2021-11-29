$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo voluntário')

        $('.modal-body').load('src/voluntarios/view/form-voluntarios.html', function() {

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/tipo_voluntarios/model/all-tipo_voluntarios.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS').append(`<option value="${dado.IDTIPO_VOLUNTARIOS}">${dado.DESCRICAO}</option>`)
                    }
                }
            })

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/usuario/model/all-usuario.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#USUARIO_IDUSUARIO').append(`<option value="${dado.IDUSUARIO}">${dado.LOGINN}</option>`)
                    }
                }
            })

        })
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-voluntarios').modal('show')
    })
})