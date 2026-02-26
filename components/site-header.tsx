"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SiteHeaderProps = {
  active: "home" | "policy";
};

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", onDocumentClick);
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-content" ref={menuRef}>
          <h1>Online Game Site</h1>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="hamburger">{open ? "X" : "☰"}</span>
          </button>
          <nav className={open ? "mobile-open" : ""}>
            <Link
              href="/"
              className={active === "home" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/policy"
              className={active === "policy" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Policy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
