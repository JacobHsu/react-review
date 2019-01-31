import React, { Component } from 'react';
import OrderItem from '../OrderItem'

const data = {
    id : 1,
    shop: 'iTunes',
    picture:'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    product:'復仇者聯盟：無限之戰',
    price: 590,
    ifCommented: false
}

class OrderList extends Component {
    render() {
        return (
            <div>
                <OrderItem data={data}></OrderItem>
            </div>
        );
    }
}

export default OrderList;