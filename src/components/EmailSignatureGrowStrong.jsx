import React from "react";

import {
  BACKGROUND_IMAGE_GROW_STRONG_EMAIL,
  GROW_STRONG_LOGO,
  PHONE_ICON,
  MAIL_ICON,
  WEBSITE_ICON,
  FACEBOOK_ICON,
  TWITTER_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
} from "../data/imagesDataURI";

function EmailSignatureGrowStrong(props) {
  const {
    profilePictureLink,
    firstName,
    lastName,
    role,
    phoneNumber,
    email,
    website,
    facebookLink,
    twitterLink,
    instagramLink,
    linkedInLink,
  } = props;
  const tableStyle = {
    width: "600px",
    height: "200px",
    backgroundSize: "cover",
    backgroundImage: `url(${BACKGROUND_IMAGE_GROW_STRONG_EMAIL})`,
  };
  const iconContainerStyle = {
    backgroundColor: "#64AC30",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    verticalAlign: "middle",
    textAlign: "center",
    padding: 0,
  };
  return (
    <table
      id="tableId"
      style={tableStyle}
      border="0"
      cellPadding="0"
      cellSpacing="0"
    >
      <tbody>
        <tr>
          <td
            style={{
              width: "175px",
              height: "200px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <img
              style={{ width: "135px", height: "135px", borderRadius: "50%" }}
              src={profilePictureLink}
              alt="profile"
            />
          </td>
          <td
            style={{
              width: "240px",
              height: "190px",
              paddingTop: "10px",
              verticalAlign: "top",
            }}
          >
            <table style={{ width: "240px", height: "160px" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "start" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#212529",
                      }}
                    >
                      {firstName}&nbsp;
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#64ac30",
                      }}
                    >
                      {lastName}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#181718",
                    }}
                  >
                    {role}
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{
                        borderBottom: "#64AC30 solid 3px",
                        width: "130px",
                        height: "2px",
                        margin: 0,
                      }}
                    >
                      &nbsp;
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table style={{ height: "90px" }}>
                      <tbody>
                        <tr>
                          <td style={iconContainerStyle}>
                            <img
                              src={PHONE_ICON}
                              alt="phone icon"
                              style={{
                                width: "13px",
                              }}
                            />
                          </td>
                          <td>
                            <a
                              style={{
                                fontSize: "11px",
                                color: "#262527",
                              }}
                              href={"tel:" + { phoneNumber }}
                            >
                              {phoneNumber}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={iconContainerStyle}>
                            <img
                              src={MAIL_ICON}
                              alt="mail icon"
                              style={{
                                width: "13px",
                              }}
                            />
                          </td>
                          <td>
                            <a
                              style={{
                                fontSize: "11px",
                                color: "#262527",
                              }}
                              href={"mailto:" + email}
                            >
                              {email}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={iconContainerStyle}>
                            <img
                              src={WEBSITE_ICON}
                              alt="web icon"
                              style={{
                                width: "13px",
                              }}
                            />
                          </td>
                          <td>
                            <a
                              style={{
                                fontSize: "11px",
                                color: "#262527",
                              }}
                              href={website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {website}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td style={{ width: "10px" }}>
            <p style={{ borderLeft: "#64AC30 solid 3px", height: "115px" }}>
              &nbsp;
            </p>
          </td>
          <td style={{ width: "175px", height: "200px", textAlign: "center" }}>
            <table style={{ margin: "auto", height: "10px" }}>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table style={{ margin: "auto" }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://growstrong.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={GROW_STRONG_LOGO}
                        alt="grow strong logo"
                        style={{
                          width: "150px",
                          margin: "auto",
                          verticalAlign: "middle",
                        }}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{ margin: "auto", height: "10px" }}>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table style={{ margin: "auto", width: "140px", height: "28px" }}>
              <tbody>
                <tr style={{ height: "28px" }}>
                  <td>
                    <table style={{ width: "28px", height: "28px" }}>
                      <tbody>
                        <tr>
                          <td style={iconContainerStyle}>
                            <a
                              href={facebookLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={FACEBOOK_ICON}
                                alt="facebook"
                                style={{
                                  width: "11px",
                                }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table style={{ width: "28px", height: "28px" }}>
                      <tbody>
                        <tr>
                          <td style={iconContainerStyle}>
                            <a
                              href={twitterLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={TWITTER_ICON}
                                alt="phone icon"
                                style={{
                                  width: "15px",
                                }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table style={{ width: "28px", height: "28px" }}>
                      <tbody>
                        <tr>
                          <td style={iconContainerStyle}>
                            <a
                              href={instagramLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={INSTAGRAM_ICON}
                                alt="phone icon"
                                style={{
                                  width: "15px",
                                }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table style={{ width: "28px", height: "28px" }}>
                      <tbody>
                        <tr>
                          <td style={iconContainerStyle}>
                            <a
                              href={linkedInLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={LINKEDIN_ICON}
                                alt="phone icon"
                                style={{
                                  width: "15px",
                                }}
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmailSignatureGrowStrong;
