import React,{Component} from 'react';
import { Route, Switch} from 'react-router-dom';

import UserForm from '../admin/users/userForm.cmpt';


class AdminRouter extends Component{

    render(){
        return(
           
            <Switch>
                <Route path="/dashboard/user/:id?" component={UserForm} />
            </Switch>
         
        )
    }

}

export default AdminRouter;