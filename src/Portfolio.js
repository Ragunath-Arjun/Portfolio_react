import React from 'react'

function Portfolio() {
  return (
    <>
    <div class="project-container container-fluid" id="project">
                <div class="row">
                    <div class=" project-head col-12"><h3>My Projects</h3></div></div><hr/><br/>
                        <div class="row pc1">
                            <div class="col-lg-4 col-12 col-md-6 col-xl-3 pc1">
                                <div class="pricing-container">
                                    <a href="https://heartfelt-sundae-b6f7b4.netlify.app" target="_blank">
                                        <img class="pricing-grid" src="../Portfolio/pricing_grid.PNG" alt="Pricing grid"/>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-12 col-md-6 col-xl-3 pc2">
                                <div class="pricing-container">
                                    <a href="https://deluxe-ganache-777657.netlify.app/" target="_blank">
                                        <img class="pricing-grid" src="../Portfolio/movie_app.PNG" alt="Movie"/>
                                    </a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 pc3">
                                <div class="pricing-container">
                                    <a href="https://lucky-praline-522615.netlify.app/" target="_blank">
                                        <img class="pricing-grid" src="../Portfolio/anime_api.PNG" alt="Anime"/>
                                    </a>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 pc3">
                                <div class="pricing-container">
                                    <a href="https://precious-pasca-8959f4.netlify.app/" target="_blank">
                                        <img class="pricing-grid" src="../Portfolio/social_media.PNG" alt="Social Media"/>
                                    </a>
                                </div>
                            </div>

                        </div>
            </div>
    </>
  )
}

export default Portfolio