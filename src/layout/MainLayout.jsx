import { Layout, Menu, theme } from "antd";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const { Footer, Content } = Layout;
const MainLayout = () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Content>
            <main style={{ flex: "1 0 auto", display: "contents" }}>
              {<Outlet />}
            </main>
          </Content>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
export default MainLayout;
