import React from "react";
import { Grid, Row, Col,FormGroup ,FormControl } from "react-bootstrap";

export const MainLayout =({children}) => {
  return <main>
    {children}
  </main>
};

export const GridLayOut = ({ children }) => {
  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={4}>
            {children}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export const FieldInput = ({ type, input, placeholder, autoComplete, disabled }) => {
  return (
    <FormGroup>
    <FormControl
      type={type}
      placeholder={placeholder}
      value={input.value}
      onChange={input.onChange}
      autoComplete={autoComplete}
      disabled={disabled}
    />
    </FormGroup>
  );
};
