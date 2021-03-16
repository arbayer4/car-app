import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <div className="layout">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
