import images from '../data/images';

function Thumbnail(props) {
  return <img className="thumbnail" src={props.source}></img>;
}

export default Thumbnail;
