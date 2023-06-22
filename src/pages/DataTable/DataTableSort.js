import DataTable from 'react-data-table-component'; // importation du module

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function DataTableSort() { // nom du component
    return (
        <DataTable
            columns={columns}
            data={data}
            fixedHeader
            highlightOnHover
            pagination
        />
    );
};

export default DataTableSort // export du component
