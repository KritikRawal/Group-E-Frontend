import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/footer";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
        <Route path = "/" component={Home} exact />
      
        <Footer />
        </div>
     
      </div>
    </Router>
  );
}

export default App;
