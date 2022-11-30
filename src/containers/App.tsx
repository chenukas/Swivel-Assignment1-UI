import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { employeesActions } from '../actions';
import App from '../components';

function mapStateToProps(state: any) {
    return {
        employeesState: state.employeesState
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        employeesActions: bindActionCreators(employeesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);