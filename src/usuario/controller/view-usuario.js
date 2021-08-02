$(document).ready(function() {

    //$('#ESPECIE').on('click', 'button.btn-view', function(e) {
    $('#table-usuario').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização dos usuários')

        let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDUSUARIO,
            url: 'src/usuario/model/view-usuario.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/usuario/view/form-usuario.html', function() {
                        $('#LOGIN').val(dado.dados.LOGIN)
                        $('#LOGIN').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                        //$('#ESPECIE').modal('show')
                    $('#modal-usuario').modal('show')
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