import { ProviderWrapper as VoteProviderWraooer } from 'contexts/VoteContexte';
import App from "components/App/App";

const AppLoader = () => {
  return (
    <VoteProviderWraooer>
      <App />
    </VoteProviderWraooer>
  );
}

export default AppLoader;