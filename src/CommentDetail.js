import React from 'react';
import faker from 'faker';
var arrData = [
    {
        name: 'Shirin',
        city: 'Sylhet'

    },
    {
        name: 'Akter',
        city: 'Dhaka'

    }
  ];
  const fnData = () => {
    return arrData.map((data) =>
    <div>
      <li key={data.id}>{data.name}</li>
      <li key={data.id}>{data.city}</li>
    </div>
    );
};
const Navi = () => {  
    return (
      <div className="navigation1">
        <ul>
          {fnData()}
        </ul>
      </div>
    );
  };

const CommentDetail = (props) => 
{
  console.log(props);
    return (
          <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
        
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                      {props.time}
                      </span>
                </div>

                <div className="text">
                  {props.text} 
                </div>
            </div>
        </div>
        
    );
};

export default CommentDetail;