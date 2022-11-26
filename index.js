import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
function Additem(props){
  return(
    <div id="item">
      <a href={props.link}>{props.name}</a>
    </div>
  )
}
function Hello(props){
  return(
    <div>
      <div id="heading">
        <h1>Jobs For Btech 2023 Batch</h1>
      </div>
      <div>
      <Additem link="https://careers.microsoft.com/students/us/en/job/1494883/Software-Engineering-Full-Time-Opportunity-for-University-Graduates" name="Software Engineering || Microsoft" />
        <Additem link="https://myanatomy.in/events-and-hackathon/Kantar/kantar-associate-analyst1970-01-01" name="Associate Analyst || Kantar" />
        <Additem link="https://search.jobs.barclays/job/chennai/graduate-analyst-2023/13015/40028514576?utm_source=Analyst_unstop&utm_medium=listing&utm_campaign=unstop" name="Graduate Analyst || Barclays"/>
      </div>
        
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Hello/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
