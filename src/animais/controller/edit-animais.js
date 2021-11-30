$(document).ready(function() {

    $('#table-animais').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição do animal')

        let IDANIMAIS = `IDANIMAIS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDANIMAIS,
            url: 'src/animais/model/view-animais.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/animais/view/form-animais.html', function() {
                        $('#DATAREGASTE').val(dado.dados.DATARESGATE)
                        $('#SEXO').val(dado.dados.SEXO)
                        $('#PORTE').val(dado.dados.PORTE)
                        $('#IDANIMAIS').val(dado.dados.IDANIMAIS)

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
                        var especie = dado.dados.ESPECIE_IDESPECIE
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/especie/model/all-especie.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDESPECIE == especie) {
                                        $('#ESPECIE_IDESPECIE').append(`<option selected value="${dado.IDESPECIE}">${dado.DESCRICAO}</option>`)
                                    } else {
                                        $('#ESPECIE_IDESPECIE').append(`<option value="${dado.IDESPECIE}">${dado.DESCRICAO}</option>`)
                                    }
                                }
                            }
                        })

                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-animais').modal('show')

                }
            }
        })

    })
})