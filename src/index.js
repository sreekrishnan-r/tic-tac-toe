import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Board extends React.Component{

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td><button>-</button></td>
                        <td><button>-</button></td>
                        <td><button>-</button></td>
                    </tr>
                    <tr>
                        <td><button>-</button></td>
                        <td><button>-</button></td>
                        <td><button>-</button></td>
                    </tr>
                    <tr>
                        <td><button>-</button></td>
                        <td><button>-</button></td>
                        <td><button>-</button></td>
                    </tr>
                </table>
            </div>
        );
    }

}


class Game extends React.Component{
    render(){
        return(
            <Board />
        );
    }
}

//========== Main Call ============
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);