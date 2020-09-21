import React, { Component } from 'react';
import {App} from '../components/App.js'


const quoteList = [
    {
        quote: "Believe you can and you’re halfway there.", 
        author: "Theodore Roosevelt"
    }, 
    {
        quote: "Y empecé a liberarme de todo lo que no era saludable: situaciones, personas, gustos y cosas. Lo llamaron egoismo, yo lo llamé amor propio...", 
        author: "Mario Benedetti"
    },
    {
        quote: "I wish I could make everyone understand how important this statement is: go where you are wanted.", 
        author: "S. McNutt"
    },
    {   
        quote: "It is never too late to be what you might have been.", 
        author: "George Eliot"
    },
    {   
        quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.", 
        author: "Tony Robbins"
    },
    {   
        quote: "Everything has beauty, but not everyone can see.", 
        author: "Confucius"
    },

  ];
  
  
const colorList = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];  
  
class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuote: {
                quote: quoteList[0].quote,
                author: quoteList[0].author,
            },
            currentColor: "",
        }


        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        let indexQuote = Math.floor(Math.random() * quoteList.length);
        let indexColor = Math.floor(Math.random() * colorList.length);

        this.setState({
            currentQuote: {
                quote: quoteList[indexQuote].quote,
                author: quoteList[indexQuote].author,
            },
            currentColor: colorList[indexColor],
            
        });        
    }

   

    render () {
       
       
        return(
           
            <App 
            currentQuote={this.state.currentQuote}         
            currentColor={this.state.currentColor} 
            handleClick={this.handleClick} 
            shareTwitter={this.shareTwitter}
            />
        )
    }
    

} 


export default AppContainer;