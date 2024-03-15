// Assuming this function is defined in a separate file, such as utilities.js
export const handelOpenWhatsapp = (width:number) => {
    
    var whatsappLink;

    if (width < 768) {
        // The device opening the browser is a mobile
        whatsappLink = `whatsapp://send?phone=+963957570213&text=${encodeURIComponent(`Hello, Mr. Amin`)}`;
    } else {
        // The device opening the browser is a laptop
        whatsappLink = `https://web.whatsapp.com/send?phone=+963957570213&text=${encodeURIComponent(`Hello, Mr. Amin`)}`;
    }

    window.open(whatsappLink);
}
