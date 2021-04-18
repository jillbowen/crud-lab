import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const renderRestaurants = this.props.restaurants.map(r => {
      return (
        <Restaurant key={r.id} deleteRestaurant={this.props.deleteRestaurant} restaurant={r} />
      )
    })

  return(
    <ul>
      {renderRestaurants}
    </ul>
  )}
}

export default Restaurants;