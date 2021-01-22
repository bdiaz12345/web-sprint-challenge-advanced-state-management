import React from 'react';
import { connect } from 'react-redux'
import { postSmurf, errorText } from '../actions/index'

class AddForm extends React.Component {

    constructor () {
        super ()
        this.state = {
            id: Date.now(),
            name: '',
            position: '',
            nickname: '',
            description: ''
        }
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
            position: this.state.position,
            nickname: this.state.nickname,
            description: this.state.description
        })
    }
    handleChangePosition = (event) => {
        this.setState({
            name: this.state.name,
            position: event.target.value,
            nickname: this.state.nickname,
            description: this.state.description
        })
    }
    handleChangeNickname = (event) => {
        this.setState({
            name: this.state.name,
            position: this.state.position,
            nickname: event.target.value,
            description: this.state.description
        })
    }
    handleChangeDescription = (event) => {
        this.setState({
            name: this.state.name,
            position: this.state.position,
            nickname: this.state.nickname,
            description: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        this.props.postSmurf(this.state)
        if (this.props.error !== '') {
            errorText()
        }
        this.setState({
            id: Date.now(),
            name: '',
            position: '',
            nickname: '',
            description: ''
        })
    }


    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChangeName} name="name" id="name" />
                    <label htmlFor='position'>Position:</label><br/>
                    <input onChange={this.handleChangePosition} name='position' id='position' />
                    <label htmlFor='nickname'>Nickname:</label><br/>
                    <input onChange={this.handleChangeNickname} name='nickname' id='nickname' />
                    <label htmlFor='description'>Description:</label><br/>
                    <input onChange={this.handleChangeDescription} name='description' id='description' />
                </div>

                {this.props.error ?  <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error.response.data.Error}</div> : ''}
                <button onClick={this.handleSubmit}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error
})

export default connect(mapStateToProps, { postSmurf, errorText })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.