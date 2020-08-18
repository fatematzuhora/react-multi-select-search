import React from 'react';
import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import {
  MultiSelectComponent,
  MultiSelectProps
} from 'components/Select/MultiSelect';

function renderSelectForm(props: Partial<MultiSelectProps> = {}) {
  const defaultProps: MultiSelectProps = {
    id: '',
    label: '',
    leftIcon: <span>Icon</span>,
    items: [],
    onChange() {
      return;
    },
    locationData: []
  };
  return render(<MultiSelectComponent {...defaultProps} {...props} />);
}

describe("<MultiSelectComponent />", () => {
  test("should display a blank select form", async () => {
    const { findByTestId } = renderSelectForm();

    const selectForm = await findByTestId("select-form");
  });

  test("should allow click the search box", async () => {
    const onChange = jest.fn();
    const { findByTestId } = renderSelectForm({ onChange });

    const query = await findByTestId("search-query");
    fireEvent.click(query);
  });
});