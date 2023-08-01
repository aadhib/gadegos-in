import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Business Registration',
    description:
      'Managing registrations (company, GST, ESI, EPF, and Shops and Establishment) and filing requirements for legal compliance.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Statutory Compliance',
    description:
      'Assisting with document preparation under various acts and providing digital signature services to ensure compliance with regulations.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Employee Benefits',
    description:
      'Streamlining online PF withdrawal processes, simplifying procedures for employees convenience and quick access.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Manpower Services',
    description:
      'Offering comprehensive recruitment solutions, helping businesses find qualified candidates to meet their staffing requirements.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Compliance Training And Audit',
    description:
      'Conducting audits and providing training programs to ensure compliance with legal and regulatory obligations.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Tax Services',
    description:
      'Efficiently handling income tax return filing for individuals and businesses, ensuring accurate submissions and maximizing tax benefits.',
  },
  // {
  //   imageUrl: '/grid-icons/asset-7.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-8.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-9.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
