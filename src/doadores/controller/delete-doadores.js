$(document).ready(function() {

    $('#table-doadores').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDDOADORES = `IDDOADORES=${$(this).attr('id')}`

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
                    data: IDDOADORES,
                    url: 'src/doadores/model/delete-doadores.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Refúgio Pet Lins',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-doadores').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
})