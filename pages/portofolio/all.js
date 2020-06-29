import { getLayout } from '@lay/PortoFolioLayout';

const PortoAll = () => {
	return (
		<>
			<section className="portofolio-section">
				<div className="d-container">
					<div className="portofolio">
						<div className="row">

							<div className="col-12 col-md-4 thumb">
								<div className="thumb-img-container">
									<a href="#tes">
										<img src="/images/thumb/6.jpg" className="w-100 h-100 thumb-img" alt="" />
									</a>
									<div className="thumb-overlay">
										<h5 className="thumb-title">Ecommerce for Middle</h5>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 thumb">
								<div className="thumb-img-container">
									<a href="#tes">
										<img src="/images/thumb/3.png" className="w-100 h-100 thumb-img" alt="" />
									</a>
									<div className="thumb-overlay">
										<h5 className="thumb-title">Ecommerce for Middle</h5>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 thumb">
								<div className="thumb-img-container">
									<a href="#tes">
										<img src="/images/thumb/4.png" className="w-100 h-100 thumb-img" alt="" />
									</a>
									<div className="thumb-overlay">
										<h5 className="thumb-title">Ecommerce for Middle</h5>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 thumb">
								<div className="thumb-img-container">
									<a href="#tes">
										<img src="/images/thumb/5.jpg" className="w-100 h-100 thumb-img" alt="" />
									</a>
									<div className="thumb-overlay">
										<h5 className="thumb-title">Ecommerce for Middle</h5>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 thumb">
								<div className="thumb-img-container">
									<a href="#tes">
										<img src="/images/thumb/2.png" className="w-100 h-100 thumb-img" alt="" />
									</a>
									<div className="thumb-overlay">
										<h5 className="thumb-title">Ecommerce for Middle</h5>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	);
}

PortoAll.getLayout = getLayout;
export default PortoAll;

