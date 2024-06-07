import Footer from "./components/Landing/Footer";
import Header from "./components/Landing/Header";
import Main from "./components/Landing/Main";

function App() {
  return (
    <div className="h-screen flex flex-col bg-mainBody-bg">
      <Header className="h-20 border-b border-black px-36" />
      <Main className="grow px-36" />
      <Footer className="h-16 border-t-2 border-black" />
    </div>
  );
}

export default App;
