import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { yellow } from '@mui/material/colors';

export default function LoanTable() {
  const [loans, setLoans] = useState([]);
  const customer_id = localStorage.getItem('customer_id');

  useEffect(() => {
    // Fetch loan data from the API
    axios.get('http://localhost:9091/loan/all')
      .then(response => {
        setLoans(response.data);
      })
      .catch(error => {
        console.error('Error fetching loan data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  const handleApplyLoan = (loanId) => {
    // Logic for handling loan application goes here
    console.log(`Applying for loan with ID: ${loanId}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center', height: '20vh'}}>
      <TableContainer component={Paper} sx={{ width: '80%', maxWidth: 600 }} style={{background:'teal'}}>
        <Table aria-label="loan table">
          <TableHead>
            <TableRow>
              <TableCell>Loan ID</TableCell>
              <TableCell align="right">Loan Type</TableCell>
              <TableCell align="right">Apply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loans.map((row) => (
              <TableRow key={row.loanId}>
                <TableCell component="th">
                  {row.loanId}
                </TableCell>
                <TableCell align="center">{row.loanType}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" size="small" onClick={() => handleApplyLoan(row.loanId)} style={{background:'#fbc02d',color:'#000000'}}>Apply</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
