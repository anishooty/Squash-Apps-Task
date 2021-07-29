import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
  FormInput,
  FormUpload,
  FormRadioGroup,
  FormAutoComplete
} from './form-components';

import {
  userNameValidator,
  emailValidator,
  passwordValidator
} from './validators';

import { countries, genders } from './data';

import { nameValidator, requiredValidator } from './validators';
export const AccountDetails = (
  <div>
    <Field
      key={'userName'}
      id={'userName'}
      name={'userName'}
      label={'Full Name'}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
    />
    <Field
      key={'countryselected'}
      id={'countryselected'}
      name={'countryselected'}
      label={'Country'}
      hint={'Hint: Start Typing'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
    />
    <Field
      key={'state'}
      id={'state'}
      name={'state'}
      label={'State'}
      type={'email'}
      component={FormInput}
      validator={userNameValidator}
    />

    <Field
      key={'phone'}
      id={'phone'}
      name={'phone'}
      label={'Phone Number'}
      component={FormInput}
      validator={userNameValidator}
    />
  </div>
);
