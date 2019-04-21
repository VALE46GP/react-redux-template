import React from 'react';
import store from '../../store/store';
import './index.css';
import handleSearchInputChange from '../../actions/filterResults';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Controls = (props) => {
    const { searchInput } = props;
    const handleChange = (event) => {
        const query = event.target.value;
        console.log(query);
        store.dispatch(handleSearchInputChange(query));
    };
    return (
        <span>
            <InputGroup className="mb-3">
                <FormControl
                    value={searchInput}
                    placeholder="Filter or Search New"
                    aria-label="Filter or Search New"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </span>
    );
};

export default Controls;