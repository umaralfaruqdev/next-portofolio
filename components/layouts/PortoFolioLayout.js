import Link from 'next/link';
import { getLayout as getSiteLayout } from '@lay/SiteLayout';

const PortoFolioLayout = ({ children }) => {
	return (
		<>
			<section className="list-menu-section d-container">
				<div className="list-menu-container">
					<div className="list-menu">
						<Link href="/"><a className="list-link active">All</a></Link>
						<Link href="/portofolio/design"><a className="list-link">Design</a></Link>
						<Link href="/portofolio/backend"><a className="list-link">Backend</a></Link>
						<Link href="/"><a className="list-link">Frontend</a></Link>
						<Link href="/"><a className="list-link">Mobile</a></Link>
						<Link href="/portofolio/web"><a className="list-link">Web</a></Link>
					</div>
					<div>
						<button className="list-filter-button btn"><i className="fas fa-filter"></i> Filter</button>
					</div>
				</div>
			</section>
			{ children }
			<section className="skill-section">
				<div className="d-container skill-container">
					<h3 className="skill-title">Tools & Skills</h3>

					<div className="row skill-loop">

						<div className="col-4 col-md-2">
							<div className="skill">
								<img src="/images/Logos/figma-seeklogo.com.svg" className="logo" alt="" />
							</div>
						</div>
						<div className="col-4 col-md-2">
							<div className="skill">
								<img src="/images/Logos/css3-seeklogo.com.svg" className="logo" alt="" />
							</div>
						</div>
						<div className="col-4 col-md-2">
							<div className="skill">
								<img src="/images/Logos/react-seeklogo.com.svg" className="logo" alt="" />
							</div>
						</div>
						<div className="col-4 col-md-2">
							<div className="skill">
								<img src="/images/Logos/php-seeklogo.com.svg" className="logo" alt="" />
							</div>
						</div>
						<div className="col-4 col-md-2">
							<div className="skill">
								<img src="/images/Logos/mysql-seeklogo.com.svg" className="logo" alt="" />
							</div>
						</div>
						<div className="col-4 col-md-2">
							<div className="skill">
								<a href="#tes" className="more">
									<i className="fas fa-arrow-circle-right"></i>
									<span>See more</span>
								</a>
							</div>
						</div>

					</div>
				</div>
			</section>

		</>
	);
}

export const getLayout = page => getSiteLayout(<PortoFolioLayout>{page}</PortoFolioLayout>);
export default PortoFolioLayout;

