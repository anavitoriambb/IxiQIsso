$(document).ready(function() {

    $('#table-voluntarios').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDVOLUNTARIOS = `IDVOLUNTARIOS=${$(this).attr('id')}`

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
                    data: IDVOLUNTARIOS,
                    url: 'src/voluntarios/model/delete-voluntarios.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Refúgio Pet Lins',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-voluntarios').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
})