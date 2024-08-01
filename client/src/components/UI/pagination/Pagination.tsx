import React from 'react';
import usePagination from "../../../hooks/usePagination";

interface PaginationTypes {
    totalPages: number,
    page: number,
    handlePageChange: (p: number) => void
}

const Pagination: React.FC<PaginationTypes> = ({ totalPages, page, handlePageChange }) => {
    const maxButtons = 5;
    const { pagesArray } = usePagination(totalPages, page, maxButtons);

    const goToPage = (p: number) => {
        if (p < 1) {
            handlePageChange(1);
        } else if (p > totalPages) {
            handlePageChange(totalPages);
        } else {
            handlePageChange(p);
        }
    };

    return (
        <div className="row">
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mx-auto mt-3" role="group" aria-label="First group">
                    <button type="button" onClick={() => goToPage(1)} className="btn btn-primary">{'<<'}</button>
                    <button type="button" onClick={() => goToPage(page - 1)} className="btn btn-primary">{'<'}</button>
                    {pagesArray.map(p => (
                        <button
                            type="button"
                            key={p}
                            onClick={() => goToPage(p)}
                            className="btn btn-primary"
                            style={page === p ? { background: 'black' } : {}}
                        >
                            {p}
                        </button>
                    ))}
                    <button type="button" onClick={() => goToPage(page + 1)} className="btn btn-primary">{'>'}</button>
                    <button type="button" onClick={() => goToPage(totalPages)} className="btn btn-primary">{'>>'}</button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
