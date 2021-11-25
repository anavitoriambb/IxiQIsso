$(document).ready(function() {
    $('#table-voluntarios').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/voluntarios/model/list-voluntarios.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/dataTables/pt_br.json"
        },
        "columns": [{
                "data": 'IDVOLUNTARIOS',
                "className": 'text-center'
            },
            {
                "data": 'NOME',
                "className": 'text-center'
            },
            {
                "data": 'TELEFONE',
                "className": 'text-center'
            },
            {
                "data": 'ENDERECO',
                "className": 'text-center'
            },
            {
                "data": 'RG',
                "className": 'text-center'
            },
            {
                "data": 'EMAIL',
                "className": 'text-center'
            },
            {
                "data": 'ATUACAO',
                "className": 'text-center'
            },

            {
                "data": 'IDVOLUNTARIOS',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="mdi mdi-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i class="mdi mdi-square-edit-outline"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-trash-can-outline"></i></button>
                    `
                }

            }
        ]
    })
})