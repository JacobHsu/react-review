import React, { Component } from "react";
import "./style.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || ''
    };
  }
  render() {
    const { product, picture, ifCommented } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer--red">
          <img className="orderItem__pic" src={picture} alt="product" />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__star">{this.renderStars()}</div>
          
          <div className="orderItem__detail">
            <div className="orderItem__buttom">
              {ifCommented ? (
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
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }

  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          className="orderItem__comment"
          onChange={this.handleCommentChange}
          value={this.state.comment}
        />
        {this.renderStars()}
        <button className="orderItem__btn orderItem__btn--red"  onClick={this.handeleSubmitComment}>提交</button>
        <button className="orderItem__btn orderItem__btn--grey" onClick={this.handeleCancelComment}>取消</button>
      </div>
    );
  }

  renderStars() {
    const { stars } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass =
            stars > item ? "orderItem__star--light" : "orderItem__star--red";
          return (
            <span 
                className={"rderItem__stars " + lightClass} 
                key={index} 
                onClick={this.handleChickStars.bind(this,item)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }

  hendOpenEditArea = () => {
    this.setState({
      editing: true
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    });
  };

  handleChickStars = (stars) => {
    this.setState({
        stars: stars
    });
  };

  handeleCancelComment = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.comment || ''
    });
  };

  handeleSubmitComment = () => {
    const {id} = this.props.data;
    const {comment, stars} = this.state;
    this.setState({
        editing: false,
    })
    this.props.onSubmit(id, comment, stars);
  };
}

export default index;
