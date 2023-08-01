import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
// import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
// import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="Gadegos Solutions Pvt. Ltd."
          content="Simplify Indian Business Compliance with Us. Your Trusted Compliance Partner. Expert Solutions for Every Business. Navigating Regulations with Confidence. Unlock Growth, Stay Compliant."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="About Us" overTitle="Unleashing Business Potential">
            <p>
              Gadegos Solutions has achieved remarkable milestones with an enviable track record. With over <strong>1000 satisfied clients</strong>, we are the leading provider of efficient services in Kerala, 
              specializing in ESI, PF, GST registration and return filing, manpower recruitment, labour registration, documentation preparation for statutory compliance, digital signature, 
              and online PF withdrawal. Enjoy the experience and benefits of our services for the <strong>past 2 years</strong>.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Our Mission" overTitle="Driving Compliance with Integrity" reversed>
            <p>
            At Business Setup Worldwide, we strive to provide <strong>comprehensive company setup solutions </strong>that meet global professional standards and best practices. 
            We place our clients and business ethics at the core of every service we provide.
            </p>
            {/* <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul> */}
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-3.svg" title="Our Vision" overTitle="Leading Through Ethical Compliance">
            <p>
            Our vision is to help <strong>entrepreneurs and businessmen </strong>globally build and nurture their ideas into <strong>successful companies,</strong> 
            thereby boosting the global economy. We will take your business entity to the next level, focusing on adding value to your business.
            </p>
          </BasicSection>

        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
