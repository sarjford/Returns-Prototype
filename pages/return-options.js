import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const ReturnOptions = (props) => (
  <Layout>
    <h1>Return Options</h1>
    <ul>
      <li>
        <Link href="/complete">
          <a>Print Shipping Label + Immediate Store Credit</a>
        </Link>
      </li>
      <li>
        Print Shipping Label + Original Payment
      </li>
      <li>
        Print Shipping Label + Exchange for Different Size or Color
      </li>
    </ul>
  </Layout>
)

export default ReturnOptions
