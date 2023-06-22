import DataTable from 'react-data-table-component'; // importation du module
import React, { useEffect, useState } from "react"
import axios from 'axios';

const columns = [
    {
        name: 'title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'body',
        selector: row => row.body,
        sortable: true,
    },
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'userId',
        selector: row => row.userId,
        sortable: true,
    },
];

function DataTableBasique() { // nom du component

    const [dataPost, setDataPost] = useState();
    const [errorMessage, seterrorMessage] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setDataPost(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                seterrorMessage(true)
            })
    }, []);

    return (
        <div className='container'>
            <DataTable
                columns={columns}
                data={dataPost}
                fixedHeader
                highlightOnHover
                pagination
            />
            {errorMessage &&
                <div className="alert alert-danger" role="alert">
                    l'url est mauvaise
                </div>
            }
        </div>
    );
};

export default DataTableBasique // export du component
