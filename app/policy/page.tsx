import AdSlot from "@/components/ad-slot";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function PolicyPage() {
  return (
    <>
      <SiteHeader active="policy" />

      <div className="container">
        <AdSlot slot="2343374539" />

        <main className="policy-container">
          <div className="policy-header">
            <h2>Privacy Policy</h2>
            <p className="last-updated">Last updated: September 28, 2025</p>
          </div>

          <section className="policy-section">
            <h3>1. Information We Collect</h3>
            <p>
              We are committed to protecting your privacy. This policy explains
              how we collect, use, and protect your information when you visit our
              online game site.
            </p>

            <h4>1.1 Information You Provide</h4>
            <ul>
              <li>Account information (if you create an account)</li>
              <li>Contact information when you reach out to us</li>
              <li>Game preferences and settings</li>
              <li>Feedback and comments you provide</li>
            </ul>

            <h4>1.2 Information We Collect Automatically</h4>
            <ul>
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Game usage statistics and performance data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>2. How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Provide and improve our gaming services</li>
              <li>Personalize your gaming experience</li>
              <li>Communicate with you about updates and features</li>
              <li>Analyze usage patterns to enhance performance</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <div className="highlight-box">
            <h4>Cookie Policy</h4>
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized ads, and analyze our traffic. You can control cookie
              preferences through your browser settings. Essential cookies are
              necessary for the site to function properly.
            </p>
          </div>

          <section className="policy-section">
            <h3>3. Information Sharing</h3>
            <p>
              We do not sell your personal information. We may share information
              in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party companies that
                help us operate our services
              </li>
              <li>
                <strong>Analytics:</strong> Google Analytics for understanding
                site usage
              </li>
              <li>
                <strong>Advertising:</strong> Google AdSense for displaying
                relevant ads
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>4. Third-Party Services</h3>
            <p>Our website integrates with several third-party services:</p>

            <div className="highlight-box">
              <h4>Google Analytics</h4>
              <p>
                We use Google Analytics to understand how visitors interact with
                our site. Google Analytics collects information anonymously and
                reports website trends without identifying individual visitors.
              </p>
            </div>

            <div className="highlight-box">
              <h4>Google AdSense</h4>
              <p>
                We display ads through Google AdSense. Google may use cookies to
                serve ads based on your visits to this site and other sites on the
                Internet. You can opt out of personalized advertising by visiting
                Google&apos;s Ads Settings.
              </p>
            </div>
          </section>

          <AdSlot slot="9336691129" />

          <section className="policy-section">
            <h3>5. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your
              information:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
              <li>Secure hosting infrastructure</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>6. Your Rights and Choices</h3>
            <p>You have several rights regarding your personal information:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request information about data we have
                about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Data Portability:</strong> Request a copy of your data in
                a portable format
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>7. Children&apos;s Privacy</h3>
            <p>
              Our service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>
          </section>

          <section className="policy-section">
            <h3>8. Changes to This Policy</h3>
            <p>
              We may update this privacy policy from time to time. We will notify
              you of any changes by:
            </p>
            <ul>
              <li>Posting the new policy on this page</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending you an email notification (if applicable)</li>
            </ul>
            <p>
              Your continued use of our service after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <ul>
              <li>
                <strong>Website:</strong> https://html-online-game.github.io
              </li>
            </ul>
          </div>
        </main>
      </div>

      <SiteFooter />
    </>
  );
}
