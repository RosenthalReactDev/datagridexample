import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo(props) {

    const columns = [
        {
            field: 'product',
            headerName: 'Product',
            width: 150,
            editable: false,
        },
        {
            field: 'employees',
            headerName: 'Employees',
            width: 150,
            editable: false,
        },
        ];
        
        const getProductByEmployee = (employees) => {
            let names = []
            props.employeeNames.map(employee => {
                if (employees.includes(employee.id)) {
                    names.push(employee.name)
                }
            })
            return names.length > 0 ? names.join(', ') : 'n/a'
        }
        
        const rows = props.productNames.map(product => {
            return {id: product.id, product: product.name, employees: getProductByEmployee(product.employees)}
        });

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h1>{props.header}</h1>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            />
        </Box>
    );
}
