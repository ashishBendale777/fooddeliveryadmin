import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MyDashboard from './MyDashboard'
import MyAddFood from './MyAddFood'
import MyAllFood from './MyAllFood'
import MyAllCustomer from './MyAllCustomer'
import MyAllOrder from './MyAllOrder'
import MyNavBar from './MyNavBar'


function MyRoutes() {
  return (
    <div>
        <Router>
            <MyNavBar/>
            <Routes>
                <Route path='/' element={<MyDashboard/>} />
                <Route path='/addfoods' element={<MyAddFood/>} />
                <Route path='/allfoods' element={<MyAllFood/>} />
                <Route path='/allorders' element={<MyAllOrder/>} />
                <Route path='/allcustomers' element={<MyAllCustomer/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default MyRoutes