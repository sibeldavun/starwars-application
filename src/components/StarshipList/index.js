import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchStarships } from '../../swapi';
import Card from '../../components/Card';
import styles from './styles.module.css'
import ScrollToTopButton from '../../components/ScrollToTopButton';
import LoadMoreButton from '../../components/LoadMoreButton';
import { useLocation } from 'react-router-dom';
import Error from '../../pages/Error';
import Loading from '../../pages/Loading';

function StarshipList() {
    // Get data, store in localstorage and load more with infinityQuery
    const location = useLocation();
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =

        useInfiniteQuery(['starships', location.search],

            fetchStarships, {

            getNextPageParam: (lastGroup, allGroups) => {
                const morePagesExist = lastGroup?.next !== null;

                if (!morePagesExist) {
                    return;
                }
                return allGroups.length + 1;
            },
            staleTime:0,
            cacheTime:0
        });

    if (status === "loading") return <Loading />

    if (status === "error") return <Error />

    console.log(data);

    return (
        // Listed starships start
        <React.Fragment>
            <div className={styles.container}>
                {
                    data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.results.map((item, index) => (

                                    <Card item={item} key={index} />

                                ))
                            }
                        </React.Fragment>
                    ))}
            </div>

            <div>
                {
                    hasNextPage ? <LoadMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} /> : ""
                }

                <ScrollToTopButton />
            </div>
        </React.Fragment>
        // Listed starships start
    )
}
export default StarshipList;