import './CoinFlip.css';
import React from 'react';
import Coin from './Coin';

const coinHead = 'https://tinyurl.com/react-coin-heads-jpg';
const coinTail = 'https://tricksupply.com/wp-content/uploads/2019/10/s-l1600.jpg';

class CoinFlip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc : '', flips: 0, heads : 0 , tails: 0};
        this.flipImage = this.flipImage.bind(this);
    }

    flipImage() {
        if(this.state.imgSrc === '' ) {
            this.setState({imgSrc: coinHead, heads: 1})
        }
        this.setState(previousState => {
             return {flips: previousState.flips + 1};
         
        })
        
        if(this.state.imgSrc === coinHead) {
            this.setState(previousState => {
                return {imgSrc: coinTail, tails: previousState.tails + 1};
            })
        } 

        if(this.state.imgSrc === coinTail) {
            this.setState(previousState => {
                    return {imgSrc: coinHead, heads: previousState.heads + 1};
            })
         }
   
    }



    render() {

        return (
            <div className="CoinFlip">
                    <Coin  imgSource={this.state.imgSrc} />
                    <button onClick={this.flipImage}> Flip Mee</button>
                     <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails</p>
             
            </div>
        )
    }
}
export default CoinFlip;