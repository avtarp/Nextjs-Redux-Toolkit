import type { NextPage } from 'next';
import Todo from '../components/todo-crud';

const Home: NextPage = (props: any) => {
  return <Todo />;
};

// getInitialProps and getServerSideProps are run time
// getStaticProps and getStaticPaths are build time
Home.getInitialProps = async (ctx: any) => {
  return {
    props: {
      header: false,
    },
  };
};

export default Home;
