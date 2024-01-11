import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

export const ChimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`
  return (
    <div>ChimpForm</div>
  )
}
