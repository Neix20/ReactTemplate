import React from "react";
import { Typography, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        BERUPOP PRIVACY POLICY
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        This Privacy Policy outlines how BeruPop (“we”, “us”, or “our”) collects,
        uses, and discloses personal and third-party information submitted by users
        in connection with scam-related reports and uploads. By accessing our platform,
        submitting a scam report, or creating an account, you consent to the collection
        and handling of data as described in this Privacy Policy.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        1. COLLECTION OF INFORMATION
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        We collect data you voluntarily provide to us when reporting scam-related incidents,
        which may include:
        <br />
        - Uploaded files or evidence (e.g., screenshots, conversations, social media links).<br />
        - Details of the scam and persons involved (e.g., scammer’s name, contact info, bank account, social media handles).<br />
        - Your name and connected social media ID, if you choose to display them.<br />
        - Metadata or usage logs tied to your interaction with our site.
        <br /><br />
        You may choose to remain anonymous. If you opt in, your name and connected social media ID
        may be publicly displayed alongside your report.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        2. USE AND PUBLIC DISCLOSURE OF INFORMATION
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        All data submitted is intended to serve public awareness and investigative purposes.
        We may publish the content of your report—including evidence and details of the scam—
        on our public platform. We do not sell or commercially share your data.
        <br /><br />
        We reserve the right to redact or anonymize information that may pose legal, safety,
        or privacy risks to involved parties (e.g., minors, sensitive third-party data).
        Submission of defamatory or knowingly false material is strictly prohibited.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        3. THIRD-PARTY PERSONAL DATA
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        You may submit information that includes personal data of third parties (e.g., alleged scammers).
        By doing so, you represent that your submission is lawful and does not infringe on others' rights.
        <br /><br />
        We may review and edit reports to remove personal data that could expose us or you to legal claims,
        or to comply with applicable laws regarding privacy, defamation, or data protection.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        4. RETENTION
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        We retain user-submitted data as long as it serves public interest or investigative purposes.
        Users may request to remove or update their submissions by contacting us, subject to evaluation.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        5. SECURITY MEASURES
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        We implement reasonable safeguards to protect your submissions from misuse or unauthorized access.
        However, due to the public nature of our platform, once information is published, it may be indexed
        or shared by third parties beyond our control.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        6. CONSENT AND ACCESS
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        By submitting content to our platform, you consent to the collection, publication, and use of the data
        in accordance with this Privacy Policy. You may withdraw consent or request updates by contacting our team.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        7. UPDATES TO THIS POLICY
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        We may amend this Privacy Policy at any time. All updates will be posted on our site.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        CONTACT US
      </Typography>
      <Typography variant="body1" color="text.secondary">
        For questions or requests related to this Privacy Policy, please contact:{" "}
        <Link href="mailto:berupop.my@gmail.com" underline="hover" color="primary.main">
          berupop.my@gmail.com
        </Link>
      </Typography>
    </>
  );
};

export default PrivacyPolicy;
