import Link from 'next/link'

const Footer = ()=> {
    return (
        <div className="footer">
     <p>© {new Date().getFullYear()} Aliya Manzoor..</p>
    <a className="github" href="https://github.com/ZuhiiMalakShah">Github</a>

        </div>
    )
}
export default Footer
