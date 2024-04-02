import "../../Projects.css";

const Timeline = ({ children }) => {
  return <div className="co2">{children}</div>;
};

const Childline = ({ children, title, src }) => {
  return (

    <div>
      <img alt="Image" width={44} height={44} src={src} />
      <h5 style={{borderBottom:"2.5px solid #CCCCCC33", paddingBottom:"3px"}}>{title}</h5>
      <p/>
      <div className="w-100">{children}</div>
    </div>

  );
};

Timeline.Childline = Childline;

export default Timeline;
