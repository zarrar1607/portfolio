import React, { useState, useRef } from 'react';
import { Document } from 'pdfjs-dist';
import './PDFToImageConverter.css'; // Add any styles as needed
//npm install pdfjs-dist canvas

const PDFToImageConverter = () => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const convertToImages = async () => {
    try {
      const file = fileInputRef.current.files[0];
      if (!file) return;

      const fileReader = new FileReader();
      fileReader.onload = async (event) => {
        const pdfData = new Uint8Array(event.target.result);
        const pdf = await Document.load(pdfData);
        const numPages = pdf.numPages;
        const canvasArray = [];

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          const canvasContext = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          await page.render({ canvasContext, viewport }).promise;
          canvasArray.push(canvas.toDataURL('image/jpeg'));
        }

        setImages(canvasArray);
      };

      fileReader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error converting PDF to images:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={convertToImages}
        accept="application/pdf"
      />
      <div className="image-container">
        {images.map((imageDataUrl, index) => (
          <img key={index} src={imageDataUrl} alt={`Page ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PDFToImageConverter;