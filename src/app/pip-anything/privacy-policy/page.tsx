import styles from "./privacy-policy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1>Picture-in-Picture Anything extension</h1>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 2 August 2024
      </p>
      <p>
        <strong>Picture-in-Picture Anything</strong> (&quot;the Extension&quot;)
        is committed to protecting your privacy. This Privacy Policy explains
        how we handle your information when you use our browser extension.
      </p>

      <h2>Information Collection</h2>
      <p>
        Picture-in-Picture Anything does not collect, store, or share any
        personal information, usage data, or other types of data from its users.
      </p>

      <h2>Data Usage</h2>
      <p>
        Since we do not collect any data, we do not use your data in any way.
        The Extension operates solely on your local device, utilizing the
        Picture-in-Picture functionality provided by your browser.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share any information with third parties because we do not
        collect any information.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or the
        Extension&apos;s practices, please contact us at:
      </p>
      <div>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:pip-anything@boryssey.com">
            pip-anything@boryssey.com
          </a>
        </p>
      </div>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make any
        changes, we will post the new Privacy Policy on this page and update the
        Effective Date above. We encourage you to review this Privacy Policy
        periodically to stay informed about how we are protecting your
        information.
      </p>

      <p>
        By using the Extension, you agree to the terms of this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
