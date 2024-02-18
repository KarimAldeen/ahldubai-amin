import { FaInfoCircle } from "react-icons/fa";

// export const DoctorsData = [
//     {
//         id: 1,
//         name: "Dr Costa",
//         Category: "Dental",
//         Image: "../Doctors/costa.jpg",
//         Summary: "Dr. Costa, top dental graduate in 1984 from University of Witwatersrand, specializes in Maxillo-Facial & Oral Surgery, with over 35,000 dental implants placed.",
//         skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
//         Full_description: "Dr. Costa BDS qualified as a dentist in 1984 by receiving his dental degree cum laude from the University of Witwatersrand, Johannesburg, South Africa. He graduated as a topper of the class with rank No.1 and received numerous awards including the Gold Medal of the Dental Association of South Africa for the most outstanding graduate. In 1990 he completed his 4-year full-time postgraduate Maxillo-Facial & Oral Surgery training at the University of Witwatersrand, South Africa and was awarded FFD (SA) MFOS. Since 1991 he is in a full-time specialist Maxillo-Facial & Oral Surgery private practice concentrating on the immediate loading of dental implants. To date, Dr Costa has placed over 35,000 dental implants. He has also presented as a key lecturer at numerous international implant congresses.",

//         skills: [
//             { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
//             { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
//             { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
//         ],
//         education: [
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//         ],
//     },
//     {
//         id: 2,
//         name: "Dr. Petros",
//         Category: "Dental",
//         Image: "../Doctors/petro.png",
//         Summary: "Dentist with summa cum laude degree from Semmelweis University, specialist in prosthodontics from Tufts University, focuses on implant rehabilitation.",
//         skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
//         Full_description: "Dr. Petros qualified as a dentist in 1995 receiving his dental degree summa cum laude from Semmelweis University, Budapest graduating with exceptional high grade, top of his class & with rank order No. 1. In 1998 he completed his 3-year full-time postgraduate Specialist Prosthodontist training at Tufts University, Boston, U.S.A. and was awarded his Certificate in the Dental Speciality of Prosthodontics. Since 1999 he is in full-time private practice as a Specialist Prosthodontist working almost exclusively on prosthodontic rehabilitation with dental implants. He has lectu#e12355 extensively on the “Same Day Implants & Teeth” reconstruction protocol."
//         ,

//         skills: [
//             { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
//             { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
//             { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
//         ],
//         education: [
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//         ],
//     },
//     {
//         id: 3,
//         name: "Dr. Ramy Tamzouk",
//         Category: "Dental",
//         Image: "../Doctors/ramy.png",
//         Summary: "Dentist with over 10 years in cosmetic dentistry, masters in prosthodontics, and experience supervising university students.",
//         skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
//         Full_description: "Dr. Ramy graduated from The Faculty of Dentistry, University of Damascus 2008. He then obtained a masters degree in prosthodontics and started another master degree in laser in dentistry. He has worked as a Supervisor of undergraduate students in The Syrian Private University and Damascus University for more than 4 years . Dr Ramy has more than 10 years of experience in the field of cosmetic dentistry."
//         ,

//         skills: [
//             { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
//             { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
//             { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
//         ],
//         education: [
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//         ],
//     },
//     {
//         id: 4,
//         name: "Dr. Indraniil Roy",
//         Category: "Dental",
//         Image: "../Doctors/Roy.jpg",
//         Summary: "Specialist in Oral & Maxillofacial Surgery, with qualifications and fellowships in dental surgery and implantology, experienced in various surgical procedures, multilingual.",
//         skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
//         Full_description: `
//             Dr. Indraniil Roy
    
//             Specialist Oral & Maxillofacial Surgeon
    
//             Dr. Indraniil Roy graduated with his Bachelor of Dental Surgery from the prestigious RGUHS University, India in 2003 and continued his studies to receive his Master of Dental Surgery from KLE University, India in 2010. He then completed the requirements and received the Fellowship of the International Congress of Oral Implantologists, which sets the benchmark for quality dental implantology practice around the world. He also has a Fellowship from the Indian Society of Oral Implantologists and recently he was confer#e12355 the Fellowship of Indian College of Surgeons.
    
//             Dr. Indraniil Roy is currently rated the best Oral and Maxillofacial Surgeon in the UAE on the Dr. Five website solely based on positive Google reviews (https://www.drfive.com/best-oral-and-maxillofacial-surgeons-in-dubai.htm). His work and methodology speak for itself, as he is highly sought-after for his various treatments.
    
//             Dr. Indraniil became a Surgeon and Implantologist so he could have the ability to change his patients’ facial appearance and ultimately the way they look and feel about themselves. He takes great satisfaction in giving patients’ self-esteem back, allowing them to smile with confidence once again.
    
//             He has extensive experience in treating patients with simple and complex implant rehabilitations.
//             Dr. Indraniil is available to see patients of all ages for the following treatments:
    
//             - Surgical Extractions and Removal of Impacted Wisdom Teeth
//             - Same-day Dental Implants
//             - All-on-4 and All-on-6 Dental Implants
//             - Maxillofacial Surgical Procedures related to Facial Trauma
//             - Dental Infections and Removal of Hard & Soft Tissue Tumors
//             - Cyst Enucleations and Root Apicectomies
    
//             He speaks English, Hindi, and Bengali
//         `
//         ,

//         skills: [
//             { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
//             { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
//             { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
//         ],
//         education: [
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//             { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
//         ],
//     }


// ]



export const HomeData = {
    HeroSectionData: [
        {
            image: '1',
            h1: 'Expert ',
            h2: 'Care ',
            info: ' Experience top-tier medical procedures in Dubai, offering personalized care and advanced treatments tailored to meet your unique health needs.',
        },
        {
            image: '2',
            h1: 'Health ',
            h2: 'Guidance',
            info: ' Access immediate and professional health advice from leading experts, ensuring comprehensive care and support at your fingertips, no matter where you are.',
        },
        {
            image: '3',
            h1: 'Zero ',
            h2: 'Fees',
            info: ' Enjoy the full spectrum of our health tourism services without any additional service fees, Aurora service fees will be on the Medical center no cost difference for the patient if he take the service thought our website',
        },
    ],
     servicesData : [
        { image: "../Services2/dentist.jpeg", name: "dentist", elementType: 'div' },
        { image: "../Services2/physician.webp", name: "physician", elementType: 'span' },
        { image: "../Services2/physician.webp", name: "Delivery baby", elementType: 'span' },
        { image: "../Services2/dentist.jpeg", name: "dentist", elementType: 'div' }
      ],
       reviewsData : [
        { 
          title: "- Testimonial",
          
          info: "What patients are saying!",
          cardData: [
            { image: '../Reviews/2.png', name: 'Carry Malan1',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.1' },
            { image: '../Reviews/2.png', name: 'Carry Malan2',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.2' },
            { image: '../Reviews/2.png', name: 'Carry Malan1',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.1' },
            { image: '../Reviews/2.png', name: 'Carry Malan2',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.2' },
            { image: '../Reviews/2.png', name: 'Carry Malan1',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.1' },
            { image: '../Reviews/2.png', name: 'Carry Malan2',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.2' },
            { image: '../Reviews/2.png', name: 'Carry Malan3',role : "Happy Partner", review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, tempora commodi iure odio architecto maxime.3' }
          ]
        }
      ],
     
    
};



export const MultyPageData ={
    partnerImages : [
        { src: "../Partners/2.jpg", alt: "Partner 2" },
        { src: "../Partners/8.jpg", alt: "Partner 8" },
        { src: "../Partners/9.jpg", alt: "Partner 9" },
        { src: "../Partners/11.jpg", alt: "Partner 11" },
        { src: "../Partners/13.jpg", alt: "Partner 13" },
        { src: "../Partners/14.jpg", alt: "Partner 14" },
        { src: "../Partners/15.jpg", alt: "Partner 15" },
        { src: "../Partners/16.jpg", alt: "Partner 16" },
        { src: "../Partners/18.jpg", alt: "Partner 18" },
        { src: "../Partners/19.jpg", alt: "Partner 19" },
        { src: "../Partners/Sheild.webp", alt: "Sheild Logo" },
        { src: "../Partners/1.png", alt: "Partner 1" }
    ],
    DoctorsData:[
        {
            id: 1,
            name: "Dr Costa",
            Category: "Dental",
            Image: "../Doctors/costa.jpg",
            Summary: "Dr. Costa, top dental graduate in 1984 from University of Witwatersrand, specializes in Maxillo-Facial & Oral Surgery, with over 35,000 dental implants placed.",
            skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
            Full_description: "Dr. Costa BDS qualified as a dentist in 1984 by receiving his dental degree cum laude from the University of Witwatersrand, Johannesburg, South Africa. He graduated as a topper of the class with rank No.1 and received numerous awards including the Gold Medal of the Dental Association of South Africa for the most outstanding graduate. In 1990 he completed his 4-year full-time postgraduate Maxillo-Facial & Oral Surgery training at the University of Witwatersrand, South Africa and was awarded FFD (SA) MFOS. Since 1991 he is in a full-time specialist Maxillo-Facial & Oral Surgery private practice concentrating on the immediate loading of dental implants. To date, Dr Costa has placed over 35,000 dental implants. He has also presented as a key lecturer at numerous international implant congresses.",
    
            skills: [
                { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
                { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
                { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
            ],
            education: [
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
            ],
        },
        {
            id: 2,
            name: "Dr. Petros",
            Category: "Dental",
            Image: "../Doctors/petro.png",
            Summary: "Dentist with summa cum laude degree from Semmelweis University, specialist in prosthodontics from Tufts University, focuses on implant rehabilitation.",
            skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
            Full_description: "Dr. Petros qualified as a dentist in 1995 receiving his dental degree summa cum laude from Semmelweis University, Budapest graduating with exceptional high grade, top of his class & with rank order No. 1. In 1998 he completed his 3-year full-time postgraduate Specialist Prosthodontist training at Tufts University, Boston, U.S.A. and was awarded his Certificate in the Dental Speciality of Prosthodontics. Since 1999 he is in full-time private practice as a Specialist Prosthodontist working almost exclusively on prosthodontic rehabilitation with dental implants. He has lectu#e12355 extensively on the “Same Day Implants & Teeth” reconstruction protocol."
            ,
    
            skills: [
                { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
                { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
                { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
            ],
            education: [
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
            ],
        },
        {
            id: 3,
            name: "Dr. Ramy Tamzouk",
            Category: "Dental",
            Image: "../Doctors/ramy.png",
            Summary: "Dentist with over 10 years in cosmetic dentistry, masters in prosthodontics, and experience supervising university students.",
            skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
            Full_description: "Dr. Ramy graduated from The Faculty of Dentistry, University of Damascus 2008. He then obtained a masters degree in prosthodontics and started another master degree in laser in dentistry. He has worked as a Supervisor of undergraduate students in The Syrian Private University and Damascus University for more than 4 years . Dr Ramy has more than 10 years of experience in the field of cosmetic dentistry."
            ,
    
            skills: [
                { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
                { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
                { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
            ],
            education: [
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
            ],
        },
        {
            id: 4,
            name: "Dr. Indraniil Roy",
            Category: "Dental",
            Image: "../Doctors/Roy.jpg",
            Summary: "Specialist in Oral & Maxillofacial Surgery, with qualifications and fellowships in dental surgery and implantology, experienced in various surgical procedures, multilingual.",
            skill_Info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.',
            Full_description: `
                Dr. Indraniil Roy
        
                Specialist Oral & Maxillofacial Surgeon
        
                Dr. Indraniil Roy graduated with his Bachelor of Dental Surgery from the prestigious RGUHS University, India in 2003 and continued his studies to receive his Master of Dental Surgery from KLE University, India in 2010. He then completed the requirements and received the Fellowship of the International Congress of Oral Implantologists, which sets the benchmark for quality dental implantology practice around the world. He also has a Fellowship from the Indian Society of Oral Implantologists and recently he was confer#e12355 the Fellowship of Indian College of Surgeons.
        
                Dr. Indraniil Roy is currently rated the best Oral and Maxillofacial Surgeon in the UAE on the Dr. Five website solely based on positive Google reviews (https://www.drfive.com/best-oral-and-maxillofacial-surgeons-in-dubai.htm). His work and methodology speak for itself, as he is highly sought-after for his various treatments.
        
                Dr. Indraniil became a Surgeon and Implantologist so he could have the ability to change his patients’ facial appearance and ultimately the way they look and feel about themselves. He takes great satisfaction in giving patients’ self-esteem back, allowing them to smile with confidence once again.
        
                He has extensive experience in treating patients with simple and complex implant rehabilitations.
                Dr. Indraniil is available to see patients of all ages for the following treatments:
        
                - Surgical Extractions and Removal of Impacted Wisdom Teeth
                - Same-day Dental Implants
                - All-on-4 and All-on-6 Dental Implants
                - Maxillofacial Surgical Procedures related to Facial Trauma
                - Dental Infections and Removal of Hard & Soft Tissue Tumors
                - Cyst Enucleations and Root Apicectomies
        
                He speaks English, Hindi, and Bengali
            `
            ,
    
            skills: [
                { label: "Medic Success", percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
                { label: "Dental & Medical Services", percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
                { label: "Health Services", percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
            ],
            education: [
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
                { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
            ],
        }
    
    
    ]
    
}

export const ServiceData ={
        PricingCard : [
            {
                image: '../PricingDetails/2.webp',
                title: "Dental Implants",
                subTitle: "Permanent, Reliable Tooth Replacement Option",
                price: "2,000",
                showAdditionalBenefits: false,
                benefits: [
                    { text: "Free consultation (X-ray , 3D scans)", Icon: <FaInfoCircle />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
                    { text: "10 Year guarantee", },
                    { text: "Same day placement Don't wait 6 months", },
                    { text: "Financing Options Available to Fit Your Budget", },
                    { text: "Comprehensive Aftercare and Follow-Up Program", }
                ],
                Vipbenefits: [
                    { text: "10 Year guarantee"},
                    { text: "Same day placement Don't wait 6 months" }
                ]
            },
            {
                image: '../PricingDetails/3.jpeg',
                title: " Dental Veneers",
                subTitle: "Improves tooth color and shape.",
                price: "1,285",
                showAdditionalBenefits: false,
                benefits: [
                    { text: "Pain-Free Procedure", Icon: <FaInfoCircle />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
                    { text: "Stain Resistance", },
                    { text: "Longevity and Durability 10-15 Years", },
                    { text: "Cover Damaged Teeth", },
                    { text: "Natural Look and Feel", }
                ],
                Vipbenefits: [
                    { text: "10 Year guarantee"},
                    { text: "Same day placement Don't wait 6 months" }
                ]
            },
            {
                image: '../PricingDetails/4.webp',
                title: "Other Dental Service",
                subTitle: "Complete Dental Excellence: All Services, One Destination",
                price: "500",
                showAdditionalBenefits: false,
                benefits: [
                    { text: "Oral & Maxillofacial Service", Icon: <FaInfoCircle />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
                    { text: "Radiological Services", },
                    { text: "Aesthetic - Prosthodontic Services", },
                    { text: "Endodontic Services", },
                    { text: "Other Dental Services", }
                ],
                Vipbenefits: [
                    { text: "10 Year guarantee"},
                    { text: "Same day placement Don't wait 6 months" }
                ]
            }
        ],
         steps : [
            {
              image:'../procces/1.jpg',
              title: 'Free online consultation',
              description: [
                'Provide a user-friendly platform for scheduling free online consultations.',
                'Offer a secure and confidential environment for discussions.',
                'Ensure a qualified professional is available for the consultation.',
              ],
            },
            {
              image:'../procces/2.jpg',
              title: 'Visit Scheduling and Travel Assistance',
              description: [
                'Implement an easy-to-use online scheduling system for in-person visits.',
                'Offer travel assistance for out-of-town patients, including transportation and accommodation options.',
                'Provide clear instructions and guidance on reaching the facility.',
              ],
            },
            {
              image:'../procces/3.jpg',
              title: 'Procedure',
              description: [
                'Detail the entire procedure, including pre-operative instructions and what to expect.',
                'Our partners are individually selected to meet the highest international standards.',
                'Our partners are individually selected to meet the highest international standards.',
              ],
            },
            {
              image:'../procces/4.webp',
              title: 'Follow-up',
              description: [
                'Schedule follow-up appointments to monitor the patients progress post-procedure.',
                'Provide a platform for virtual follow-ups if applicable.',
                'Offer support and guidance for any concerns or questions that may arise during the recovery period.',
              ],
            },
            
          ],
}