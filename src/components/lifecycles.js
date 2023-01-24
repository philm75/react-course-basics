import React, { Component } from 'react';

class Lifecycles extends Component {

    constructor(props) {
        super(props)
        this.state = {name: 'Phil'}
        console.log('1 Constructor');
    }

    static getDerivedStateFromProps() {
        console.log('2 getDerivedStateFromProps');        
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('x shouldComponentUpdate');
        console.log(nextState);
        console.log(this.state);
        
        if (nextState.name === this.state.name) {
            return false;
        }        
        return true;
    }

    render() {
      console.log('3 render');  
      return (
          <>
              Lifecycles
              <div onClick={() => this.setState({name: 'Philip'})}>CLICK TO CHANGE</div>
          </>
      )
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log(previousState);
        console.log('x getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(previousProps, previousState) {
        console.log('x componentDidUpdate');
        console.log(previousProps);
        console.log(previousState);
    }

    componentDidMount() {
        console.log('4 componentDidMount');
    }

    componentWillUnmount() {
        console.log('x componentWillUnmount');
    }
}

export default Lifecycles;
