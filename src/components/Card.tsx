type CardProps = {
  info: { title: string; paragraph: string };
};

const Card: React.FunctionComponent<CardProps> = ({ info }) => {
  return (
    <article>
      <h1>{info.title}</h1>
      <p>{info.paragraph}</p>
      <a href="#">Shop now</a>
    </article>
  );
};

export default Card;
