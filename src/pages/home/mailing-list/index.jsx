import React from "react"
import ConvertKitForm from "convertkit-react"
import "./styles.css"

export default function MailingList1({ className, submitText, text, heading }) {
  return (
    <section id="mailing-list" className={`slide ${className}`}>
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
        <ConvertKitForm
          formId={1773437}
          format="inline"
          submitText={submitText}
          hideName={true}
          newTab={true}
        />

        <p className="note">
          I will only send you updates related to this ReactJS course and I will
          never sell or givr your information to any 3rd party!
        </p>
      </div>
    </section>
  )
}
