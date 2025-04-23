import React from "react";
import { Typography, Link } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        BERUPOP TERMS OF USE
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        Welcome to BeruPop. These Terms of Use ("Terms") govern your access to and use of our website and services. By using our site, you agree to comply with these Terms. If you do not agree, please do not use our services.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        1. ELIGIBILITY
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        You must be at least 18 years old to use this site. By accessing or using BeruPop, you represent and warrant that you meet this age requirement.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        2. PURPOSE OF THE SITE
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        BeruPop is a public-interest platform that collects and displays user-submitted reports regarding scams. These reports may include descriptions of scam activities, uploaded evidence, and optional user identification. The primary purposes are public awareness and investigative tracking.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        3. USER SUBMISSIONS AND CONTENT RESPONSIBILITY
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        By submitting content to BeruPop, you agree to the following:
        <br />
        - You are solely responsible for the accuracy and legality of the content you upload.<br />
        - You must not upload content that is unlawful, defamatory, harassing, or invasive of privacy.<br />
        - You represent that you have the right to submit any information provided.<br />
        - You may choose whether or not to display your identity (name, social media ID) publicly.<br />
        - All submitted content is subject to review and may be published publicly.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        4. MODERATION AND PUBLIC DISPLAY
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        All submissions and edits are moderated before being published. BeruPop reserves the right to approve, reject, redact, or remove any content at its sole discretion. Content may be removed for legal, ethical, or safety reasons without notice.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        5. EDITING REPORTS
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        You may request to edit or update your submitted report. All edits are subject to moderator review and approval before becoming publicly visible. We may refuse or modify edits to maintain accuracy and public safety.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        6. PROHIBITED CONDUCT
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        You agree not to:
        <br />
        - Submit false, harmful, defamatory, or unlawful content.<br />
        - Harass, impersonate, or stalk other individuals.<br />
        - Upload content involving minors or private third-party data without lawful basis.<br />
        - Circumvent security or moderation systems.<br />
        - Use the platform to promote unrelated products or services.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        7. DISCLAIMER AND LIMITATION OF LIABILITY
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        BeruPop does not guarantee the accuracy or completeness of user-submitted content. Use of any content from the site is at your own risk. BeruPop is not responsible for any damages arising from reliance on user-generated content.
        <br /><br />
        To the maximum extent permitted by law, BeruPop disclaims all liability for any direct, indirect, incidental, or consequential damages arising from your use of the site.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        8. INTELLECTUAL PROPERTY
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        All original content and reports submitted to BeruPop may be used for public display, research, or awareness efforts. By submitting content, you grant BeruPop a non-exclusive, royalty-free license to reproduce, edit, and publish your submission.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        9. TERMINATION
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        BeruPop may terminate or suspend your access to the site at any time, for any reason, including violations of these Terms.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        10. GOVERNING LAW
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom sx={{ textAlign: "justify" }}>
        These Terms are governed by the laws of Malaysia. Any disputes shall be resolved under Malaysian jurisdiction.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        11. Contact Us
      </Typography>
      <Typography variant="body1" color="text.secondary">
        If you believe a user has violated these Terms or if you have any questions, please contact us at:{" "}
        <Link href="mailto:berupop.my@gmail.com" underline="hover" color="primary.main">
          berupop.my@gmail.com
        </Link>
      </Typography>
    </>
  );
};

export default TermsAndConditions;
