import { Tooltip } from "bootstrap";
import React, { useState } from "react";
import randomcolor from 'randomcolor';
import { Link } from "react-router-dom";
import LineChart from "./LineChart";
import LineChart1 from "./LineChart1";
import { getAllAgent, getAllAgentWithData } from "../features/agentSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from 'react-apexcharts';
import { getAllLeadSource } from "../features/leadSource";
import axios from "axios";
import MyCalendar from "../components/Pages/MonthlyCalendar"
import Notification from "./Notification";

function Home() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const DBuUrl = process.env.REACT_APP_DB_URL;
  const [Sale, setSale] = useState([]);
  const [leadsource, setleadsource] = useState([]);
  const [leadsourcedata1, setleadsourcedata] = useState([]);
  var { agent } = useSelector((state) => state.agent);
  const { leadSourcedata } = useSelector((state) => state.leadSource);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        // dispatch(getAllAgent());
        dispatch(getAllLeadSource())
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1();

    if (localStorage.getItem("role") === "admin") {
      getSale()
      getAllLeadSourceOverview()
      dispatch(getAllAgent());
      getHigstNoOfCall();
      getLeadCountData();
      AgentWishLeadCount1({ role: localStorage.getItem("user_id"), user_id: localStorage.getItem("user_id") })
    }
    if (localStorage.getItem("role") === "TeamLeader") {
      YearlySaleApiForTeamLeader()
      LeadSourceOverviewApiForTeamLeader()
      DashboardLeadCountOfUserByTeamLeader();
      dispatch(getAllAgentWithData({ assign_to_agent: localStorage.getItem("user_id") }));
      GetUserCallAccordingToTeamLeader(localStorage.getItem("user_id"))
      AgentWishLeadCount1({ role: localStorage.getItem("user_id"), user_id: localStorage.getItem("user_id") })
    }
    if (localStorage.getItem("role") === "user") {
      YearlySaleApiForUser()
      LeadSourceOverviewApiForUser()
      DashboardLeadCountOfUser();
      dispatch(getAllAgent({ assign_to_agent: localStorage.getItem("user_id") }));
      getHigstNoOfCall();
      AgentWishLeadCount1({ role: localStorage.getItem("user_id"), user_id: localStorage.getItem("user_id") })
    }





  }, []);


  const [Detail, setDetail] = useState([]);
  const [LeadCount, setLeadCount] = useState([]);


  const AgentWishLeadCount1 = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/AgentWishLeadCount1`,
        { role: localStorage.getItem("role"), user_id: localStorage.getItem("user_id") },
        {
          headers: {
            "Content-Type": "application/json",
            "mongodb-url": DBuUrl,
          }
        }
      );
      setLeadCount(responce?.data?.Count);
    } catch (error) {

      console.log(error);
      setLeadCount(error.responce?.data?.Count);
    }
  }

  const getHigstNoOfCall = async () => {
    try {
      const responce = await axios.get(
        `${apiUrl}/GetAllUserCallLogById/`, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setDetail(responce?.data?.array);
    } catch (error) {

      console.log(error);
      setDetail(error.responce?.data?.array);
    }
  }
  const GetUserCallAccordingToTeamLeader = async (assign_to_agent) => {
    try {
      const responce = await axios.post(
        `${apiUrl}/GetUserCallAccordingToTeamLeader`, {
        assign_to_agent,
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setDetail(responce?.data?.array);
    } catch (error) {

      console.log(error);
      setDetail(error.responce?.data?.array);
    }
  }


  const getSale = async () => {
    try {
      const responce = await axios.get(
        `${apiUrl}/YearlySaleApi`, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        },
      }
      );
      setSale(responce?.data?.details);

    } catch (error) {

      console.log(error);
    }
  };

  const YearlySaleApiForTeamLeader = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/YearlySaleApiForTeamLeader`, {
        user_id: localStorage.getItem("user_id"),
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setSale(responce?.data?.details);
    } catch (error) {

      console.log(error);

    }
  }
  const YearlySaleApiForUser = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/YearlySaleApiForUser`, {
        user_id: localStorage.getItem("user_id"),
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setSale(responce?.data?.details);
    } catch (error) {

      console.log(error);

    }
  }

  const getAllLeadSourceOverview = async () => {
    try {
      const responce = await axios.get(
        `${apiUrl}/lead_source_overview_api`,
        {
          headers: {
            "Content-Type": "application/json",
            "mongodb-url": DBuUrl,
          },
        }
      );
      setleadsourcedata(responce?.data?.Lead_source_count);
      setleadsource(responce?.data?.Lead_source_name);

    } catch (error) {
      console.log(error);
    }
  }
  const LeadSourceOverviewApiForTeamLeader = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/LeadSourceOverviewApiForTeamLeader`, {
        user_id: localStorage.getItem("user_id"),
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setleadsourcedata(responce?.data?.Lead_source_count);
      setleadsource(responce?.data?.Lead_source_name);
    } catch (error) {

      console.log(error);

    }
  }
  const LeadSourceOverviewApiForUser = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/LeadSourceOverviewApiForUser`, {
        user_id: localStorage.getItem("user_id"),
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setleadsourcedata(responce?.data?.Lead_source_count);
      setleadsource(responce?.data?.Lead_source_name);
    } catch (error) {

      console.log(error);

    }
  }


  const [leadcountdata, setleadcountdata] = useState({});
  const getLeadCountData = async () => {
    try {
      const responce = await axios.get(
        `${apiUrl}/DashboardLeadCount`, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        },
      }
      );
      setleadcountdata(responce?.data?.Count);
    } catch (error) {
      console.log(error);
    }
  }
  const DashboardLeadCountOfUser = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/DashboardLeadCountOfUser`, {
        user_id: localStorage.getItem("user_id"),
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setleadcountdata(responce?.data?.Count);
    } catch (error) {

      console.log(error);
      setleadcountdata(error.responce?.data?.Count);
    }
  }
  const DashboardLeadCountOfUserByTeamLeader = async () => {
    try {
      const responce = await axios.post(
        `${apiUrl}/DashboardLeadCountOfUserByTeamLeader`, {
        user_id: localStorage.getItem("user_id"),
      }, {
        headers: {
          "Content-Type": "application/json",
          "mongodb-url": DBuUrl,
        }
      }
      );
      setleadcountdata(responce?.data?.Count);
    } catch (error) {
   console.log(error);
      setleadcountdata(error.responce?.data?.Count);
    }
  }



  // const getAllUnassignLead=async()=>{
  //   try {
  //     const responce = await axios.get(
  //       `${apiUrl}/getAllUnassignLead`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "mongodb-url": DBuUrl,
  //       },
  //     }
  //     );
  //     setleadcountdata(responce?.data?.lead);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  const colors = randomcolor({ count: leadsourcedata1.length });
  const options = {
    labels: leadsource,
    colors: colors,
  };
  return (
    <div>
      {/* <Notification /> */}
      <div className="content-wrapper">
        <section className="content py-5">
          <div className="container ">
            <div className="row d-none">
              <div className="col-12 col-lg-6 col-md-6 col-xl-6 pl-0 ">
                <div className="cardbox02">
                  <div className="panel-body new_leads bd-panel">
                    <h2>New Lead</h2>
                    <p>16</p>
                  </div>
                  <div className="lead_img  align-items-center">
                    <img src="dist/img/Capture_Leads.png" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-xl-6 pl-0 ">
                <div className="cardbox02">
                  <div className="panel-body new_leads bd-panel">
                    <h2>UnAssigned Lead</h2>
                    <p>60</p>
                  </div>
                  <div className="lead_img  align-items-center">
                    <img src="dist/img/lead_img.png" />
                  </div>
                </div></div>

            </div>
            <div className="row">
              {
                Array?.isArray(leadcountdata) ? (
                  leadcountdata?.map((leadcountdata1, index) => (
                    leadcountdata1?.name === 'Pending' ? (
                      <div className="col-xs-6 col-sm-6 col-md-6 pl-0 dashboard-fixeds col-lg-4" key={index}>
                        <Link to="/followupleads">  <div className={`buttons-30 border-lefts${index + 1} mb-4`} role="button">
                          <div className="text-center pt-3">
                            <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
                              <i className="fa fa-solid fa-users text-red-500"></i>
                            </div>
                            <h5 className="mt-2 mb-2"><span className="counter-value">{leadcountdata1?.name}</span></h5>
                            <p className="text-slate-500 dark:text-zink-200">{leadcountdata1?.Value}</p>
                          </div>
                        </div></Link>
                      </div>
                    ) : leadcountdata1?.name === 'Total Lead' ? (
                      <div className="col-xs-6 col-sm-6 col-md-6 pl-0 dashboard-fixeds col-lg-4" key={index}>
                        <Link to="/leads">    <div className={`buttons-30 border-lefts${index + 1} mb-4`} role="button">
                          <div className="text-center pt-3">
                            <div className="flex items-center justify-center mx-auto  bg-green-100 rounded-full size-14 dark:bg-red-500/20">
                              <i className="fa fa-solid fa-user text-green-500"></i>
                            </div>
                            <h5 className="mt-2 mb-2"><span className="counter-value">{leadcountdata1?.name}</span></h5>
                            <p className="text-slate-500 dark:text-zink-200">{leadcountdata1?.Value}</p>
                          </div>
                        </div></Link>
                      </div>

                    ) : ( 
                      <div className="col-xs-6 col-sm-6 col-md-6 pl-0 dashboard-fixeds col-lg-4" key={index}>
                        <Link to={`/ImpSchedule/${leadcountdata1?.id}`}>    <div className={`button-30 border-lefts${index + 1} mb-4`} role="button">
                          <div className="text-center pt-3">
                            <div className="flex items-center justify-center mx-auto text-red-500 1 bg-custom-100 rounded-full size-14 dark:bg-red-500/20">
                              {index == 3 ? (<i className={`fa fa-solid fa-lightbulb-o text-custom-500 2`}>
                              </i>) : index == 4 ? (<i className={`fa fa-solid fa-calendar-check-o  text-purple-500 3`}></i>)
                                : index == 5 ? (<i className={`fa fa-solid fa-clock-o text-red-500 4`}></i>) :
                                  (<i className={`fa fa-solid fa-handshake-o text-custom-500 5`}></i>)}

                            </div>
                            <h5 className="mt-2 mb-2"><span className="counter-value">
                              {leadcountdata1?.name}</span></h5>
                            <p className="text-slate-500 dark:text-zink-200">{leadcountdata1?.Value}  </p>
                          </div>
                        </div></Link>
                      </div>

                    )
                  ))
                ) : (
                  <p>Loading or No Data</p>
                )
              }





            </div>

 <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pl-0">
                <div className="panel panel-bd  bg-white">
                  <div className="panel-heading">
                    <div className="panel-title   d-flex justify-content-between">
                      <div className="card-title mb-0">
                        <h5 className="mb-0">   Employee Report</h5>
                        <p className="since_list">Since Last Year</p>

                      </div>
                      <div className="value_serve">
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="sourceVisits">
                            <i className="fa fa-ellipsis-v fa-sm text-muted"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a className="dropdown-item" href="javascript:void(0);">Download</a>
                            <a className="dropdown-item" href="javascript:void(0);">View All</a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                  <div className="panel-body personal">
                    <div className="card-bodyes  ">
                      <ul className="p-0 m-0">
                        <li className="mb-1 d-flex justify-content-between align-items-center">
                          <div className="bg-label-success rounded">
                          </div>
                          <div className="d-flex justify-content-between w-100 flex-wrap">

                            <div className="d-flex">

                            </div>
                          </div>
                          <div className="d-flex justify-content-between w-100 flex-wrap">

                            <div className="d-flex">

                            </div>
                          </div>
                        </li>
                        {Detail?.map((Details, key) => {
                          const converttime = (ffgfgf) => {
                            const second = ffgfgf;
                            const hours = Math.floor(second / 3600);
                            const minutes = Math.floor((second % 3600) / 60);
                            const remainingSeconds = second % 60;
                            const timeconverted = hours + 'h ' + minutes + 'm ' + remainingSeconds + 's';
                            return timeconverted;
                          };
                          // Check if the user is a 'user' or not
                          const isUser = localStorage.getItem("role") === 'user';

                          // Check if the Details.user_id matches the logged-in user's user_id
                          const isCurrentUser = Details.user_id === localStorage.getItem("user_id");

                          if (isUser && isCurrentUser) {
                            return (
                              <li className="mb-3 d-flex justify-content-between align-items-center">
                                <div className="bg-label-success rounded">
                                  <img src="img/user_img.jpg" alt="User" className="rounded-circle me-3" width="28" />
                                </div>
                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                  <h6 className="mb-0 ms-3">   {Details?.username}</h6>
                                  <div className="d-flex">
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between phone_btns w-100 flex-wrap">
                                  <h6 className="mb-0 ms-3"> <i className="fa fa-phone" aria-hidden="true"></i> {Details?.HigstNoOfCall}  </h6>
                                  <div className="d-flex">
                                  </div>
                                </div>
                                <div className="d-flex  w-30">
                                  <h6 className="mb-0 ms-3">
                                    <span className="badge badge-primary light border-0">{converttime(Details?.TotalTime)}</span></h6>
                                  <div className="d-flex">
                                  </div>
                                </div>
                              </li>
                            );
                          } else if (!isUser) {
                            // Render for non-user role
                            return (
                              <li className="mb-3 d-flex justify-content-between align-items-center">
                                <div className="bg-label-success rounded">
                                  <img src="img/user_img.jpg" alt="User" className="rounded-circle me-3" width="28" />
                                </div>
                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                  <h6 className="mb-0 ms-3">   {Details?.username}</h6>
                                  <div className="d-flex">
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between phone_btns w-100 flex-wrap">
                                  <h6 className="mb-0 ms-3"> <i className="fa fa-phone" aria-hidden="true"></i> {Details?.HigstNoOfCall}  </h6>
                                  <div className="d-flex">
                                  </div>
                                </div>
                                <div className="d-flex  w-30">
                                  <h6 className="mb-0 ms-3">
                                    <span className="badge badge-primary light border-0">{converttime(Details?.TotalTime)}</span></h6>
                                  <div className="d-flex">
                                  </div>
                                </div>
                              </li>
                            );
                          } else {
                            return null; // Render nothing if not a user and not the current user
                          }


                        })}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="panel panel-bd  bg-white">
                  <div className="panel-heading">
                    <div className="panel-title   d-flex justify-content-between">
                      <div className="card-title mb-0">
                        <h5 className="mb-0"> All Leads Information</h5>
                        <p className="since_list">Since Last Year</p>
                      </div>
                      <div className="value_serve">
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="sourceVisits">
                            <i className="fa fa-ellipsis-v fa-sm text-muted"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a className="dropdown-item" href="javascript:void(0);">Download</a>
                            <a className="dropdown-item" href="javascript:void(0);">View All</a>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>

                  <div className="panel-body personal">
                    <div className="card-bodyes  ">
                      <ul className="p-0 m-0">
                        <li className="mb-1 d-flex justify-content-between align-items-center">
                          <div className="bg-label-success rounded">
                          </div>


                        </li>
                        {LeadCount?.map((LeadCount1, key) => {
                          return (
                            <li className="mb-3 d-flex justify-content-between align-items-center">
                              <div className="badge bg-label-secondaryess p-2 me-3 rounded svg-icons-prev">
                                <i className="fab fa fa-user" aria-hidden="true"></i>
                              </div>
                              <div className="d-flex justify-content-between w-100 flex-wrap">
                                <h6 className="mb-0 ms-3">   {LeadCount1?.name}</h6>
                                <div className="d-flex">
                                </div>
                              </div>
                              <div className="d-flex justify-content-between w-100 flex-wrap">

                                <div className="d-flex">
                                </div>
                              </div>
                              <div className="d-flex  w-30">
                                <h6 className="mb-0 ms-3"> <span className="badge badge-primaryess light border-0">{LeadCount1?.Value}</span></h6>
                                <div className="d-flex">
                                </div>
                              </div>
                            </li>


                          );
                        })}
                      </ul>
                    </div>

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
