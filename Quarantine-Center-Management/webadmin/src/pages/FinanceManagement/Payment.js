import React, { useEffect, useMemo, useState } from 'react';
import { TableHeader, Search, Pagination } from '../../components/FinaceComponent/DataTable'
// import useFullpageLoader from "hooks/useFullPageLoader";

export default function Payment() {

    const [comments, setComments] = useState([]);
    // const [loader, showLoader, hideLoader] = useFullpageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentpage, setCurrentPage] = useState();
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" })

    const ITEMS_PER_PAGE = 25;

    const headers = [
        { name: "User ID", field: "userID", sortable: false },
        { name: "Payment Type", field: "type", sortable: true },
        { name: "Payment ID", field: "paymentId", sortable: true },
        { name: "Order ID", field: "orderId", sortable: false },
        { name: "Actions", field: "actions", sortable: false },
    ];

    useEffect(() => {
        const getData = () => {
            // showLoader();

            fetch('http://localhost:8000/payment/getAllPayemntDetails')
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

        if (search) {
            computeComments = computeComments.filter(
                comment =>
                    // comment.type.toString().includes(search.toString()) ||
                    comment.userID.toString().includes(search.toString()) ||
                    comment.paymentId.toString().includes(search.toString()) ||
                    comment.orderId.toString().includes(search.toString())
            );
        }

        setTotalItems(computeComments.length);

        //sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computeComments = computeComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //CURRENT PAGE SLICE
        return computeComments.slice(
            (currentpage - 1) * ITEMS_PER_PAGE,
            (currentpage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentpage, search, sorting]);


    return (
        <div>
            <div class="page-header">
                <div class="row">
                    <div class="col">
                        <h3 class="page-title">Payment Managment</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Payment Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-4">
                                    <h4 class="card-title">Payment Details</h4>
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
                                <table class="datatable table table-stripped" width={{ width: '100%' }}>
                                    <TableHeader
                                        headers={headers}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })}
                                    />
                                    <tbody>
                                        {commentsData.map(comment => {
                                            if (comment.razorpayDetails.paymentId === "null") {
                                                return (
                                                    <tr>
                                                        <th scope="row"> {comment.userID}</th>
                                                        <td> Card Payment </td>
                                                        <td> null </td>
                                                        <td> null </td>
                                                        <td  >
                                                            <div class="actions">
                                                                <a class=" btn btn-sm bg-danger-light ml-2" data-toggle="modal" href="#delete_modal">
                                                                    <i class="fe fe-trash"></i> Delete
                                                                </a>
                                                                <a class=" btn btn-sm bg-success-light ml-2" data-toggle="modal" href="#delete_modal">
                                                                    <i class="fe fe-edit"></i> Edit
                                                                </a>
                                                                <a class=" btn btn-sm bg-info-light ml-2" data-toggle="modal" href="#delete_modal">
                                                                    ...
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )

                                            } else {
                                                return (
                                                    <tr>
                                                        <th scope="row"> {comment.userID}</th>
                                                        <td> Payment Gateway </td>
                                                        <td> {comment.razorpayDetails.paymentId} </td>
                                                        <td> {comment.razorpayDetails.orderId} </td>
                                                        <td  >
                                                            <div class="actions">
                                                                <a class=" btn btn-sm bg-danger-light ml-2" data-toggle="modal" href="#delete_modal">
                                                                    <i class="fe fe-trash"></i> Delete
                                                                </a>
                                                                <a class=" btn btn-sm bg-success-light ml-2" data-toggle="modal" href="#delete_modal">
                                                                    <i class="fe fe-edit"></i> Edit
                                                                </a>
                                                                <a class=" btn btn-sm bg-info-light ml-2" data-toggle="modal" href="#delete_modal">
                                                                    ...
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <loader />
        </div>
    )
}