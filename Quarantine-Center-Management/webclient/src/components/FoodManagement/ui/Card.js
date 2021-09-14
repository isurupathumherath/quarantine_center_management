import classes from "./Card.module.css";

export default function Card(props) {
  // children always holds the content which is past between the opening and closing component tags
  return <div className={classes.card}>{props.children}</div>;
}
