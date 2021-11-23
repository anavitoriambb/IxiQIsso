$(document).ready(function() {

    $('#table-tipo_voluntarios').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDTIPO_VOLUNTARIOS = `IDTIPO_VOLUNTARIOS=${$(this).attr('id')}`

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
                    data: IDTIPO_VOLUNTARIOS,
                    url: 'src/tipo_voluntarios/model/delete-tipo_voluntarios.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Refúgio Pet Lins',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipo_voluntarios').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
})