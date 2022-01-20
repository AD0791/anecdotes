import React from 'react';
import Button from '../common/Button';

function Control({handleSelect, handleVote}) {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'row'}}>
            <Button handler={handleSelect} text={'next anecdote'}/>
            <Button handler={handleVote} text={'Vote'}/>
        </div>
    );
}

export default Control;