import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
   constructor(props) {
        super(props);    

        // Init default value of counter
        this.state = {
            count: 0
        };
   }

   // State Count - 1
   decrementState = () => {
       this.setState(prevState => {
           this.setState({
               count: prevState.count - 1
           });
       });
   };

   // State Count + 1
   incrementState = () => {
        this.setState(prevState => {
            this.setState({
                count: prevState.count + 1
            });
        });
    };
   

   render() {
       return (
            <div>
                <button onClick={this.decrementState}>Decrement</button>
                <button onClick={this.incrementState}>Increment</button>
                <h2>{this.state.count}</h2>
            </div>
       );
   }
}

export default App;