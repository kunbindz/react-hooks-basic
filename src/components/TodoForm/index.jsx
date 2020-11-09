import React, { useState } from 'react';
import PropTypes from 'prop-types';
TodoForm.propTypes = {
    onSubmit: PropTypes.func,

};
TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm(props) {

    const { onSubmit } = props;
    const [value, setValue] = useState('');
    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    function handelSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: value
        };
        onSubmit(formValues);
        setValue('');
    }
    return (
        <div>
            <form onSubmit={handelSubmit} >
                <input type="text"
                    value={value}
                    onChange={handleValueChange}

                ></input>
            </form>

        </div>
    );
}

export default TodoForm;