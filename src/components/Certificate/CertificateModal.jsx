import './CertificateModal.css'
import { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";


const CertificateModal = ({ title, image }) => {

    const [ modal, setModal ] = useState(false);
    const showCertificate = () => {
      setModal(!modal);
    }

    return (
        <div>
            <button onClick={showCertificate}>see certificate<FaExternalLinkAlt size={10}/></button>
            {modal && (
                <div className='cartificate-container modal'>
                    <div className="certificate-bg" onClick={showCertificate}>
                        <div className="certificate-content">
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CertificateModal
