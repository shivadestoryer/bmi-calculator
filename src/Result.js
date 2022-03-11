import React from "react";


const Result=(props)=>{

    const bmi=props.bmi;

    if(bmi<18.5)
    {
        return(<div>under Weight</div>)
    }
    if(bmi>18.5 && bmi<25)
    {
        return(<div>Normal</div>)
    }
    if(bmi>25 && bmi<30)
    {
        return(<div>overweight</div>)
    }

    if(bmi>30)
    {
        return(<div>Obese</div>)
    }

}; export default Result;