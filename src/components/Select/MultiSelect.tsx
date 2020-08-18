import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
// redux
import { connect } from 'react-redux';
import {
    addLocation,
    removeLocation
} from 'store/actions';

export interface MultiSelectProps {
    id: string;
    label: string;
    leftIcon: JSX.Element;
    placeholder?: string;
    items: [];
    onChange?: (value: string) => void;
    readOnly?: boolean;
    disabled?: boolean;
    addLocationData?: any;
    removeLocationData?: any;
    locationData: [];
}

export const MultiSelectComponent = (props: MultiSelectProps) => {
    return (
        <Form data-testid="select-form">
            <Form.Group id={props.id}>
                <Form.Label>
                    <span className="font-weight-bold">
                        {props.label}
                    </span>
                </Form.Label>
                
                <div className="search-box">
                    {props.leftIcon}

                    <div className="location-list">
                        {props.locationData.map((i: any, index: number) => {
                            return (
                                <div className="location" key={index}>
                                    {i.name}
                                    <span className="remove-icon" onClick={() => {
                                            props.removeLocationData(i.asl, i.name)
                                        }}
                                    >
                                        x
                                    </span>
                                </div>
                            )
                        })}
                        <FormControl
                            data-testid="search-query"
                            type="text"
                            readOnly={props.readOnly}
                            placeholder={props.placeholder? props.placeholder : undefined}
                            onChange={e => props.onChange!(e.target.value)}
                            disabled={props.disabled}
                        />
                    </div>
                </div>

                {props.items.length > 0 ?
                    <div className="search-result">
                        {props.items.map((i: any, index: number) => {
                            return (
                                <li key={index} onClick={() => {props.addLocationData(i)}}>
                                    {i.name}, <span className="country">{i.country}</span>
                                </li>
                            )
                        })}
                    </div>
                : ''
                }
            </Form.Group>
        </Form>
    )
}

// redux state and dispatch
const mapStateToProps = (state: any) => ({
    locationData: state.locations.items
});

const mapDispatchToProps = (dispatch: any) => ({
    addLocationData: (item: any) => {
        dispatch(addLocation(item));
    },
    removeLocationData: (id: number, name: string) => {
        dispatch(removeLocation(id, name));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectComponent);