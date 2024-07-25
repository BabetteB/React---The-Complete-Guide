import { useState } from "react";



export default function UserInput({onInputChange, inputValues}) {
    

    return <section id="user-input">
        <div id="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required 
                    value={inputValues.initialInvestment} 
                    onChange={(event) => onInputChange('initialInvestment', event.target.value)}
                    />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required 
                    value={inputValues.annualInvestment} 
                    onChange={(event) => onInputChange('annualInvestment', event.target.value)}
                    />
            </p>
        </div>
        <div id="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required 
                    value={inputValues.expectedReturn} 
                    onChange={(event) => onInputChange('expectedReturn', event.target.value)}
                    />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required 
                    value={inputValues.duration} 
                    onChange={(event) => onInputChange('duration', event.target.value)}
                    />
            </p>
        </div>
    </section>;
}
