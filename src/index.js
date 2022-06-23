export default class TestApp extends Component{
    render(){
        return <h1>React.</h1>
    }
}

const app = document.getElementById("app");
const root = ReactDom.createRoot(app);
root.render(<TestApp />);