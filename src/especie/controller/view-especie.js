$(document).ready(function() {

    $('#ESPECIE').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização das especies')

        let IDESPECIE = `IDESPECIE=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDESPECIE,
            url: 'src/especie/model/view-especie.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/especie/view/form-especie.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#ESPECIE').modal('show')
                } else {
                    Swal.fire({
                        title: 'TCC',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})