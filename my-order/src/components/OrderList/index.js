import React, { Component } from "react";
import OrderItem from "../OrderItem";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // 加載完畢之後立即執行
  componentDidMount() {
    fetch("/data/movies.json").then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          });
        });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return (
            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          );
        })}
      </div>
    );
  }

  handleSubmit = (id, comment, stars) => {
    // fetch('saveComment').then(()=>{ })
    const newData = this.state.data.map(item => {
      return item.id === id
        ? {
            ...item,
            comment,
            stars,
            ifCommented: true
          }
        : item;
    });
    this.setState({
      data: newData
    });
  };
}

export default OrderList;
