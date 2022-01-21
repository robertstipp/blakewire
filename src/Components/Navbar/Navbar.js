import { identity } from "lodash";
import { navData } from "./navData";
import styles from "./Navbar.module.css";

const Navbar = () => {
  console.log(navData);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/blakelogo.png" alt="" />
      </div>
      <div className={styles.links}>
        {navData.map((item) => {
          const { id, label } = item;
          return <div key={id}>{label}</div>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
