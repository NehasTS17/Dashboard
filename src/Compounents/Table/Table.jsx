import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Jose",95563275,"5 March 2022","Approved"),
  createData("Yash",96546276,"2 July 2022","Pending"),
  createData("Mary",97654359,"8 May 2023","Approved"),
  createData("Charle",98725474,"11 April 2021","Delivered"),
];

const makeStyles=(status)=>{
    if(status==='Approved'){
        return{
            background:'rgb(145 254 159 /47%)'
        }
    }
    else if(status ==='Pending'){
        return{
            background: '#ffadad8f',
            color:'red',
        }
    }else{
        return{
            background:'#59bfff',
            color:'white'
        }
    }

}

export default function BasicTable() {
  return (
    <div className='Table'>
        <h3>Recent Orders</h3>
   
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #00000029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
