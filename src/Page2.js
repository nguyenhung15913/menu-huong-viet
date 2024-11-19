import {items} from "./Items"
import "./App.css"
import { usePDF } from "react-to-pdf";
function Page2() {

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <>
    <div ref={targetRef}>
    <div className="page">
      <div className="container">
        {items.map(item => {
            if (item.id === 3 || item.id === 4) {
              return <div>
                <div className="item-title">
                  <h1>{item.category}</h1>
                </div>
                <div className="item-left flex note">
                  <p>{item.note?item.note:null}</p> 
                </div>
                 
                    {item.lists.map(i => {
                      return <div className="item-description flex">
                        <div className="item-left flex">
                          <div className="food-id">
                            <p>{i.foodId}</p>
                          </div>
                
                          <div>
                            <p>{i.foodName}</p>
                            <p>{i.foodDescription?i.foodDescription: null}</p>
                            <p>{i.foodNameTranslated}</p>
                          </div>
                        </div>   
                        <div className="item-right flex">
                          <p>{i.foodPrice?i.foodPrice:i.foodPriceM}</p>
                          <p>{i.foodPriceL?i.foodPriceL: null}</p>
                          
                        </div>                   
                        
                      </div>
                    })}                 
                </div>
            }             
          })}
      </div>
    </div>
    </div>
      
    <button onClick={() => toPDF()}>To PDF</button>
    </>
    
  );
}

export default Page2;
