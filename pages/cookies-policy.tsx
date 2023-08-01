import styled from 'styled-components';
import Layout from 'components/Layout';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Layout>
      <Page title="Cookies policy">
        <CookiesPolicyContainer>
          <RichText>
            <p>At Gadegos Solutions, we use cookies to enhance your browsing experience and to collect information about how you interact with our website. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.</p>

            <h2>1. What are Cookies?</h2>
            <p>Cookies are small pieces of data stored on your device (computer or mobile device) by your web browser when you visit our website. They allow us to remember your preferences, analyze website traffic, and improve your overall experience.</p>

            <h2>2. How We Use Cookies:</h2>
            <p>We use both session cookies and persistent cookies on our website:</p>
            <ul>
              <li>Session Cookies: These cookies are temporary and will be deleted from your device after you close your web browser. They are essential for proper website functionality and to keep you logged in during your session.</li>
              <li>Persistent Cookies: These cookies remain on your device for a set period or until you delete them. They help us recognize you as a returning visitor and remember your preferences for future visits.</li>
            </ul>

            <h2>3. Types of Cookies We Use:</h2>
            <ul>
              <li>Essential Cookies: These cookies are necessary for the proper functioning of our website and cannot be disabled. They help you navigate the site and use its features.</li>
              <li>Analytics Cookies: We use analytics tools, such as Google Analytics, to collect information about how visitors use our website. This data helps us improve our sites performance and content.</li>
              <li>Preference Cookies: These cookies remember your preferences and choices, such as language and location settings, to provide a more personalized experience.</li>
              <li>Marketing Cookies: We may use marketing cookies to display personalized advertisements and promotions based on your interests and browsing behavior.</li>
            </ul>

            <h2>4. Your Choices:</h2>
            <p>Most web browsers allow you to control cookies through their settings. You can choose to accept or decline cookies, delete existing cookies, or set your browser to notify you when cookies are being used. However, please note that disabling cookies may affect certain features and functionality of our website.</p>

            <h2>5. Third-Party Cookies:</h2>
            <p>We may allow third-party service providers, such as Google Analytics and social media platforms, to place cookies on our website to collect and analyze usage data. These third-party cookies are subject to their respective privacy policies.</p>

            <h2>6. Updates to this Cookie Policy:</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The revised policy will be effective upon posting on our website.</p>

            <h2>7. Contact Us:</h2>
            <p>If you have any questions or concerns about our Cookie Policy or our data practices, please contact us at <a href="mailto:info@gadegos.in">info@gadegos.in</a> or <a href="tel:+919745826915">+91 97458 26915</a>.</p>

            <p>By using our website, you consent to the use of cookies as described in this Cookie Policy. Thank you for choosing Gadegos Solutions!</p>
          </RichText>
        </CookiesPolicyContainer>
      </Page>
    </Layout>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
