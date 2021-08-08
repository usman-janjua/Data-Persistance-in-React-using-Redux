import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ProductListing } from "./ProductListing";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProductCard from "../../components/ProductCard/ProductCard";

configure({ adapter: new Adapter() });

describe("<ProductListing />", () => {
  it("render ProductListing Component with null props", () => {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(CssBaseline)).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(ProductCard)).toHaveLength(0);
  });

  it("render ProductListing Component with valid prop", () => {
    const productList = [
      {
        name: "TestName1",
        price: "12",
        description: "anlfjls",
        inventoryTime: 1234123,
      },
      {
        name: "TestName2",
        price: "15",
        description: "anlsdafjls",
        inventoryTime: 123211323,
      },
    ];
    const wrapper = shallow(<ProductListing productList={productList} />);
    expect(wrapper.find(ProductCard)).toHaveLength(2);
  });
});
