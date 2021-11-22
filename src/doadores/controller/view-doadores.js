$(document).ready(function() {

    $('#table-doadores').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Visualização do doador')

        let IDDOADORES = `IDDOADORES=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDDOADORES,
            url: "src/doadores/model/view-doadores.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/doadores/view/form-doadores.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')

                        $('#TELEFONE').val(dado.dados.TELEFONE)
                        $('#TELEFONE').attr('readonly', 'true')

                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#EMAIL').attr('readonly', 'true')

                        var tipo = dado.dados.USUARIO_IDUSUARIO
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/usuario/model/all-usuario.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDUSUARIO == tipo) {
                                        $('#USUARIO_IDUSUARIO').append(`<option value="${dado.IDUSUARIO}">${dado.LOGINN}</option>`)
                                    }
                                }
                            }
                        })
                        $('#USUARIO_IDUSUARIO').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-doadores').modal('show')
                }
            }
        })
    })
})