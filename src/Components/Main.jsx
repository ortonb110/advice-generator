import { useState, useEffect } from "react";
import buttonIcon from '../assets/images/icon-dice.svg'
import patternDividerDesktop from '../assets/images/pattern-divider-desktop.svg';
import patternDividerMobile from '../assets/images/pattern-divider-mobile.svg';


export default function Main() {
    const [adviceArr, setAdviceArr]= useState([])
    const [adviceId, setAdviceId] = useState(1)

    useEffect(()=> {
        try {
            fetch(`https://api.adviceslip.com/advice/${adviceId}`).then(response => response.json()).then(data=> {
                setAdviceArr(JSON.stringify(data.slip.advice));
                setAdviceId(JSON.stringify(data.slip.id))
            });
            
            
        } catch (err) {
            console.log(err.message)
        }

        

    }, [adviceId])
    
    const fetchAdvice = () => {
        try {
            fetch(`https://api.adviceslip.com/advice/${adviceId}`).then(response => response.json()).then(data=> {
                setAdviceArr(JSON.stringify(data.slip.advice));
                setAdviceId(JSON.stringify(data.slip.id))
            });
            
            
        } catch (err) {
            console.log(err.message)
        }
    }

    

   


    return(
        <main className="relative px-[3rem] py-[2rem] text-white bg-darkGrayishBlue rounded-[1rem] w-[90%] mx-auto md:w-[50rem] text-center  tracking-wide " onLoad={fetchAdvice}>
            <h1 className="text-[1rem] uppercase text-primaryNeonGreen tracking-[3px] mb-8">advice <span>{`#${adviceId}`}</span></h1>
            <p className="text-[1.8rem] tracking-wide mb-8">{`${adviceArr}`}</p>
            <picture >
                <source media="(max-width: 650px)" srcSet={patternDividerMobile}  />
                <img src={patternDividerDesktop} alt="Divider" className="mb-14 w-full"/>
            </picture>
            <button className="bg-primaryNeonGreen hover:shadow-[0_0_25px_8px] hover:shadow-primaryNeonGreen transition-all ease-in-out duration-300 p-6 rounded-full absolute right-[50%] translate-x-[50%]" onClick={()=> {setAdviceId(parseInt(adviceId) + 1)}}><img src={buttonIcon} alt="Button Icon" className="w-[1.8rem]"/></button>
        </main>
    )
}