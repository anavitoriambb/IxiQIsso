$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-voluntarios').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/voluntarios/model/save-voluntarios.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-voluntarios').modal('hide')
                $('#table-voluntarios').DataTable().ajax.reload()

            }
        })
    })
})