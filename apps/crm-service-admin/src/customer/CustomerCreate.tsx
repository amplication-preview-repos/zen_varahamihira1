import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
