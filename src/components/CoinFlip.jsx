import './CoinFlip.css';
import React from 'react';
import Coin from './Coin';

class CoinFlip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'};
    }
    render() {
        return (
            <div className="CoinFlip">
                    <Coin imgSource={this.state.imgSrc} />
                    <button> Flip Mee</button>
            </div>
        )
    }
}
export default CoinFlip;