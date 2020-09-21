import React from 'react';
import '../App.css';

export function App(props) {

  let color = props.currentColor;
  let shareTwitter = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + props.currentQuote.quote + '" ' + props.currentQuote.author);

  
  return (
    <>
      
      <div className="wrapper" >
        <div className="row" id="content-quote">
          <div className="col-xs-4"></div>
          <div className="col-xs-4" id="quote-box">
            <div className="row" id="quote-text">
              <blockquote>
                <p id="text" style={{color: color}}>{props.currentQuote.quote}</p>
                <footer id="author" style={{color: color}}>{props.currentQuote.author}</footer>
              </blockquote>
            </div>
            <div className="row" id="click-element">
              <div className="col-xs-6">
                <a href={shareTwitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" id="twitter" style={{color: color}}></i></a>
              </div>
              <div className="col-xs-6">
                
                  <button className="btn btn-primary" id="new-quote" style={{backgroundColor: color, marginRight: "0px"}} onClick={props.handleClick}>New quote</button>
               
              </div>
            </div>      
          </div>
          <div className="col-xs-4"></div>
      </div>
 
      
    </div>
    </>
  );
}

