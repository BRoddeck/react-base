import MemberTable from "./MemberTable.jsx";
import React from "react";

class Content extends React.Component {
    constructor(props) {
        super();
    }

    render () {
        return (
            <div className="content">
                <MemberTable />
            </div>
        );
    }
};

export default (Content);

