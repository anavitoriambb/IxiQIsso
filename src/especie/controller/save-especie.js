$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-especie').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/especie/model/save-especie.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-especie').modal('hide')
                    //$('#ESPECIE').DataTable().ajax.reload()
                $('#table-especie').DataTable().ajax.reload()

            }
        })
    })
})