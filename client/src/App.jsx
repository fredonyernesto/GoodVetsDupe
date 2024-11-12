import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import NB from './components/NB/NB'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';
import Footer from './components/FooterTemp/FooterTemp';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NB />
      <div className='page-content'>
      <Outlet />
      </div>
      <Footer /> 
    </ApolloProvider>
  );
}

export default App; 
