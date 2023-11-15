import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "./style.css";
import NavbarAll from "../../components/PageComponent/NavbarAll";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import dayjs from "dayjs";
import { Cookies } from "react-cookie";
import "react-day-picker/dist/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);

  const apiUrlBase = "https://ketemuenak.fly.dev"
  const id = localStorage.getItem('id');
  const apiUrl = `${apiUrlBase}/eo/${id}/event`;

  const [formData, setFormData] = useState({
    foto: null,
    namaEvent: null,
    tanggalEvent: null,
    status: "buka",
    kotaEvent: null,
    LinkGmaps: null,
    Deskripsi: null,
    Kuota: 0,
    HargaTiket: null,
  });

  // React.useEffect(()=>{
  //   const userData = {
  //     foto: null,
  //     namaEvent: null,
  //     tanggalEvent: null,
  //     status: "buka",
  //     kotaEvent: null,
  //     LinkGmaps: null,
  //     Deskripsi: null,
  //     Kuota: 0,
  //     HargaTiket: null,
  //   };
  //   console.log(Object.keys(userData)[0])
  //   for (var i = 0; i < Object.keys(userData).length; i++) {
  //     const key = Object.keys(userData)[i];
  //     const value = Object.values(userData)[i];
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [key]: value
  //     }));
  //   }
  //   if(userData.namaEvent !== null){
  //     setIsDone(true)
  //   }
  // },[])

  const handleIncrement = () => {
    setFormData({ ...formData, Kuota: formData.Kuota+1 });
  };

  const handleDecrement = () => {
    if (formData.Kuota > 1) {
      setFormData({ ...formData, Kuota: formData.Kuota-1 });
    }
  };

  const handleImageChangeShow = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    setFormData({ ...formData, foto: selectedFile.name });
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
      
    }
  };


  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormChangeKuota = (event) => {
    handleFormChange(event)
    
  };

  // const handleSubmit = (event) => {
  //   const formValues = {
  //     foto: formData.foto,
  //     namaEvent: formData.namaEvent,
  //     tanggalEvent: formData.tanggalEvent,
  //     status: formData.status,
  //     kotaEvent: formData.kotaEvent,
  //     LinkGmaps: formData.LinkGmaps,
  //     Deskripsi: formData.Deskripsi,
  //     Kuota: formData.Kuota,
  //     HargaTiket: formData.HargaTiket,
  //   };

  //   // Log the form values in JSON format
  //   console.log(JSON.stringify(formValues, null, 2));
  //   event.preventDefault();
  //   setIsDone((prev) => !prev);
  // };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!isDone){
      try {
        const dateNow = new Date()
        const formValues = {
          img_url: formData.foto,
          title: formData.namaEvent,
          time: formData.tanggalEvent,
          status: formData.status,
          city: formData.kotaEvent,
          url_website: formData.LinkGmaps,
          description: formData.description,
          max_seller: formData.Kuota,
          tiket_price: formData.HargaTiket,
          is_publish: true,
          published_at: dateNow
        };
        console.log(JSON.stringify(formValues, null, 2));
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify(formValues),
        });
  
        if (response.ok) {
          const result = await response.json();
          setResponseMessage(result.message);
        } else {
          throw new Error(`Failed to make PUT request: ${response.statusText}`);
        }
      } catch (error) {
        setError(error.message);
      }
      navigate('/event')
    }
    else{
      setIsDone((prev) => !prev);
    }
  }



  const cookies = new Cookies();
  const token = cookies.get("uidTokenBinarApp");
  const [isDisplay, setDisplay] = React.useState(false);
  // const [listOrder, setListOrder] = React.useState([]);
  // const [page, setPage] = React.useState(1);

  // if (document.cookie.includes("uidTokenBinarApp") === false)
  //   return <Navigate to={"/admin"} />;
  // const navigate = useNavigate();

  const [range, setRange] = React.useState(undefined);
  //   const [dateRange, setDateRange] = React.useState([]);

  let footer = <p style={{ color: "rgb(0,0,0,0.7)" }}>Pilih Tanggal Event</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")} – {format(range.to, "PPP")}
        </p>
      );
    }
  }

  const handleDate =() =>{
    const date = `${format(range.from, "PPP")}`;
    setFormData({ ...formData, tanggalEvent: range.from, });
    setDisplay(false)
  }
  return (
    <div className="my-app">
      <main>
        <NavbarAll />
        {
          <>
            <Form onSubmit={handleSubmit}>
              <section className="my-app_body">
                <div className="container" style={{ marginTop: 100 }}>
                  <div className="row">
                    <div className="col-4">
                      
                      <div className="my-card card">
                        <div className="my-card_header card-header">
                          <div className="my-card_header-title">
          
                            <div className="my-text-overline text-tittle">
                            <a
                              className="backArrow"
                              href="/"
                              style={{ color: "black", marginRight:20 }}
                            >
                              {" "}
                              <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                              Daftarkan Event
                            </div>
                          </div>
                        </div>
                        <div className="my-card_body card-body-profile">
                          <Form.Group className="mb-3" controlId="formFoto">
                            <Form.Label>
                              Banner Event
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <div
                              style={{
                                marginBottom: "20px",
                                display: "flex",
                                flexDirection: "center",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  height: "200px",
                                  overflow: "hidden",
                                  border: "1px solid #ccc",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: "10px",
                                }}
                              >
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  {image ? (
                                    <img
                                      src={image}
                                      alt="Selected"
                                      style={{
                                        maxHeight: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    <div
                                      style={{
                                        textAlign: "center",
                                        color: "#ccc",
                                      }}
                                    >
                                      No Image
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <Form.Control
                              required
                              disabled={isDone ? true : false}
                              type="file"
                              name="foto"
                              accept=".jpg, .jpeg, .png"
                              onChange={handleImageChangeShow}
                            />
                          </Form.Group>

                          <div className="my-text-overline">
                            Besar file: maksimum 10.000.000 bytes (10
                            Megabytes). Ekstensi file yang diperbolehkan: .JPG
                            .JPEG .PNG
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-8">
                      <div className="my-alert alert alert-info">
                        <img
                          className="my-alert_icon"
                          src="./images/icon-alert.svg"
                          alt=""
                        />
                        <span className="my-alert_text">
                          Tertarik menjadi penyelenggara acara? Daftarkan event
                          Anda sekarang dan jadikan momen spesial Anda terwujud!
                        </span>
                      </div>
                      <div className="my-card card">
                        <div className="my-card_header card-header">
                          <h3 className="my-card_header-title card-title" style={{paddingTop:8}}>
                            Informasi Event
                          </h3>
            
                        </div>

                        <div className="form-profile-all">
                          <Form.Group
                            className="mb-3"
                            controlId="formCompanyName"
                          >
                            <Form.Label>
                              Nama Event
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              disabled={isDone ? true : false}
                              name="namaEvent"
                              value={formData.namaEvent}
                              onChange={handleFormChange}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="tanggalEvent">
                            <Form.Label>
                              Tanggal Event
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <div className="button-container-month">
                              <button
                                className="buttonMonth"
                                onClick={() => setDisplay(!isDisplay)}
                                type="button"
                                disabled={isDone ? true : false}
                                style={isDone ? {backgroundColor:"#e9ecef",border:"1px solid #e3e6ea"} : {backgroundColor: "white", border:"1px solid #dee2e6"}}
                              >
                                <span style={{fontSize:16}}>{footer}</span>
                                {isDisplay ? (
                                  <i
                                    className="fa fa-chevron-up"
                                    aria-hidden="true"
                                  ></i>
                                ) : (
                                  <i
                                    className="fa fa-chevron-down"
                                    aria-hidden="true"
                                  ></i>
                                )}
                              </button>
                              {isDisplay ? (
                                <div className="open-calender calender-admin mt-5">
                                  <DayPicker
                                    defaultMonth={new Date(Date.now())}
                                    mode="range"
                                    selected={range}
                                    onSelect={setRange}
                                    footer={footer}
                                    format={"YYYY-DD-MM"}
                                  />
                                  <button
                                    className="sewa-button confirm-button mt-2"
                                    onClick={handleDate}
                                    
                                    style={{
                                      width: "320px",
                                      backgroundColor: "#BCA37F",
                                      color: "white",
                                      fontWeight: "bold",
                                      border: "#5CB85F",
                                      paddingTop: 8,
                                      paddingLeft: 12,
                                      paddingRight: 12,
                                      paddingBottom: 8,
                                      alignItems: "center",
                                    }}
                                  >
                                    Simpan Tanggal
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Status Registrasi<span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control as="select" defaultValue="buka"              name="status"  disabled={isDone ? true : false}
                              value={formData.status}
                              onChange={handleFormChange}>
                              <option value="buka">Buka</option>
                              <option value="tutup">Tutup</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>
                              Kota Event
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              // value={formData.contact}s
                              disabled={isDone ? true : false}
                              name="kotaEvent"
                              value={formData.kotaEvent}
                              onChange={handleFormChange}
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>
                              Link Google Maps
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <a
                              className="my-card_header-link"
                              href="https://www.google.com/maps"
                              style={{ float: "right" }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Buka Google Maps →
                            </a>
                            <Form.Control
                              required
                              disabled={isDone ? true : false}
                              name="LinkGmaps"
                              value={formData.LinkGmaps}
                              onChange={handleFormChange}
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="formDescription"
                            className="mb-3"
                          >
                            <Form.Label>
                              Deskripsi Company
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              disabled={isDone ? true : false}
                              as="textarea"
                              rows={3}
                              name="description"
                              // value={formData.description}
                              onChange={handleFormChange}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>
                              Kuota Seller
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <InputGroup>
                              <Button
                                variant="outline-secondary"
                                onClick={handleDecrement}
                                disabled={isDone ? true : false}
                                style={{
                                  border: "1px solid rgb(199,206,212)",
                                  background: "none",
                                  color: "rgb(0,0,0,0.7)",
                                  zIndex: 0,
                                }}
                              >
                                -
                              </Button>
                              <FormControl
                                style={{ color: "rgb(0,0,0,0.7)" }}
                                name="LinkGmaps"
                                value={formData.Kuota}
                                onChange={handleFormChangeKuota}
                                disabled={isDone ? true : false}
                              />
                              <Button
                                // variant="outline-secondary"
                                onClick={handleIncrement}
                                disabled={isDone ? true : false}
                                style={{
                                  border: "1px solid rgb(199,206,212)",
                                  background: "none",
                                  color: "rgb(0,0,0,0.7)",
                                  zIndex: 0,
                                }}
                              >
                                +
                              </Button>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group controlId="formWebsite">
                            <Form.Label>
                              Harga Tiket
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              disabled={isDone ? true : false}
                              placeholder="Rp."
                              // type="url"
                              name="HargaTiket"
                              value={formData.HargaTiket}
                              onChange={handleFormChange}
                            />
                          </Form.Group>

                          <Button
                            style={{
                              backgroundColor: "#BCA37F",
                              border: "1px solid #BCA37F",
                            }}
                            type="submit"
                            className="mt-3"
                          >
                            {isDone ? "Edit" : "Simpan"}
                          </Button>
                        </div>
                        {/* </Form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Form>
          </>
        }
      </main>
    </div>
  );
};

export default CreateEvent;
