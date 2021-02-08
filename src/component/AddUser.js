import React, { Component } from 'react'
import posed from 'react-pose'

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart : {
      display : "block"
    }

  },
  hidden: {
    opacity: 0,
    applyAtEnd : {
      display : "none"
    }
  }
});


class AddUser extends Component {
  state = {
    visible: false
  }

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible
    })

  }

  render() {
    const { visible } = this.state;
    return (

      <div className="col-md-8 mb-4">

        <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>

      <Animation pose = {visible ? "visible" : "hidden"}>
        <div className="card">
          <div className="card-header">
            <h4>Add User from</h4>
            <div className="card-body">
              <form>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="id"
                    className="form-control"
                    placeholder="Enter Name..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    className="form-control"
                    placeholder="Enter Department..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    className="form-control"
                    placeholder="Enter Salary..."
                  />
                </div>
                <div style={{ width: 300 }}>

                </div>

                <button type="submit" className="btn btn-danger btn-block">Add User</button>

              </form>
            </div>

          </div>
        </div>
        </Animation>
      </div>
    )
  }
}
export default AddUser;