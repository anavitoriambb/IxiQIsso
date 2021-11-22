$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo animal')

        $('.modal-body').load('src/animais/view/form-animais.html', function() {
            // Popular o select dos tipos de usuários
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
                // Popular o select das espécies
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/especie/model/all-especie.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#ESPECIE_IDESPECIE').append(`<option value="${dado.IDESPECIE}">${dado.DESCRICAO}</option>`)
                    }
                }
            })
        })
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-animais').modal('show')
    })
})
