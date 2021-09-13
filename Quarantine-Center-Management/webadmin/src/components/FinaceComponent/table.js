import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getPayers } from '../../actions/FinanceAction/payers';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
 

export default function BasicTable() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getPayers());
  }, [currentId, dispatch]);

  const classes = useStyles();

  const payers = useSelector((state) => state.payers);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell align="right">id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payers.map((payer) => (
            <TableRow key={payer._id}>
              <TableCell component="th" scope="row">
                {payer._id}
              </TableCell>
              <TableCell align="right">{payer.firstName}</TableCell>
              <TableCell align="right">{payer.lastName}</TableCell>
              <TableCell align="right">{payer.createdAt}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
