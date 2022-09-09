import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Yo yo yo party peeps!</p>
        <p>
          Geezah in the hizzah!{" "}
        </p>
      </section>
    </Layout>
  );
}
