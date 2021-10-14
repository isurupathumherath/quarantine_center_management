import React, { useEffect, useMemo, useState } from 'react';
import { TableHeader, Search, Pagination } from '../../components/FinaceComponent/DataTable'
// import useFullpageLoader from "hooks/useFullPageLoader";

export default function FDashboard() {

    const [comments, setComments] = useState([]);
    // const [loader, showLoader, hideLoader] = useFullpageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentpage, setCurrentPage] = useState();
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" })

    const ITEMS_PER_PAGE = 10;

    const headers = [
        { name: "No", field: "id", sortable: false },
        { name: "Name", field: "firstName", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Comment", field: "address", sortable: false },
        { name: "Actions", field: "actions", sortable: false },
    ];

    useEffect(() => {
        const getData = () => {
            // showLoader();

            fetch('http://localhost:8000/payer/allPayerDetails')
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
                    comment.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase()) ||
                    comment.address.toLowerCase().includes(search.toLowerCase()) ||
                    comment._id.toString().includes(search.toString())
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
                        <h3 class="page-title">Finance Managment</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Payer Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <p class="float-left">
                                {/* <Pagination
                                    total={totalItems}
                                    itemsPerPage={ITEMS_PER_PAGE}
                                    currentPage={currentpage}
                                    onPageChange={page => setCurrentPage(page)}
                                /> */}
                            </p>
                            <p class="card-text float-right">
                                <Search onSearch={(value) => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }} />
                            </p>
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
                                        {commentsData.map(comment => (
                                            <tr>
                                                <th scope="row"> {comment._id}</th>
                                                <td> {comment.firstName} </td>
                                                <td> {comment.email} </td>
                                                <td> {comment.address} </td>
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
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <p class="float-right">
                                <Pagination
                                    total={totalItems}
                                    itemsPerPage={ITEMS_PER_PAGE}
                                    currentPage={currentpage}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <loader />
        </div>
    )
}