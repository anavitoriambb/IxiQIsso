$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-animais').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/animais/model/save-animais.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-animais').modal('hide')
                $('#table-animais').DataTable().ajax.reload()

            }
        })
    })
})