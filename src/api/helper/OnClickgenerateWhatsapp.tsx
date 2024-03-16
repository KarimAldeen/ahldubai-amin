
import { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
export const generateWhatsapp = async () => {
    // Initialize WhatsappJS
    const fpPromise = FingerprintJS.load();

    // Generate Whatsapp
    const fp = await fpPromise;
    const result = await fp.get();

    console.log(result.visitorId);

    // Return the Whatsapp
    return result.visitorId;
};

const useWhatsapp = () => {
    const [Whatsapp, setWhatsapp] = useState<string | null>(null);

    useEffect(() => {
        // Check if the Whatsapp is already stored in local storage
        const storedWhatsapp = localStorage.getItem('Whatsapp');

        if (storedWhatsapp) {
            // If Whatsapp is already stored, use it
            setWhatsapp(storedWhatsapp);
        } else {
            // If Whatsapp is not stored, generate it and store it in local storage
            generateWhatsapp().then((result) => {
                localStorage.setItem('Whatsapp', result);
                setWhatsapp(result);
            });
        }
    }, []);

    return Whatsapp;
};

export default useWhatsapp;
