const Table = ({ title, description, columns, data }) => {
    return (
      <>
        <div className="table-container">
            <h2>{ title }</h2>
            <p>{ description }</p>
            <table className="table">
                <thead className="thead">
                    <tr>
                        { columns.map(key => <th className="th" key={key}> {key} </th>) }
                    </tr>
                </thead>
                <tbody  className="tbody">
                    { data.map(row => <Row row={row}/>) }
                </tbody>
            </table>
        </div>
      </>
  );
}

const Row = ({row}) => {
    const keysObject = Object.keys(row)
    return (
        <tr className="tr" key={row.deviceId}>
        { keysObject.map(key => <td className="td" key={key}>{row[key]}</td>) }
        </tr>
    )
}

export default Table;