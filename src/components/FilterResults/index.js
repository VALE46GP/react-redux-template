import React from 'react';
import store from '../../store/store';
import handleSearchInputChange from '../../actions/filterResults';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { Button } from '@zendeskgarden/react-buttons';
import { ButtonGroup } from '@zendeskgarden/react-buttons'

const FilterResults = (props) => {
    const { searchInput } = props;
    const handleChange = (event) => {
        const query = event.target.value;
        console.log(query);
        store.dispatch(handleSearchInputChange(query));
    };
    return (
        <span>
            <input
                className="text-input"
                type="text"
                value={searchInput}
                placeholder="Search..."
                onChange={handleChange}
            />
            <ButtonGroup>
                <Button key="button-1">Movies</Button>
                <Button key="button-2">Shows</Button>
            </ButtonGroup>
        </span>
    );
};

export default FilterResults;
