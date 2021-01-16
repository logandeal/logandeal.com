import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';

function getBackgroundImage(props) {
  if (props.backgroundImage) {
    return `url("${props.backgroundImage}")`;
  }
  return '';
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: props => getBackgroundImage(props),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App({ Component, pageProps }) {
  const classes = useStyles({
    backgroundImage: Component.backgroundImage
  });
  console.log(classes)
  return (
    <div className={classes.root}>
      <Layout pageTitle="Logan Deal" description="My Personal Blog">
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
