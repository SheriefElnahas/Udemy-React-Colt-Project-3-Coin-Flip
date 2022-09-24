import './CoinFlip.css';
import React from 'react';
import Coin from './Coin';

const coinHead = 'https://tinyurl.com/react-coin-heads-jpg';
const coinTail = 'https://tricksupply.com/wp-content/uploads/2019/10/s-l1600.jpg';

class CoinFlip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc : ''};
        this.flipImage = this.flipImage.bind(this);
    }

    flipImage() {
        this.setState({imgSrc : coinHead});
        
        if(this.state.imgSrc === coinHead) {

            this.setState({imgSrc : coinTail})
        } else {

            this.setState({imgSrc: coinHead});
        }
    }



    render() {

        return (
            <div className="CoinFlip">
                    <Coin  imgSource={this.state.imgSrc} />
                    <button onClick={this.flipImage}> Flip Mee</button>
            </div>
        )
    }
}
export default CoinFlip;