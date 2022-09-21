import React from "react";
import styles from "./style";
import {
  Collectibles,
  CTA,
  Footer,
  Gifs,
  Hero,
  Navbar,
} from "./components/index";

const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Collectibles />
        <Gifs />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
