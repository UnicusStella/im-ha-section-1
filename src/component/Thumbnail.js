import images from '../data/images';

function Thumbnail({ source }) {
  source = images.map((el) => el.src);
  console.log('a', { source });
  return (
    <>
      {/* TODO */}
      <img className="thumbnail" src={source[0]} />
    </>
  );
}

export default Thumbnail;
