import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <h1>MyApp.com</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </nav>
    </>
  );
};

export default Header;
