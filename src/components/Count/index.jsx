import React, { useState } from 'react';
import PropTypes from 'prop-types';

Count.propTypes = {

};

function Count(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => { setCount(count + 1) }} > +</button>
            <button onClick={() => { setCount(count - 1) }} > -</button>
        </div>
    );
}

export default Count;