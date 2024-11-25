import React from "react";

const Preloader = () => {
    return (
        <>
           <div id="preloader-active">
			<div className="preloader d-flex align-items-center justify-content-center">
				<div className="preloader-inner position-relative">
					<div className="text-center" style={{width: "280px", height: "280px"}}>
						<img src="/assets/imgs/theme/logo.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
        </>
    );
};

export default Preloader;
