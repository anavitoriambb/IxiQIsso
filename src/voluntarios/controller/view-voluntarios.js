$(document).ready(function() {

    $('#table-voluntarios').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Visualização do voluntário')

        let IDVOLUNTARIOS = `IDVOLUNTARIOS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDVOLUNTARIOS,
            url: "src/voluntarios/model/view-voluntarios.php",
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

                        var tipo_voluntario = dado.dados.TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/tipo_voluntarios/model/all-tipo_voluntarios.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDTIPO_VOLUNTARIOS == tipo_voluntario) {
                                        $('#TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS').append(`<option value="${dado.IDTIPO_VOLUNTARIOS}">${dado.DESCRICAO}</option>`)
                                    }
                                }
                            }
                        })
                        $('#TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS').attr('readonly', 'true')

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
                    $('#modal-voluntarios').modal('show')
                }
            }
        })
    })

})