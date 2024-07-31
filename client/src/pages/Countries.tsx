import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Loader from "../components/UI/Loader/Loader.tsx";
import Pagination from "../components/UI/pagination/Pagination.tsx";


const Countries: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [startIndex, setStartIndex] = useState<number>(0)

    const {data, error: countriesError, loading: isCountriesLoading} = useTypedSelector(state => state.countries)
    const {getCountriesAction, defCountries} = useActions()

    const handlePageChange = (page: number): void => {
        setPage(page)
    };

    useEffect((): void => {
        getCountriesAction()
    }, []);

    useEffect((): void => {
        setTotalPages(Math.ceil(data.countries.length / limit));
    }, [data, limit]);

    useEffect(() => {
        setStartIndex((page - 1) * limit);
    }, [page])

    useEffect(() => {
        return () => {
            defCountries()
        }
    }, [])

    return (
        <div className="app">
            <main className="app__main">

                {isCountriesLoading
                ?
                    <Loader/>
                :
                    <>
                        <h1>Countries</h1>
                        {countriesError && <h1>{countriesError}</h1>}
                        <ul>
                            {data.countries && data.countries.slice(startIndex, startIndex + limit).map((country, index) => (
                                <li key={index}>{country.name.common}</li>
                            ))}
                        </ul>
                        <Pagination
                            page={page}
                            handlePageChange={handlePageChange}
                            totalPages={totalPages}
                        />
                    </>
                }
            </main>
        </div>
    );
};

export default Countries;
