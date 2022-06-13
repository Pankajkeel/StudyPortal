import { useState } from 'react';

const Accordian = ({ data })=>{
    const [activeList, setActiveList] = useState([]);

    const handleClick = (key)=>{
        const found = false;
        let newList = activeList.filter((x)=>{
            if(x===key){
                found = true;
                return false
            }
            return true
        })
        if(!found){
            newList.push(key);
        }
        setActiveList(newList);
    }

    return(
        <div className="scroreAccordionCont">
            {
                data.map((val, key)=>{
                    const { ques, ans, isHtml } = val;
                    const showOption = activeList.indexOf(key)>-1;
                    return <div className={`accrdCard`}  key={key} onClick={()=>handleClick(key)}>
                    <button className={`course-accordion ${showOption?'active':''}`}>{ques}</button>
                    <div className="course-panel">
                        {
                            showOption?
                            <>
                                {
                                    isHtml?<div dangerouslySetInnerHTML={{__html: ans}} />:<p>{ans}</p>
                                } 
                            </>
                            :null
                        }
                    </div>
                </div>
                })
            }
        </div>
    )
}

export default Accordian