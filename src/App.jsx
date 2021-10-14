import DashboardContainer from "./containers/DashboardContainer";
import GlobalStyles from "./GlobalStyles";

const lightTheme = {
    colors: {
        bg: "var(--color-lt-white-bg)",
    },
    mobile: "768px",
};

const darkTheme = {
    colors: {
        bg: "var(--color-dt-very-dark-blue-bg)",
    },
    mobile: "768px",
};

function App() {
    return (
        <div>
            {/* <Switch handleThemeSwitch={handleThemeSwitch} /> */}
            <GlobalStyles />
            <DashboardContainer />
        </div>
    );
}

export default App;
