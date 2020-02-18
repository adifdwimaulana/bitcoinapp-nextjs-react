import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = (props) => {
    return (
        <Layout>
            <div>
                <h1>Welcome to Crypto App</h1>
                {props.data.time.updated}
                <Prices bpi={props.data.bpi} />

            </div>
        </Layout>
    )
}

Index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        data: data
    }
}

export default Index;