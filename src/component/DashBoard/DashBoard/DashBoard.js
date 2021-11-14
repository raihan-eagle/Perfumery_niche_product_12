import React from 'react';
import { Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AddReview from '../../AddReview/AddReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageServices from '../ManageServices/ManageServices';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './DashBoard.css'


const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {admin, logOut,user} =useAuth()
    return (
        <div className='container' id='dash'>
            <Nav className="justify-content-center bg-info p-md-3 mb-2">
                <Nav.Item >
                    <Nav.Link className='navborder' as={Link} to={`${url}`}>Dashboard</Nav.Link>
                </Nav.Item>

                    {admin && <div>
                        <Nav.Item>
                            <Nav.Link className='navborder' as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navborder' as={Link} to={`${url}/addservice`}>Add a Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navborder' as={Link} to={`${url}/manageservice`}>Manage Service</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navborder' as={Link} to={`${url}/manageorder`}>Manage Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" className='navborder' disabled>
                                {user.email}
                            </Nav.Link>
                        </Nav.Item>
                    </div>}

                {!admin && <div>
                    <Nav.Item>
                        <Nav.Link className='navborder' as={Link} to={`${url}/pay`}>Payment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navborder' as={Link} to={`${url}/myorders`}>My Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navborder' as={Link} to={`${url}/addreview`}>Add Review</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="disabled" className='navborder' disabled>
                        {user.email}
                    </Nav.Link>
                    </Nav.Item>

                </div>}
                <Nav.Item>
                    <Nav.Link className='navborder' onClick={logOut} as={Link} to={'/home'}>Log Out</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navborder' as={Link} to={'/home'}>Home</Nav.Link>
                </Nav.Item>
                
            </Nav>

            <Switch>
                <Route exact path={path}>
                    
                </Route>
                <Route path={`${path}/addreview`}>
                    <AddReview></AddReview>
                </Route>
                <Route path={`${path}/myorders`}>
                <MyOrders></MyOrders>
                </Route>
                <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addservice`}>
                <AddService></AddService>
                </AdminRoute>
                <AdminRoute path={`${path}/manageservice`}>
                <ManageServices></ManageServices>
                </AdminRoute>
                <AdminRoute path={`${path}/manageorder`}>
                <ManageOrders></ManageOrders>
                </AdminRoute>
                <Route path={`${path}/pay`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/addreview`}>
                    <AddReview></AddReview>
                </Route>
            </Switch>
        </div>
    );
};

export default DashBoard;