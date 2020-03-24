import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router';

const Complete = (props) => (
  <Layout>
    <h1>Return Complete</h1>
    <Link href="/get-label">
      <a target="_blank">Print Label</a>
    </Link>
  </Layout>
)

// Complete.getInitialProps = async function() {
//   const email = sessionStorage.getItem('returns_email');
//   const res = await fetch(`http://l.tamaramellon.com/api/returns/users?email=${email}`)
//   const data = await res.json()
//
//   console.log(`Show data fetched. Count: ${data}`)
//
//   return {
//     shows: data
//   }
// }

export default Complete
