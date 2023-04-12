import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import BatchTable from '../pages/BatchTable'
import BatchForm from '../pages/BatchForm'
import Registration from '../pages/Registration'
import RegistrationTable from '../pages/RegistrationTable'
import CourseTable from './table/CourseTable'
import Courseform from '../pages/Courseform'
import Courses from '../pages/Courses'
import Batches from '../pages/Batches'
import Registeres from '../pages/Registeres'
import Invoice from '../pages/invoice'
import Invoiceform from '../pages/Invoiceform'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/BatchTable' exact component={Batches}/>
            <Route path='/BatchTable/BatchForm/:action/:id' exact component={BatchForm}/>
            <Route path='/RegistrationTable' exact component={Registeres}/>
            <Route path='/RegistrationTable/RegistrationForm' exact component={Registration}/>
            <Route path='/CourseTable' exact component={Courses}/>
            <Route path='/CourseTable/CourseForm/:action/:id' exact component={Courseform}/>
            <Route path='/InvoiceTable' exact component={Invoice}/>
            <Route path='/InvoiceTable/Invoiceform' exact component={Invoiceform}/>
            <Route path='/Customer' exact component={Customers}/>

            {/* <Redirect from="/" to="/" exact /> */}

        </Switch>
    )
}

export default Routes
