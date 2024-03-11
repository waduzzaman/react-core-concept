export default function User({ user }) {
  // Check if user is defined
  if (!user) {
    return <div>Error: User data not available</div>;
  }

  // Destructure user properties
  const { name, email } = user;

  // Check if name and email are available
  if (!name || !email) {
    return <div>Error: User data incomplete</div>;
  }

  return (
    <div style={{border:'2px solid purple', margin:'10px', padding:'5px', borderRadius:'15px' }}>
      <h2>User {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}
