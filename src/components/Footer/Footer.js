import { Icon } from '@iconify/react';


export default function Footer() {

    return(
        <div className="footer-container">
            <a href="#about"><Icon icon="akar-icons:arrow-up" color="white" /> Head back up</a>
            <a href="mailto:hughsin23@gmail.com"><Icon icon="clarity:email-line" color="white" /> Contact me via Email</a>
            <a href="../../resume.pdf"><Icon icon="carbon:document" color="white" /> My resume</a>
        </div>
    )
}