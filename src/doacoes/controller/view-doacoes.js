$(document).ready(function() {

    //$('#DOACOES').on('click', 'button.btn-view', function(e) {
    $('#table-doacoes').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização das doações')

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
                        $('#DATAENTRADA').attr('readonly', 'true')
                        $('#DATASAIDA').val(dado.dados.DATASAISA)
                        $('#DATASAIDA').attr('readonly', 'true')

                        var tipo = dado.dados.DOADORES_IDDOADORES
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/doadores/model/all-doadores.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDDOADORES == tipo) {
                                        $('#DOADORES_IDDOADORES').append(`<option value="${dado.IDDOADORES}">${dado.NOME}</option>`)
                                    }
                                }
                            }
                        })
                        $('#DOADORES_IDDOADORES').attr('readonly', 'true')

                        var tipo_doacoes = dado.dados.TIPO_DOACOES_IDTIPO_DOACOES
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/tipo_doacoes/model/all-tipo_doacoes.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDTIPO_DOACOES == TIPO_DOACOES) {
                                        $('#TIPO_DOACOES_IDTIPO_DOACOES').append(`<option value="${dado.IDTIPO_DOACOES}">${dado.DESCRICAO}</option>`)
                                    }
                                }
                            }
                        })
                        $('#TIPO_DOACOES_IDTIPO_DOACOES').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()

                    $('#modal-doacoes').modal('show')
                }
            }
        })

    })
})