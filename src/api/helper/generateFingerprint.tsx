import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useEffect, useState } from 'react';
import { useAddClick_whatsapp } from '../uuid';

export const generateFingerprint = async () => {
    // Initialize FingerprintJS
    const fpPromise = FingerprintJS.load();

    // Generate fingerprint
    const fp = await fpPromise;
    const result = await fp.get();

    console.log(result.visitorId);

    // Return the fingerprint
    return result.visitorId;
};

const useFingerprint = () => {
    const [fingerprint, setFingerprint] = useState<string | null>(null);

    useEffect(() => {
        // Check if the fingerprint is already stored in local storage
            // If fingerprint is not stored, generate it and store it in local storage
            generateFingerprint().then((result) => {
                setFingerprint(result);
            });
        

        return  
    }, []);

    return fingerprint;
};

export default useFingerprint;
