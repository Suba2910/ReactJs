import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



// using react query to fetch data from API; inside default options we are setting a prop to be false so when we swap
// between the windows there is no refetch of data
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries :{
        refetchOnWindowFocus : false
      }
    }
  });

  return (<div className='App'>
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> 404 PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </div>
  );

}





export default App


