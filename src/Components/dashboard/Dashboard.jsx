import React from 'react';
import Notifications from './Notifications';
import DevotionalsList from'../devotionals/DevotionalsList';
import { connect } from 'react-redux'; // connecting this component to our reducer

function Dashboard({ devotionals }) {
    return (
        <div className=" dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <DevotionalsList devotionals={devotionals}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        devotionals: state.devotionals.devotionals,
    }
}

export default connect(mapStateToProps)(Dashboard)