import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Router from 'next/router'
import {Component} from 'react'


// const updateEmail = e => {
//   return window.sessionStorage.setItem('returns_email', e.target.value)
// }
//
// const Index = (props) => (
//   <Layout>
//     <h1>Start a Return</h1>
//     <form>
//       <input id="userEmail"
//       type="email"
//       placeholder="Enter Email Address"
//       />
//       <Link href="/orders">
//         <button type="submit"
//         onClick={props.setAppState({email: document.getElementById('userEmail').value})}
//         >Get My Orders</button>
//       </Link>
//     </form>
//   </Layout>
// )
//
// export default Index


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.setAppState({email: document.getElementById("userEmail").value});
    const email = document.getElementById("userEmail").value;
    // fetch(`http://l.tamaramellon.com/api/returns/users?email=${email}`)

    const res = fetch(`http://l.tamaramellon.com/api/returns/users?email=${email}`)
    const data = res.json()
    console.log(data)
    // Router.push('/error', '/orders')
  }



  render () {

    return (
      <Layout>
        <h1>Start a Return</h1>
        <form>
          <input id="userEmail"
          type="email"
          placeholder="Enter Email Address"
          />
          <button type="submit"
          onClick={this.handleSubmit}
          >Get My Orders</button>

        </form>
      </Layout>
    )
  }
}
