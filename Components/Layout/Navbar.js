import React from "react";
import styles from "../../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={styles.topnav}>
      <Link href="/" className={styles.active}>
        Home
      </Link>
      <Link href="/cart">Cart</Link>
    </div>
  );
}
