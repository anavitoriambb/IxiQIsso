$(document).ready(function() {

    //$('#ESPECIE').on('click', 'button.btn-view', function(e) {
    $('#table-voluntarios').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização dos voluntários')

        let IDVOLUNTARIOS = `IDVOLUNTARIOS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDVOLUNTARIOS,
            url: 'src/voluntarios/model/view-voluntarios.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/voluntarios/view/form-voluntarios.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')

                        $('#TELEFONE').val(dado.dados.TELEFONE)
                        $('#TELEFONE').attr('readonly', 'true')

                        $('#ENDERECO').val(dado.dados.ENDERECO)
                        $('#ENDERECO').attr('readonly', 'true')
                        
                        $('#RG').val(dado.dados.RG)
                        $('#RG').attr('readonly', 'true')

                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#EMAIL').attr('readonly', 'true')
                        
                        $('#ATUACAO').val(dado.dados.ATUACAO)
                        $('#ATUACAO').attr('readonly', 'true')

                        $('#USUARIO_IDUSUARIO').val(dado.dados.USUARIO_IDUSUARIO)
                        $('#USUARIO_IDUSUARIO').attr('readonly', 'true')

                    })
                    $('.btn-save').hide()
                    $('#modal-voluntarios').modal('show')
                } 
            }
        })

    })
})