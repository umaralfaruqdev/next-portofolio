const MyApp = ({ Component, pageProps  }) => {
	console.log(Component);
	const getLayout = Component.getLayout;

	return getLayout(<Component {...pageProps}/>);
}

export default MyApp;
