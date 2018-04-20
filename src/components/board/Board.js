import React, { Component } from 'react';
import Tile from '../tile/Tile.js'
import './Board.css';

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: 'http://www.pawculture.com/uploads/abyssinian-cat-card.jpg',
      boardWidth: 3,
      boardHeight: 3,
      currentDragItem: null,
      tiles: {
        1: {
          id: 1,
          position: {
            x: 0,
            y: 0
          },
          imageSegment: {
            x: 0,
            y: 0
          }
        },
        2: {
          id: 2,
          position: {
            x: 1,
            y: 0
          },
          imageSegment: {
            x: 1,
            y: 0
          }
        },
        3: {
          id: 3,
          position: {
            x: 2,
            y: 0
          },
          imageSegment: {
            x: 2,
            y: 0
          }
        },
        4: {
          id: 4,
          position: {
            x: 0,
            y: 1
          },
          imageSegment: {
            x: 0,
            y: 1
          }
        },
        5: {
          id: 5,
          position: {
            x: 1,
            y: 1
          },
          imageSegment: {
            x: 1,
            y: 1
          }
        },
        6: {
          id: 6,
          position: {
            x: 2,
            y: 1
          },
          imageSegment: {
            x: 2,
            y: 1
          }
        },
        7: {
          id: 7,
          position: {
            x: 0,
            y: 2
          },
          imageSegment: {
            x: 0,
            y: 2
          }
        },
        8: {
          id: 8,
          position: {
            x: 1,
            y: 2
          },
          imageSegment: {
            x: 1,
            y: 2
          }
        },
        9: {
          id: 9,
          position: {
            x: 2,
            y: 2
          },
          imageSegment: {
            x: 2,
            y: 2
          }
        }
      }
    }
  }

  setDragItem (item) {
    this.setState({
      currentDragItem: item
    })
  }

  doDrop (target) {
    this.setState((prevState, props) => {
      const draggedId = this.state.currentDragItem.state.id
      const targetId = target.state.id

      const newTiles = Object.assign({}, this.state.tiles)

      newTiles[draggedId] = Object.assign({}, prevState.tiles[draggedId])
      newTiles[draggedId].position = prevState.tiles[targetId].position

      newTiles[targetId] = Object.assign({}, prevState.tiles[targetId])
      newTiles[targetId].position = prevState.tiles[draggedId].position

      return {
        tiles: newTiles
      }
    })
  }

  render () {

    const tiles = Object.entries(this.state.tiles)

    return (
      <div className="board">
        {tiles.map(tile =>
          <Tile
            key={tile[0]}
            id={tile[0]}
            setDragItem={this.setDragItem.bind(this)}
            doDrop={this.doDrop.bind(this)}
            tileX={tile[1].position.x}
            tileY={tile[1].position.y}
            imageSegmentX={tile[1].imageSegment.x}
            imageSegmentY={tile[1].imageSegment.y}
            tileHeight={100 / this.state.boardHeight}
            tileWidth={100 / this.state.boardWidth}
            image={this.state.image}
          />
        )}
      </div>
    );
  }
}

export default Board;
