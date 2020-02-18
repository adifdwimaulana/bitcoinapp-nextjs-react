class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        let list = '';
        const { currency } = this.state;
        const { USD, GBP, EUR } = this.props.bpi;

        if (currency === 'USD') {
            list =
                <li className="list-group-item">
                    Bitcoin Rate for {USD.description} : <span className="badge badge-primary">{USD.code}</span>
                    <strong> {USD.rate}</strong>
                </li>
        } else if (currency == 'GBP') {
            list =
                <li className="list-group-item">
                    Bitcoin Rate for {GBP.description} : <span className="badge badge-primary">{GBP.code}</span>
                    <strong> {GBP.rate}</strong>
                </li>
        } else if (currency === 'EUR') {
            list =
                <li className="list-group-item">
                    Bitcoin Rate for {EUR.description} : <span className="badge badge-primary">{EUR.code}</span>
                    <strong> {EUR.rate}</strong>
                </li>
        }

        return (
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br />
                <select className="form-control" onChange={e => this.setState({ currency: e.target.value })}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        )
    }
}

export default Prices;