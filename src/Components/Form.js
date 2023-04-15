import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic:"react"
      }
    }
    changeUsername = (event) => {
        this.setState({
username:event.target.value
        })
    }
    changeComments = event =>{
        this.setState({
            comments:event.target.value
        })
    }
    changeTopic = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    dataSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.dataSubmit}>
      <div>
        <label> Username  </label>
        <input type='text' value={this.state.username} onChange={this.changeUsername}  />
        </div>
        <div>
            <label> Comments</label>
            <input type='text' value={this.state.comments} onChange={this.changeComments}/>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.changeTopic}>
                <option value="react">React</option>
                <option value="react">Angular</option>
                <option value="react">Vue</option>
            </select>
           
        </div>
        <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form
