import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
          super(props);
    }

    render() {
        const {nextRoute} = this.props; 
        return < div >
            <form>
                <label>
                    Nome:
      <input type="text" name="name" />
                </label>
            </form>
            <form>
                <label>
                    Senha:
      <input type="text" name="pass" />
                </label>
            </form>
            <Link to={nextRoute}>
            <button>
              Fazer Login
          </button>
          </Link>
        </div >


    }
};

export default Login;