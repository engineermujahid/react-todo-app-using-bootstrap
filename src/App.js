import { useAuthContext } from 'contexts/AuthContext';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import ScreenLoader from 'components/ScreenLoader';
import Routes from "./pages/Routes"

function App() {
  const { isAppLoading } = useAuthContext()

  if (isAppLoading)
    return <ScreenLoader />

  return (<Routes />)
}

export default App;
