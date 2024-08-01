import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Loader from "../components/UI/Loader/Loader.tsx";
import Pagination from "../components/UI/pagination/Pagination.tsx";
import MyInput from "../components/UI/myInput/myInput.tsx";
import {CommonNameCountries} from "../types/countriesData/countriesData.ts";
import {useFilterCountries} from "../hooks/useFilterCountries.ts";
import HeaderCountries from "../components/countries/headerCountries.tsx";
import CountriesError from "../components/countries/countriesError.tsx";
import NoCountries from "../components/countries/noCountries.tsx";
import ListCountries from "../components/countries/listCountries.tsx";


const Countries: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [filter, setFilter] = useState('');
    const [countries, setCountries] = useState<CommonNameCountries[]>([]);
    const limit: number = 10;
    const [startIndex, setStartIndex] = useState<number>(0)

    const sortedSearchedCountries: CommonNameCountries[] = useFilterCountries(countries, filter);

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
        <main className="container" style={{marginTop: "50px", marginBottom: "20px",}}>

            {isCountriesLoading
                ?
                <Loader/>
                :
                <>
                    <HeaderCountries />
                    {countriesError &&
                        <CountriesError>{countriesError}</CountriesError>
                    }
                    <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <div className="input-group my-3">
                                <MyInput
                                    type="text"
                                    className="form-control"
                                    value={filter}
                                    onChange={e => setFilter(e.target.value)}
                                    placeholder="Поиск..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mx-auto list-group">
                            {sortedSearchedCountries.length === 0 &&
                                <NoCountries/>
                            }
                            <ListCountries sortedSearchedCountries={sortedSearchedCountries} limit={limit} startIndex={startIndex} />
                        </div>
                    </div>
                    <Pagination
                        page={page}
                        handlePageChange={handlePageChange}
                        totalPages={totalPages}
                    />
                </>
            }
        </main>
    );
};

export default Countries;
