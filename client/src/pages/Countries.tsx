import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Loader from "../components/UI/Loader/Loader.tsx";
import Pagination from "../components/UI/pagination/Pagination.tsx";
import MyInput from "../components/UI/inputAuth/myInput.tsx";
import {CommonNameCountries} from "../types/countriesData/countriesData.ts";
import {useFilterCountries} from "../hooks/useFilterCountries.ts";
import {Link} from "react-router-dom";


const Countries: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [filter, setFilter] = useState('');
    const [countries, setCountries] = useState<CommonNameCountries[]>([]);
    const limit: number = 10;
    const [startIndex, setStartIndex] = useState<number>(0)

    const sortedSearchedCountries = useFilterCountries(countries, filter);

    const {data, error: countriesError, loading: isCountriesLoading} = useTypedSelector(state => state.countries)
    const {getCountriesAction, defCountries} = useActions()

    const handlePageChange = (page: number): void => {
        setPage(page)
    };

    useEffect((): void => {
        getCountriesAction()
    }, []);

    useEffect((): void => {
        setTotalPages(Math.ceil(sortedSearchedCountries.length / limit));
    }, [sortedSearchedCountries, limit]);

    useEffect(() => {
        setStartIndex((page - 1) * limit);
    }, [page])

    useEffect(() => {
        setCountries(data.countries)
    }, [data.countries])

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
                        <h1>Список стран</h1>
                        {countriesError && <h2>{countriesError}</h2>}
                        <MyInput
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                            placeholder="Поиск..."
                        />
                        <ul>
                            {sortedSearchedCountries.length === 0 && <h2>Нет такой страны</h2>}
                            {sortedSearchedCountries && sortedSearchedCountries.slice(startIndex, startIndex + limit).map((country, index) => (
                                <Link key={index} to={`/country/${country.name.common}`}>
                                    <li>{country.name.common}</li>
                                </Link>
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
