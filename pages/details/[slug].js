import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Detail({ movie }) {
    return(
        <div className={styles.container}>
            <Head>
                <title>{ movie.title }</title>
                <link rel="stylesheet" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2>{ movie.title }</h2>
                <span>{movie.year}</span>
                <p>{ movie.description }</p>
            </main>
        </div>
    );
}

/* async function to get slug view */
export async function getServerSideProps(context) {

    const {slug} = context.query;

    const movie = await prisma.movie.findFirst({
        where: {
            slug: slug
        }
    })

    return {
        props: {
            movie
        }
    }
}
