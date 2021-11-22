$(document).ready(function() {
    $('#table-doadores').on('click', 'button.btn-edit', function(e) {
        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Edição do doador')

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
                        $('#TELEFONE').val(dado.dados.TELEFONE)
                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#IDDOADORES').val(dado.dados.IDDOADORES)
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
                    $('#modal-doadores').modal('show')
                }
            }
        })
    })
})