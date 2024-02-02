import {Switch, Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
