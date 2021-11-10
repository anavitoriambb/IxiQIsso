$(document).ready(function() {

    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo tipo de doação')

        $('.modal-body').load('src/tipo_doacoes/view/form-tipo_doacoes.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')


        $('#modal-tipo_doacoes').modal('show')

    })
})