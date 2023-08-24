import logo from "../../image/MessageApp_logo.svg"
import tgLogo from "../../image/telegram.svg"
import ytLogo from "../../image/youtube.svg"

import styles from './Footer.module.css'

const socialIconsList = [
    { name: 'Youtube', imgLogo: ytLogo, alt: 'Youtube Message App' },
    { name: 'Telegram', imgLogo: tgLogo, alt: 'Telegram Message App' },
]

export function Footer() {
    return (
        <footer className={styles.footer}>
                <div className={styles.wrapper}>
                    <div className={styles.social}>
                        <img src={logo} alt="logo" />
                        <div className={styles.socialIcons}>
                            {socialIconsList.map(({ name, imgLogo, alt }) => 
                                <a key={name} href="!#" className={styles.socialIcon}>
                                    <img src={imgLogo} alt={alt} />
                                </a>
                            )}
                        </div>
                    </div> 

                    <div className={styles.copywrite}>
                        Design by Semuel @ 2023  Email: <a href="!#">serg_artemenko@ukr.net</a>
                    </div>
                </div>
        </footer>
    );
}