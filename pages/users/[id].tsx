
export function UsersDetail(props) {
  console.log(props);
  return <div {...props} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  return { props: { userId: params.id } };
}

export default UsersDetail;
