import React from 'react';
import style from './App.css';

// export default () => {
//   return (
//     <h1 className={style.title}>
//       Hello World
//     </h1>
//   );
// };

class App extends React.Component{
	render(){
		return <h1 className={style.title}>
		      Hello World
		    </h1>
	}
}

export default App;