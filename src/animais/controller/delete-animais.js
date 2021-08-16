$(document).ready(function() {

    $('#table-animais').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDANIAMIS = `IDANIMAIS=${$(this).attr('id')}`

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
                    data: IDANIMAIS,
                    url: 'src/animais/model/delete-animais.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Refúgio Pet Lins',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-animais').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
})