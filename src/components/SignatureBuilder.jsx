import React, { useState } from "react";
import EmailSignatureGrowStrong from "./EmailSignatureGrowStrong";
import Navbar from "./Navbar";

function SignatureBuilder() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

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
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <h1 className="h1">Enter your info.</h1>
              <div className="container">
                <div className="row">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="John Doer"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">
                        Role
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        name="role"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                        placeholder="Chief Technology Officer"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="(615) 000-0000"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container">
                <div className="row mb-3">
                  <div className="col d-flex flex-column align-items-center">
                    <h1 className="h1">Your email signature.</h1>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col text-center">
                    <p>
                      Please copy &amp; paste, if you need help you can
                      follow&nbsp;
                      <a
                        href="https://support.google.com/mail/answer/8395?hl=es&authuser=0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        email instructions
                      </a>
                      &nbsp;to change your email signature
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col d-flex justify-content-center">
                    <EmailSignatureGrowStrong
                      fullName={name}
                      role={role}
                      phone={phone}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col d-flex flex-column align-items-center">
                    <button
                      id="copyButton"
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        selectElementContents(
                          document.getElementById("tableId")
                        )
                      }
                    >
                      Copy to clipboard
                      <span role="img" aria-label="copy emoji">
                        📝
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignatureBuilder;
