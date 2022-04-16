import styles from './Header.module.scss'
import Logo from './Logo'

export default function Header() {
    return (
      <div className={`ui ${styles.header}`}>
        <div className="ui container">
            <div className="ui grid three column middle aligned">
                <div className="ui column">
                </div>
                <div className="ui column">
                    <Logo />
                </div>
                <div className="ui column">
                    <div className="ui centered">
                        <a className="ui labeled icon button" href="tel:5555555555">
                            <i className="phone icon"></i> 555-555-5555
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  