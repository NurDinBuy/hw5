import React, {Component} from 'react';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                userName: '',
                email: '',
                age: 0,
                gender: ''
            }
        }
    }

    changeInput = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    registerUser = (e) => {
        e.preventDefault()
        if (this.state.form.userName === '') {
            alert(`Не заполнено поле username`)
        } else if (this.state.form.email === '') {
            alert('Не заполнено поле email')
        } else if (this.state.form.age === 0) {
            alert('Не заполнено поле age')
        } else if (this.state.form.gender === '') {
            alert('Не выбран gender')
        } else return console.log(this.state.form)
    }

    clearAll = () => {
        this.setState({
            form: {
                userName: '',
                email: '',
                age: 0,
                gender: ''
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.registerUser} className='form'>
                <input
                    value={this.state.form.userName}
                    onChange={this.changeInput}
                    type="text"
                    placeholder='user name'
                    name='userName'
                />
                <input
                    value={this.state.form.email}
                    onChange={this.changeInput}
                    type="email"
                    placeholder='email'
                    name='email'
                />
                <input
                    value={this.state.form.age}
                    onChange={this.changeInput}
                    type="number"
                    placeholder='age'
                    name='age'
                />
                <select name="gender" onChange={this.changeInput}>
                    <option value="women">women</option>
                    <option value="man">man</option>
                </select>
                <button type='submit'>add</button>
                <button onClick={this.clearAll}>clear</button>
            </form>
        );
    }
}

export default FormPage;