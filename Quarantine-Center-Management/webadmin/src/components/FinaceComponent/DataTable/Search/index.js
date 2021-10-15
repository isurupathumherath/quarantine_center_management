import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
    }
    return (
        <div>
            <div class="top-nav-search mr-3" style={{ float: 'right' }}>
                <form>
                    <input
                        type="text"
                        style={{ borderRadius: '7px', width: '250px' }}
                        value={search}
                        onChange={e => onInputChange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Search here"
                    />
                    <button class="btn" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    )
};

export default Search;