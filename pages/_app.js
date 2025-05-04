<<<<<<< HEAD
import "../styles/global.css"

export default function App({ Component, pageProps }) {

    return (
        <Component {...pageProps} />
=======
import {Layout} from "../components"

import "../styles/global.css"


export default function App({Component, pageProps}){

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
>>>>>>> 868306c (first commit)
    )
}

