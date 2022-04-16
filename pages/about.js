import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <div>
        <h1>This is the about page</h1>
      </div>
      <div className="ui">
        <h3>Ratings</h3>
        <div className="ui segment">
        <div className="ui rating" data-max-rating="1"></div>
        </div>
      </div>
    </Layout>
  )
}
