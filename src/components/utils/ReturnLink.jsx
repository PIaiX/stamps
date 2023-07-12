import React from 'react';
import {Link} from 'react-router-dom';
import { TfiArrowCircleLeft } from "react-icons/tfi";

const ReturnLink = (props) => {
  return (
    <Link to={props.link} className={'return ' + props.className}>
      <TfiArrowCircleLeft/>
      <span>назад</span>
    </Link>
  );
};

export default ReturnLink;