import { Button, Form, Input, Menu } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_wpaper">
      <div className="logo">LOGO</div>
      <div className="menu-nav">Types</div>
      <Form>
        <div className="search">
          <Form.Item>
            <Input placeholder="Something to read..." />
          </Form.Item>
          <Button> Search</Button>
        </div>
      </Form>
      <div className="user">USER</div>
    </div>
  );
};
export default Header;
