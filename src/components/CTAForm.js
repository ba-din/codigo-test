import React from 'react';
import '../assets/styles/ctaForm.scss'

const CTAForms = () => {
  return (
    <div>
      {/* section Header */}
      <div className="CTAForm_header">
        <div className="CTAForm_header_content">
          <h1>
            Request a quote
          </h1>
          <p className="CTAFormMasthead__bodyCopy">
            Get a ballpark costing on the product or idea you want to build. Be specific to get a more concise cost and timeline.
          </p>
          <p className="CTAFormMasthead__legend">*Mandatory fields</p>
        </div>
      </div>

      <div className="CTAForms_container">
        <div className="CTAFormPages__mainWrapper clearfix">
          <div className="AnimCTAForms--onBoardFade">
            <form>
              <div style={{ position: 'relative' }}>
                <div className="js-multiInputWrapper js-isRequired formElements__group CTAFormPages__inputMainWrapper">
                  <label className="CTAFormPages__header">
                    What do you want to build? *
                  </label>
                  <div className="clearfix">
                    <label className="CTAFormPages__inputLabelWrapper--checkbox">
                      <input type="checkbox" className="CTAFormPages__defaultInputEl--checkbox" value="mobile_app" />
                      <div className="CTAFormPages__customInputEl--checkbox">
                      </div>
                      <div className="CTAFormPages__checkboxLabel">
                        Mobile App
                      </div>
                    </label>
                    <label className="CTAFormPages__inputLabelWrapper--checkbox">
                      <input type="checkbox" className="CTAFormPages__defaultInputEl--checkbox" value="website" />
                      <div className="CTAFormPages__customInputEl--checkbox">
                      </div>
                      <div className="CTAFormPages__checkboxLabel">
                        Website
                      </div>
                    </label>
                    <label className="CTAFormPages__inputLabelWrapper--checkbox">
                      <input type="checkbox" className="CTAFormPages__defaultInputEl--checkbox" value="not_sure_yet" />
                      <div className="CTAFormPages__customInputEl--checkbox"></div>
                      <div className="CTAFormPages__checkboxLabel">
                        I'm not sure yet
                      </div>
                    </label>
                  </div>
                  <div className="fixedDropdownErrorMsg">
                    Please select an option.
                  </div>
                </div>

                <div className="CTAFormPages__inputMainWrapper">
                  <label className="CTAFormPages__header">
                    What are the objectives, requirements and functionalities of this product? *
                  </label>
                  <textarea
                    className="form-control CTAFormPages__defaultInputEl--textarea"
                    required
                    placeholder="You can list down everything in point form or just paragraphs. It’s completely up to you. The more details we get, the more we can understand what you want to achieve."
                    spellcheck="false"
                  >
                  </textarea>
                  <div className="invalid-feedback">
                  </div>
                </div>

                <div className="CTAFormPages__inputMainWrapper">
                  <label className="CTAFormPages__header">
                    Do you have a budget? *
                  </label>
                  <input
                    className="form-control CTAFormPages__defaultInputEl--text"
                    type="text"
                    minlength="1"
                    placeholder="What's your estimated cost?"
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                  </div>
                </div>


                <div className="CTAFormPages__inputMainWrapper">
                  <label className="CTAFormPages__header">
                    Estimated launch date
                  </label>
                  <input className="form-control CTAFormPages__defaultInputEl--text" type="text" minlength="1" placeholder="Deadline?" value="" />
                  <div className="invalid-feedback">
                  </div>
                </div>


                <div className="CTAFormPages__contactDetailsMainWrapper">
                  <label className="CTAFormPages__header">
                    How do we get in touch?
                  </label>
                  <div className="CTAFormPages__inputMainWrapper">
                    <input
                      className="form-control CTAFormPages__defaultInputEl--text"
                      type="text"
                      required
                      minlength="1"
                      placeholder="Your name *"
                      value=""
                    />
                    <div className="invalid-feedback">
                    </div>
                  </div>
                  <div className="CTAFormPages__inputMainWrapper">
                    <input
                      className="form-control CTAFormPages__defaultInputEl--text"
                      type="text" minlength="1"
                      placeholder="Company"
                      value=""
                    />
                    <div className="invalid-feedback">
                    </div>
                  </div>
                  <div className="CTAFormPages__inputMainWrapper">
                    <input
                      className=" form-control CTAFormPages__defaultInputEl--text"
                      type="email"
                      required
                      minlength="1"
                      placeholder="Email Address *"
                      value=""
                    />
                    <div className="invalid-feedback">
                    </div>
                  </div>
                  <div className="CTAFormPages__inputMainWrapper">
                    <input
                      className="form-control CTAFormPages__defaultInputEl--text"
                      type="text"
                      required
                      minlength="8"
                      placeholder="Contact no. *"
                      value=""
                    />
                    <div className="invalid-feedback">
                    </div>
                  </div>
                </div>

                <div className="CTAFormPages__inputMainWrapper">
                  <label className="CTAFormPages__header">
                    How did you find us? *
                  </label>
                  <div className="clearfix">
                    <label className="CTAFormPages__inputLabelWrapper--checkbox" >
                      <input type="checkbox" name="findMethod" className="CTAFormPages__defaultInputEl--checkbox" value="search" />
                      <div className="CTAFormPages__customInputEl--checkbox">
                      </div>
                      <div className="CTAFormPages__checkboxLabel">
                        Search
                      </div>
                    </label>
                    <label className="CTAFormPages__inputLabelWrapper--checkbox">
                      <input type="checkbox" name="findMethod" className="CTAFormPages__defaultInputEl--checkbox" value="word_of_mouth" />
                      <div className="CTAFormPages__customInputEl--checkbox">
                      </div>
                      <div className="CTAFormPages__checkboxLabel">Word of Mouth
                      </div>
                    </label>
                    <label className="CTAFormPages__inputLabelWrapper--checkbox">
                      <input type="checkbox" name="findMethod" className="CTAFormPages__defaultInputEl--checkbox" value="social_media" />
                      <div className="CTAFormPages__customInputEl--checkbox">
                      </div>
                      <div className="CTAFormPages__checkboxLabel">Social Media
                      </div>
                    </label>
                    <label className="CTAFormPages__inputLabelWrapper--checkbox">
                      <input type="checkbox" name="findMethod" className="CTAFormPages__defaultInputEl--checkbox" value="others" />
                      <div className="CTAFormPages__customInputEl--checkbox">
                      </div>
                      <div className="CTAFormPages__checkboxLabel">Others
                      </div>
                    </label>
                  </div>
                  <div className="fixedDropdownErrorMsg">Please select an option.
                  </div>
                </div>


                <div className="CTAFormPages__recaptchaWrapper">
                  <div>
                    <div>
                      <div className="CTAFormPages__recaptchaContent">
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcDw30UAAAAAA70_PRreV56RcctiqkF2asS3Akk&amp;co=aHR0cHM6Ly93d3cuY29kaWdvLmNvOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=eKRIyK-9MtX6JxeZcNZIkfUq&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=o6wyqfbu9ykr"
                            width="304" height="78" role="presentation"
                            name="a-e882cootz56u" frameborder="0" scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                          >
                          </iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response-1"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }}>
                        </textarea>
                      </div>
                      <iframe style={{ display: 'none' }} title="recaptcha">
                      </iframe>
                    </div>
                  </div>
                </div>

                <button type="submit" className="buttonLoader__button CTAFormPages__btnSubmit CTAFormQuote__btnSubmit ">
                  <div className="buttonLoader__spinner ">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="34" width="34" viewBox="0 0 34 34">
                      <circle cx="17" cy="17" r="10.5" stroke-width="3"></circle>
                    </svg>
                  </div>
                  <p className="buttonLoader__label ">
                    Submit
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTAForms;