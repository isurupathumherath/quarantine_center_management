import React, { useState, useEffect } from 'react';
import { getFoodData } from '../../actions/FinanceAction/invoice';
import { useDispatch, useSelector } from 'react-redux';


export default function Table1() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodData(102));
  }, [currentId, dispatch]);

  const invoices = useSelector((state) => state.invoice);

  return (
    <div class="col-md-12">
      <h4 class="mb-4">Patient Appoinment</h4>
      <div class="appointment-tab">

        <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
          <li class="nav-item">
            <a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
          </li>
        </ul>

        <div class="tab-content">

          <div class="tab-pane show active" id="upcoming-appointments">
            <div class="card card-table mb-0">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Food id</th>
                        <th>User id</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th class="text-center">Paid Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice, Total= 0) => (
                        <tr key={invoice._id}>
                          <td> {invoice._id} </td>
                          <td> {invoice.patientID} </td>
                          <td> {Total = Total + invoice.total} </td>
                          <td>{invoice.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> 
 
          <div class="tab-pane" id="today-appointments">
            <div class="card card-table mb-0">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Appt Date</th>
                        <th>Purpose</th>
                        <th>Type</th>
                        <th class="text-center">Paid Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody> 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
