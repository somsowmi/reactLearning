import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Person = ({img, name, job, children}) => {
  const urllink = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
return(
  <article className="person">
    <img src= {urllink}  alt="Person image"></img>
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
  </article>
)
};

const PersonList = () => {
return(
  <section className="person-list">
    <Person img="35" name="sowm" job="developer"></Person>
    <Person img="34" name="Suhas" job="SRE">
    </Person>
    <Person img="36" name="Pras" job="business">
    <p>Hello i'm Divi</p>
    </Person>
  </section>
);
};




ReactDOM.render(<PersonList/>,
  document.getElementById("root"));