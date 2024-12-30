import { ProviderWrapper as VoteProviderWrapper } from "contexts/VoteContext";
import App from "components/App/App";

const AppLoader= () => {
  return (
    <VoteProviderWrapper >
        <App />
  
      </VoteProviderWrapper >
  )
}

export default AppLoader;