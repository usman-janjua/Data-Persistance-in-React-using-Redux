import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./AddProductStyles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actionCreators from "../../store/product/index";
import { useHistory } from "react-router-dom";
import _ from "lodash";

export function AddProduct(props) {
  let history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState({ name: "", price: "", description: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const dataSubmitHandler = () => {
    if (!_.size(data)) {
        return
    }
    const time = new Date();
    const docWithTime = {
        ...data,
        inventoryTime: time.valueOf()
    }
    props.addProductSuccess(docWithTime);
    history.push("/");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <h3>Add Product here</h3>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Price"
              name="price"
              onChange={handleChange}
              placeholder="Enter Price"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              onChange={handleChange}
              placeholder="Enter Description"
              rows={4}
              variant="outlined"
            />
          </div>
          <Button
            onClick={dataSubmitHandler}
            variant="contained"
            color="primary"
            component="span"
          >
            Save Product
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductSuccess: (data) => dispatch(actionCreators.addProductSuccess(data)),
  };
};
export default connect(null, mapDispatchToProps)(AddProduct);
