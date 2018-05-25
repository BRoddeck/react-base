import React from "react";
import Tbody from "./Tbody.jsx";

class MemberTable extends React.Component {
    constructor(props) {
        super();
    }

    render () {
        return (
            <div className="member-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vorname</th>
                            <th>Geburtsdatum</th>
                            <th>E-Mail-Adresse</th>
                        </tr>
                    </thead>
                    <Tbody />
                </table>
            </div>
        );
    }
};

export default (MemberTable);

