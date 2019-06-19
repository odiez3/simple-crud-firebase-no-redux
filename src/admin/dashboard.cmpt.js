import React, { Component } from 'react';
import firebase from 'firebase';
import Navigation from './nav.cmpt';
import './dashboard.css';
import AdminRouter from '../routing/admin.router';

class Dashboard extends Component {

    state = {
        user: null
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push("/");
            } else {
                this.setState({ user });
                console.log(user.user);
            }
        });
    }

    render() {

        //Si aún no se encuentra el usuario en el state no se muestra retornara 
        if (!this.state.user) {
            return (
                <div className="container-fluid">
                    <div className="row loading-content valign-wrapper">
                        <div className="col s12 center-align">
                            <div className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                            <p>Cargando...</p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <header>
                    <Navigation />
                </header>
                <main className="mainContent">
                    <AdminRouter />
                </main>
                <footer>

                </footer>

            </React.Fragment>
        )
    }
}

export default Dashboard;