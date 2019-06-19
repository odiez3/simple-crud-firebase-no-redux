import React, { Component } from 'react';


class UserForm extends Component {
    render() {
        return (
            <section id="userForm" className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="email" type="text" className="validate"
                                />
                                <label htmlFor="email">Correo electrónico:</label>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default UserForm;