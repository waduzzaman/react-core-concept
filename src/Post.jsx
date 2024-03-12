export default function Post({ post }) {
  const { title, id, body } = post;

  return (
    <div style={{ width: '225px', border: '2px solid purple', margin: '5px', textAlign: 'center' }}>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </div>
  );
}
