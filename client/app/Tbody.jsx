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
                        <tr key={member.id}>
                            <td>member.name</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
};

const mapStoreToProps = (store, ownProps) => {
    return {
      members: ownProps.members.map(memberId => store.members[memberId])
    };
  };

export default connect(mapStoreToProps) (Tbody);

