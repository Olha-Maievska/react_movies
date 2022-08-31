import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer teal lighten-2">
      <div className="container">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#">
              Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
