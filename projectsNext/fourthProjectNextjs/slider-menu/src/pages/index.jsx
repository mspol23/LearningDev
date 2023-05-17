import Header from "../../components/header/icon"
import Head from "next/head"

export default function Home() {

    return (
       <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
                <Header />
       </div> 
    )
}