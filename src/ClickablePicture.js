import React from 'react';
import maxence from './img/persons/maxence.png'
import maxenceGlasses from './img/persons/maxence-glasses.png'
class ClickablePicture extends React.Component {
    state = {
        img: maxence,
        clicked: false
    }
    updateImage = () => {
        if (this.state.clicked) {
            this.setState({
                img: maxence,
                clicked: !this.state.clicked
            })
        } else {
            this.setState({
                img: maxenceGlasses,
                clicked: !this.state.clicked
            })
        }
    }
    render() {
        return (
            <div>
                <img className="driverCardImg" src={this.state.img} alt="" onClick={this.updateImage} />
            </div>
        )
    }
}
export default ClickablePicture;