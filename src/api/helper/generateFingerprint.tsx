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
    const [fingerprint, setFingerprint] = useState<string | boolean>(false);
    const { mutate } = useAddClick_whatsapp();

    useEffect(() => {
        // Check if the fingerprint is already stored in local storage
        const storedFingerprint = localStorage.getItem('fingerprint');

        if (storedFingerprint) {
            // If fingerprint is already stored, use it
            setFingerprint(false);
        } else {
            // If fingerprint is not stored, generate it and store it in local storage
            generateFingerprint().then((result) => {
                localStorage.setItem('fingerprint', result);
                setFingerprint(result);
                // Call the mutation with the generated fingerprint
                mutate(result);
            });
        }
    }, [mutate]);

    return fingerprint;
};

export default useFingerprint;
