$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo tipo de espécie')

        $('.modal-body').load('src/especie/view/form-especie.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-especie').modal('show')
    })
})