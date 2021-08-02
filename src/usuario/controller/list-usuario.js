$(document).ready(function() {
    $('#table-usuario').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/usuario/model/list-usuario.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/dataTables/pt_br.json"
        },
        "columns": [{
                "data": 'IDUSUARIO',
                "className": 'text-center'
            },
            {
                "data": 'LOGIN',
                "className": 'text-center'
            },
            {
                "data": 'IDUSUARIO',
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