import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {

    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}

export default PureComp
// Purecomp rerenders only when there is difference between shallow copies of prevstate and Currentstate or prevProp and currentProp