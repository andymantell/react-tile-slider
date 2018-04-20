import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.id
    }
  }
  handleDragstart (e) {
    this.props.setDragItem(this)
  }

  handleDragOver (e) {
    e.preventDefault()
  }

  handleDrop (e) {
    console.log(e)
    this.props.doDrop(this)
  }

  render () {
    const { image, imageSegmentX, imageSegmentY, tileX, tileY, tileHeight, tileWidth } = this.props

    return (
      <div className='tile'
        draggable='true'
        onDragStart={this.handleDragstart.bind(this)}
        onDragOver={this.handleDragOver.bind(this)}
        onDrop={this.handleDrop.bind(this)}
        style={{
          width: tileWidth + '%',
          height: tileHeight + '%',
          top: tileY * tileHeight + '%',
          left: tileX * tileWidth + '%',
          backgroundImage: 'url(' + image + ')',
          backgroundPosition: '-' + imageSegmentX * 100 + '% -' + imageSegmentY * 100 + '%'
        }}>
      </div>
    );
  }
}

export default Tile;
