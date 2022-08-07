import Layout from "./components/layout";

const  App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/78963788?v=4" alt="avatar do usuário"/>
          <h1>Micael Santos</h1>
          <h3>Username: </h3>
          <span>Micael-M</span>
          <div>
            <h4>Seguidores</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Favoritos</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Seguido</h4>
            <span>5</span>
          </div>
        </div>
        <div>Repositórios</div>
        <div>Favoritos</div>
      </Layout>
    </main>
  );
}

export default App;
