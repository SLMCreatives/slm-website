import React from "react";
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";

const FStepOne = () => {
  return (
    <main className="block" id="form-step-one">
      <div>
        <Fieldset className="space-y-8 mt-10 w-full px-4 ">
          <Legend className="text-lg font-bold">
            Marketing Solution Finder
          </Legend>
          <Field>
            <Label className="block">
              What is a specific marketing problem you are facing?
            </Label>
            <Textarea
              className="mt-1 block bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 w-full h-12 px-4 py-2"
              name="probstat"
              placeholder="I need to launch my product online."
            />
          </Field>
          <Field>
            <Label className="block">
              What do you need to solve your problem?
            </Label>
            <Select
              className="mt-1 block bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 w-full h-12 px-4"
              name="needs"
            >
              <option>I need clients</option>
              <option>I need a website</option>
              <option>I need creative materials</option>
            </Select>
          </Field>
        </Fieldset>
      </div>
    </main>
  );
};

export default FStepOne;
