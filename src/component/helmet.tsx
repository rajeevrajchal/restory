/* eslint-disable jsx-quotes */
import { Helmet } from 'react-helmet';

interface AppHelmetInterface {
  title: string;
}
const AppHelmet = (props: AppHelmetInterface) => {
  const { title } = props;
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>
        {title || ''}
        {' '}
        || ReStory
      </title>
    </Helmet>
  );
};

export default AppHelmet;
