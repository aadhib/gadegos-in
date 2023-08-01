import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>At Gadegos Solutions, we take your privacy seriously. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to protect your personal data. By accessing or using our website, you agree to the practices described in this Privacy Policy.</p>
          <br />
          <h2>1. Information We Collect:</h2>
          <ul>
            <li>Personal Information: We may collect personal information, such as your name, email address, phone number, and any other information you voluntarily provide when you contact us or use our services.</li>
            <li>Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience on our website and collect usage data to improve our services.</li>
          </ul>
          <br />
          <h2>2. How We Use Your Information:</h2>
          <ul>
            <li>Providing Services: We may use your personal information to provide the services you request and to respond to your inquiries.</li>
            <li>Communication: We may use your contact information to communicate with you regarding our services, updates, and promotions.</li>
            <li>Analytics: We may analyze usage data to improve our websites functionality and enhance user experience.</li>
          </ul>
          <br />
          <h2>3. Data Security:</h2>
          <ul>
            <li>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or alteration.</li>
            <li>However, please be aware that no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute data security.</li>
          </ul>
          <br />
          <h2>4. Third-Party Services:</h2>
          <p>We may use third-party services, such as analytics tools and social media plugins, which may collect and process your information. These third-party services have their privacy policies, and we encourage you to review them.</p>
          <br />
          <h2>5. Data Retention:</h2>
          <p>We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          <br />
          <h2>6. Childrens Privacy:</h2>
          <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete the information.</p>
          <br />
          <h2>7. Your Choices:</h2>
          <p>
            - You may update or correct your personal information by contacting us.<br />
            - You can opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions provided in the email.
          </p>
          <br />
          <h2>8. Changes to this Privacy Policy:</h2>
          <p>We may update this Privacy Policy from time to time. The updated version will be effective upon posting on our website.</p>
          <br />
          <h2>9. Contact Us:</h2>
          <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:your-email@example.com">your-email@example.com</a> or <a href="tel:+1234567890">+1234567890</a>.</p>
          <br />
          <p>By using our website, you consent to the terms of this Privacy Policy. Thank you for entrusting Gadegos Solutions with your personal information. We are committed to protecting your privacy and ensuring a secure and enjoyable user experience.</p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
