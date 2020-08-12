import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    componentDidMount(){

    }

    componentDidUpdate(){
        
    }

    renderDish(dish){
        if(dish!=null){
            return(
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
            )
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish!=null){
           return dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
        console.log()
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-sm-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.dish)}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Dishdetail;