import React from 'react'
import { EmailVerificationContainer } from './EmailVerificationStyles'
import { VerifyCode } from 'web3uikit'

const EmailVerification = () => {
  return (
    <EmailVerificationContainer>
        <VerifyCode />
    </EmailVerificationContainer>
  )
}

export default EmailVerification