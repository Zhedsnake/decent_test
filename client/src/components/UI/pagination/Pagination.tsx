import React, {useMemo} from 'react';
import classes from "./pagination.module.css";
import usePagination from "../../../hooks/usePagination.tsx";

interface PaginationTypes {
    totalPages: number,
    page: number,
    handlePageChange: (p: number) => void
}

const Pagination: React.FC<PaginationTypes> = ({ totalPages, page, handlePageChange }) => {
    const maxButtons = 5;
    const { pagesArray } = usePagination(totalPages, page, maxButtons);

    return (
        <div className={classes.page__wrapper}>
            <span
                onClick={() => handlePageChange(1)}
                className={page === 1 ? `${classes.page} ${classes.page__current}` : `${classes.page}`}
            >
                {'<<'}
            </span>
            <span
                onClick={() => handlePageChange(page - 1)}
                className={page === 1 ? `${classes.page} ${classes.page__disabled}` : `${classes.page}`}
            >
                {'<'}
            </span>
            {pagesArray.map(p =>
                <span
                    onClick={() => handlePageChange(p)}
                    key={p}
                    className={page === p ? `${classes.page} ${classes.page__current}` : `${classes.page}`}
                >
                    {p}
                </span>
            )}
            <span
                onClick={() => handlePageChange(page + 1)}
                className={page === totalPages ? `${classes.page} ${classes.page__disabled}` : `${classes.page}`}
            >
                {'>'}
            </span>
            <span
                onClick={() => handlePageChange(totalPages)}
                className={page === totalPages ? `${classes.page} ${classes.page__current}` : `${classes.page}`}
            >
                {'>>'}
            </span>
        </div>
    );
};

export default Pagination;
