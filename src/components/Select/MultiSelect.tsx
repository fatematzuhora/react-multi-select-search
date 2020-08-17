import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
// redux
import { connect } from 'react-redux';
import {
    addLocation,
    removeLocation
} from 'store/actions';

interface MultiSelectProps {
    id: string;
    label: string;
    leftIcon: JSX.Element;
    placeholder?: string;
    items: [];
    onChange?: (value: string) => void;
    readOnly?: boolean;
    disabled?: boolean;
    addLocationData?: any;
}

const MultiSelectComponent = (props: MultiSelectProps) => {
    return (
        <Form>
            <Form.Group id={props.id}>
                <Form.Label>
                    <span className="font-weight-bold">
                        {props.label}
                    </span>
                </Form.Label>
                
                <div className="inner-addon left-addon">
                    {props.leftIcon}
                    <FormControl
                        type="text"
                        readOnly={props.readOnly}
                        placeholder={props.placeholder? props.placeholder : undefined}
                        onChange={e => props.onChange!(e.target.value)}
                        disabled={props.disabled}
                    />
                </div>

                {props.items.length > 0 ?
                    <div className="search-result">
                        {props.items.map((i: any, index: number) => {
                            return (
                                <li key={index}
                                    onClick={() => {
                                        console.log(i);
                                        props.addLocationData(i);
                                    }}
                                >
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectComponent);