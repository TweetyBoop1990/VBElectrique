import ContactUsForm from "../components/Form/ContactUsForm"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="ui container">
        <div className="ui segment">
          <h1>This is the contact page</h1>
          <ContactUsForm />
        </div>
      </div>
    </Layout>
  )
}
