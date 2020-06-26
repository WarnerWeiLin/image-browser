import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #676767;

  float: left;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 36px;
  border: 1px solid #afafaf;
  border-right: 0;
`;


const UpArrow = styled.button`
  //color: whitesmoke;
  width: 16px;
  height: 20px;
  background-position: center;
  background-image: url(/assets/upArrow.png);
`;

const DownArrow = styled.button`
  color: whitesmoke;
  width: 16px;
  height: 20px;
  background-position: center;
  background-image: url(/assets/downArrow.png);
`;

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      quantity: 1
    }
  }

  increase(e) {
    e.preventDefault();
    var newQuantity = this.state.quantity + 1;
    this.setState({
      quantity: newQuantity
    })
  }

  decrease(e) {
    e.preventDefault();
    if (this.state.quantity === 1) {
      //don't do anything
    }
    else {
      var newQuantity = this.state.quantity - 1;
      this.setState({
        quantity: newQuantity
      })
    }
  }

  onFieldChange(e) {
    e.preventDefault();
    var quantity;

    if (!e.target.value) {
      quantity = 1;
    }

    quantity = parseInt(e.target.value);

    if (typeof quantity === 'number') {
      this.setState({
        quantity: quantity
      })
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Input type="number" value={this.state.quantity} onChange={this.onFieldChange.bind(this)}/>
            <div>
              <UpArrow onClick={this.increase.bind(this)}></UpArrow>
            </div>
            <div>
              <DownArrow onClick={this.decrease.bind(this)}></DownArrow>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default QuantitySelector;