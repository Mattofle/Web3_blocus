import { useContext } from "react";
import { Context as LanguageContext } from "contexts/LanguageContext";

const FoobarButton = () => {
   const { language, pickLanguage } = useContext(LanguageContext )

      return (
         <div>
               <h1>Current language : {language}</h1>
               <button onClick={() => pickLanguage("fr")}>French</button>
               <button onClick={() => pickLanguage("en")}>English</button>
         </div>
      )
}

export default FoobarButton;