import React, { Component } from 'react';
//import logo from './logo.svg';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import DishDetail from './dishdetailcomponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  /** 
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    */
  render() {
    /** Not Here*/
    const HomePage = () => {
      return(
          <Home />
      );
    }
    /** Not Here*/
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        {/*
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        */}
        <Footer/>
      </div>
    );
  }
}

export default Main;
