import * as ReactDOM from "react-dom/client";
import moment from 'moment-timezone';
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
  } from '@apollo/client'
import Buttons from "./components/Buttons";
import Players from "./components/Players";
import Actions from "./components/Actions";
import Game from "./components/Game";
import './index.css'

moment.tz.setDefault("Europe/Paris");
moment.locale('fr');

console.log("hostname", window.location.hostname)
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
	  uri: (window.location.hostname === 'localhost' ? 'http://localhost:3030' : 'https://coinche-back.onrender.com') + '/graphql/',
	}),
  });

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ApolloProvider client={client}>
		<div style={{ width: '100vw', height: '100vh', flexDirection: 'row', display: 'flex' }}>
			<div style={{ minWidth: '154px', flex: 1, display: 'flex', flexDirection: 'column' }}>
				<Buttons />
				<Players />
				<Actions />
			</div>
			<div style={{ flex: 10 }}>
				<Game />
			</div>
		</div>
	</ApolloProvider>
);