import React, { useState } from 'react';
import './Dashboard.css'; // External CSS file for styling
import logo from '../assets/Simmy Logo.png'; // Adjust the path as needed
import { useSelector } from 'react-redux';
import NavbarComponent from './Navbar';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state) => state.user); // Access the global user data
  const navigate = useNavigate();
  const [viewInitialData, setViewInitialData] = useState(false);
  const [viewOptimizedData, setViewOptimizedData] = useState(false);
  const [activeTab, setActiveTab] = useState('Campaigns');
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  function CampaignsTable() {
    return (
     <>
      <thead>
                <tr>
                  <th>Campaign Name</th>
                  <th>Budget</th>
                  <th>Impressions</th>
                  <th>Reach</th>
                  <th>Amount Spent</th>
                  <th>Purchases</th>
                  <th>Cost Per Purchase</th>
                  <th>Purchase Conversion Value</th>
                  <th>Purchase Roas</th>
                  <th>AOV</th>
                  <th>CPM</th>
                </tr>
              </thead>
              <tbody>
                {/* Campaigns */}
                { viewInitialData && activeTab=='Campaigns' &&<tr>
                  <td>Campaign 1</td>
                  <td>$120.00</td>
                  <td>70,116</td>
                  <td>22,052</td>
                  <td>$600.00</td>
                  <td>8</td>
                  <td>$75.00</td>
                  <td>$950.00</td>
                  <td>158.33%</td>
                  <td>$118.75</td>
                  <td>$8.56</td>
                </tr>}
                { viewInitialData && activeTab=='Campaigns' &&<tr>
                  <td>Campaign 2</td>
                  <td>$120.00</td>
                  <td>61,260</td>
                  <td>24,576</td>
                  <td>$600.00</td>
                  <td>17</td>
                  <td>$35.29</td>
                  <td>$1,106.00</td>
                  <td>184.33%</td>
                  <td>$65.06</td>
                  <td>$9.79</td>
                </tr>}
                { viewInitialData && activeTab=='Campaigns' &&<tr>
                  <td>Campaign 3</td>
                  <td>$400.00</td>
                  <td>300,000</td>
                  <td>85,000</td>
                  <td>$2,000.00</td>
                  <td>20</td>
                  <td>$100.00</td>
                  <td>$1,500.00</td>
                  <td>75.00%</td>
                  <td>$75.00</td>
                  <td>$6.67</td>
                </tr>}
                
  
                { viewOptimizedData && activeTab=='Campaigns' &&<tr>
                  <td>(Optimized) Campaign 1</td>
                  <td>$120.00</td>
                  <td>75,922</td>
                  <td>23,330</td>
                  <td>$600.00</td>
                  <td>15</td>
                  <td style={{ color: 'green' }}>$40.00</td>
                  <td>$1,250.00</td>
                  <td style={{ color: 'green' }}>208.33%</td>
                  <td>$83.33</td>
                  <td>$25.72</td>
                </tr>}
                { viewOptimizedData && activeTab=='Campaigns' &&<tr>
                  <td>Campaign 2</td>
                  <td>$120.00</td>
                  <td>76,399</td>
                  <td>33,888</td>
                  <td>$600.00</td>
                  <td>25</td>
                  <td>$24.00</td>
                  <td>$1,660.00</td>
                  <td>276.67%</td>
                  <td>$66.40</td>
                  <td>$17.71</td>
                </tr>}
                { viewOptimizedData && activeTab=='Campaigns' &&<tr>
                  <td>Campaign 3</td>
                  <td>$400.00</td>
                  <td>325,000</td>
                  <td>100,000</td>
                  <td>$2,000.00</td>
                  <td>21</td>
                  <td>$95.24</td>
                  <td>$1,550.00</td>
                  <td>77.50%</td>
                  <td>$73.81</td>
                  <td>$6.15</td>
                </tr>}
              </tbody>
     </>
    );
  } 
  
  function AdSetsTable() {
    return (
      <>
      <thead>
      <tr>
                  <th>Campaign Name</th>
                  <th>Ad Sets</th>
                  <th>Budget</th>
                  <th>Impressions</th>
                  <th>Reach</th>
                  <th>Amount Spent</th>
                  <th>Purchases</th>
                  <th>Cost Per Purchase</th>
                  <th>Purchase Conversion Value</th>
                  <th>Purchase Roas</th>
                  <th>AOV</th>
                  <th>CPM</th>
                </tr>
              </thead>
              <tbody>
              { viewInitialData &&<tr>
                  <td>Campaign 1</td>
                  <td>Ad Set 1</td>
                  <td>$60.00</td>
                  <td>29,301</td>
                  <td>11,652</td>
                  <td>$300.00</td>
                  <td>6</td>
                  <td>$50.00</td>
                  <td>$401.00</td>
                  <td>133.67%</td>
                  <td>$66.83</td>
                  <td>$25.75</td>
                </tr>}

                { viewInitialData &&<tr>
                  <td>Campaign 1</td>
                  <td>Ad Set 2</td>
                  <td>$60.00</td>
                  <td>31,959</td>
                  <td>16,960</td>
                  <td>$300.00</td>
                  <td>11</td>
                  <td>$27.27</td>
                  <td>$705.00</td>
                  <td>235.00%</td>
                  <td>$64.09</td>
                  <td>$17.69</td>
                </tr>}

                { viewInitialData &&<tr>
                  <td>Campaign 2</td>
                  <td>Ad Set 3</td>
        <td>$40.00</td>
        <td>23,825</td>
        <td>7,640</td>
        <td>$200.00</td>
        <td>2</td>
        <td>$100.00</td>
        <td>$325.00</td>
        <td>162.50%</td>
        <td>$162.50</td>
        <td>$26.18</td>
    </tr>
                  }

                  { viewInitialData &&<tr>
                  <td>Campaign 2</td>
                  <td>Ad Set 4</td>
        <td>$80.00</td>
        <td>46,291</td>
        <td>18,192</td>
        <td>$400.00</td>
        <td>6</td>
        <td>$66.67</td>
        <td>$625.00</td>
        <td>156.25%</td>
        <td>$104.17</td>
        <td>$21.99</td>

</tr>
                  }
      



      { viewInitialData && <tr>
        <td>Campaign 3</td>
        <td>Ad Set 5</td>
        <td>$200.00</td>
        <td>200,000</td>
        <td>50,000</td>
        <td>$1,000.00</td>
        <td>10</td>
        <td>$100.00</td>
        <td>$1,000.00</td>
        <td>100.00%</td>
        <td>$100.00</td>
        <td>$20.00</td>
    </tr>}
    { viewInitialData && <tr>
        <td>Campaign 3</td>
        <td>Ad Set 6</td>
        <td>$200.00</td>
        <td>100,000</td>
        <td>60,000</td>
        <td>$1,000.00</td>
        <td>10</td>
        <td>$100.00</td>
        <td>$500.00</td>
        <td>50.00%</td>
        <td>$50.00</td>
        <td>$16.67</td>
    </tr>}


{ viewOptimizedData &&
    <tr>
        <td>(Optimized) Campaign 1</td>
        <td>Ad Set 1</td>
        <td>$45.00</td>
        <td>30,108</td>
        <td>20,324</td>
        <td>$225.00</td>
        <td>8</td>
        <td>$28.13</td>
        <td>$450.00</td>
        <td>200.00%</td>
        <td>$56.25</td>
        <td>$11.07</td>
    </tr>}
    { viewOptimizedData &&<tr>
        <td>(Optimized) Campaign 1</td>
        <td>Ad Set 2</td>
        <td>$75.00</td>
        <td>46,291</td>
        <td>18,192</td>
        <td>$375.00</td>
        <td>17</td>
        <td>$22.06</td>
        <td>$1,210.00</td>
        <td>322.67%</td>
        <td>$71.18</td>
        <td>$20.61</td>
    </tr>}
    { viewOptimizedData &&<tr>
        <td>(Optimized) Campaign 2</td>
        <td>Ad Set 3</td>
        <td>$40.00</td>
        <td>30,013</td>
        <td>9,779</td>
        <td>$200.00</td>
        <td>6</td>
        <td>$33.33</td>
        <td>$450.00</td>
        <td>225.00%</td>
        <td>$75.00</td>
        <td>$20.45</td>
    </tr>}
    { viewOptimizedData &&<tr>
        <td>(Optimized) Campaign 2</td>
        <td>Ad Set 4</td>
        <td>$80.00</td>
        <td>45,909</td>
        <td>17,541</td>
        <td>$400.00</td>
        <td>9</td>
        <td>$44.44</td>
        <td>$800.00</td>
        <td>200.00%</td>
        <td>$88.89</td>
        <td>$22.80</td>
    </tr>}
    { viewOptimizedData &&<tr>
        <td>(Optimized) Campaign 3</td>
        <td>Ad Set 5</td>
        <td>$200.00</td>
        <td>225,000</td>
        <td>55,000</td>
        <td>$1,000.00</td>
        <td>11</td>
        <td>$90.91</td>
        <td>$1,050.00</td>
        <td>105.00%</td>
        <td>$95.45</td>
        <td>$18.18</td>
    </tr>}
    { viewOptimizedData &&<tr>
        <td>(Optimized) Campaign 3</td>
        <td>Ad Set 6</td>
        <td>$200.00</td>
        <td>125,000</td>
        <td>65,000</td>
        <td>$1,000.00</td>
        <td>11</td>
        <td>$90.91</td>
        <td>$550.00</td>
        <td>55.00%</td>
        <td>$50.00</td>
        <td>$15.38</td>
    </tr>}







             </tbody> 
      </>
    );
  }

  function AdsTable() {
    return (
      <>
      <thead>
      <tr>
                  <th>Campaign Name</th>
                  <th>Ad Sets</th>
                  <th>Ads</th>
                  <th>Budget</th>
                  <th>Impressions</th>
                  <th>Reach</th>
                  <th>Amount Spent</th>
                  <th>Purchases</th>
                  <th>Cost Per Purchase</th>
                  <th>Purchase Conversion Value</th>
                  <th>Purchase Roas</th>
                  <th>AOV</th>
                  <th>CPM</th>
                </tr>
              </thead>

    <tbody>   
    { viewInitialData && <tr>
            <td>Campaign 1</td>
            <td>Ad Set 1</td>
            <td>Ad 1</td>
            <td>Active</td>
            <td></td>
            <td>21,454</td>
            <td>9,490</td>
            <td>$200.00</td>
            <td>4</td>
            <td>$50.00</td>
            <td>$285.00</td>
            <td>142.50%</td>
            <td>$71.25</td>
            <td>$21.07</td>
        </tr> }
 
 { viewInitialData && <tr>
            <td>Campaign 1</td>
            <td></td>
            <td>Ad 2</td>
            <td>Active</td>
            <td></td>
            <td>7,847</td>
            <td>3,478</td>
            <td>$100.00</td>
            <td>2</td>
            <td>$50.00</td>
            <td>$116.00</td>
            <td>116.00%</td>
            <td>$58.00</td>
            <td>$28.75</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 1</td>
            <td>Ad Set 2</td>
            <td>Ad 3</td>
            <td>Active</td>
            <td></td>
            <td>25,487</td>
            <td>14,884</td>
            <td>$180.00</td>
            <td>7</td>
            <td>$25.71</td>
            <td>$525.00</td>
            <td>291.67%</td>
            <td>$75.00</td>
            <td>$12.09</td>
        </tr> }
       { viewInitialData && <tr>
            <td>Campaign 1</td>
            <td></td>
            <td>Ad 4</td>
            <td>Active</td>
            <td></td>
            <td>6,472</td>
            <td>3,393</td>
            <td>$120.00</td>
            <td>4</td>
            <td>$30.00</td>
            <td>$180.00</td>
            <td>150.00%</td>
            <td>$45.00</td>
            <td>$35.37</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 2</td>
            <td>Ad Set 3</td>
            <td>Ad 5</td>
            <td>Active</td>
            <td></td>
            <td>16,682</td>
            <td>6,340</td>
            <td>$150.00</td>
            <td>2</td>
            <td>$75.00</td>
            <td>$325.00</td>
            <td>216.67%</td>
            <td>$162.50</td>
            <td>$23.66</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 2</td>
            <td></td>
            <td>Ad 6</td>
            <td>Active</td>
            <td></td>
            <td>7,143</td>
            <td>3,271</td>
            <td>$50.00</td>
            <td>0</td>
            <td>$0.00</td>
            <td>$0.00</td>
            <td>0.00%</td>
            <td>$0.00</td>
            <td>$15.29</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 2</td>
            <td>Ad Set 4</td>
            <td>Ad 7</td>
            <td>Active</td>
            <td></td>
            <td>35,971</td>
            <td>15,656</td>
            <td>$325.00</td>
            <td>5</td>
            <td>$65.00</td>
            <td>$575.00</td>
            <td>176.92%</td>
            <td>$115.00</td>
            <td>$20.76</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 2</td>
            <td></td>
            <td>Ad 8</td>
            <td>Active</td>
            <td></td>
            <td>10,320</td>
            <td>4,954</td>
            <td>$75.00</td>
            <td>1</td>
            <td>$75.00</td>
            <td>$50.00</td>
            <td>66.67%</td>
            <td>$50.00</td>
            <td>$15.14</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 3</td>
            <td>Ad Set 5</td>
            <td>Ad 9</td>
            <td>Active</td>
            <td></td>
            <td>10,000</td>
            <td>8,000</td>
            <td>$100.00</td>
            <td>1</td>
            <td>$100.00</td>
            <td>$100.00</td>
            <td>100.00%</td>
            <td>$100.00</td>
            <td>$12.50</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 3</td>
            <td></td>
            <td>Ad 10</td>
            <td>Active</td>
            <td></td>
            <td>15,000</td>
            <td>13,000</td>
            <td>$100.00</td>
            <td>2</td>
            <td>$50.00</td>
            <td>$125.00</td>
            <td>125.00%</td>
            <td>$62.50</td>
            <td>$7.69</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 3</td>
            <td>Ad Set 6</td>
            <td>Ad 11</td>
            <td>Active</td>
            <td></td>
            <td>20,000</td>
            <td>18,000</td>
            <td>$100.00</td>
            <td>3</td>
            <td>$33.33</td>
            <td>$150.00</td>
            <td>150.00%</td>
            <td>$50.00</td>
            <td>$5.56</td>
        </tr> }
        { viewInitialData &&<tr>
            <td>Campaign 3</td>
            <td></td>
            <td>Ad 12</td>
            <td>Active</td>
            <td></td>
            <td>25,000</td>
            <td>23,000</td>
            <td>$100.00</td>
            <td>4</td>
            <td>$25.00</td>
            <td>$175.00</td>
            <td>175.00%</td>
            <td>$43.75</td>
            <td>$4.35</td>
        </tr> }


          

        { viewOptimizedData && <tr>
        <td>Campaign 1</td>
        <td>Ad Set 1</td>
        <td>Ad 1</td>
        <td>Active</td>
        <td></td>
        <td>28,392</td>
        <td>19,948</td>
        <td>$190.00</td>
        <td>7</td>
        <td>$27.14</td>
        <td>$415.00</td>
        <td>218.42%</td>
        <td>$59.29</td>
        <td>$9.52</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 2</td>
        <td>Active</td>
        <td></td>
        <td>1,716</td>
        <td>821</td>
        <td>$35.00</td>
        <td>1</td>
        <td>$35.00</td>
        <td>$35.00</td>
        <td>100.00%</td>
        <td>$35.00</td>
        <td>$42.63</td>
    </tr> }
    { viewOptimizedData && <tr>
        <td></td>
        <td>Ad Set 2</td>
        <td>Ad 3</td>
        <td>Active</td>
        <td></td>
        <td>35,971</td>
        <td>15,656</td>
        <td>$300.00</td>
        <td>12</td>
        <td>$25.00</td>
        <td>$1,010.00</td>
        <td>336.67%</td>
        <td>$84.17</td>
        <td>$19.16</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 4</td>
        <td>Active</td>
        <td></td>
        <td>10,320</td>
        <td>4,954</td>
        <td>$75.00</td>
        <td>5</td>
        <td>$15.00</td>
        <td>$200.00</td>
        <td>266.67%</td>
        <td>$40.00</td>
        <td>$15.14</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td>Campaign 2</td>
        <td>Ad Set 3</td>
        <td>Ad 5</td>
        <td>Active</td>
        <td></td>
        <td>18,771</td>
        <td>6,667</td>
        <td>$150.00</td>
        <td>4</td>
        <td>$37.50</td>
        <td>$300.00</td>
        <td>200.00%</td>
        <td>$75.00</td>
        <td>$22.50</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 6</td>
        <td>Paused</td>
        <td></td>
        <td>0</td>
        <td>0</td>
        <td>$0.00</td>
        <td>0</td>
        <td>$0.00</td>
        <td>$0.00</td>
        <td>0.00%</td>
        <td>$0.00</td>
        <td>$0.00</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 7</td>
        <td>Active</td>
        <td></td>
        <td>11,245</td>
        <td>5,416</td>
        <td>$50.00</td>
        <td>2</td>
        <td>$25.00</td>
        <td>$150.00</td>
        <td>300.00%</td>
        <td>$75.00</td>
        <td>$9.23</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td>Ad Set 4</td>
        <td>Ad 8</td>
        <td>Paused</td>
        <td></td>
        <td>0</td>
        <td>0</td>
        <td>$0.00</td>
        <td>0</td>
        <td>$0.00</td>
        <td>$0.00</td>
        <td>0.00%</td>
        <td>$0.00</td>
        <td>$0.00</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 9</td>
        <td>Active</td>
        <td></td>
        <td>33,709</td>
        <td>14,617</td>
        <td>$250.00</td>
        <td>6</td>
        <td>$41.67</td>
        <td>$550.00</td>
        <td>220.00%</td>
        <td>$91.67</td>
        <td>$17.10</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 10</td>
        <td>Active</td>
        <td></td>
        <td>12,203</td>
        <td>5,488</td>
        <td>$150.00</td>
        <td>3</td>
        <td>$50.00</td>
        <td>$250.00</td>
        <td>166.67%</td>
        <td>$83.33</td>
        <td>$27.33</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td>Campaign 3</td>
        <td>Ad Set 5</td>
        <td>Ad 9</td>
        <td>Active</td>
        <td></td>
        <td>10,100</td>
        <td>9,000</td>
        <td>$100.00</td>
        <td>2</td>
        <td>$50.00</td>
        <td>$125.00</td>
        <td>125.00%</td>
        <td>$62.50</td>
        <td>$11.11</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 10</td>
        <td>Active</td>
        <td></td>
        <td>15,100</td>
        <td>14,000</td>
        <td>$100.00</td>
        <td>3</td>
        <td>$33.33</td>
        <td>$150.00</td>
        <td>150.00%</td>
        <td>$50.00</td>
        <td>$7.14</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td>Ad Set 6</td>
        <td>Ad 11</td>
        <td>Active</td>
        <td></td>
        <td>20,100</td>
        <td>19,000</td>
        <td>$100.00</td>
        <td>4</td>
        <td>$25.00</td>
        <td>$175.00</td>
        <td>175.00%</td>
        <td>$43.75</td>
        <td>$5.26</td>
    </tr> }
     { viewOptimizedData && <tr>
        <td></td>
        <td></td>
        <td>Ad 12</td>
        <td>Active</td>
        <td></td>
        <td>25,100</td>
        <td>24,000</td>
        <td>$100.00</td>
        <td>5</td>
        <td>$20.00</td>
        <td>$200.00</td>
        <td>200.00%</td>
        <td>$40.00</td>
        <td>$4.17</td>
    </tr> }







    </tbody>

      </>
    );
  }
  




  if(user === null) {
    return (
      <>
      <NavbarComponent />
      <div>
        <h1>Not logged in</h1>
        <p>Please log in or sign up to view this page</p>
      </div>
      </>
    );
  }

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
          <Navbar.Brand href="/">
                <img
                   src={logo}
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                   />
             </Navbar.Brand>
          </div>
        </div>
        <div className="navbar-right">
          <a href="/instructions">View Instructions</a>
          <a href="/knowledge-center">Knowledge Center</a>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown} className="dropdown-toggle">
            {user.name}
            </button>
            <div className="dropdown-menu">
              <a href="/options">Dashboard</a>
                <a href="/settings">Settings</a>
                <a href="/billing">Campaign History</a>
              <a href="/logout">Logout</a>
            </div>
          </div>
        </div>
      </nav>
      {/* <NavbarComponent /> */}

      {/* Main Content */}
      <div className="dashboard-container">
        <div className="header-section">
          <h1>Campaigns</h1>
          <div className="buttons">
            <button className="btn btn-primary" onClick={()=>{setViewInitialData(!viewInitialData)}}>View Initial Data</button>
            <button className="btn btn-success" onClick={()=>{setViewOptimizedData(!viewOptimizedData)}}>View Optimized Data</button>
            <button className="btn btn-secondary">Understand these results</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
      <button
        className={`tab ${activeTab === 'Campaigns' ? 'active' : ''}`}
        onClick={() => setActiveTab('Campaigns')}
      >
        Campaigns
      </button>
      <button
        className={`tab ${activeTab === 'Ad Sets' ? 'active' : ''}`}
        onClick={() => setActiveTab('Ad Sets')}
      >
        Ad Sets
      </button>
      <button
        className={`tab ${activeTab === 'Ads' ? 'active' : ''}`}
        onClick={() => setActiveTab('Ads')}
      >
        Ads
      </button>
      <button className='btn btn-primary' style={{ position: 'absolute', right: '5%' }}onClick={() => navigate('/CampaignManager')}>Create Campaign</button>

    </div>
       

        {/* Table */}
        <div className="table-container">
          <h2>Optimized Campaigns</h2>
          <table>
            {activeTab === 'Campaigns' && CampaignsTable()}
            {activeTab === 'Ad Sets' && AdSetsTable()}
            {activeTab === 'Ads' && AdsTable()}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


