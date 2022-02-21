
import Header from './components/Header'
import MovieSearch from './components/MovieSearch'
import { ApolloProvider } from '@apollo/client';
import { client } from "./ApolloClient/client";


function App() {
  return (
    // return (
    //   <ApolloProvider client={client}>
    //     <div className="App">
    //      <Header title="Movies Desk"/>
    //  <MovieSearch title='hello'/>
    //     </div>
    //   </ApolloProvider>
    // );
    <ApolloProvider client={client}>
    <div className="container">
     <Header title="Movies Desk"/>
     <MovieSearch title='hello'/>
    </div>
    </ApolloProvider>
  );
}


export default App;
