import React,{Component} from 'react'


/* render(){
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("change")}}></input>

    </div>
    )
  }
  class App extends Component{
}
 */

const App = () =>{
  return(
    <div>
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () =>{
  return <div>Meo!</div>
}


export default App;
