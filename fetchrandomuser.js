import React from "react"; 

export default class fetchdatauser extends React.Component {
    state = {
        loading: true
    };

        async componentDidMount() {
            const url = "www.themealdb.com/api/json/v1/1/random.php";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
        render() {
            return (
                <div>
                {this.state.loading ? <div> loading...</div> : <div>recipe..</div>
           </div>
    );
    }
}
