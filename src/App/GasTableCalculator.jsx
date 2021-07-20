import React, { useState } from 'react';
import './GasTableCalculator.scss';
import {
  Button, FormControl, FormHelperText, MenuItem, Select, TextField,
} from '@material-ui/core';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { DataGrid } from '@material-ui/data-grid';
import inputFieldsConf from './inputFieldsConf';

const mapConfigToColumns = (config) => {
  const keys = Object.keys(config);
  return keys.map((key) => ({
    field: config[key].id,
    headerName: <InlineMath>{config[key].label}</InlineMath>,
    width: config[key].width,
  }));
};

const GasTableCalculator = () => {
  const [tableType, setTableType] = useState(0);
  const [inputState, setInputState] = useState({});
  const [calcListResults] = useState([]);

  const handleInputFieldChange = (event, id) => {
    const origin = event.target.value;

    const config = inputFieldsConf[tableType];
    const keys = Object.keys(config);

    const newState = {};
    newState[id] = origin;
    if (!config[id].sanityCheck(origin)) {
      setInputState({ ...newState });
      return;
    }
    const newMachNumber = config[id].toM(origin);
    keys.forEach((key) => {
      if (key != id) {
        newState[key] = config[key].fromM(newMachNumber);
      }
    });
    setInputState({ ...newState });
  };

  const transferResults = () => {
    const keys = Object.keys(inputState);
    if (keys.length > 0) {
      if (keys.every((key) => (inputFieldsConf[tableType][key].sanityCheck(inputState[key])))) {
        if (calcListResults[tableType] === undefined) {
          calcListResults[tableType] = [];
        }
        const temp = [...calcListResults[tableType]];
        temp.push({ id: calcListResults[tableType].length, ...inputState });
        calcListResults[tableType] = temp;
        setInputState({});
      }
    }
  };
  const getInputFields = () => {
    const config = inputFieldsConf[tableType];
    const keys = Object.keys(config);
    return keys.map((key) => {
      const field = config[key];
      const saintValue = field.sanityCheck(inputState[field.id] || '');
      //      console.log(saintValue, inputState[field.id])
      return (
        <TextField
          disabled={field.disabled || false}
          error={!saintValue}
          helperText={saintValue ? '' : <InlineMath>{field.error}</InlineMath>}
          key={field.id}
          id={field.id}
          label={<InlineMath>{field.label}</InlineMath>}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={inputState[field.id] || ''}
          onChange={(event) => {
            handleInputFieldChange(event, field.id);
          }}
        />
      );
    });
  };

  return (
    <div className="gasTableCalculator">
      <div className="title">Gas Table Calculator</div>
      <div className="tableSelector">
        <FormControl>

          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={tableType}
            onChange={(event) => {
              setInputState({});
              setTableType(event.target.value);
            }}
            displayEmpty
          >
            <MenuItem value={0}>Subsonic Two atomic Gases</MenuItem>
            <MenuItem value={1}>Supersonic Two atomic Gases</MenuItem>
            <MenuItem value={2}>Vertical Shock Wave two atomic Gases </MenuItem>
          </Select>
          <FormHelperText>Select a Gas Table</FormHelperText>
        </FormControl>
      </div>
      <div className="inputs">
        {getInputFields()}
      </div>
      <div className="buttons">
        <Button disabled={inputState.size === 0} onClick={transferResults}>
          Add to ResultLists
        </Button>
      </div>
      <div className="resultContainer">
        {calcListResults[0] ? <SubSonicResultList data={calcListResults[0]} /> : null}
      </div>
      <div className="resultContainer follow">
        {calcListResults[1] ? <SuperSonicResultList data={calcListResults[1]} /> : null}
      </div>
      <div className="resultContainer follow">
        {calcListResults[2] ? <VSWResultList data={calcListResults[2]} /> : null}
      </div>

    </div>
  );
};

const SubSonicResultList = ({ data }) => (
  <div style={{ height: 400, width: '100%' }}>
    <div className="title">Subsonic Calculations Results</div>
    <DataGrid rows={data} columns={mapConfigToColumns(inputFieldsConf[0])} pageSize={5} />
  </div>
);
const SuperSonicResultList = ({ data }) => (
  <div style={{ height: 400, width: '100%' }}>
    <div className="title">Supersonic Calculations Results</div>
    <DataGrid rows={data} columns={mapConfigToColumns(inputFieldsConf[1])} pageSize={5} />
  </div>
);
const VSWResultList = ({ data }) => (
  <div style={{ height: 400, width: '100%' }}>
    <div className="title">Vertical Shock Wave Calculations Results</div>
    <DataGrid rows={data} columns={mapConfigToColumns(inputFieldsConf[2])} pageSize={5} />
  </div>
);

export default GasTableCalculator;
