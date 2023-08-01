import styled from 'styled-components';

export default function InformationSection() {
  
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p>
      <span>Email:</span> <a href="mailto:info@gadegos.in" target="_blank">info@gadegos.in</a>
      <br/>
      <span>Phone:</span> <a href="tel:+919745826915">+91 97458 26915</a>
      <br/>
         <span>Address:</span> Gadegos Solutions Pvt Ltd,
         Ambadi Building, 1st Floor,
         39/999 B, Pottakkuzhi - Mamangalam Road,
         Mamangalam, Ernakulam,
         Kerala, India, 
         <br/>
         Pin: 682025.
         </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
