$(document).ready(function() {

    $('#table-tipo_voluntarios').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Visualização dos tipos de voluntários')

        let IDTIPO_VOLUNTARIOS = `IDTIPO_VOLUNTARIOS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDTIPO_VOLUNTARIOS,
            url: "src/tipo_voluntarios/model/view-tipo_voluntarios.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo_voluntarios/view/form-tipo_voluntarios.html', function() {

                        var VOLUNTARIOS = dado.dados.VOLUNTARIOS_IDVOLUNTARIOS
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/voluntarios/model/all-voluntarios.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDVOLUNTARIOS == voluntarios) {
                                        $('#VOLUNTARIOS_IDVOLUNTARIOS').append(`<option value="${dado.IDVOLUNTARIOS}">${dado.NOME}</option>`)
                                    }
                                }
                            }
                        })
                        $('#VOLUNTARIOS_IDVOLUNTARIOS').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-tipo_voluntarios').modal('show')
                }
            }
        })
    })

})