import React from 'react';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props.smurfs;
        console.log(smurf)

        return(<div data-testid="smurf" className="card">
            <h4>{smurf.name}</h4>
            <p>{smurf.position}</p>
            <h3>{smurf.nickname}</h3>
            <p>{smurf.description}</p>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.