import React, { useState } from "react";
import * as BsIcons from 'react-icons/bs';

const Header = ({ headers, onSorting }) => {

    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = field => {

        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);

    }

    return (
        <thead>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <th key={name}
                        onClick={() => sortable ? onSortingChange(field) : null}
                    >
                        {name}<span class="ml-5" />

                        {sortingField && sortingField === field && (
                            sortingOrder == "asc"
                                ? <BsIcons.BsArrowDown />
                                : <BsIcons.BsArrowUp />
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    )
};

export default Header;