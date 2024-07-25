import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"


function Navigation(){
    return(
        <Fragment>
            <div className="naigation">
                <Link className="logo-container" to='/'>
                    <div>
                        Logo
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
                    
                <Outlet/>
            </div>
        </Fragment>
    )
}

export default Navigation