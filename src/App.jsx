import Routers from "./routers";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./utils/history";
function App() {
  return (
    <HistoryRouter history={history}>
      <Routers />
    </HistoryRouter>
  );
}

export default App;
