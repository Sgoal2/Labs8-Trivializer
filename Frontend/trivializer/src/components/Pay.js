import React, {Component} from 'react';



class Pay extends Component {


  render() {
    return (
        
        
      <div className="pay-main">
      <h3>Payment info</h3>
        <form className="pay-input">
        
        <label>
            CC#:
            <input type="text" name="name" />
        </label>
        <br />
         <label>
            EXP:
            <input type="text" name="name" />
        </label>
        <br />
        <label>
            CCV:
            <input type="text" name="name" />
        </label>
        <br />
        
        
        </form>
        <span className="pay2">
            <input type="checkbox" name="name" />
            1 Year Subscription - $9.99
        </span>
        <br />
        <span className="pay2">

            <input type="checkbox" name="name" />
            1 Year Premium Subscription - $29.99
        </span>
        <br />
        <button className="buy">Buy Now</button>
       
      </div >
      
    );
  }
}

export default Pay;