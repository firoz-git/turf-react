import React from 'react'
import './Reserve.css'
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
// import Button from '@mui/material/Button'
import { styled } from '@mui/system'; // Import styled utility from @mui/system
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import DateClick from '../components/DateClick';




function Reserve() {
  const DynamicColorButton = styled(Button)(({ color }) => ({
    color: color || 'red', // Default to orange if color prop is not provided
  }));
  const slots = {
    morning: ['9:00 AM-10:00 AM', '10:00 AM', '11:00 AM'],
    afternoon: ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'],
    evening: ['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'],
  };

  const renderSlots = (timeOfDay) => {
    return slots[timeOfDay].map((slot, index) => (
      <Grid item key={index}>
        <Button variant="outlined" color="primary">
          {slot}
        </Button>
      </Grid>
    ));
  };
  return (
    <div>
      <header className="header-sky">
        <div className="menu-header">
          <nav className="navbar navbar-fixed-top">
            <div className="container">
              <div className="navbar-header ">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar "></span>
                  <span className="icon-bar "></span>
                  <span className="icon-bar "></span>
                </button>
                <a className="navbar-brand" href="file:///E:/Xampp/htdocs/skyline/index.html" title="Skyline"><img
                  src="images/Home-1/sky-logo-header.png" alt="#" /></a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to='/' ><a title="Home">Home</a></Link>
                  </li>
                  <li className="dropdown ">
                    <Link to='/reservation' ><a href="reservation_1.html" >RESERVATION</a></Link>
                  </li>
                  <li><Link to='/about'><a href="about.html" title="About">About</a></Link></li>
                  <li><Link to='/contact'><a href="contact.html" title="Contact">Contact</a></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner-tems text-center">
        <div className="container">
          <div className="banner-content">
            <h2>RESERVATION</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </section>
      <section className="section-reservation-page">
        <div className="container">
          <div className="reservation-page">
            <section className="section-slider  text-center section-slider-v3">
              <div className="container">
                <OwlCarousel className="owl-main owl-carousel owl-theme" items={8} responsive={{
                  0: {
                    items: 4
                  },
                  600: {
                    items: 6
                  },
                  1000: {
                    items: 8
                  }
                }}><DateClick />
                </OwlCarousel>
              </div>
            </section>
            {/* <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">FIRST TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <DynamicColorButton variant="outlined" style={{ marginRight: 10, marginTop: 10 }}>05:00 am <br />06:00 am</DynamicColorButton>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }}>07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }} >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }} >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" s>05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">SECOND TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">THIRD TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">iv className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">FIRST TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <DynamicColorButton variant="outlined" style={{ marginRight: 10, marginTop: 10 }}>05:00 am <br />06:00 am</DynamicColorButton>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }}>07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }} >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" style={{ marginRight: 10, marginTop: 10 }} >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" s>05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">SECOND TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <h4 className="widget-title">THIRD TURF RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">Morning Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button></Button>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div> *
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">AfterNoon Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>

                      </div>
                      <h6 className="check_availability_title">Evening Section</h6>
                      <div className="check_availability-field">
                        <Button variant="outlined" >05:00 am <br />06:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button variant="outlined" >07:00 am <br />08:00 am</Button>
                        <Button></Button>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div> */}
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="widget widget_check_availability">
                    <div className="events-img"><img src="images/Home-1/Our-Events-1.jpg" className="img-responsive"
                      alt="Image" /></div>
                    {/*<h4 className="widget-title">YOUR RESERVATION</h4>
                    <div className="check_availability">
                      <h6 className="check_availability_title">your stay dates</h6>
                      <div className="check_availability-field">
                        <label>Arrive</label>
                        <div className="input-group date" data-date-format="dd-mm-yyyy" id="datepicker1">
                          <input className="form-control wrap-box" type="text" placeholder="Arrival Date" />
                          <span className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                        </div>
                      </div>
                      <div className="check_availability-field">
                        <label>Night</label>
                        <select className="awe-select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="check_availability-field">
                        <label>Depature</label>
                        <div id="datepicker2" className="input-group date" data-date-format="dd-mm-yyyy">
                          <input className="form-control wrap-box" type="text" placeholder="Departure Date" />
                          <span className="input-group-addon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                        </div>
                      </div>
                      <h6 className="check_availability_title">ROOMS &amp; GUest</h6>
                      <div className="check_availability-field">
                        <label>ROOMS</label>
                        <select className="awe-select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="check_availability_group">
                        <span className="label-group">ROOMS 1</span>
                        <div className="check_availability-field_group">
                          <div className="check_availability-field">
                            <label>Adult</label>
                            <select className="awe-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div className="check_availability-field">
                            <label>Chirld</label>
                            <select className="awe-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="check_availability_group">
                        <span className="label-group">ROOMS 2</span>
                        <div className="check_availability-field_group">
                          <div className="check_availability-field">
                            <label>Adult</label>
                            <select className="awe-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div className="check_availability-field">
                            <label>Chirld</label>
                            <select className="awe-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button className="btn-room btn">CHECK AVAILABLE</button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className=" col-lg-9 col-md-8 col-sm-12 col-xs-12">
                <div className="reservation_content bg-gray">
                  <h2 className="reservation-heading">Availability</h2>
                  <div className="reservation_step">
                    <ul>
                      <li className="active"><a><img src="images/Home-1/about-icon-8.png" className="img-responsive" alt="Image" /></a></li>
                      <li><a><img src="images/Home-1/about-icon-8.png" className="img-responsive" alt="Image" /></a></li>
                      <li><a ><img src="images/Home-1/about-icon-8.png" className="img-responsive" alt="Image" /></a></li>
                      <li><a ><img src="images/Home-1/about-icon-8.png" className="img-responsive" alt="Image" /></a></li>
                      <li><a ><img src="images/Home-1/about-icon-8.png" className="img-responsive" alt="Image" /></a></li>
                    </ul>
                  </div>
                  {/* <!-- <div className="col-sm-6">
                                <div className="reservation-calendar_custom">
                                    <div className="reservation-calendar_title">
                                        <span className="reservation-calendar_month">JUNE</span>
                                        <span className="reservation-calendar_year">2017</span>
                                        <a  className="reservation-calendar_prev reservation-calendar_corner"><i className="ion-ios-arrow-thin-left"></i></a>
                                    </div>
                                    <table className="reservation-calendar_tabel">
                                        <thead>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                        </thead>
                                        <tr>
                                            <td></td>
                                            <td className="reservation-calendar_current-date">
                                                <a ><small>1</small> <span>Today</span></a>
                                            </td>
                                            <td><a ><small>2</small> </a></td>
                                            <td className=" active"><a ><small>3</small><span>Arrive</span></a></td>
                                            <td className=" active"><a ><small>4</small></a></td>
                                            <td className=" active"><a ><small>5</small></a></td>
                                            <td className=" active"><a ><small>6</small><span>Depart</span></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>7</small></a></td>
                                            <td><a ><small>8</small></a></td>
                                            <td><a ><small>9</small></a></td>
                                            <td><a ><small>10</small></a></td>
                                            <td className="reservation-calendar_current-select"><a ><small>11</small></a></td>
                                            <td className="reservation-calendar_current-select"><a ><small>12</small></a></td>
                                            <td><a ><small>13</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>14</small></a></td>
                                            <td><a ><small>15</small></a></td>
                                            <td><a ><small>16</small></a></td>
                                            <td><a ><small>17</small></a></td>
                                            <td><a ><small>18</small></a></td>
                                            <td><a ><small>19</small></a></td>
                                            <td><a ><small>20</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>21</small></a></td>
                                            <td><a ><small>22</small></a></td>
                                            <td><a ><small>23</small></a></td>
                                            <td><a ><small>24</small></a></td>
                                            <td><a ><small>25</small></a></td>
                                            <td><a ><small>26</small></a></td>
                                            <td><a ><small>27</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>28</small></a></td>
                                            <td><a ><small>29</small></a></td>
                                            <td><a ><small>30</small></a></td>
                                            <td><a ><small>31</small></a></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div> --> */}
                  <div className="col-sm-12">
                    <div className="reservation-calendar_custom">
                      {/* <div className="reservation-calendar_title">
                       <span className="reservation-calendar_month">JUNE</span> 
                        <span className="reservation-calendar_year">Book Your Slots</span>
                        <a  className="reservation-calendar_next reservation-calendar_corner"><i className="ion-ios-arrow-thin-right"></i></a>
                      </div>*/}
                      <Box sx={{ padding: 3 }}>
                        {/* <Typography variant="h4" gutterBottom>
                Slot Booking
            </Typography> */}
                        <Paper sx={{ padding: 2, marginBottom: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Morning
                          </Typography>
                          <Grid container spacing={2}>
                            {renderSlots('morning')}
                          </Grid>
                        </Paper>
                        <Paper sx={{ padding: 2, marginBottom: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Afternoon
                          </Typography>
                          <Grid container spacing={2}>
                            {renderSlots('afternoon')}
                          </Grid>
                        </Paper>
                        <Paper sx={{ padding: 2, marginBottom: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Evening
                          </Typography>
                          <Grid container spacing={2}>
                            {renderSlots('evening')}
                          </Grid>
                        </Paper>
                      </Box>
                      {/* <table className="reservation-calendar_tabel">
                                        <thead>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                        </thead>
                                        <tr>
                                            <td></td>
                                            <td className="reservation-calendar_current-date">
                                                <a ><small>1</small></a>
                                            </td>
                                            <td className="current-select"><a ><small>2</small></a></td>
                                            <td className="current-select"><a ><small>3</small></a></td>
                                            <td className="current-select"><a ><small>4</small></a></td>
                                            <td className="current-select"><a ><small>5</small></a></td>
                                            <td><a ><small>6</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>7</small></a></td>
                                            <td><a ><small>8</small></a></td>
                                            <td><a ><small>9</small></a></td>
                                            <td><a ><small>10</small></a></td>
                                            <td className="reservation-calendar_current-select"><a ><small>11</small></a></td>
                                            <td className="reservation-calendar_current-select"><a ><small>12</small></a></td>
                                            <td><a ><small>13</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>14</small></a></td>
                                            <td><a ><small>15</small></a></td>
                                            <td><a ><small>16</small></a></td>
                                            <td><a ><small>17</small></a></td>
                                            <td><a ><small>18</small></a></td>
                                            <td><a ><small>19</small></a></td>
                                            <td><a ><small>20</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>21</small></a></td>
                                            <td><a ><small>22</small></a></td>
                                            <td><a ><small>23</small></a></td>
                                            <td><a ><small>24</small></a></td>
                                            <td><a ><small>25</small></a></td>
                                            <td><a ><small>26</small></a></td>
                                            <td><a ><small>27</small></a></td>
                                        </tr>
                                        <tr>
                                            <td><a ><small>28</small></a></td>
                                            <td><a ><small>29</small></a></td>
                                            <td><a ><small>30</small></a></td>
                                            <td><a ><small>31</small></a></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-sky">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
                <div className="icon-email">
                  <a title="Email"><img src="images/Home-1/footer-top-icon-l.png"
                    alt="Email" className="img-responsive" /></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5">
                <div className="textbox">
                  <form className="form-inline">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your email address"
                          aria-label="Search for..." />
                        <button className="btn btn-secondary" type="button">
                          <i className="ion-android-send"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 text-right">
                <div className="footer-icon-l">
                  <a title="Twitter"><i className="fa fa-twitter"
                    aria-hidden="true"></i></a>
                  <a title="Facebook"><i className="fa fa-facebook-square"
                    aria-hidden="true"></i></a>
                  <a title="Tripadvisor"><i className="fa fa-tripadvisor"
                    aria-hidden="true"></i></a>
                  <a title="Isnstagram"><i className="fa fa-instagram"
                    aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container">
            <div className="row padding-footer-mid">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="footer-logo text-center list-content">
                  <a href="index.html" title="Skyline"><img src="images/Home-1/sky-logo-footer.png"
                    alt="Image" /></a>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1  ">
                <div className="list-content">
                  <ul>
                    <li><a href="attractions.html" title="">Site Map</a></li>
                    <li><a href="tems_condition_1.html" title="">Term & Conditions</a></li>
                    <li><a title="">Privacy Policy</a></li>
                    <li><a title="">Help</a></li>
                    <li><a title="">Affiliate</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1 ">
                <div className="list-content ">
                  <ul>
                    <li><a title="">Our Location</a></li>
                    <li><a title="">Career</a></li>
                    <li><a href="about.html" title="">About Us</a></li>
                    <li><a href="contact.html" title="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1">
                <div className="list-content ">
                  <ul>
                    <li><a title="">FAQS</a></li>
                    <li><a title="">News</a></li>
                    <li><a href="gallery_1.html" title="">Photo & Video</a></li>
                    <li><a href="restaurant_1.html" title="">Restaurant</a></li>
                    <li><a title="">Gift Card</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                Copyright © 2017 by <a title="">EngoTheme.</a> SkyLine Hotel Theme
                crafted with love
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
                <div className="payments text-right">
                  <ul>
                    <li>
                      <a title="Paypal"><img src="images/Home-1/Paypal.png"
                        alt="Paypal" /></a>
                    </li>
                    <li>
                      <a title="Visa"><img src="images/Home-1/Visa.png"
                        alt="Visa" /></a>
                    </li>
                    <li>
                      <a title="Master"><img
                        src="images/Home-1/Master-card.png" alt="Master" /></a>
                    </li>
                    <li>
                      <a title="Discover"><img src="images/Home-1/Discover.png"
                        alt="Discover" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a title="sroll" className="scrollToTop"><i className="fa fa-angle-up"></i></a>

    </div>
  )
}

export default Reserve