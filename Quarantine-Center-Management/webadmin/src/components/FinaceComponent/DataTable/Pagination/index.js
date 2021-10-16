import React, { useEffect, useMemo, useState } from 'react';
// import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({
    total = 0,
    itemsPerPage = 10,
    currentPage = 1,
    onPageChange
}) => {

    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0) {
            setTotalPages(Math.ceil(total / itemsPerPage));
        }
    }, [total, itemsPerPage])

    const paginationItems = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {

            pages.push(<li class="page-item" key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
                <a class="page-link">
                    {i}
                </a>
            </li>);
        }

        return pages;
    }, [totalPages, currentPage])

    if (totalPages === 0) return null;

    return (
        <div>
            {/* <Pagination>
                <Pagination.Prev
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}  />
                {paginationItems}
                <Pagination.Next
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages} />
            </Pagination> */}
            <ul class="pagination" style={{float:'right'}}>
                <li class="page-item" onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1} >
                    <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                {paginationItems}
                <li class="page-item" onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages} >
                    <a class="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default PaginationComponent;