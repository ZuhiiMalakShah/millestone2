import Link from 'next/link'

const Footer = ()=> {
    return (
        <div className="footer">
     <p>© {new Date().getFullYear()} Azra talib..</p>
     <a className="linkedin" href="https://www.linkedin.com/in/azra-talib-45a478323/">linkedin</a> 
    <span className="sr-only">LinkedIn</span>
    <a className="github" href="https://github.com/Azratalib123">Github</a>

        </div>
    )
}
export default Footer
