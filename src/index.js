import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App =() =>
{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    text="this is Alex blog post"
                    avatar={faker.image.avatar()}
                    />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alexa" 
                    time="11.00 am" 
                    text="this is Alexa blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    time="12.00 am" 
                    text="this is Jane blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));