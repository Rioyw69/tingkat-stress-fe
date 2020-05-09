import React from 'react'
import Layout from './components/Layout'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Diagnose from './pages/Diganose'
import Advice from './pages/Advice'
import Information from './pages/Information'
import Error404 from './pages/Error404'
import ResultDiagnose from './pages/ResultDiagnose'

function App()
{
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/diagnose" exact={true} component={Diagnose} />
          <Route path="/diagnose/:result" exact={true} component={ResultDiagnose} />
          <Route path="/advice" exact={true} component={Advice} />
          <Route path="/information" exact={true} component={Information} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App