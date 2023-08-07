import { ThemeContext } from "../themeProvider/ThemeContext";
import Header from "../header/Header";
import Inputs from "../inputs/Inputs";
import ChartWrapper from "../chartWrapper/ChartWrapper";
import { useContext } from "react";
import "./MainWindow.css"

const MainWindow = () => {
  const { theme } = useContext(ThemeContext);

  const GlobalStyles = {
    light: {
      //   background:
      //     'url("../../../images/light-background.jpeg") no-repeat center -100px fixed',
      //   backgroundSize: "cover",
      background: "#b5aa9d",
      color: "#333333",
      transition: "0.3s",
    },
    dark: {
      //   background:
      //     'url("../../../images/dark-background2.jpeg") no-repeat center fixed',
      //   backgroundSize: "cover",
      backgroundColor: "#353535",
      color: "#ffffff",
      transition: "0.3s",
    },
  };
  console.log(GlobalStyles);
  return (
    <div className="MainWindow" style={{ ...GlobalStyles[theme] }}>
      <Header />
      <ChartWrapper />
      <Inputs />
    </div>
  );
};

export default MainWindow;
