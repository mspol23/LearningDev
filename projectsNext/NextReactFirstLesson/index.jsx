import ReactDOM from 'react-dom'

const app = document.getElementById("app")

        function Header() {

                return (
                <h1>
                  Develop, Preview, Ship, 🚀
                </h1>
                );
        }

        function HomePage() {
                
                return (
                <div>
                  <Header />     
                </div>
                );
        }

        ReactDOM.render(<HomePage />, app)