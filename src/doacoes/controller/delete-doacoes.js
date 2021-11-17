$(document).ready(function() {

    $('#table-doacoes').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDESPECIE = `IDDOACOES=${$(this).attr('id')}`

        Swal.fire({
            title: 'Refúgio Pet Lins',
            text: 'Deseja realmente excluir o registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {

            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: IDESPECIE,
                    url: 'src/doacoes/model/delete-doacoes.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Refúgio Pet Lins',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-doacoes').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
})