import React from 'react';
import faker from 'faker';

const ApprovalCard = (props) => 
{
    return(
        <div className="ui card">
            <div className="content">
                Do you want to continue? 
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui  basic green button">Accept</div>
                    <div className="ui  basic red button">Reject</div>
                </div>
                
            </div>
        </div>
    );
};
export default ApprovalCard;