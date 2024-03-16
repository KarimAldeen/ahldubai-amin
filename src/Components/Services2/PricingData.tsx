import { FaInfoCircle } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";

export const PricinfData = [
    {
        image: '../PricingDetails/2.webp',
        title: "Dental Implants",
        subTitle: "Permanent, Reliable Tooth Replacement Option",
        price: "2,000",
        // showAdditionalBenefits: false,
        benefits: [
            { text: "Same day placement Don't wait 6 months", },
            { text: "Financing Options Available to Fit Your Budget", },
            { text: "Comprehensive Aftercare and Follow-Up Program", }
        ],
        benefits2: [
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
            { text: "Pain-Free Procedure", Icon: <TiInfoLarge />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
            { text: "Stain Resistance", },
            { text: "Longevity and Durability 10-15 Years", },
        ],
        benefits2: [
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
        image: '../PricingDetails/4.webp',
        title: "Other Dental Service",
        subTitle: "Complete Dental Excellence: All Services, One Destination",
        price: "500",
        showAdditionalBenefits: false,
        benefits: [
            { text: "Oral & Maxillofacial Service", Icon: <TiInfoLarge />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
            { text: "Radiological Services", },
            { text: "Aesthetic - Prosthodontic Services", },
        ],
        benefits2: [
            { text: "10 Year guarantee", },
            { text: "Same day placement Don't wait 6 months", },
            { text: "Financing Options Available to Fit Your Budget", },
            { text: "Comprehensive Aftercare and Follow-Up Program", }
        ],
        Vipbenefits: [
            { text: "10 Year guarantee"},
            { text: "Same day placement Don't wait 6 months" }
        ]
    }
]