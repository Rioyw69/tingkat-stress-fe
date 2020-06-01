import React from 'react'
import Layout from './components/Layout'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Diagnose from './pages/Diganose'
import Advice from './pages/Advice'
import Information from './pages/Information'
import Error404 from './pages/Error404'
import ResultDiagnose from './pages/ResultDiagnose'
import Login from './pages/Login'
import routes from './routes'

function App(props)
{
  return (
    <BrowserRouter>
        <Switch>
          {
            routes && routes.map((route, index) => {
              return <Route key={index} path={route.path} exact={route.exact} component={(props) => {
                return <Layout {...props}>
                  <route.component {...props} />
                </Layout>
              }} />
            })
          }
            <Route component={Error404} />
        </Switch>
    </BrowserRouter>
  )
}

export default App