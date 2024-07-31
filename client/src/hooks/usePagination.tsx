import { useMemo } from 'react';

const usePagination = (totalPages: number, page: number, maxButtons: number) => {
    return useMemo(() => {
        const halfMaxButtons = 2;
        let startPage: number = 0;
        let endPage: number = 0;

        const pagesArray: number[] = [];

        if (totalPages <= maxButtons) {
            startPage = 1;
            endPage = totalPages;
        } else if (page <= halfMaxButtons) {
            startPage = 1;
            endPage = maxButtons;
        } else if (page + halfMaxButtons >= totalPages) {
            startPage = totalPages - maxButtons + 1;
            endPage = totalPages;
        } else {
            startPage = page - halfMaxButtons;
            endPage = page + halfMaxButtons;
        }

        for (let i = startPage; i <= endPage; i++) {
            pagesArray.push(i);
        }

        return { pagesArray };
    }, [totalPages, page, maxButtons]);
};


export default usePagination;
