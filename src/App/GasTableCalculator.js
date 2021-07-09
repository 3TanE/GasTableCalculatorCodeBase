import React, {useState} from 'react'
import "./GasTableCalculator.scss"
import {Button, FormControl, FormHelperText, MenuItem, Select, TextField} from "@material-ui/core";
import 'katex/dist/katex.min.css';
import {InlineMath, BlockMath} from 'react-katex';
import inputFieldsConf from "./inputFieldsConf";
import {subsonicColumns, supersonicColumns, VSWColumns} from "./ColumnDefinitions";
import {DataGrid} from '@material-ui/data-grid';


const GasTableCalculator = () => {
    const [tableType, setTableType] = useState(0);
    const [inputState, setInputState] = useState({})
    const [calcListResults, setCalcListResults] = useState([])


    const handleInputFieldChange = (event, id) => {
        let origin = event.target.value;
        let config = inputFieldsConf[tableType]
        let keys = Object.keys(config);

        let newState = {};
        newState[id] = origin;
        console.log(newState)
        console.log(!config[id].sanityCheck(origin))
        if (!config[id].sanityCheck(origin)) {
            setInputState({...newState})
            return;
        }
        let newMachNumber = config[id].toM(origin);
        keys.map((key) => {
            if (key != id) {
                newState[key] = config[key].fromM(newMachNumber)
            }
        })
        setInputState({...newState})
    }

    const transferResults = () => {
        let keys = Object.keys(inputState)
        if (keys.length > 0) {
            if (calcListResults[tableType] === undefined) {
                calcListResults[tableType] = [];
            }
            let temp = [...calcListResults[tableType]]
            temp.push({id: calcListResults[tableType].length, ...inputState});
            calcListResults[tableType] = temp;
            setInputState({});

        }


    }
    const getInputFields = () => {
        let config = inputFieldsConf[tableType]
        let keys = Object.keys(config);
        return keys.map(key => {
                let field = config[key]
                let saintValue = field.sanityCheck(inputState[field.id] || "")
                console.log(saintValue, inputState[field.id])
                return (
                    <TextField
                        disabled={field.disabled || false}
                        error={!saintValue}
                        helperText={saintValue ? "" : <InlineMath>{field.error}</InlineMath>}
                        key={field.id}
                        id={field.id}
                        label={<InlineMath>{field.label}</InlineMath>}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={inputState[field.id] || ""}
                        onChange={(event) => {
                            handleInputFieldChange(event, field.id)
                        }}
                    />)
            }
        )

    }

    return (
        <div className={"gasTableCalculator"}>
            <div className={"title"}>Gas Table Calculator</div>
            <div className={"tableSelector"}>
                <FormControl>

                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={tableType}
                        onChange={(event) => {
                            setTableType(event.target.value)
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
            <div className={"inputs"}>
                {getInputFields()}
            </div>
            <div className={"buttons"}>
                <Button disabled={inputState.size === 0} onClick={transferResults}>Add to ResultLists</Button>
            </div>
            <div className={"resultContainer"}>
                {calcListResults[0] ? <SubSonicResultList data={calcListResults[0]}/> : null}
            </div>
            <div className={"resultContainer"}>
                {calcListResults[1] ? <SuperSonicResultList data={calcListResults[1]}/> : null}
            </div>
            <div className={"resultContainer"}>
                {calcListResults[2] ? <VSWResultList data={calcListResults[2]}/> : null}
            </div>

        </div>
    )
}

const SubSonicResultList = (props) => {
    console.log(props.data)
    return (
        <div style={{height: 400, width: '100%'}}>
            <div className={"title"}>Subsonic Calculations Results</div>
            <DataGrid rows={props.data} columns={mapConfigToColumns(inputFieldsConf[0])} pageSize={5}/>
        </div>)
}
const SuperSonicResultList = (props) => {
    return (
        <div style={{height: 400, width: '100%'}}>
            <div className={"title"}>Supersonic Calculations Results</div>
            <DataGrid rows={props.data} columns={mapConfigToColumns(inputFieldsConf[1])} pageSize={5}/>
        </div>)

}
const VSWResultList = (props) => {
    return (
        <div style={{height: 400, width: '100%'}}>
            <div className={"title"}>Vertical Shock Wave Calculations Results</div>
            <DataGrid rows={props.data} columns={mapConfigToColumns(inputFieldsConf[2])} pageSize={5}/>
        </div>)

}

const mapConfigToColumns = (config) => {
    let keys = Object.keys(config);
    return keys.map((key, i) => {
        return {
            field: config[key].id,
            headerName: <InlineMath>{config[key].label}</InlineMath>,
            width: config[key].width
        }
    });
}
export default GasTableCalculator