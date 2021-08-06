$(document).ready(function() {

    //$('#ANIMAIS').on('click', 'button.btn-view', function(e) {
    $('#table-animais').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização dos animais')

        let IDUSUARIO = `IDANIMAIS=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDANIMAIS,
            url: 'src/animais/model/view-animais.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/animais/view/form-animais.html', function() {
                        $('#PORTE').val(dado.dados.PORTE)
                        $('#PORTE').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                        //$('#ANIMAIS').modal('show')
                    $('#modal-animais').modal('show')
                } //else {
                //Swal.fire({
                //  title: 'TCC',
                //  text: dado.mensagem,
                //  type: dado.tipo,
                //    confirmButtonText: 'OK'
                //  })
                //}
            }
        })

    })
})