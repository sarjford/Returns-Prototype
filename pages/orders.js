import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Component} from 'react'
import { inspect } from 'util'


const Orders = (props) => (
  <Layout>
    <h1>Select an Item to Return</h1>
    <ul>
      {props.shoes.map((order, index) => (
        <li key={index}>
          <Link href='/return-options'>
            <a><strong>{order.name}</strong></a>
          </Link>
          <p>{order.options}</p>
          <p>Purchased: {order.date}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

Orders.getInitialProps = async function(props) {
  console.log('inspect', inspect(props.query))
  const res = await fetch(`http://l.tamaramellon.com/api/returns/users?email=${props.query.email}`)
  const data = await res.json()

  console.log(data)

  return {
    shoes: data
  }
}

export default Orders


