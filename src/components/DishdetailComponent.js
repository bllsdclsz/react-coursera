import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);
    }

    renderComments(comments){
        if(comments!==[]){
           return comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </li>
                )
            })
        }else{
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-sm-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dishdetail;