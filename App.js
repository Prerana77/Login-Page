import React from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBInput
} from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="my-5">
      <MDBCard className='bg-light'>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg' alt='...' fluid />
          </MDBCol>
          <MDBCol md='6'>

            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign in into your account</h5>

              <MDBInput wrapperClass='mb-4' label='Email Address' id='formControlLg' type='email' size='lg' required />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size='lg' required />

              <MDBBtn className='mb-4 px-5' color='dark' size='lg'> Login </MDBBtn>

              <div className='d-flex flex-row justify-content-center mt-3 mb-5'>
                <MDBRow>
                  <MDBCol>
                    <MDBBtn tag='a' color='none' className='m-0' style={{ color: '#3b5998' }}>
                      <MDBIcon fab icon='facebook-f' size='lg' />
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol>
                    <MDBBtn tag='a' color='none' className='m-0' style={{ color: '#55acee' }}>
                      <MDBIcon fab icon='twitter' size='lg' />
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol>
                    <MDBBtn tag='a' color='none' className='m-0' style={{ color: '#dd4b39' }}>
                      <MDBIcon fab icon='google' size='lg' />
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol>
                    <MDBBtn tag='a' color='none' className='m-0' style={{ color: '#ac2bac' }}>
                      <MDBIcon fab icon='instagram' size='lg' />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </div>
              <a className='small d-flex flex-row justify-content-center' href='#!'> Forgot Password </a>
              <p className='mb-4 pb-lg-2  text-muted d-flex flex-row justify-content-center'> Dont Have Account?
                <a href="#!" style={{ color: '#393f81' }}> Register here</a>
              </p>

              <div className='d-flex flex-row justify-content-center'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;