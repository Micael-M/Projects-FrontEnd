import Layout from "./components/layout";
import Profile from "./components/profile";

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <div>Repositórios</div>
        <div>Favoritos</div>
      </Layout>
    </main>
  );
};

export default App;
