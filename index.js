class Button extends React.Component {
  state = {
    error : ''
  }

  handleClick = async (e) => {
    try{
      let beers = await fetch('https://api.punkapiiii.com/v2/beers')
    } catch(error) {
      this.setState({
        error : 'We dont have any more beer'
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>I want a beer!</button>
        <br/>
        <span style={{color : 'red', fontSize: '18px'}}>{this.state.error}</span>
      </div>
    )
  }
}

const div = document.querySelector('#test');
ReactDOM.render(<Button/>, div);

class Table extends React.Component {
  state = {
    beers : []
  }

  async componentDidMount(){
    try{
      let beers = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=10')

      let values = await beers.json()

      this.setState({
        beers : values
      })
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Beer</th>
            <th>IBU</th>
            <th>PH</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.beers.map((beer, index) => {
              return (
                <tr key={index}>
                  <td>{beer.name}</td>
                  <td>{beer.ibu}</td>
                  <td>{beer.ph}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  };
}

const table = document.querySelector('#table');
ReactDOM.render(<Table/>, table);