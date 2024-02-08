import React from "react";
import CertificateItem from "./components/CertificateItem";

const certificatesData = [
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/spaceplaning.jpeg",
    description: "JDA Space Planning",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/7nawykow.jpeg",
    description: "7 nawyków",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/czystaReka.jpeg",
    description: "Czysta ręka",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/samoorganizacja.jpeg",
    description: "Samoorganizacja",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/wystapienia i prezentacje.jpeg",
    description: "Wystąpienia i prezentacje",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/storyboard.jpeg",
    description: "Storyboard",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/introductionToWebDevelopment.jpg",
    description: "Univerytet of California, Davis",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/zarzadzanieProjektamiIT.jpg",
    description: "Zarządzanie projektami w IT",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/reactOdPodstaw.jpg",
    description: "React od podstaw",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/nodejsExpressMongoDB.jpg",
    description: "Node.js Express MongoDB",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/zaawansowaneProjektyWCSSIJavascript.jpg",
    description: "Zaawansowane projekty w CSS i JavaScript",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/frontendSredniozaawansowany.jpg",
    description: "Front-End średniozaawansowany",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/arduinoPodstawy.jpg",
    description: "Arduino podstawy",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/fundamentyProgramowania.jpg",
    description: "Fundamenty programowania",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/javascriptOdPodstaw.jpg",
    description: "JavaScript od podstaw",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/matematykaPodstawy.jpg",
    description: "Matematyka od podstaw",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/MQL5Podstawy.jpg",
    description: "MQL5 - podstawy",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/podstawyWebDevelopmentu.jpg",
    description: "Podstawy Web Developmentu",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/prawoWIT.jpg",
    description: "Prawo w IT",
  },
  {
    certificateSrc: "https://michalkcb.github.io/homePage/certificates/seo.jpg",
    description: "SEO",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/sieciKomputerowe.jpg",
    description: "Sieci komputerowe",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/wizytowkaGoogle.jpg",
    description: "Wizytówka Google",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/wordpress.jpg",
    description: "Wordpress",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/wprowadzenieDoProgramowania.jpg",
    description: "Wprowadzenie do programowania",
  },
  {
    certificateSrc:
      "https://michalkcb.github.io/homePage/certificates/wstepDoInzynieriiOprogramowania.jpg",
    description: "Wstęp do inżynierii oprogramowania",
  },
];

const Certificates = () => {
  return (
    <div className="text-4xl font-bold text-center text-[#001b5e] max-w-[1040px] flex justify-center items-center m-auto pl-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]" >Certificates</h1>
      {certificatesData.map((item, idy)=>(
        <CertificateItem 
        key={idy}
        src={item.certificateSrc}
        dsc={item.description}
        />
      ))}
    </div>
  );
};

export default Certificates;
