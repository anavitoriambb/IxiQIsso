$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()
        let dados = $('#form-tipo_doacoes').serialize()
        dados += `&operacao=${$('.btn-save').attr('data-operation')}`
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/tipo_doacoes/model/save-tipo_doacoes.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $('#modal-tipo_doacoes').modal('hide')
                $('#table-tipo_doacoes').DataTable().ajax.reload()
            }
        })
    })
})