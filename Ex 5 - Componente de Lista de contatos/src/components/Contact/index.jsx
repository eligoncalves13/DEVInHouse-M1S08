import PropTypes from 'prop-types';
import {settingStatusBg} from '../../utils';

function Contact({
    photo, 
    name, 
    description,
    status
}) {
    const statusColor = settingStatusBg(status);
    return (
        <>
            <section className="contact-list">
                <div>
                    <img src={photo}
                        alt={name}
                        className="contact-image">
                    </img>
                    <div 
                    style={{background: statusColor}}
                    className='status'></div>
                </div>
                <div className="contact-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div> 
            </section>
        </>
    )

}

Contact.propTypes = {
    status: PropTypes.oneOf(['online', 'offline', 'busy']),
    name: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default Contact;