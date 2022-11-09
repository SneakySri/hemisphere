import React from 'react';
import ReactDOM from 'react-dom';
import HemiSphere from './hemisphereDisplay';
import style from './index.css'





// const App=()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=>console.log(position)
//     ,(error)=>console.log(error)
//     );
//   return(
//     <div>hello</div>
//   )
// }

class App extends React.Component
{

  // constructor(props)
  // {
  //   super(props)

  //   this.state = {latitude : null,longitude : null,errorMessage :''}
    
  // }

  state = {latitude : null,longitude : null,errorMessage :''}

  componentDidMount()
  {

      window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        console.log(position);
        this.setState({latitude: position.coords.latitude});
        this.setState({longitude: position.coords.longitude})

      },

      (error)=>{
        console.log(error);
        this.setState({errorMessage:error.message})
      }
      );

  }

  render(){

    if(!this.state.errorMessage && this.state.latitude)
    {
       return(
        <div className='body' >
          <HemiSphere lat={this.state.latitude} long={this.state.longitude}/>
        </div>
       
        //  <div>
          
        //   {this.state.latitude}<br/>{this.state.longitude}
        //   </div>
        )
    }

    if(this.state.errorMessage && !this.state.latitude)
    {
       return(
         <div>{this.state.errorMessage}</div>
       )
     }
  
  }
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

