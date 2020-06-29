import { getLayout } from '@lay/PortoFolioLayout';

const PortoWeb = () => {
	return (
		<>
			<section className="portofolio-section">
				<div className="d-container">
					<div className="portofolio">
						<p className="alert alert-danger">Web: No data, this is testing only.</p>
					</div>
				</div>
			</section>
		</>
	);
}

PortoWeb.getLayout = getLayout;
export default PortoWeb;

