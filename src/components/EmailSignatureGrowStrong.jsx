import React from "react";

const EmailSignatureGrowStrong = ({ fullName, role, phone }) => {
  const GROW_STRONG_BACKGROUND_COLOR = "#5B5EE1";

  const tableStyle = {
    display: "table",
    borderCollapse: "separate",
    boxSizing: "border-box",
    textIndent: "initial",
    borderSpacing: "2px",
    borderColor: "grey",
  };

  const anchorIconStyle = {
    marginRight: "10px",
  };

  return (
    <table
      style={tableStyle}
      id="tableId"
      border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tbody>
        <tr>
          <td width="170" style={{ padding: "15px", textAlign: "center" }}>
            <img
              width="100"
              src="https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b22cdba25e8c36ab51bd1b.png"
              alt="grow strong mark in circle"
            />
            <img
              width="100"
              src="https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b22cdb002bf7bb5f12273d.png"
              alt="grow strong"
            />
          </td>
          <td
            width="300"
            align="left"
            style={{
              paddingLeft: "15px",
              borderLeft: "2px solid " + GROW_STRONG_BACKGROUND_COLOR,
              textAlign: "left",
            }}
          >
            <table
              border="0"
              align="left"
              cellPadding="0"
              cellSpacing="0"
              width="250"
              style={{ textAlign: "left" }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {fullName}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      paddingTop: "3px",
                    }}
                  >
                    {role}, Grow Strong
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      paddingTop: "3px",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#4F4F4F",
                        fontSize: "12px",
                      }}
                      href={"tel:" + { phone }}
                    >
                      {phone}
                    </a>{" "}
                    <span style={{ color: GROW_STRONG_BACKGROUND_COLOR }}>
                      <b>|</b>
                    </span>{" "}
                    <a
                      href="https://growstrong.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#4F4F4F",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      growstrong.io
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      paddingTop: "3px",
                      color: "#999999",
                    }}
                  >
                    <em>
                      <b>Certification-Driven Development</b>
                    </em>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      paddingTop: "6px",
                    }}
                  >
                    {/* <a
                      href=""
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="facebook-f"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b1f84fdb38ea01f82ef9c7.png"
                        }
                      />
                    </a> */}
                    {/* <a
                      href=""
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="twitter"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b1f84f76773103b7d146fe.png"
                        }
                      />
                    </a> */}
                    {/* <a
                      href=""
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="instagram"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b1f84fa25e8c065751a5d8.png"
                        }
                      />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/company/growstrongio/"
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="linked-in"
                        height="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b1f84fa25e8c5a9c51a5d7.png"
                        }
                      />
                    </a>
                    {/* <a
                      href=""
                      style={anchorIconStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="youtube"
                        width="20"
                        src={
                          "https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/62b1f84fa25e8c2d7251a5d6.png"
                        }
                      />
                    </a> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmailSignatureGrowStrong;
