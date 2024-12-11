import React from "react";
import "./TnC.css";
import NavbarComponent from "./Navbar";

const TermsAndConditions = () => {
  return (
    <>
    <NavbarComponent />
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      <p className="terms-text">
        Welcome to Digital Insomnia. By accessing or using our services, you agree to comply with the following terms and conditions. Please read them carefully.
      </p>
      
      <h2 className="terms-subheading">1. Acceptance of Terms</h2>
      <p className="terms-text">
        By using Digital Insomnia's platform, you agree to be bound by these Terms and Conditions. If you do not agree, you must discontinue your use of the platform.
      </p>
      
      <h2 className="terms-subheading">2. Use of the Platform</h2>
      <p className="terms-text">
        You may use Digital Insomnia's platform to create and manage advertising campaigns, access predictive tools, and utilize other features. You agree to use the platform only for lawful purposes and in compliance with applicable laws and regulations.
      </p>
      
      <h2 className="terms-subheading">3. User Responsibilities</h2>
      <p className="terms-text">
        You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your login details or allow unauthorized access to your account. Any activity conducted under your account will be considered your responsibility.
      </p>
      
      <h2 className="terms-subheading">4. Intellectual Property</h2>
      <p className="terms-text">
        All content, software, and designs on Digital Insomnia are owned by the company or its licensors and are protected under intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.
      </p>
      
      <h2 className="terms-subheading">5. Limitation of Liability</h2>
      <p className="terms-text">
        Digital Insomnia will not be liable for any indirect, incidental, or consequential damages arising from your use of the platform, including but not limited to loss of profits, data, or business opportunities.
      </p>
      
      <h2 className="terms-subheading">6. Data Privacy</h2>
      <p className="terms-text">
        By using our platform, you agree to our Privacy Policy. We take data protection seriously and strive to ensure the confidentiality and security of your information.
      </p>
      
      <h2 className="terms-subheading">7. Termination</h2>
      <p className="terms-text">
        Digital Insomnia reserves the right to suspend or terminate your access to the platform at any time for violating these Terms and Conditions or for any other reason deemed appropriate by the company.
      </p>
      
      <h2 className="terms-subheading">8. Amendments</h2>
      <p className="terms-text">
        We may update these Terms and Conditions from time to time. Changes will be communicated on this page, and continued use of the platform constitutes your acceptance of the updated terms.
      </p>
      
      <h2 className="terms-subheading">9. Contact Information</h2>
      <p className="terms-text">
        If you have any questions about these Terms and Conditions, please contact us at <strong>hello@simmy.com</strong>.
      </p>
      
      <p className="terms-footer">Effective Date: November 26, 2024</p>
    </div>
    </>
  );
};

export default TermsAndConditions;