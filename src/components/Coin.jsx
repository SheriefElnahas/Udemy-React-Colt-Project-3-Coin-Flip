import React from 'react';


class Coin extends React.Component {
    render() {

        return (
            <div>
                <img style={{width: '200px'}} src={this.props.imgSource} alt="" />
            </div>
        )
    }
}

export default Coin;