import React from 'react';

function PdfCards() {
    const documents = [
        { id: 1, title: "Sanitaire Stock", file: "../src/assets/Catalogue/sanStock.pdf", color: "#e0f7fa" },
        { id: 2, title: "Sanitaire", file: "../src/assets/Catalogue/san.pdf", color: "#fff3e0" },
        { id: 3, title: "carrelage", file: "../src/assets/Catalogue/car.pdf", color: "#f3e5f5" }
    ];

    const handleOpenPdf = (filePath) => {
        window.open(filePath, '_blank');
    };

    return (
        <div style={styles.container}>
            {documents.map((doc) => (
                <div
                    key={doc.id}
                    style={{...styles.card, backgroundColor: doc.color}}
                    onClick={() => handleOpenPdf(doc.file)}
                    role="button" // Important pour l'accessibilité
                    tabIndex={0}
                >
                    <div style={styles.icon}>📄</div>
                    <h3 style={styles.title}>{doc.title}</h3>
                    <p style={styles.text}>Appuyez pour ouvrir le PDF</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '20px',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        maxWidth: '300px',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'transform 0.2s',
    },
    icon: {
        fontSize: '40px',
        marginBottom: '10px',
    },
    title: {
        margin: '0 0 10px 0',
        fontSize: '18px',
        color: '#333',
    },
    text: {
        margin: 0,
        fontSize: '14px',
        color: '#666',
    }
};

export default PdfCards;