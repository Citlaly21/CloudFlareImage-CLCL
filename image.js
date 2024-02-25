import React, { useState } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CloudflareImageUploader from './cloudflare/CloudflareImageUploader';

export default function ImagePickerExample() {
    const { variants, setVariants, image, setImage, submitImage } = CloudflareImageUploader();
    const [isImageSelected, setIsImageSelected] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,  3],
            quality:  1,
        });

        if (!result.cancelled) {
            setImage(result.assets[0].uri);
            setIsImageSelected(true);
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            alert('Se necesitan los permisos para acceder a la camara!');
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,  3],
            quality:  1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            setIsImageSelected(true);
        }
    };

    const uploadImage = () => {
        if (isImageSelected) {
            submitImage();
        }
    };

    return (
        <View style={{ flex:  1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Elige una imagen" onPress={pickImage} />
            <Button title="Toma una foto" onPress={takePhoto} />
            {isImageSelected && (
                <Button title="Subir" onPress={uploadImage} />
            )}
            {image && <Image source={{ uri: image }} style={{ width:  200, height:  200 }} />}
        </View>
    );
}
