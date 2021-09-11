// import React, { useState, useEffect, Component } from "react"; // in use effect it determines what would i want to display when page is loaded..used when reading data from DB
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "../../assets/InventoryManagement/css/onestock.css";

// // export default class header extends Component = () => {}
// const Onestock = () => {

//   const { name } = useParams();
//   const [item, setitem] = useState([]);

//   useEffect(() => {
//     function getitem() {
//       axios
//         .get(`http://localhost:8000/stock/get/${name}`)
//         .then((res) => {
//           console.log(res.data);
//           setitem(res.data);
//           console.log(item);
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     }
//     console.log(item);
//     getitem();
//   }, []);

//   return (
//     <div>
//       <div class="col-lg-6">
//         <div class="card">
//           <div class="card-header">
//             <h4 class="card-title">Basic Table</h4>
//           </div>
//           <div class="card-body">
//             <div class="table-responsive">
//               <table class="table mb-0">
//                 <thead>
//                   <tr>
//                     <th>Batch number</th>
//                     <th>Price of unit (Rs)</th>
//                     <th>total Quantity (Units)</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {item.map((it) => {
//                     return (
//                       <tr>
//                         <td>{it.batchnum}</td>
//                         <td>{it.price_of_one}</td>
//                         <td>{it.total_quantity}</td>
//                         <td>
//                           <button id="view">Delete</button>
//                           <button id="add">Update</button>
//                         </td>
//                       </tr>
//                     ) //<pre>{JSON.stringify(stud)}</pre>
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Onestock;
