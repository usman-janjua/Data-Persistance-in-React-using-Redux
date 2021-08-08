import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProductCard from "../../components/ProductCard/ProductCard";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./ProductListingStyles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function ProductListing(props) {
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(props.productList || []);

  const updateSearch = (event) => {
    const valueToSearch = event.target.value;
    const filteredList = getFilterData(props.productList, valueToSearch);
    setFilterList(filteredList);
    setSearch(valueToSearch);
  };

  const getFilterData = (list, valueToSearch = "") => {
    const lowercasedValue = valueToSearch.toLowerCase();
    return list.filter((doc) =>
      doc.name.toLowerCase().includes(lowercasedValue)
    );
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className={classes.searchContainer}>
          <TextField
            value={search}
            onChange={updateSearch}
            id="outlined-basic"
            placeholder="Search by name"
            label="Search"
            variant="outlined"
          />
          <Link to="/add-product">
            <Button variant="contained" color="primary" component="span">
              Add New Product
            </Button>
          </Link>
        </div>
        <br />
        <br />
        {filterList.length > 0 ? (
          <div className={classes.cardsContainer}>
            {filterList.map((item, i) => (
              <ProductCard key={i} data={item} />
            ))}
          </div>
        ) : (
          <p>No item found</p>
        )}
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
  };
};

export default connect(mapStateToProps, null)(ProductListing);
