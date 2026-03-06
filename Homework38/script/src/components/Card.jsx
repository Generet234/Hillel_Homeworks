import React from 'react'

class Card extends React.Component {
    render() {
        if(Card.defaultProps){
            return ;
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">hi this.props.title</h4>
                    <p className="card-text">this.props.text</p>
                </div>
            </div>
        )
    }
}
Card.defaultProps = ''
export default Card