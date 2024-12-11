// src/components/Home.jsx
import React from 'react';
import bannerImage from '../assets/banner.png'; // Adjust the path as needed
import learnWithoutRisk from '../assets/learn_without_risk.png'; // Adjust the path as needed
import realisticSimulations from '../assets/realistic_simulations.png'; // Adjust the path as needed
import masterMetaAds from '../assets/master_meta_ads.png'; // Adjust the path as needed
import campaignAnalysis from '../assets/campaign_analysis.png'; // Adjust the path as needed
import cpcCpa from '../assets/cpc_cpa_savings.png'; // Adjust the path as needed
import creativeContent from '../assets/creative_content.png'; // Adjust the path as needed
import adSpend from '../assets/ad_spend_optimization.png'; // Adjust the path as needed
import NavbarComponent from './Navbar';


const Home = () => {
  return (
    <>
    <div>
       
         <NavbarComponent />  

       <div class="container">
          <div class="text">
             <div class="col-md-6">
                <h1 class="mb-3">Eliminate risk with running digital ads</h1>
                <p class="mb-3">Welcome to SiMMY! Introducing our cutting-edge Digital Ads Simulator - the ultimate tool for mastering Meta ads and honing your advertising skills without the fear of risking real money. SiMMY provides a realistic and risk-free environment to practice campaign management strategies.</p>
                <a class="btn btn-primary mt-2 py-3 px-5" href="/signup">Get Started</a>
             </div>
          </div>
          <div class="image">
             <img src={bannerImage} alt="Banner" style={{height: "auto", width: "auto", maxWidth: "500px", maxHeight: "500px"}} />
          </div>
       </div>
    </div >


    <div className="white-bg">
       <div class="container">
          <div class="image">
             <img src={learnWithoutRisk} alt="Learn without Risk" style={{height: "auto", width: "auto", maxWidth: "500px", maxHeight: "500px"}} />
          </div>
          <div class="col-md-6">
             <h1 class="mb-3">Learn Without Risk</h1>
             <p class="mb-3">Say goodbye to costly mistakes! Our simulator allows you to learn best practices and experiment with different optimization techniques without spending a dime of your real advertising budget. Learn from trial and error, refining your approach until you're ready to deploy your winning strategies in the real world.</p>
          </div>
       </div>
    </div>


    <div className="white-bg">
       <div class="container">
          
          <div class="col-md-6">
             <h1 class="mb-3">Realistic Simulations</h1>
             <p class="mb-3">Step into the shoes of a digital advertiser with our immersive simulations. From creating ad creatives to optimizing targeting parameters, our SiMMY simulator replicates the complexities of real campaign data, providing you with a true-to-life learning experience. Get hands-on practice in a safe environment and build the confidence you need to succeed.</p>
          </div>

          <div class="image">
             <img src={realisticSimulations} alt="Realistic Simulations" style={{height: "auto", width: "auto", maxWidth: "500px", maxHeight: "500px"}} />
          </div>
       </div>
    </div>


    <div className="white-bg">
       <div class="container">
          <div class="image">
             <img src={masterMetaAds} alt="Master Meta Ads" style={{height: "auto", width: "auto", maxWidth: "500px", maxHeight: "500px"}} />
          </div>
          <div class="col-md-6">
             <h1 class="mb-3">Master Meta Ads</h1>
             <p class="mb-3">From audience segmentation to reading data trends, unlock the power of Meta ads and take your advertising skills to the next level. SiMMY walks through Meta-specific best practices, guiding you step-by-step for maximum impact on your advertising campaigns.</p>
          </div>
       </div>
    </div>


    <div class="white-bg" style={{textAlign: "center"}}>
      Ready to revolutionize your digital advertising learning experience?
      <br />
      <a class="btn btn-primary mt-2 py-3 px-5" href="/signup">Sign Up Now!</a>
    </div>


    <div class="heading w-50 text-center mx-auto pb-5 mob-header" style={{padding:"2%"}}>
      <h2 className="px-5 mb-4">Use Ad Management Platforms like a Pro</h2>
      <p>we obsess over the delivery of tangible results such as leads & sales. metrics that impact your bottom line. our approach remains unchanged across our services from seo, social media marketing to web & app development.</p>

      
    </div>



    <div class="container-grid">
    <div class="card">
        <div class="card-content">
            <div class="icon"><img src={campaignAnalysis} alt="campaign analysis icon" /></div>
            <div class="text-content">
                <div class="title">campaign analysis</div>
                <div class="description">
                    we help you to promote your brand to billions of users on instagram, facebook, and twitter with the best strategies.
                </div>
                <div class="link"><a href="#">read more</a></div>
            </div>
        </div>
    </div>
    
    <div class="card">
        <div class="card-content">
            <div class="icon"><img src={cpcCpa} alt="cpc & cpa savings icon"/></div>
            <div class="text-content">
                <div class="title">cpc & cpa savings</div>
                <div class="description">
                    we help your website appears on top of search results without paying a penny to google.
                </div>
                <div class="link"><a href="#">read more</a></div>
            </div>
        </div>
    </div>
    
    <div class="card">
        <div class="card-content">
            <div class="icon"><img src={creativeContent} alt="creative content icon"/></div>
            <div class="text-content">
                <div class="title">creative content</div>
                <div class="description">
                    we create out of the box contents for your audience that bring value to generating the right traffic.
                </div>
                <div class="link"><a href="#">read more</a></div>
            </div>
        </div>
    </div>
    
    <div class="card">
        <div class="card-content">
            <div class="icon"><img src={adSpend} alt="ad spend optimization icon"/></div>
            <div class="text-content">
                <div class="title">ad spend optimization</div>
                <div class="description">
                    we help your website appears on top of search results without paying a penny to google.
                </div>
                <div class="link"><a href="#">read more</a></div>
            </div>
        </div>
    </div>
</div>
    
    <div className="button-center" style={{textAlign:"center"}}>
    <a class="btn btn-primary mt-2 py-3 px-5" href="/signup">Get Started</a>
    </div>



    </>



  );
};

export default Home;