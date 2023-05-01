// import React from 'react';
// import {useTranslation} from 'react-i18next';

// function Dashboard() {
//     const {t,i18n}=useTranslation();
//     const lngs={
//         en:{nativeName:'English'},
//         jp:{nativeName:'Deutsch'}
//       };

//   return (
//     <div>
//        <h1> {t('learn')}</h1>
//        {/* <h1>{t('description')}</h1> */}
        
//       {Object.keys(lngs).map((lng)=>{
//         <button type="submit" key={lng}  className='btn btn-primary' onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
//       })}
    
    
//     </div>
//   )
// }

// export default Dashboard ;

import { useEffect } from "react";
const App = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
      <div id="google_translate_element"></div>
      {/* <h4>Start building your app. Happy Coding!</h4> */}
    </>
  );
};

export default App;



  
 

    
