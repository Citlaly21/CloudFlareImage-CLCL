// CloudflareImageUploader.js
import React, { useState } from 'react';
import axios from 'axios';

const CloudflareImageUploader = () => {
    const [image, setImage] = useState(null);
    const [variants, setVariants] = useState({});

    const submitImage = async () => {
        if (!image) {
            console.log("No hay imagen seleccionada para subir.");
            return;
        }

        const formData = new FormData();
        formData.append("file", { uri: image, name: 'image.jpg', type: 'image/jpg' });

        try {
            const response = await axios.post("https://api.cloudflare.com/client/v4/accounts/<ca9b43f77ee269734e8818fd05c17671>/images/v1",  
            formData, {
                headers: {
                    "Authorization": "Bearer hDEkJ8ZmQ19KFpumZzrm0sk1N-O5ElIO-jq23ytT",
                    "Content-Type": "multipart/form-data",
                },
            });
            
            const { result } = response.data;
            const { variants } = result;
            setVariants(variants);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
    };

    return { image, setImage, variants, setVariants, submitImage };
};

export default CloudflareImageUploader;
