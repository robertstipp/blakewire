import { navData } from "./navData";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log(navData);
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          <img src="/images/blakelogo.png" alt="" />
        </div>
      </Link>
      <div className={styles.links}>
        {navData.map((item) => {
          const { id, label, path } = item;
          return (
            <Link key={id} className={styles.navLink} to={`/${path}`}>
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
