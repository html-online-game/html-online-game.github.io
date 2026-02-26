import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader active="home" />
      <div className="container">
        <div className="main-layout">
          <main className="game-container" style={{ textAlign: "center" }}>
            <h2>404</h2>
            <p>Page not found.</p>
            <p style={{ marginTop: 16 }}>
              <Link href="/">Back to home</Link>
            </p>
          </main>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
