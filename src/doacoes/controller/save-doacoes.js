$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-doacoes').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/doacoes/model/save-doacoes.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-doacoes').modal('hide')
                    //$('#DOACOES').DataTable().ajax.reload()
                $('#table-doacoes').DataTable().ajax.reload()

            }
        })
    })
})