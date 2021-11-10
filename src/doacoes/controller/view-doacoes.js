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
                    })
                    $('.btn-save').hide()
                        //$('#DOACOES').modal('show')
                    $('#modal-doacoes').modal('show')
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