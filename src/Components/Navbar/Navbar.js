import React, {useContext} from 'react'
import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCircleQuestion, faBarChart } from '@fortawesome/free-solid-svg-icons'
import { AppSettingsContext } from '../../Context/AppSettingsContext'

const Navbar = (props) => {
    const appSettings = useContext(AppSettingsContext)

    return(
        <div className={`${props.className} ${classes.navbar}`} style={{color: `${appSettings.textColor}`}}>
            <div className={classes['left-section']}>
                <FontAwesomeIcon icon={faCircleQuestion} className={`${classes['icons']} ${classes['more-info-icon']}`} />
            </div>
            <div className={classes['middle-section']}>
                <p>Jordle</p>
            </div>
            <div className={classes['right-section']}>
                <FontAwesomeIcon icon={faBarChart} className={`${classes['icons']} ${classes['leaderboard-icon']}`} />
                <FontAwesomeIcon icon={faCog} className={`${classes['icons']} ${classes['settings-icon']}`}/>
            </div>
        </div>
    )
}

export default Navbar