import { navData } from "./navData";
import { FaBars } from "react-icons/fa";
import styles from "./NavbarBeta.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className={styles.navCenter}>
      <div className={styles.navHeader}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="/images/blakelogo.png" alt="" />
            <button className={styles.navToggle} onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
        </Link>
      </div>
      <div className={styles.linksContainer} ref={linksContainerRef}>
        <ul className={styles.links} ref={linksRef}>
          {navData.map((item) => {
            const { id, label, path } = item;
            return (
              <li key={id}>
                <Link className={styles.navLink} to={`/${path}`}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
