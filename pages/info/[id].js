export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    //when user visits id of page that doesn't exist, 404 page will populate
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //grabbing each id from context object
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  
  return {
    props: {
      user: data,
    },
  };
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default Details;
