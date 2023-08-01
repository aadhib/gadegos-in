import styled from 'styled-components';
import Layout from 'components/Layout';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Layout>
    <Page title="Contact" description="Have a question or a suggestion? We're here to help! Our dedicated team provides top-notch customer support to make your experience seamless and enjoyable. Use the contact form below to get in touch, and we'll respond promptly. We value your feedback and can't wait to hear from you!">
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
    </Layout>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
