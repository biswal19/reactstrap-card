import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
          <b>3M</b>HTML|CSS|REACT|REACTSTRAP|BOOTSTRAP|JAVA
      </MDBContainer>
      <div className="footer-copyright text-right py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> All Rights Reserved</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
