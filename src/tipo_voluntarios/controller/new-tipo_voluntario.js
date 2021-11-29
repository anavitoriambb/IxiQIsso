$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Adicionar novo tipo de voluntário')
        $('.modal-body').load('src/tipo_voluntarios/view/form-tipo_voluntarios.html')
        $('.btn-save').show()
        $('.btn-save').attr('data-operation', 'insert')
        $('#modal-tipo_voluntarios').modal('show')
    })
})