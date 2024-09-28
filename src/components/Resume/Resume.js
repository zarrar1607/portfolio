import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { styled } from '@stitches/react';
import * as Dialog from '@radix-ui/react-dialog';
import './Resume.scss'; // Optional: import your styles
import { Col, Row } from 'react-bootstrap';

const Resume = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState('');

    const pdfUrls = {
        SoftwareDeveloper: '/portfolio/Resume/Resume_SE_ST.pdf',
        AiDeveloper: '/portfolio/Resume/Resume_AI_ML_DS_DA.pdf',
        Transcripts: '/portfolio/Resume/KU Fall 2024 Transcripts.pdf',
    };

    const handleOpenPdf = (url) => {
        setSelectedUrl(url);
        setIsOpen(true); // Opens the modal dialog
    };

    // Animation styles for cards
    const cardAnimation = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-20px)' },
        config: { tension: 280, friction: 60 },
    });

    const handleDialogChange = (isOpen) => {
        setIsOpen(isOpen);
    };

    return (
        <div className="resume-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            {Object.entries(pdfUrls).map(([key, url]) => (
                <animated.div
                    key={key}
                    style={cardAnimation}
                    className="resume-card"
                    onClick={() => handleOpenPdf(url)}
                >
                    <h3>{key.replace(/([A-Z])/g, ' $1')}</h3>
                    <p>Click to view the {key.replace(/([A-Z])/g, ' $1')}</p>
                </animated.div>
            ))}

            <Dialog.Root open={isOpen} onOpenChange={handleDialogChange}>
                <Dialog.Portal forceMount>
                    {isOpen && <OverlayBackground />}
                    {isOpen && (
                        <Content forceMount>
                            <DialogHeader>
                                <Row>
                                    <Col style={{ flex: 1, textAlign: 'left' }}>
                                        <h3>Viewing: {Object.keys(pdfUrls).find(k => pdfUrls[k] === selectedUrl).replace(/([A-Z])/g, ' $1')}</h3>
                                    </Col>
                                    <Col style={{ flex: 0, textAlign: 'right' }}>
                                        <AnimatedCloseButton onClick={() => setIsOpen(false)}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9574 14.1689L8.59651 6.75098L6.73232 8.59598L14.1313 16.071L6.71338 23.4129L8.5964 25.2769L15.9574 17.8779L23.3943 25.2769L25.2392 23.4129L17.8213 16.071L25.2202 8.59598L23.3752 6.75098L15.9574 14.1689Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </AnimatedCloseButton>
                                    </Col>
                                </Row>
                            </DialogHeader>
                            <iframe src={selectedUrl} width="100%" height="100%" style={{ border: 'none' }} />
                        </Content>
                    )}
                </Dialog.Portal>
            </Dialog.Root>

        </div>
    );
};

// Styles for 3D button
const AnimatedCloseButton = animated(styled(Dialog.Close, {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#1B1A22',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    borderRadius: '4px',
    padding: '8px',
    transition: 'transform 0.2s, box-shadow 0.2s',

    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
    },
}));

const OverlayBackground = styled(Dialog.Overlay, {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    inset: 0,
});

const Content = styled(Dialog.Content, {
    position: 'absolute',
    width: '50vw',
    height: '60vh',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: '24px',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

const DialogHeader = styled('header', {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 16,
});

export default Resume;
