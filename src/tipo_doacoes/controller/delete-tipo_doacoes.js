$(document).ready(function() {

    $('#table-tipo_doacoes').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDTIPO_DOACOES = `IDTIPO_DOACOES=${$(this).attr('id')}`

        Swal.fire({
            title: 'Library',
            text: 'Deseja realmente excluir o registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
        }).then((result) => {

            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: IDTIPO_DOACOES,
                    url: "src/tipo_doacoes/model/delete-tipo_doacoes.php",
                    success: function(dados) {
                        Swal.fire({
                            title: 'Library',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipo_doacoes').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
})