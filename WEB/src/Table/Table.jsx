
function Table({ data }) {
    return (
        <div className="overflow-x-auto h-[40rem]">
            <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th>Id</th>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Seats</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => (
                            <tr key={data.Id}>
                                <th>{data.Id}</th>
                                <td>{data.Name}</td>
                                <td>{data.Date}</td>
                                <td>{data.Seats}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table