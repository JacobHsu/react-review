import React, { Component } from 'react';
import './style.css'

class index extends Component {
    render() {
        const {shop, product, price, picture, ifCommented} = this.props.data;
        return (
            <div className='orderItem'>
                <div className='orderItem__picContainer--red'>
                    <img className='orderItem__pic' src={picture} alt="product"/>
                </div>
                <div className='orderItem__content'>
                    <div className='orderItem__product'>{product}</div>
                    <div className='orderItem__shop'>{shop}</div>
                    <div className='orderItem__detail'>
                        <div classNmae='orderItem__price'>NT{price}</div>
                        <div className="orderItem__buttom">
                        {
                            ifCommented ? (
                            <button className="orderItem__btn orderItem__btn--grey">
                            已評價
                            </button>
                        ) : (
                            <button
                            className="orderItem__btn orderItem__btn--red"
                            onClick={this.hendOpenEditArea}
                            >
                            評價
                            </button>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;