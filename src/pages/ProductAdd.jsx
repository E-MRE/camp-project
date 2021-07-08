import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunludur"),
  });

  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        <Button positive type="submit">
          Kaydet
        </Button>
      </Form>
    </Formik>
  );
}
