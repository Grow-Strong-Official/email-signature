import React, { useState } from "react";
import EmailSignatureGrowStrong from "./EmailSignatureGrowStrong";

function SignatureBuilder(props) {
  const [profilePictureLink, setProfilePictureLink] = useState(""); // "https://pbs.twimg.com/profile_images/1158041967965741057/gntA6JpS_400x400.jpg"
  const [firstName, setFirstName] = useState(""); // "Jeremy R."
  const [lastName, setLastName] = useState(""); // "DeYoung"
  const [role, setRole] = useState(""); // "CEO & Founder"
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState(""); // "jeremy@keystone.investments"
  const [website, setWebsite] = useState(""); // "https://www.keystone.investments"
  const [facebookLink, setFacebookLink] = useState(""); // "https://www.facebook.com/JeremyRDeYoung"
  const [twitterLink, setTwitterLink] = useState(""); // "https://twitter.com/nextstepguru"
  const [instagramLink, setInstagramLink] = useState(""); // "https://www.instagram.com/jeremydeyoung"
  const [linkedInLink, setLinkedInLink] = useState(""); // "https://www.linkedin.com/in/jeremyrdeyoung"

  function selectElementContents(element) {
    var body = document.body,
      range,
      selection;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      selection = window.getSelection();
      selection.removeAllRanges();
      try {
        range.selectNodeContents(element);
        selection.addRange(range);
      } catch (e) {
        range.selectNode(element);
        selection.addRange(range);
      }
      document.execCommand("Copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(element);
      range.select();
      range.execCommand("Copy");
    }
    document.getElementById("copyButton").textContent = "Copied! ✅";
    document.getElementById("copyButton").classList = "btn btn-success";
    setTimeout(() => {
      document.getElementById("copyButton").textContent =
        "Copy to clipboard 📝";
      document.getElementById("copyButton").classList = "btn btn-primary";
    }, 7000);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="h2 mb-3">Enter your Info</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <form className="form-control">
                    {/* profilePictureLink */}
                    <div className="form-floating mb-3 mt-3">
                      <input
                        type="url"
                        className="form-control"
                        name="profilePictureLink"
                        id="profilePictureLink"
                        placeholder="Your profile picture link"
                        value={profilePictureLink}
                        onChange={(event) =>
                          setProfilePictureLink(event.target.value)
                        }
                      />
                      <label
                        htmlFor="profilePictureLink"
                        className="form-label"
                      >
                        Your profile picture link
                      </label>
                    </div>
                    {/* firstName */}
                    <div className="form-floating mb-3 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                      />
                      <label htmlFor="firstName" className="form-label">
                        Your first name
                      </label>
                    </div>
                    {/* lastName */}
                    <div className="form-floating mb-3 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        placeholder="Your last name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                      />
                      <label htmlFor="lastName" className="form-label">
                        Your last name
                      </label>
                    </div>
                    {/* role */}
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="role"
                        id="role"
                        placeholder="Your role"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                      />
                      <label htmlFor="role" className="form-label">
                        Your role
                      </label>
                    </div>
                    {/* phoneNumber */}
                    <div className="form-floating mb-3">
                      <input
                        type="phone"
                        className="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                      />
                      <label htmlFor="phone" className="form-label">
                        Your phone number
                      </label>
                    </div>
                    {/* email */}
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <label htmlFor="email" className="form-label">
                        Your email
                      </label>
                    </div>
                    {/* website */}
                    <div className="form-floating mb-3">
                      <input
                        type="url"
                        className="form-control"
                        name="website"
                        id="website"
                        placeholder="Your website"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                      />
                      <label htmlFor="website" className="form-label">
                        Your website
                      </label>
                    </div>
                    {/* facebookLink */}
                    <div className="form-floating mb-3">
                      <input
                        type="url"
                        className="form-control"
                        name="facebookLink"
                        id="facebookLink"
                        placeholder="Your Facebook profile link"
                        value={facebookLink}
                        onChange={(event) =>
                          setFacebookLink(event.target.value)
                        }
                      />
                      <label htmlFor="facebookLink" className="form-label">
                        Your Facebook profile link
                      </label>
                    </div>
                    {/* twitterLink */}
                    <div className="form-floating mb-3">
                      <input
                        type="url"
                        className="form-control"
                        name="twitterLink"
                        id="twitterLink"
                        placeholder="Your Twitter profile link"
                        value={twitterLink}
                        onChange={(event) => setTwitterLink(event.target.value)}
                      />
                      <label htmlFor="twitterLink" className="form-label">
                        Your Twitter profile link
                      </label>
                    </div>
                    {/* instagramLink */}
                    <div className="form-floating mb-3">
                      <input
                        type="url"
                        className="form-control"
                        name="instagramLink"
                        id="instagramLink"
                        placeholder="Your Instagram profile link"
                        value={instagramLink}
                        onChange={(event) =>
                          setInstagramLink(event.target.value)
                        }
                      />
                      <label htmlFor="instagramLink" className="form-label">
                        Your Instagram profile link
                      </label>
                    </div>
                    {/* linkedInLink */}
                    <div className="form-floating mb-3">
                      <input
                        type="url"
                        className="form-control"
                        name="linkedInLink"
                        id="linkedInLink"
                        placeholder="Your LinkedIn profile link"
                        value={linkedInLink}
                        onChange={(event) =>
                          setLinkedInLink(event.target.value)
                        }
                      />
                      <label htmlFor="linkedInLink" className="form-label">
                        Your LinkedIn profile link
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="h2 mb-3">Your email signature</h2>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <p>
                    Please copy &amp; paste, if you need help you can follow
                    email instructions to change your email signature
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div
                  className="col d-flex justify-content-center pt-3 pb-3"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <EmailSignatureGrowStrong
                    profilePictureLink={profilePictureLink}
                    firstName={firstName}
                    lastName={lastName}
                    role={role}
                    phoneNumber={phoneNumber}
                    email={email}
                    website={website}
                    facebookLink={facebookLink}
                    twitterLink={twitterLink}
                    instagramLink={instagramLink}
                    linkedInLink={linkedInLink}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    id="copyButton"
                    type="button"
                    onClick={() =>
                      selectElementContents(document.getElementById("tableId"))
                    }
                  >
                    Copy to clipboard 📝
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignatureBuilder;
