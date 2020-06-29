import Head from 'next/head';
import Link from 'next/link';

const SiteLayout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favi/favicon.ico" />
				<link rel="icon" href="/favi/animated_favicon1.gif" />
				<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
				<link rel="stylesheet" href="/css/app.css" />
				<link rel="stylesheet" href="/fa/css/all.min.css" />
				<script src="/popper/popper.min.js"></script>
				<script src="/bootstrap/js/bootstrap.min.js"></script>
			</Head>

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-container">
					<a className="navbar-brand d-flex align-items-center" href="#test">
						<img src="/images/avatars/avatar.png" alt="Avatar" width="45" height="45" loading="lazy" />
						<span className="nunito">Umar</span>
					</a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar" aria-controls="my-navbar" aria-expanded="false" aria-label="Toggle Navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse justify-content-end" id="my-navbar">
						<form className="d-flex" action="">
							<input className="form-control mr-2" type="text" placeholder="Search" />
						</form>
						<ul className="navbar-nav">
							<li className="nav-item"><Link href="/"><a className="nav-link active">Home</a></Link></li>
							<li className="nav-item"><Link href="/profile"><a className="nav-link">Profile</a></Link></li>
							<li className="nav-item"><Link href="/contact"><a className="nav-link">Contact</a></Link></li>
						</ul>
					</div>
				</div>
			</nav>

			{children}
		</>
	);
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;
export default SiteLayout;
