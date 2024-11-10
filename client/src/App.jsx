import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NB from './components/NB'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/FooterTemp/FooterTemp'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NB />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
