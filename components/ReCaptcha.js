import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = ({ onVerify, onExpire, siteKey }) => {
  return (
    <div className="mt-4">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onVerify}
        onExpired={onExpire}
        theme="light"
        size="normal"
      />
    </div>
  );
};

export default ReCaptcha;
