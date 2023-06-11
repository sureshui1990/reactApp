import React from "react";
import { Grid, Row, Col,FormGroup ,FormControl } from "react-bootstrap";

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

export const FieldInput = ({ type, input, placeholder, autoComplete }) => {
  return (
    <FormGroup>
    <FormControl
      type={type}
      placeholder={placeholder}
      value={input.value}
      onChange={input.onChange}
      autoComplete={autoComplete}
    />
    </FormGroup>
  );
};
