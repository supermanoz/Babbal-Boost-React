import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/style.css';
import {useState,useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ReachCalc(){
    let [days,changeDays]=useState(4);
    let [budget,changeBudget]=useState(600);
    let [reach,changeReach]=useState(3.6625);

    
    function incrementDays(){
        if(budget/150>days){    
            changeDays(prevDays => prevDays+1);
            calcReach();
        }
    }

    function decrementDays(){
        if(days!=1){
            changeDays(prevDays => prevDays-1);
            calcReach();
        }
    }

    function incrementBudget(){
        changeBudget(prevBudget => prevBudget+150);
        calcReach();
    }

    function decrementBudget(){
        if(budget!=600 && budget/150>days){
            changeBudget(prevBudget => prevBudget-150);
            calcReach();
        }
    }

    function calcReach(){
            changeReach(((budget/150)/days)*3.6625);
    }
    
    useEffect(()=>{
        Aos.init({});
    }
    );

    return(
        <>
            <div className="container reach-calc">
                <div className="row padding">
                    <div className="col-lg-4">
                        <label className="mx-4 my-2"> Ad Period </label> 
                         <button className="btn btn-light btn-sm" onClick={decrementDays}>-</button> {days} Days <button className="btn btn-light btn-sm" onClick={incrementDays}>+</button>
                    </div>
                    <div className="col-lg-4">
                        <label className="mx-4 my-2"> Budget </label> 
                         <button className="btn btn-light btn-sm" onClick={decrementBudget}>-</button> Rs. {budget} <button className="btn btn-light btn-sm" onClick={incrementBudget}>+</button>
                    </div>
                </div>
                <div className="row padding">
                    <div class="col">
                        <div className="padding"><button type="submit" className="btn btn-md btn-primary mx-4" onClick={calcReach}>Calculate Reach</button></div>
                    </div>
                </div>
                <div className="row padding reach-calculator my-4" >
                    <div className="col" data-aos="fade-up" data-aos-delay="200">
                    <p className="">
                        With <em>Rs. {budget}</em> budget, running your ad for <em>{days} days</em> will allow you to reach upto <em>{reach.toFixed(2)}K people</em> each day,
                    </p>
                    <p>
                        i.e., upto <em>{(reach*days).toFixed(2)}K users</em> in total.
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}
