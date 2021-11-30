$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()
        let dados = $('#form-tipo_voluntarios').serialize()
        dados += `&operacao=${$('.btn-save').attr('data-operation')}`
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/tipo_voluntarios/model/save-tipo_voluntarios.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Refúgio Pet Lins',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $('#modal-tipo_voluntarios').modal('hide')
                $('#table-tipo_voluntarios').DataTable().ajax.reload()
            }
        })
    })
})