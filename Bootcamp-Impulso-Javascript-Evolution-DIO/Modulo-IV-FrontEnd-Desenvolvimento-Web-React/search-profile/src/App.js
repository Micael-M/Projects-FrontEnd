import Layout from "./components/layout";
import Profile from "./components/profile";

const App = () => {
  return (
    <main>
      <Layout>
        {/* É a partir daqui que não renderiza nada na página */}
        <Profile />
        <div>Repositórios</div>
        <div>Favoritos</div>
      </Layout>
    </main>
  );
};

export default App;
