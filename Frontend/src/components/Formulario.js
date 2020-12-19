import React, {Component} from 'react';




class Formulario extends Component 
{
constructor (props) {
    super(props)
    this.state = {
      artist:'',
      song:''
    }
  }

  
  handleChangeArtist = (e) => {
    const { value } = e.target
    this.setState({ artist: value })
  }

  handleChangeSong = (e) => {
    const { value } = e.target
    this.setState({ song: value })
}


  callLyricsAPI = () => {
     // Llamado
  }

  callTranslatorAPI = () => {
    // Llamado
}

  
  render () {
    const { artist } = this.state
    const { song } = this.state
    
    return (
      <div>
         <form>
          <label for>Artist: 
            <input 
              type="text" 
              value={artist} 
              onChange={this.handleChangeArtist} 
            />
          </label>
          
        </form>

        <br/>

        <form>
          <label for>Song: 
            <input 
              type="text" 
              value={song} 
              onChange={this.handleChangeSong} 
            />
          </label>
        </form>

        <br/>
    
        <button
          onClick={() => {
            this.callLyricsAPI()
          }}>
          Find Lyrics!
        </button>

        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;

         <button
          onClick={() => {
            this.callTranslatorAPI()
          }}>
          Traslate        
        </button>
        <br/><br/>


        <form>

            <textarea name="textlyrics" rows="10" cols="40">
            
            </textarea>
        </form>

        <form>
          <label for>Stats: 
            <input 
              type="label" 
              value={song} 
              onChange={this.handleChangeSong} 
            />
          </label>
        </form>
        <br/><br/>
        
        <form>
            <textarea name="texttraslate" rows="10" cols="40">           
            </textarea>
        </form>

        
      </div>
    )
  }
}


export default Formulario;


