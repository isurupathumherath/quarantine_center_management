import React, { useEffect, useMemo, useState } from 'react';
import { TableHeader, Search, Pagination } from '../DataTable'
// import useFullpageLoader from "hooks/useFullPageLoader";

const InquaryTable = () => {

    const [comments, setComments] = useState([]);
    // const [loader, showLoader, hideLoader] = useFullpageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentpage, setCurrentPage] = useState();
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" })

    const ITEMS_PER_PAGE = 10;

    const headers = [
        // { name: "No", field: "id", sortable: false },
        // { name: "Name", field: "name", sortable: true },
        // { name: "Email", field: "email", sortable: true },
        // { name: "Comment", field: "body", sortable: false },
        // { name: "Actions", field: "actions", sortable: false },
        { name: "Inquari Id", field: "_id", sortable: false },
        { name: "Inserted Date", field: "insertedDateTime", sortable: true },
        { name: "Status", field: "states", sortable: true },
        { name: "Type", field: "type", sortable: true },
        { name: "Piority", field: "piority", sortable: true },
    ];

    useEffect(() => {
        const getData = () => {
            // showLoader();

            fetch('http://localhost:8000/inquary/allInquaryDetails')
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setComments(json);
                    console.log(json);
                });
        };
        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computeComments = comments;

        // if (search) {
        //     computeComments = computeComments.filter(
        //         comment =>
        //             comment.firstName.toLowerCase().includes(search.toLowerCase()) ||
        //             comment.email.toLowerCase().includes(search.toLowerCase()) ||
        //             comment.address.toLowerCase().includes(search.toLowerCase())
        //         // comment.id.toString().includes(search.toString())
        //     );
        // }

        setTotalItems(computeComments.length);

        // //sorting comments
        // if (sorting.field) {
        //     const reversed = sorting.order === "asc" ? 1 : -1;
        //     computeComments = computeComments.sort(
        //         (a, b) =>
        //             reversed * a[sorting.field].localeCompare(b[sorting.field])
        //     );
        // }

        //CURRENT PAGE SLICE
        return computeComments.slice(
            (currentpage - 1) * ITEMS_PER_PAGE,
            (currentpage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentpage, search, sorting]);

    var Inquary_states = "";

    return (
        <div>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-4">
                                <h4 class="card-title">Inquary Details</h4>
                            </div>
                            <div class="col-md-6 mt-2">
                                <Pagination
                                    total={totalItems}
                                    itemsPerPage={ITEMS_PER_PAGE}
                                    currentPage={currentpage}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            </div>
                            <div class="col-md-2">
                                <Search onSearch={(value) => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }} />
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="datatable table table-stripped">
                                <TableHeader
                                    headers={headers}
                                    onSorting={(field, order) =>
                                        setSorting({ field, order })}
                                />
                                <tbody>
                                    {commentsData.map(comment => {
                                        if (comment.states == '1') {
                                            return (
                                                <tr>
                                                    <th scope="row"> {comment._id}</th>
                                                    <td> {comment.insertedDateTime} </td>
                                                    <td> <button type='button' class='btn btn-rounded btn-success'>Pending</button></td>
                                                    <td> {comment.type} </td>
                                                    <td> {comment.piority} </td>
                                                </tr>
                                            )
                                        } else if (comment.states === '3') {
                                            return (
                                                <tr>
                                                    <th scope="row"> {comment._id}</th>
                                                    <td> {comment.insertedDateTime} </td>
                                                    <td>  <button type="button" class="btn btn-rounded btn-warning">Working On</button> </td>
                                                    <td> {comment.type} </td>
                                                    <td> {comment.piority} </td>
                                                </tr>
                                            )
                                        } else if (comment.states === '2') {
                                            return (
                                                <tr>
                                                    <th scope="row"> {comment._id}</th>
                                                    <td> {comment.insertedDateTime} </td>
                                                    <td> <button type="button" class="btn btn-rounded btn-info">Completed</button></td>
                                                    <td> {comment.type} </td>
                                                    <td> {comment.piority} </td>
                                                </tr>
                                            )
                                        }
                                        // return (
                                        //     <tr>
                                        //         <th scope="row"> {comment._id}</th>
                                        //         <td> {comment.insertedDateTime} </td>
                                        //         <td> {Inquary_states} </td>
                                        //         <td> {comment.type} </td>
                                        //         <td> {comment.piority} </td>
                                        //         {/* <td  >
                                        //         <div class="actions">
                                        //             <a class=" btn btn-sm bg-danger-light ml-2" data-toggle="modal" href="#delete_modal">
                                        //                 <i class="fe fe-trash"></i> Delete
                                        //             </a>
                                        //             <a class=" btn btn-sm bg-success-light ml-2" data-toggle="modal" href="#delete_modal">
                                        //                 <i class="fe fe-edit"></i> Edit
                                        //             </a>
                                        //             <a class=" btn btn-sm bg-info-light ml-2" data-toggle="modal" href="#delete_modal">
                                        //                 ...
                                        //             </a>
                                        //         </div>
                                        //     </td> */}
                                        //     </tr>
                                        // )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InquaryTable;