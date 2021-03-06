import React from 'react';
import myrReference from '../myr/reference';

import {
  Tabs,
  Tab,
  Icon,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

import '../css/ReferencePage.css';

export default class Reference extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
    this.tableData = myrReference();
  }

  handleToggle = () => this.setState({ open: !this.state.open, value: 'a' });

  handleChange = (event, value) => {
    this.setState({ value });
  };

  TableEx = (category) => {

    return (
      <Table  >
        <TableHead >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
          {this.tableData[category].map((row, index) => (
            <TableRow key={index}>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  render() {
    return (
      <div id="reference-page">
          <Tabs
            id="reference-tabs"
            fullWidth={true}
            value={this.state.value}
            onChange={this.handleChange} >
            <Tab
              icon={<Icon className="material-icons geometry">category</Icon>}
              label="GEOMETRY"
              value='a' />
            <Tab
              icon={<Icon className="material-icons color-change">bubble_chart</Icon>}
              label="TRANSFORMATIONS"
              value='b' />
            <Tab
              icon={<Icon className="material-icons animation-ref">zoom_out_map</Icon>} //swap_horiz control_camera category
              label="ANIMATIONS"
              value='c' />
            <Tab
              icon={<Icon className="material-icons geometry">widgets</Icon>}
              label="GROUPS"
              value='d' />
          </Tabs>
          {<div style={{ margin: 5 }}>
            <p style={{ fontSize: "80%" }}> Key: <span className="array">array </span>
              <span className="bool">bool </span>
              <span className="number">number </span>
              <span className="string">string </span>
              <span className="group">group </span></p>
          </div>}
          {this.state.value === 'a' &&
            <div style={{ marginTop: 0 }}>
              {this.TableEx("geometry")}
            </div>}
          {this.state.value === 'b' &&
            <div style={{ marginTop: 0 }}>
              {this.TableEx("transformations")}
            </div>}
          {this.state.value === 'c' &&
            <div style={{ marginTop: 0 }}>
              {this.TableEx("animations")}
            </div>}
          {this.state.value === 'd' &&
            <div style={{ marginTop: 0 }}>
              {this.TableEx("groups")}
            </div>}
            </div>
    );
  }
}
