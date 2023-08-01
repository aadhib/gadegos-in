import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Input from './Input';
import MailSentState from './MailSentState';
import Overlay from './Overlay';

interface ContactFormProps {
  onClose: () => void;
}

interface ContactFormProps {
  onClose: () => void;
}

// const InputField = styled(Input)`
//   padding: 1rem; // Add padding to the input fields
//   width: 100%;
// `;

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    description: '',
  });
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  useEscClose({ onClose });

  async function onSubmit() {
    try {
      const response = await axios.post(
        "https://getform.io/f/443dd865-b81d-4246-8d6b-88576a290381",
        { message: "Hello, World", ...formData },
        { headers: { 'Accept': 'application/json' } }
      );

      console.log(response); // Optional: You can log the response if needed

      // Assuming the response is successful, you can set the success state
      setHasSuccessfullySentMail(true);
    } catch (error) {
      console.log(error); // Optional: You can log the error if needed

      // If there's an error, set the error state to display the error message
      setHasErrored(true);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <Overlay>
      <Container>
        <Card>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>
          {hasSuccessfullySentMail ? (
            <MailSentState />
          ) : (
            <>
              <Title>Get in Touch</Title>
              {hasErrored && <ErrorMessage>Couldn&apos;t send email. Please try again.</ErrorMessage>}
              <br/>
              <InputGroup>
                <InputStack>
                  <Input
                    placeholder="Your Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </InputStack>
                <br/>
                <InputStack>
                  <Input
                    placeholder="Your Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </InputStack>
              </InputGroup>
              <br/>
              <InputStack>
                <Input
                  placeholder="Your Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </InputStack>
              <br/>
              <InputStack>
                <Input
                  as="textarea"
                  placeholder="Enter Your Message..."
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </InputStack>
              <SubmitButton onClick={onSubmit}>Send Message</SubmitButton>
            </>
          )}
        </Card>
      </Container>
    </Overlay>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 3rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

// const Textarea = styled.textarea`
//   width: 100%;
//   min-height: 20rem;
// `;

const SubmitButton = styled(Button)`
  margin-top: 1rem;
  align-self: center;
`;