import React, {useEffect, useState} from 'react';
// import Pagination from "../components/UI/pagination/Pagination";
// import Loader from "../components/UI/Loader/Loader";
import StaffsLIst from "../components/Staff/StaffsLIst";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
// import {StuffData} from "../types/countriesData/stuffData";


const Countries: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    // const [staffs, setStaffs] = useState<StuffData[]>([]);


    const {data, error: staffsError, loading: isStaffsLoading} = useTypedSelector(state => state.countries)
    const {getCountriesAction} = useActions()



    // const handlePageChange = (page: number): void => {
    //     // setPage(page)
    // };

    // useEffect((): void => {
    //     if (data.total_pages){
    //         setTotalPages(data.total_pages);
    //     }
    // }, [data.total_pages]);

    // useEffect((): void => {
    //     if (data.stuffs) {
    //         setStaffs(data.stuffs);
    //     }
    // }, [data.stuffs]);

    useEffect((): void => {
        getCountriesAction()
    }, []);


    // useEffect(() => {
    //     return () => {
    //         //! Переделать под список стран
    //         defStuffs()
    //     };
    // }, []);

    return (
        <div className="app">
            <main className="app__main">

                {/*{isStaffsLoading*/}
                {/*?*/}
                {/*    <Loader/>*/}
                {/*:*/}
                {/*    <>*/}
                {/*        {staffsError && <h1>{staffsError}</h1>}*/}
                {/*        <StaffsLIst staffs={staffs}/>*/}
                {/*        <Pagination*/}
                {/*            page={page}*/}
                {/*            handlePageChange={handlePageChange}*/}
                {/*            totalPages={totalPages}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*}*/}
            </main>
        </div>
    );
};

export default Countries;
