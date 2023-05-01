import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug:"true",
    fallbacking:"en",
    interpolation:{
        escapeValue:false,
    },
    resources:{
        en:{
            translation:{
            
                greeting:{
                    hello:"Hello World !"
                }
             
            }
        },
        es:{
            translation:{
                greeting:{
                    hello:"Hola papi"
                }
                
            }
        },
        fr:{
            translation:{
                greeting:{
                    hello:"Bonjour"
                }
            }
        },
        ru:{
            translation:{
                greeting:{
                    hello:"привет"
                }
            }
        }

    }
})

export default i18n ;