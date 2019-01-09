import React from 'react';
import style from './App.css';

// export default () => {
//   return (
//     <h1 className={style.title}>
//       Hello World
//     </h1>
//   );
// };

class App extends React.Component {
	render() {
		return <div>
			<h1 className={style.title}>
				Hello World - App
			</h1>
			{this.props.children}
		</div>
	}
}

export default App;