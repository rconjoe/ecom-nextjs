import PageTitleMetaAndDescription from '../components/PageTitleMetaAndDescription';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <PageTitleMetaAndDescription title='We Sell Socks?' description='our socks are the best' />

      <main className={styles.main}>

      </main>

      <Footer />

    </div>
  )
}
