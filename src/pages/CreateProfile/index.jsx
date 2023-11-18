import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import useFormInput from "../../hooks/useFormInput";
import usePostApi from "../../hooks/usePostApi";
import Navbar from "../../components/Navigation/Navbar";
import FooterComponent from "../../components/Footer/Footer";

const ProfileForm = () => {
  const apiUrlBase = import.meta.env.VITE_API_URL;
  const id = localStorage.getItem("id");
  const apiUrl = `${apiUrlBase}/eo/${id}`;

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fotoProfile: null,
    fotoBanner: null,
    namaToko: null,
    address: null,
    contact: null,
    email: null,
    linkSosmed: null,
    description: null,
  });

  const [formDataEo, setFormDataEo] = useState({
    fotoProfile: null,
    namaCompany: null,
    phoneNumber: null,
    deskripsiCompany: null,
    alamat: null,
    email: null,
    linkSosmed: null,
  });

  React.useEffect(() => {
    const user = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    setSelectedUser(user);
    if (user === "seller") {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl, { headers });
          if (response.ok) {
            const result = await response.json();
            setData(result);
            const profileData = {
              fotoProfile: result[0].img_url,
              fotoBanner: result[0].img_url,
              namaToko: result[0].name,
              address: result[0].address,
              contact: Number(result[0].contact),
              email: result[0].email,
              linkSosmed: result[0].socmed_or_web_url,
              description: result[0].description,
            };
            console.log(profileData);
            for (var i = 0; i < Object.keys(profileData).length; i++) {
              const key = Object.keys(profileData)[i];
              const value = Object.values(profileData)[i];
              setFormData((prevData) => ({
                ...prevData,
                [key]: value,
              }));
            }
            if (profileData.namaToko !== null) {
              setIsDone(true);
            }
          } else {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
        } catch (error) {
          setError(error.message);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const result = await response.json();
            setData(result);
            console.log(result[0]);
            const profileData = {
              fotoProfile: result[0].img_url,
              namaCompany: result[0].name,
              phoneNumber: result[0].contact,
              deskripsiCompany: result[0].description,
              alamat: result[0].address,
              email: result[0].email,
              linkSosmed: result[0].socmed_or_web_url,
            };
            console.log(Object.keys(profileData)[0]);
            for (var i = 0; i < Object.keys(profileData).length; i++) {
              const key = Object.keys(profileData)[i];
              const value = Object.values(profileData)[i];
              setFormDataEo((prevData) => ({
                ...prevData,
                [key]: value,
              }));
            }
            if (profileData.namaCompany !== null) {
              setIsDone(true);
            }
          } else {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
          }
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData();
    }
  }, []);

  const handleImageChangeShow = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    if (selectedUser === "seller") {
      setFormData({ ...formData, fotoProfile: selectedFile.name });
    } else {
      setFormDataEo({ ...formDataEo, fotoProfile: selectedFile.name });
    }
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleImageBannerChangeShow = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    setFormData({ ...formData, fotoBanner: selectedFile.name });

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageBanner(reader.result);
      }
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFormChange = (event) => {
    if (selectedUser === "seller") {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    } else {
      const { name, value } = event.target;
      setFormDataEo({ ...formDataEo, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    if (!isDone) {
      if (selectedUser === "seller") {
        event.preventDefault();
        const formValues = {
          name: formData.namaToko,
          address: formData.address,
          description: formData.description,
          city: formData.address,
          img_url: formData.fotoProfile,
          socmed_or_web_url: formData.linkSosmed,
          contact: Number(formData.contact),
          role: "seller",
          email: formData.email,
        };
        console.log(formValues);
        try {
          const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
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
        console.log(JSON.stringify(formValues, null, 2));

        setIsDone((prev) => !prev);
      } else {
        event.preventDefault();
        const formValues = {
          img_url: formDataEo.fotoProfile,
          name: formDataEo.namaCompany,
          contact: Number(formDataEo.phoneNumber),
          description: formDataEo.deskripsiCompany,
          role: "eo",
          address: formDataEo.alamat,
          email: formDataEo.email,
          socmed_or_web_url: formDataEo.linkSosmed,
        };
        try {
          const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
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
        console.log(JSON.stringify(formValues, null, 2));

        setIsDone((prev) => !prev);
      }
    } else {
      event.preventDefault();
      setIsDone((prev) => !prev);
    }
  };
  return (
    <div className="my-app">
      <main>
        <Navbar />
        {selectedUser === "seller" ? (
          <>
            <Form onSubmit={handleSubmit}>
              <section className="my-app_body">
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <div className="my-card card">
                        <div className="my-card_header card-header">
                          <div className="my-card_header-title">
                            <div className="my-text-overline ">Update Profile</div>
                          </div>
                        </div>
                        <div className="my-card_body card-body-profile">
                          <Form.Group className="mb-3" controlId="formFoto">
                            <Form.Label>
                              Foto Profile
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
                                  width: "200px",
                                  height: "200px",
                                  borderRadius: "50%",
                                  overflow: "hidden",
                                  border: "1px solid #ccc", // Default border color
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    borderRadius: "50%",
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
                                        // borderRadius: "50%",
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

                            <Form.Control required disabled={isDone ? true : false} type="file" name="foto" accept=".jpg, .jpeg, .png" onChange={handleImageChangeShow} />
                          </Form.Group>

                          <div className="my-text-overline">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</div>
                        </div>
                        <div className="my-card_body card-body-profile" style={{ marginTop: "-40px" }}>
                          <Form.Group className="mb-3" controlId="formFoto">
                            <Form.Label>
                              Banner Dagangan
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
                                  borderRadius: "10px",
                                  overflow: "hidden",
                                  border: "1px solid #ccc", // Default border color
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
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
                                  {imageBanner ? (
                                    <img
                                      src={imageBanner}
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

                            <Form.Control required disabled={isDone ? true : false} type="file" name="foto" accept=".jpg, .jpeg, .png" onChange={handleImageBannerChangeShow} />
                          </Form.Group>

                          <div className="my-text-overline">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-8">
                      <div className="my-alert alert alert-info">
                        <img className="my-alert_icon" src="./images/icon-alert.svg" alt="" />
                        <span className="my-alert_text">Yuk lengkapi informasi daganganmu terlebih dahulu, agar masyarakat bisa lebih mengenal daganganmu!.</span>
                      </div>
                      <div className="my-card card">
                        <div className="my-card_header card-header">
                          <h3 className="my-card_header-title card-title">General Information</h3>
                          {/* <a className="my-card_header-link" href="/">
                      See all →
                    </a> */}
                        </div>

                        <div className="form-profile-all">
                          <Form.Group className="mb-3" controlId="formnamaToko">
                            <Form.Label>
                              Nama Toko
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="namaToko" value={formData.namaToko} onChange={handleFormChange} />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>
                              Address<span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="address" value={formData.address} onChange={handleFormChange} />
                          </Form.Group>

                          <Form.Group controlId="formDescription">
                            <Form.Label>
                              Deskripsi Dagangan
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} as="textarea" rows={3} name="description" value={formData.description} onChange={handleFormChange} />
                          </Form.Group>
                        </div>
                        <div className="my-card_header card-header">
                          <h3 className="my-card_header-title card-title">Address</h3>
                          {/* <a className="my-card_header-link" href="#dsa">
                        See all →
                      </a> */}
                        </div>
                        <div className="form-profile-all">
                          <Form.Group className="mb-3" controlId="formContact">
                            <Form.Label>
                              Contact<span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="contact" value={formData.contact} onChange={handleFormChange} />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>
                              Email<span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control className="inputEmailProfile" required disabled={isDone ? true : false} type="email" name="email" value={formData.email} onChange={handleFormChange} />
                          </Form.Group>

                          <Form.Group controlId="formlinkSosmed">
                            <Form.Label>
                              Link Sosial Media
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="linkSosmed" value={formData.linkSosmed} onChange={handleFormChange} />
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
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <section className="my-app_body">
                <div className="container" style={{ marginTop: 100 }}>
                  <div className="row">
                    <div className="col-4">
                      <div className="my-card card">
                        <div className="my-card_header card-header">
                          <div className="my-card_header-title">
                            <div className="my-text-overline ">Update Profile</div>
                          </div>
                        </div>
                        <div className="my-card_body card-body-profile">
                          <div
                            style={{
                              marginTop: "20px",
                              display: "flex",
                              flexDirection: "center",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "300px",
                                height: "300px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "1px solid #ccc", // Default border color
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  overflow: "hidden",
                                  borderRadius: "50%",
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
                                      borderRadius: "50%",
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

                          <Form.Group className="mb-3" controlId="formFoto">
                            <Form.Label>
                              Foto Profile
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} type="file" name="foto" accept=".jpg, .jpeg, .png" onChange={handleImageChangeShow} />
                          </Form.Group>

                          <div className="my-text-overline">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-8">
                      <div className="my-alert alert alert-info">
                        <img className="my-alert_icon" src="./images/icon-alert.svg" alt="" />
                        <span className="my-alert_text">Your latest transaction may take a few minutes to show up in your activity.</span>
                      </div>
                      <div className="my-card card">
                        <div className="my-card_header card-header">
                          <h3 className="my-card_header-title card-title">General Information</h3>
                          {/* <a className="my-card_header-link" href="/">
                      See all →
                    </a> */}
                        </div>

                        <div className="form-profile-all">
                          <Form.Group className="mb-3" controlId="formnamaToko">
                            <Form.Label>
                              Nama Company
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="namaCompany" value={formDataEo.namaCompany} onChange={handleFormChange} />
                          </Form.Group>

                          <Form>
                            <Form.Group className="mb-3" controlId="phoneNumber">
                              <Form.Label>
                                Phone Number
                                <span style={{ color: "red" }}>*</span>
                              </Form.Label>
                              <Form.Control disabled={isDone ? true : false} placeholder="+62" name="phoneNumber" value={formDataEo.phoneNumber} onChange={handleFormChange} />
                              <Form.Text className="text-muted">Please enter your phone number in +62 format.</Form.Text>
                            </Form.Group>
                          </Form>
                          <Form.Group controlId="formDescription">
                            <Form.Label>
                              Deskripsi Company
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} as="textarea" rows={3} name="deskripsiCompany" value={formDataEo.deskripsiCompany} onChange={handleFormChange} />
                          </Form.Group>
                        </div>
                        <div className="my-card_header card-header">
                          <h3 className="my-card_header-title card-title">Address</h3>
                          {/* <a className="my-card_header-link" href="#dsa">
                        See all →
                      </a> */}
                        </div>
                        <div className="form-profile-all">
                          <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>
                              Alamat<span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="alamat" value={formDataEo.alamat} onChange={handleFormChange} />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>
                              Email<span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control className="inputEmailProfile" required disabled={isDone ? true : false} type="email" name="email" value={formDataEo.email} onChange={handleFormChange} />
                          </Form.Group>

                          <Form.Group controlId="formlinkSosmed">
                            <Form.Label>
                              Link linkSosmed EO
                              <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control required disabled={isDone ? true : false} name="linkSosmed" value={formDataEo.linkSosmed} onChange={handleFormChange} />
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
        )}
      </main>
      <FooterComponent />
    </div>
  );
};

export default ProfileForm;
