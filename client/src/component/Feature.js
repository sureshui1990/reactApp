import React from 'react';
import requireAuth from './requireAuth';

const Feature = () => {
    return <div>
        <h2>Feature</h2>
    </div>
}
export default requireAuth(Feature);