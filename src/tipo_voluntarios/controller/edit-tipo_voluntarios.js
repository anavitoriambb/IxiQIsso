$(document).ready(function() {
    $('#table-tipo_voluntarios').on('click', 'button.btn-edit', function(e) {
        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Edição do tipo de voluntarios')

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

                        $('#IDTIPO_VOLUNTARIOS').val(dado.dados.IDTIPO_VOLUNTARIOS)


                        var voluntarios = dado.dados.voluntarios_IDVOLUNTARIOS
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/voluntarios/model/all-voluntarios.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDVOLUNTARIOS == voluntarios) {
                                        $('#VOLUNTARIOS_IDVOLUNTARIOS').append(`<option selected value="${dado.IDVOLUNTARIOS}">${dado.NOME}</option>`)
                                    } else {
                                        $('#VOLUNTARIOS_IDVOLUNTARIOS').append(`<option value="${dado.IDVOLUNTARIOS}">${dado.NOME}</option>`)
                                    }
                                }
                            }
                        })
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-tipo_voluntarios').modal('show')
                }
            }
        })
    })
})