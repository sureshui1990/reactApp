import React from 'react';
import requireAuth from './requireAuth';
import { MainLayout } from './CustomFormFields';

const Feature = () => {
    return <MainLayout>
        <h2>Feature</h2>
    </MainLayout>
}
export default requireAuth(Feature);