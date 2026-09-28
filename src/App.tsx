import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Themes from './components/Themes';
import QuickStart from './components/QuickStart';
import Api from './components/Api';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.wrap}>
      <Nav />
      <Hero />
      <Features />
      <Themes />
      <QuickStart />
      <Api />
      <Footer />
    </div>
  );
}
