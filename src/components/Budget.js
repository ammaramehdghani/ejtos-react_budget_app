import React, { useContext, useState} from 'react';
import { AppContext} from '../context/AppContext';

const Budget = () => {
    
        const {dispatch, budget, currency} = useContext(AppContext);
        const handleBudgetChange = (event) => {
            const newBudget = event.target.value;
            
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }

        
    return (
        <div className='alert alert-secondary'>
        <span>Budget:{currency}{Budget}</span>
        <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
