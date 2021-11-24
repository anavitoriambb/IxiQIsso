$(document).ready(function() {

    $('#table-doacoes').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição das doações')

        let IDDOACOES = `IDDOACOES=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDDOACOES,
            url: 'src/doacoes/model/view-doacoes.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/doacoes/view/form-doacoes.html', function() {
                        $('#DATAENTRADA').val(dado.dados.DATAENTRADA)
                        $('#DATASAIDA').val(dado.dados.DATASAIDA)
                        $('#IDDOACOES').val(dado.dados.IDDOACOES)

                        var tipo = dado.dados.DOADORES_IDDOADORES
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/doadores/model/all-doadores.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDTIPO_DOADORES == tipo) {
                                        $('#DOADORES_IDDOADORES').append(`<option selected value="${dado.IDDOADORES}">${dado.NOME}</option>`)
                                    } else {
                                        $('#DOADORES_IDDOADORES').append(`<option value="${dado.IDDOADORES}">${dado.NOME}</option>`)
                                    }
                                }
                            }
                        })

                        var TIPO_DOACOES = dado.dados.TIPO_DOACOES_IDTIPO_DOACOES
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/tipo_doacoes/model/all-tipo_doacoes.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDTIPO_DOACOES == TIPO_DOACOES) {
                                        $('#TIPO_DOACOES_IDTIPO_DOACOES').append(`<option selected value="${dado.IDTIPO_DOACOES}">${dado.DESCRICAO}</option>`)
                                    } else {
                                        $('#TIPO_DOACOES_IDTIPO_DOACOES').append(`<option value="${dado.IDTIPO_DOACOES}">${dado.DESCRICAO}</option>`)
                                    }
                                }
                            }
                        })

                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-doacoes').modal('show')

                }
            }
        })

    })
})