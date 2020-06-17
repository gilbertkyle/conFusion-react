import React, { Fragment } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <div className="col-6">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  const commentsList = comments.map(comment => {
    return (
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
    );
  });

  return (
    <div className="col-6">
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentsList}</ul>
    </div>
  );
}

const DishDetail = props => {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home" />
          Home
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/menu" />
          Menu
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
