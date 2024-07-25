import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import  CrwnLogo from '../../assets/crown.svg'
import './navigation.styles.scss'
function Navigation(){
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div className="logo">
                        <img src={CrwnLogo}/>
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation