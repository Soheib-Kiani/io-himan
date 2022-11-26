/* eslint-disable react-hooks/rules-of-hooks */
// #Component
import { useState } from 'react';
import RegisterUI from '../../components/authpage/registerui';
import Sms from '../../components/authpage/checksms';

const registerForm = () => {
  const [step, setStep] = useState(1);
  return (
    <section>
      {step === 1 && <RegisterUI setStep={setStep} />}
      {step === 2 && <Sms />}
    </section>
  );
};

export default registerForm;
