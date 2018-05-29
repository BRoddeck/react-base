import React from "react";
import { connect } from "react-redux";

class Tbody extends React.Component {
    constructor(props) {
        super();
    }

    render () {
        const { members } = this.props;
        const arrMembers = Object.values(members);
        return (
            <tbody>
                {arrMembers.map(member => {
                    return (
                        <tr id={member.id} key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.fname}</td>
                            <td>{member.birthday}</td>
                            <td>{member.email}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
};

const mapStoreToProps = (store, ownProps) => {
    return {
        members: store.members
    };
  };

export default connect(mapStoreToProps) (Tbody);