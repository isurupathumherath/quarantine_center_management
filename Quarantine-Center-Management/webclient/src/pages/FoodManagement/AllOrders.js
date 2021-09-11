import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderDetails from "../../components/FoodManagement/OrderDetails";
import FoodCard from "../../components/FoodManagement/FoodCard";
import { Heart } from "react-feather";
export default function AllOrders() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/order/getbypatient/102")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon text-primary border-primary">
                <i class="fe fe-users"></i>
              </span>
              <div class="dash-count">
                <h3>168</h3>
              </div>
            </div>
            <div class="dash-widget-info">
              <h6 class="text-muted">Doctors</h6>
              <div class="progress progress-sm">
                <div class="progress-bar bg-primary w-50"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon text-primary border-primary">
                <i class="fe fe-users"></i>
              </span>
              <div class="dash-count">
                <h3>168</h3>
              </div>
            </div>
            <div class="dash-widget-info">
              <h6 class="text-muted">Doctors</h6>
              <div class="progress progress-sm">
                <div class="progress-bar bg-primary w-50"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          {" "}
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon text-primary border-primary">
                <i class="fe fe-users"></i>
              </span>
              <div class="dash-count">
                <h3>168</h3>
              </div>
            </div>
            <div class="dash-widget-info">
              <h6 class="text-muted">Doctors</h6>
              <div class="progress progress-sm">
                <div class="progress-bar bg-primary w-50"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {/* {food.map((post) => (
            <div key={post.orderID}>
              <OrderDetails details={post.orderDetails} />
            </div>
          ))} */}

          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Default Datatable</h4>
                <p class="card-text">
                  This is the most basic example of the datatables with zero
                  configuration. Use the <code>.datatable</code> class to
                  initialize datatables.
                </p>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div
                    id="DataTables_Table_0_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div
                          class="dataTables_length"
                          id="DataTables_Table_0_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="DataTables_Table_0_length"
                              aria-controls="DataTables_Table_0"
                              class="custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6"></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <table
                          class="datatable table table-stripped dataTable no-footer"
                          id="DataTables_Table_0"
                          role="grid"
                          aria-describedby="DataTables_Table_0_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                class="sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending"
                                style={{ width: "168.281px" }}
                              >
                                Name
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Position: activate to sort column ascending"
                                style={{ width: "278.719" }}
                              >
                                Position
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "126.888" }}
                              >
                                Office
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Age: activate to sort column ascending"
                                style={{ width: "54.5" }}
                              >
                                Age
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Start date: activate to sort column ascending"
                                style={{ width: "112.703" }}
                              >
                                Start date
                              </th>
                              <th
                                class="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Salary: activate to sort column ascending"
                                style={{ width: "97.1094" }}
                              >
                                Salary
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" class="odd">
                              <td class="sorting_1">Jennifer Chang</td>
                              <td>Regional Director</td>
                              <td>Singapore</td>
                              <td>28</td>
                              <td>2010/11/14</td>
                              <td>$357,650</td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">Michael Silva</td>
                              <td>Marketing Designer</td>
                              <td>London</td>
                              <td>66</td>
                              <td>2012/11/27</td>
                              <td>$198,500</td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">Paul Byrd</td>
                              <td>Chief Financial Officer (CFO)</td>
                              <td>New York</td>
                              <td>64</td>
                              <td>2010/06/09</td>
                              <td>$725,000</td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">Quinn Flynn</td>
                              <td>Support Lead</td>
                              <td>Edinburgh</td>
                              <td>22</td>
                              <td>2013/03/03</td>
                              <td>$342,000</td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">Rhona Davidson</td>
                              <td>Integration Specialist</td>
                              <td>Tokyo</td>
                              <td>55</td>
                              <td>2010/10/14</td>
                              <td>$327,900</td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">Shou Itou</td>
                              <td>Regional Marketing</td>
                              <td>Tokyo</td>
                              <td>20</td>
                              <td>2011/08/14</td>
                              <td>$163,000</td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">Sonya Frost</td>
                              <td>Software Engineer</td>
                              <td>Edinburgh</td>
                              <td>23</td>
                              <td>2008/12/13</td>
                              <td>$103,600</td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">Tatyana Fitzpatrick</td>
                              <td>Regional Director</td>
                              <td>London</td>
                              <td>19</td>
                              <td>2010/03/17</td>
                              <td>$385,750</td>
                            </tr>
                            <tr role="row" class="odd">
                              <td class="sorting_1">Tiger Nixon</td>
                              <td>System Architect</td>
                              <td>Edinburgh</td>
                              <td>61</td>
                              <td>2011/04/25</td>
                              <td>$320,800</td>
                            </tr>
                            <tr role="row" class="even">
                              <td class="sorting_1">Yuri Berry</td>
                              <td>Chief Marketing Officer (CMO)</td>
                              <td>New York</td>
                              <td>40</td>
                              <td>2009/06/25</td>
                              <td>$675,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 col-md-5">
                        <div
                          class="dataTables_info"
                          id="DataTables_Table_0_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 21 to 30 of 30 entries
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-7">
                        <div
                          class="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_0_paginate"
                        >
                          <ul class="pagination">
                            <li
                              class="paginate_button page-item previous"
                              id="DataTables_Table_0_previous"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx="0"
                                tabindex="0"
                                class="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li class="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx="1"
                                tabindex="0"
                                class="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li class="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx="2"
                                tabindex="0"
                                class="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li class="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx="3"
                                tabindex="0"
                                class="page-link"
                              >
                                3
                              </a>
                            </li>
                            <li
                              class="paginate_button page-item next disabled"
                              id="DataTables_Table_0_next"
                            >
                              <a
                                href="#"
                                aria-controls="DataTables_Table_0"
                                data-dt-idx="4"
                                tabindex="0"
                                class="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
