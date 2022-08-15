import { ResetCss } from "./components/global/resetCSS";
import Layout from "./components/layout";
import ListRepos from "./components/listrepos";
import Profile from "./components/profile";
import GithubProvider from "./provider/github-provider";

const App = () => {
  return (
    <main>
      <GithubProvider />
      <ResetCss />
      <Layout>
        <Profile />
        <ListRepos />
      </Layout>
    </main>
  );
};

export default App;
