import React from 'react';

const dataList = ({ data }) => {

    return (
    <table className="table table-borderless">
        <thead>
            <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {/* {
                data.map((data, index) =>

                    <tr>
                        <td>{data.name}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                    </tr>
                )
            } */}
        </tbody>
    </table>
    );
};

export default dataList;