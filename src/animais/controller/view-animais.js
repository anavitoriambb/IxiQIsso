$(document).ready(function() {

    $('#table-animais').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Visualização do animal')

        let IDANIMAIS = `IDANIMAIS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDANIMAIS,
            url: "src/animais/model/view-animais.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/animais/view/form-animais.html', function() {
                        $('#DATARESGATE').val(dado.dados.DATARESGATE)
                        $('#DATARESGATE').attr('readonly', 'true')

                        $('#SEXO').val(dado.dados.SEXO)
                        $('#SEXO').attr('readonly', 'true')

                        $('#PORTE').val(dado.dados.PORTE)
                        $('#PORTE').attr('readonly', 'true')

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

                        var especie = dado.dados.ESPECIE_IDESPECIE
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/especie/model/all-especie.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDESPECIE == especie) {
                                        $('#ESPECIE_IDESPECIE').append(`<option value="${dado.IDESPECIE}">${dado.DESCRICAO}</option>`)
                                    }
                                }
                            }
                        })
                        $('#ESPECIE_IDESPECIE').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-animais').modal('show')
                }
            }
        })
    })

})