$(document).ready(function() {
    $('#table-tipo_doacoes').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/tipo_doacoes/model/list-tipo_doacoes.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/dataTables/pt_br.json"
        },
        "columns": [{
                "data": 'IDTIPO_DOACOES',
                "className": 'text-center'
            },
            //Tem q tirar a qtd e valor pq ñ aparecem na tela (mas caso precise já está aqui o codigo)
            /* {
                 "data": 'QUANTIDADE',
                 "className": 'text-center'
             },
             {
                 "data": 'VALOR',
                 "className": 'text-center'
             },*/
            {
                "data": 'DESCRICAO',
                "className": 'text-center'
            },
            {
                "data": 'IDTIPO_DOACOES',
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