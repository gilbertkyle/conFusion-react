import React, { Fragment } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  const commentsList = comments.map(comment => {
    return (
      <ul className="list-unstyled" key={comment.id}>
        <li>
          {comment.comment}
          <br />
          {comment.author}{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(new Date(Date.parse(comment.date)))}
        </li>
      </ul>
    );
  });
  return (
    <Fragment>
      <h4>Comments</h4>
      {commentsList}
    </Fragment>
  );
}

const DishDetail = props => {
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5">
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
