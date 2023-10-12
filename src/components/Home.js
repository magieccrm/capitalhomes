import React from "react";

import {  Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content py-5">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-bd cardbox">
                  <div className="panel-body bd-panel">
                    <div className="statistic-box text-center">
                      {" "}<i className="fa fa-credit-card fa-2x" />
                      <h4> Invoice Awaiting Payment 111111111111111</h4>
                      <h3>
                        {" "}Rs. 535920.00 (<span className="count-number"> 59 </span>){" "}
                      </h3>
                    </div>      
                  </div>
                </div>
                  </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-bd cardbox2">
                  <div className="panel-body bd-panel">
                    <div className="statistic-box text-center">
                      {" "}<i className="fa fa-money fa-2x" />
                      <h4>Yearly Sales</h4>
                      <h3>
                        {" "}Rs. 0 (<span className="count-number"> 62 </span>){" "}
                      </h3>
                    </div>
                  </div>
                </div>
                   </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-bd cardbox3">
                  <div className="panel-body bd-panel">
                    <div className="statistic-box text-center">
                      {" "}<i className="fa fa-money fa-2x" />
                      <h4>Monthly Sales</h4>
                      <h3>
                        {" "}Rs. 0 (<span className="count-number"> 1 </span>){" "}
                      </h3>
                    </div>
                  </div>
                </div>
                  </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-bd cardbox4">
                  <div className="panel-body bd-panel">
                    <div className="statistic-box text-center">
                      {" "}<i className="fa fa-frown-o fa-2x" />
                      <h4>Miss opportunity</h4>
                      <h3>
                        {" "}Rs. 120000.00 (<span className="count-number"> 26 </span>){" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-bd cardbox3">
                  <div className="panel-body bd-panel">
                    <div className="statistic-box text-center">
                      {" "}<i className="fa fa-tasks fa-2x" />
                      <h4>ToDo</h4>
                      <h3>
                        {" "}<span
                          className="count-number"
                          style={{ color: "red" }}
                        >
                          1
                        </span>/ <span className="count-number">1 </span>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <div className="panel panel-bd cardbox3">
                  <div className="panel-body bd-panel">
                    <div className="statistic-box text-center">
                      {" "}<i className="fa fa-comments fa-2x" />
                      <h4>SMS Status</h4>
                      <h3>
                        <span className="count-number"> 4249 </span>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /.row */}
            {/* Main row */}

            
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable">
                      <div className="panel-heading ui-sortable-handle">
                        <div className="panel-title">
                          <h4>Calender</h4>
                          <div className="card card-primary">
                            <div className="card-body p-0">
                              <div id="calendar"></div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable">
                      <div className="panel-heading ui-sortable-handle">
                        <div className="panel-title">
                          <h4>Leads Source Overview</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="panel panel-bd lobidisable lobipanel lobipanel-sortable">
                      <div className="panel-heading ui-sortable-handle">
                        <div className="panel-title">
                          <h4>Task</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                   
              
            </div>
              <div className="row"> 
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8  lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="JboVwpEyCD">
                    <div className="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="JboVwpEyCD" data-index={0}>
                      <div className="panel-heading ui-sortable-handle">
                        <div className="panel-title" style={{maxWidth: 'calc(100% - 0px)'}}>
                          <h4>Income Graph</h4>
                        </div>
 
 

                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="panel panel-bd ">
                      <div className="panel-heading">
                        <div className="panel-title">
                          <h4>Best Employee List
                            <form method="post" name="empForm" id="empForm" style={{float: 'right'}}>
                              <select name="duration" id="empDur" onchange="bestEmp();">
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                                <option value="alltime">All Time</option>
                              </select>
                            </form>
                          </h4>
                        </div>
                      </div>
                      <div className="panel-body personal">
                        <ul className="emply" id="bemplist">
                          <li>1. Anurag (Rs. 0)</li>
                          <li>2. Devrishi (Rs. 0)</li>
                          <li>3. Jassy (Rs. 0)</li>
                          <li>4. Neha (Rs. 0)</li>
                          <li>5. nisar (Rs. 0)</li>
                          <li>6. Rahul (Rs. 0)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  </div>
             <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-4">
        <div className="panel panel-bd ">
          <div className="panel-heading">
            <div className="panel-title">
              <h4>Best Value Services
                <form method="post" name="bserviceForm" id="bserviceForm" style={{float: 'right'}}>
                  <select name="duration" id="sDur" onchange="bestVS();">
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="alltime">All Time</option>
                  </select>
                </form>
              </h4>
            </div>
          </div>
          <div className="panel-body personal Best Value Services Best Value Services">
            <ul className="emply" id="bvslist">
              <li>1. E-Commerce (Rs. 15000.00)</li>
              <li>2.   (Rs. 0)</li>
              <li>3. Real-Estate (Rs. 0)</li>
              <li>4. WhatsApp (Rs. 0)</li>
              <li>5. Website Maintenance Qtly (Rs. 0)</li>
              <li>6. Website Maintenance (Rs. 0)</li>
              <li>7. Web Hosting (Rs. 0)</li>
              <li>8. Web Designing  Development (Rs. 0)</li>
              <li>9. Test Razor Pay (Rs. 0)</li>
              <li>10. Staff Management Fee (Rs. 0)</li>
            </ul>
          </div>
        </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="panel panel-bd">
                      <div className="panel-heading">
                        <div className="panel-title">
                          <h4>System Information</h4>
                        </div>
                      </div>
                      <div className="panel-body">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Current Version</td>
                              <th>1.0.0</th>
                            </tr>
                            <tr>
                              <td>Latest Version</td>
                              <th>1.0.0</th>
                            </tr>
                            <tr>
                              <td>PHP Version</td>
                              <th>7.4.33</th>
                            </tr>
                            <tr>
                              <td>SignUp Date</td>
                              <th>01-01-2021 11:44:29 AM</th>
                            </tr>
                            <tr>
                              <td>Expiry Date</td>
                              <th />
                            </tr>
                            <tr>
                              <td>Invoice Cron Run</td>
                              <th className="small">23-09-2023 10:30:02 AM</th>
                            </tr>
                            <tr>
                              <td>Task Cron Run</td>
                              <th className="small">23-09-2023 03:49:01 PM</th>
                            </tr>
                            <tr>
                              <td>Followup Cron Run</td>
                              <th className="small">23-09-2023 03:50:07 PM</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="gjY82eGUtA">
                    <div className="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="gjY82eGUtA" data-index={0}>
                      <div className="panel-heading ui-sortable-handle">
                        <div className="panel-title" style={{maxWidth: 'calc(100% - 0px)'}}>
                          <h4>Lastest Version Features</h4>
                        </div>
                      </div>
                      <div className="panel-body">
                        <table className="table">
                          <tbody>
                            <tr>
                              <th>1. </th>
                              <td>Send proposal and quotation from system</td>
                            </tr>
                            <tr>
                              <th>2. </th>
                              <td>Multiple role admin, marketing manager, sales executive</td>
                            </tr>
                            <tr>
                              <th>3. </th>
                              <td>Activity log</td>
                            </tr>
                            <tr>
                              <th>4. </th>
                              <td>Add lead from custom form/campaign</td>
                            </tr>
                            <tr>
                              <th>5. </th>
                              <td>Internal message/chatting system</td>
                            </tr>
                            <tr>
                              <th>6. </th>
                              <td>ChatBot</td>
                            </tr>
                            <tr>
                              <th>7. </th>
                              <td>Internal video meeting</td>
                            </tr>
                            <tr>
                              <th colSpan={3} style={{textAlign: 'center'}}> <Link target="_blank" to="">View All</Link> </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
            </div>

  

            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}

export default Home;
