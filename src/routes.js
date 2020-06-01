import Home from "./pages/Home"
import Diagnose from "./pages/Diganose"
import ResultDiagnose from "./pages/ResultDiagnose"
import Advice from "./pages/Advice"
import Information from "./pages/Information"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/diagnose',
        component: Diagnose,
        exact: true
    },
    {
        path: '/diagnose/:result',
        component: ResultDiagnose,
        exact: true
    },
    {
        path: '/advice',
        component: Advice,
        exact: true
    },
    {
        path: '/information',
        component: Information,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/dashboard',
        component: Dashboard,
        exact: true
    },
]

export default routes