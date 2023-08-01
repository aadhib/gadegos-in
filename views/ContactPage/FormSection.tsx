import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import { media } from 'utils/media';
import MailSentState from '../../components/MailSentState';


interface EmailPayload {
  name: string;
  email: string;
  description: string;
  phoneNumber: string; // New field for phone number
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  async function onSubmit(payload: EmailPayload) {
    try {
      const response = await axios.post(
        "https://getform.io/f/443dd865-b81d-4246-8d6b-88576a290381",
        { message: "Hello, World", ...payload },
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

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && <ErrorMessage>Couldn&apos;t send email. Please try again.</ErrorMessage>}
        <InputGroup>
          <InputStack>
            {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
            <Input placeholder="Your Name" id="name" disabled={isDisabled} {...register('name', { required: true })} />
          </InputStack>
          <InputStack>
            {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
            <Input placeholder="Your Email" id="email" disabled={isDisabled} {...register('email', { required: true })} />
          </InputStack>
        </InputGroup>
        {/* New input field for phone number */}
        <InputStack>
          {errors.phoneNumber && <ErrorMessage>Phone Number is required</ErrorMessage>}
          <Input placeholder="Your Phone Number" id="phoneNumber" disabled={isDisabled} {...register('phoneNumber', { required: true })} />
        </InputStack>
        <InputStack>
          {errors.description && <ErrorMessage>Description is required</ErrorMessage>}
          <Textarea
            as="textarea"
            placeholder="Enter Your Message..."
            id="description"
            disabled={isDisabled}
            {...register('description', { required: true })}
          />
        </InputStack>
        <Button as="button" type="submit" disabled={isSubmitDisabled}>
          Send Message
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 2;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
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

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
