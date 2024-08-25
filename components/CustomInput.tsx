import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";


interface CustomInput{
  control: Control<z.infer<typeof authFormSchema>>,
  name: FieldPath<z.infer<typeof authFormSchema>>,
  label: string
  placeholder: string
  className: string
}

const CustomInput = ({ control, name, label, placeholder, className }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel htmlFor={label} className="form-label">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder}
                className={className || "input-class"}
                type={name}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
