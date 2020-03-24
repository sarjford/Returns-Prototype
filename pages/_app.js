import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    name: "Sarah",
  }

  setAppState = (newState) => this.setState(newState);

  render () {
    const { Component, pageProps } = this.props
    console.log(this.state)

    return (
      <Container>
        <Component {...pageProps} {...this.state} setAppState={this.setAppState}/>
      </Container>
    )
  }
}
