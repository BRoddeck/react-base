import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
import UserInput from 'COMP/UserInput.jsx';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class HelloWorld extends React.Component {
    constructor(props) {
        super();

        this.state = {
            test: '123',
            test2: '321'
        }
    }

    setTest() {
        this.setState({test: '456'})
    }

    render() {
        return (
        	<DefaultPage>
        		{
        			this.props.user.name
        			? <div>
        				<p>Hallo, {this.props.user.name}</p>
        				<Link to="/bye">Tschüss! <span className="fa fa-angle-double-right"></span></Link>
        			</div>
        			: <div>
        				<p>Oh, dich kenn ich noch nicht...</p>
        				<p>Wie ist denn dein Name?</p>
        				<UserInput test={this.state.test} changeTest={this.setTest.bind(this)} />
        			</div>
        		}
        	</DefaultPage>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(HelloWorld);