$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo voluntários')

        $('.modal-body').load('src/voluntarios/view/form-voluntarios.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-voluntarios').modal('show')
    })
})