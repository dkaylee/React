import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [ ];

function ImageDetail() {
    return (
        <div>
            <ImageGallery items={images} />
            <h1>Gallery</h1>
        </div>
        
    )
}

export default ImageDetail;