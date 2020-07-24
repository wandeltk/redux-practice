import React from 'react';
import {connect} from 'react-redux'

const ErrorMessageComponent = (props) => {

    return (
        <>
            <div id="to-do-list" >
                {props.errorMessage}
            </div>
        </>
    )

}

const mapStateToProps = (state) => ({
    errorMessage: state.addItemReducer.errorMessage
});

export const ErrorMessage = connect(mapStateToProps)(ErrorMessageComponent);