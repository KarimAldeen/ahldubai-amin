import { IconBase } from "react-icons/lib";
import First from "../../Components/Pricing/body_Left/First";
import Second from "../../Components/Pricing/body_Left/Second";
import { FaMobile } from "react-icons/fa6";

export   const firstData = {
    category: "C- Section Delivery Package",
    title: "Following Services are included in the Package",
    price: "AED 28,000",
    author: "Aurora Health"
  };

 export const secondData = {
    image: "../PricingDetails/2.png",
    heading: "Health Service Is Will Provide.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy when an unknown scrambled.",
    services: [
      { name: "Modern Dental Treatment" },
      { name: "Wermatology" },
      { name: "Low Pricing Package" },
      { name: "Surgery And Padiology" },
      { name: "Family Medicine" },
      { name: "Modern Dental Treatment" },
      { name: "Wermatology" },
      { name: "Low Pricing Package" },
      { name: "Surgery And Padiology" },
      { name: "Family Medicine" },
      { name: "Family Medicine" },
      { name: "20 Years Of Experience" }
    ],
    additionalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy when an unknown scrambled."
  };
  export   const tabsData = [
    {
      key: '1',
      label: 'Section Delivery',
      icon: <FaMobile />,
      component: 
      <>
       <First data={firstData} />
      <Second data={secondData}/>
      </>
      
     
     
    },
    {
      key: '2',
      label: 'Normal Delivery',
      icon: <FaMobile />,
      component: 
      <>
      <First data={firstData} />
     <Second data={secondData}/>
     </>
      ,
    },
    {
        key: '3',
        label: 'Antenatal Package',
        icon: <FaMobile />,
        component: 
        <>
        <First data={firstData} />
       <Second data={secondData}/>
       </>
        ,
      },
  ];