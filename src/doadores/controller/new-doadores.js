$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo doador')

        $('.modal-body').load('src/doadores/view/form-doadores.html', function() {
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
        })
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-doadores').modal('show')
    })
})