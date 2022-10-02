import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';


function SearchBox() {
    // Define state,Connect with input. On form submit we navigated with state info.
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const changeText = (event) => {
        setSearchText(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchText === "" || searchText === undefined) {
            navigate(window.location.pathname)
            return
        };

        navigate(`?search=${searchText}`)

    }
    return (
        // Search Box start
        <React.Fragment>
            <div className={styles.right}>
                <form onSubmit={onSubmit}>
                    <input value={searchText} placeholder='Search' onChange={changeText} />
                    <button className={styles.btn}>Search</button>
                </form>
            </div>
        </React.Fragment>
        // Search Box end
    )
}
export default React.memo(SearchBox);