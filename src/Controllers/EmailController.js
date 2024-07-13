import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const qualificationOptions = [
  { value: 'bachelor', label: 'Bachelor' },
  { value: 'master', label: 'Master' },
  { value: 'phd', label: 'PhD' },
];

const yearOptions = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
];

const ctcOptions = [
  { value: '5L', label: 'Less than 5L' },
  { value: '5L-10L', label: '5L to 10L' },
  { value: '10L-15L', label: '10L to 15L' },
  { value: '15L+', label: 'More than 15L' },
];

const noticePeriodOptions = [
  { value: '15', label: '15 days' },
  { value: '30', label: '30 days' },
  { value: '45', label: '45 days' },
  { value: '60', label: '60 days' },
];

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    qualification: null,
    yearOfPassingCollege: '',
    twelfthYearOfPassing: '',
    schoolName: '',
    collegeName: '',
    tenthYearOfPassing: '',
    currentJobLocation: '',
    preferenceJobLocation: '',
    currentCTC: null,
    expectedCTC: '',
    noticePeriod: null,
    isPFAccount: null,
    pfAccountDetails: '',
    idProof: '',
    resume: '',
    dob: new Date(),
    salaryPreference: '',
    document: '',
  });

  const [showExperienceSection, setShowExperienceSection] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setShowExperienceSection(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: You can log formData or send it to an API
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };

  return (
    <div className='p-5 pt-3 border col-12 col-lg-9 mx-auto rounded-3 shadow'>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="accordion" id="PersonalInformationAccordion">
          <div className="accordion-item border-0">
            <h2 className="accordion-header" id="PersonalInfoHeading">
              <button className="accordion-button rounded-0 fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#PersonalInfo" aria-expanded="false" aria-controls="PersonalInfo">
                Personal Information
              </button>
            </h2>
            <div id="PersonalInfo" className="accordion-collapse collapse" aria-labelledby="PersonalInfoHeading" data-bs-parent="#PersonalInformationAccordion">
              <div className="accordion-body d-flex flex-column">
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      First Name
                      <span style={{ color: 'red', right: 5, top: 2 }}>*</span>
                    </legend>
                    <input
                      type="text"
                      value={formData.firstName}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      required
                    />
                  </fieldset>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Last Name
                      <span style={{ color: 'red', right: 5, top: 2 }}>*</span>
                    </legend>
                    <input
                      type="text"
                      value={formData.lastName}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      required
                    />
                  </fieldset>
                </div>
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Contact Number
                      <span style={{ color: 'red', right: 5, top: 2 }}>*</span>
                    </legend>
                    <input
                      type="text"
                      value={formData.contactNumber}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('contactNumber', e.target.value)}
                      required
                    />
                    {!validateContactNumber(formData.contactNumber) && formData.contactNumber && (
                      <div style={{ color: 'red' }}>Please enter a valid contact number.</div>
                    )}
                  </fieldset>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Email
                      <span style={{ color: 'red', right: 5, top: 2 }}>*</span>
                    </legend>
                    <input
                      type="email"
                      value={formData.email}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                    {!validateEmail(formData.email) && formData.email && (
                      <div style={{ color: 'red' }}>Please enter a valid email address.</div>
                    )}
                  </fieldset>
                </div>
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Qualification
                      <span style={{ color: 'red', right: 5, top: 2 }}>*</span>
                    </legend>
                    <Select
                      options={qualificationOptions}
                      value={formData.qualification}
                      onChange={(option) => handleChange('qualification', option)}
                      required
                    />
                  </fieldset>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Year of Passing College
                    </legend>
                    <DatePicker
                      selected={formData.yearOfPassingCollege}
                      onChange={(date) => handleChange('yearOfPassingCollege', date)}
                      dateFormat="yyyy"
                      showYearPicker
                      className="border px-3 py-2 w-100 rounded-3"
                    />
                  </fieldset>
                </div>
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      12th Year of Passing
                    </legend>
                    <DatePicker
                      selected={formData.twelfthYearOfPassing}
                      onChange={(date) => handleChange('twelfthYearOfPassing', date)}
                      dateFormat="yyyy"
                      showYearPicker
                      className="border px-3 py-2 w-100 rounded-3"
                    />
                  </fieldset>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      School Name
                    </legend>
                    <input
                      type="text"
                      value={formData.schoolName}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('schoolName', e.target.value)}
                    />
                  </fieldset>
                </div>
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      10th Year of Passing
                    </legend>
                    <DatePicker
                      selected={formData.tenthYearOfPassing}
                      onChange={(date) => handleChange('tenthYearOfPassing', date)}
                      dateFormat="yyyy"
                      showYearPicker
                      className="border px-3 py-2 w-100 rounded-3"
                    />
                  </fieldset>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      College Name
                    </legend>
                    <input
                      type="text"
                      value={formData.collegeName}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('collegeName', e.target.value)}
                    />
                  </fieldset>
                </div>
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Current Job Location
                    </legend>
                    <input
                      type="text"
                      value={formData.currentJobLocation}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('currentJobLocation', e.target.value)}
                    />
                  </fieldset>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Preference Job Location
                    </legend>
                    <input
                      type="text"
                      value={formData.preferenceJobLocation}
                      className="border px-3 py-2 w-100 rounded-3"
                      onChange={(e) => handleChange('preferenceJobLocation', e.target.value)}
                    />
                  </fieldset>
                </div>
                <div className='d-flex row'>
                  <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                    <legend className='text-start h6'>
                      Date of Birth
                    </legend>
                    <DatePicker
                      selected={formData.dob}
                      onChange={(date) => handleChange('dob', date)}
                      dateFormat="dd/MM/yyyy"
                      className="border px-3 py-2 w-100 rounded-3"
                    />
                  </fieldset>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Information */}
        {showExperienceSection && (
          <div className="accordion mt-3" id="ExperienceInformationAccordion">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="ExperienceInfoHeading">
                <button className="accordion-button rounded-0 fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ExperienceInfo" aria-expanded="false" aria-controls="ExperienceInfo">
                  Experience Information
                </button>
              </h2>
              <div id="ExperienceInfo" className="accordion-collapse collapse show" aria-labelledby="ExperienceInfoHeading" data-bs-parent="#ExperienceInformationAccordion">
                <div className="accordion-body d-flex flex-column">
                  <div className='d-flex row'>
                    <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                      <legend className='text-start h6'>
                        Current CTC
                      </legend>
                      <Select
                        options={ctcOptions}
                        value={formData.currentCTC}
                        onChange={(option) => handleChange('currentCTC', option)}
                      />
                    </fieldset>
                    <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                      <legend className='text-start h6'>
                        Expected CTC
                      </legend>
                      <input
                        type="text"
                        value={formData.expectedCTC}
                        className="border px-3 py-2 w-100 rounded-3"
                        onChange={(e) => handleChange('expectedCTC', e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className='d-flex row'>
                    <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                      <legend className='text-start h6'>
                        Notice Period
                      </legend>
                      <Select
                        options={noticePeriodOptions}
                        value={formData.noticePeriod}
                        onChange={(option) => handleChange('noticePeriod', option)}
                      />
                    </fieldset>
                    <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                      <legend className='text-start h6'>
                        Salary Preference
                        <span style={{ color: 'red', right: 5, top: 2 }}>*</span>
                      </legend>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="salaryPreference"
                          id="bank"
                          value="bank"
                          onChange={() => handleChange('salaryPreference', 'bank')}
                          checked={formData.salaryPreference === 'bank'}
                        />
                        <label className="form-check-label" htmlFor="bank">
                          Bank
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="salaryPreference"
                          id="cash"
                          value="cash"
                          onChange={() => handleChange('salaryPreference', 'cash')}
                          checked={formData.salaryPreference === 'cash'}
                        />
                        <label className="form-check-label" htmlFor="cash">
                          Cash
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className='d-flex row'>
                    <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                      <legend className='text-start h6'>
                        Do you have a PF account?
                      </legend>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isPFAccount"
                          id="pfYes"
                          value="yes"
                          onChange={() => handleChange('isPFAccount', 'yes')}
                          checked={formData.isPFAccount === 'yes'}
                        />
                        <label className="form-check-label" htmlFor="pfYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isPFAccount"
                          id="pfNo"
                          value="no"
                          onChange={() => handleChange('isPFAccount', 'no')}
                          checked={formData.isPFAccount === 'no'}
                        />
                        <label className="form-check-label" htmlFor="pfNo">
                          No
                        </label>
                      </div>
                    </fieldset>
                    {formData.isPFAccount === 'yes' && (
                      <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                        <legend className='text-start h6'>
                          PF Account Details
                        </legend>
                        <input
                          type="text"
                          value={formData.pfAccountDetails}
                          className="border px-3 py-2 w-100 rounded-3"
                          onChange={(e) => handleChange('pfAccountDetails', e.target.value)}
                        />
                      </fieldset>
                    )}
                  </div>
                  <div className='d-flex row'>
                    <fieldset className='my-2 col-md-6 col-lg-6 px-1'>
                      <legend className='text-start h6'>
                        Upload Resume
                      </legend>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => handleChange('resume', e.target.files[0])}
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

