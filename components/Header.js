import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/orders">
          <a style={linkStyle}>Orders</a>
        </Link>
        <Link href="/return-options">
          <a style={linkStyle}>Refund Options</a>
        </Link>
        <Link href="/print-label">
          <a style={linkStyle}>Print Label</a>
        </Link>
    </div>
)

export default Header
