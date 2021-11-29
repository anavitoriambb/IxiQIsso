$(document).ready(function() {
    $('#table-voluntarios').on('click', 'button.btn-edit', function(e) {
        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Edição do voluntário')

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
                        $('#TELEFONE').val(dado.dados.TELEFONE)
                        $('#ENDERECO').val(dado.dados.ENDERECO)
                        $('#RG').val(dado.dados.RG)
                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#ATUACAO').val(dado.dados.ATUACAO)
                        $('#IDVOLUNTARIOS').val(dado.dados.IDVOLUNTARIOS)
                        var tipo = dado.dados.USUARIO_IDUSUARIO
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/usuario/model/all-usuario.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDTIPO_USUARIO == tipo) {
                                        $('#USUARIO_IDUSUARIO').append(`<option selected value="${dado.IDUSUARIO}">${dado.LOGINN}</option>`)
                                    } else {
                                        $('#USUARIO_IDUSUARIO').append(`<option value="${dado.IDUSUARIO}">${dado.LOGINN}</option>`)
                                    }
                                }
                            }
                        })
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-voluntarios').modal('show')
                }
            }
        })
    })
})