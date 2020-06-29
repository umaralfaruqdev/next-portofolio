import SiteLayout from '@lay/SiteLayout';

const MyApp = ({ Component, pageProps  }) => {
	console.log(Component);
	const getLayout = Component.getLayout || (page => <SiteLayout children={page} />);

	return getLayout(<Component {...pageProps}/>);
}

export default MyApp;
