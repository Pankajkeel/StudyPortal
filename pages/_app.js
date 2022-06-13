import Layout from '@/components/Layout'
import { AppWrapper } from '../context/index.js'; // import based on where you put it
//import { getActiveComponents } from '@/actions/index.js';
import '../styles/global.css';

export default function App(props){
    const { Component, pageProps, dataProps } = props;

    return (
    <AppWrapper>
        <Layout dataProps={dataProps}>
            <Component {...pageProps}/>
        </Layout>
    </AppWrapper>
    )
}

App.getInitialProps = async () => {
      // calls page's `getInitialProps` and fills `appProps.pageProps`
      //const appProps = await getActiveComponents({});
      return { dataProps: "appProps" }
}