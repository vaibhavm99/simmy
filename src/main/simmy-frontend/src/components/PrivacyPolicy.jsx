import React from "react";
import "./PrivacyPolicy.css";
import NavbarComponent from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <>
    <NavbarComponent />
    <div className="privacy-container">
          <h1 className="privacy-heading">Privacy Policy</h1>
          <p className="privacy-text">
              Welcome to our Privacy Policy page. Your privacy is important to us, and we are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <h2 className="privacy-subheading">Information We Collect</h2>
          <p className="privacy-text">
              We may collect personal information such as your name, email address, and other details when you interact with our website, such as subscribing to newsletters or filling out forms.
          </p>
          <h2 className="privacy-subheading">How We Use Your Information</h2>
          <p className="privacy-text">
              Your information is used to improve our services, communicate with you, and ensure a better user experience. We will never sell or share your personal information without your consent, except as required by law.
          </p>
          <h2 className="privacy-subheading">Data Security</h2>
          <p className="privacy-text">
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online platform is completely secure, and we encourage you to take precautions when sharing personal information.
          </p>
          <h2 className="privacy-subheading">Your Rights</h2>
          <p className="privacy-text">
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise your rights, please contact us at <strong>hello@simmy.com</strong>.
          </p>
          <h2 className="privacy-subheading">Changes to This Policy</h2>
          <p className="privacy-text">
              We may update this Privacy Policy from time to time. Please review this page periodically to stay informed about how we are protecting your information.
          </p>
          <p className="privacy-text">
              If you have any questions or concerns, feel free to contact us at <strong>hello@simmy.com</strong>.
          </p>
      </div></>
  );
};

export default PrivacyPolicy;