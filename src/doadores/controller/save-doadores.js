$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-doadores').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/doadores/model/save-doadores.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-doadores').modal('hide')
                $('#table-doadores').DataTable().ajax.reload()

            }
        })
    })
})