import React from 'react';
import classes from "./pagination.module.css";
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
        <div className={classes.page__wrapper}>
            <button onClick={() => goToPage(1)} className={classes.page}>
                {'<<'}
            </button>
            <button onClick={() => goToPage(page - 1)} className={classes.page}>
                {'<'}
            </button>
            {pagesArray.map(p => (
                <button key={p} onClick={() => goToPage(p)} className={page === p ? `${classes.page} ${classes.page__current}` : `${classes.page}`}>
                    {p}
                </button>
            ))}
            <button onClick={() => goToPage(page + 1)} className={classes.page}>
                {'>'}
            </button>
            <button onClick={() => goToPage(totalPages)} className={classes.page}>
                {'>>'}
            </button>
        </div>
    );
};

export default Pagination;
