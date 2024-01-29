"use client";
import React from "react";
import { useField } from "formik";

interface Props {
  className?: string;
  name?: string;
  type: string;
  placeholder?: string;
  children?: React.ReactNode;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxFormik = ({
  children,
  className = "",
  ...props
}: Props) => {
  const [field, meta] = useField(props as any);
  let error =
    meta.error && meta.touched && Object.keys(meta).length === 0
      ? meta.error
      : null;
  let errorClassName = "";
  let noErrorClassName = "";
  let fullClassName = `border-textColorTwo/50 cursor-pointer checked:!bg-secondary visited:!bg-secondary text-secbg-secondary focus:ring-0 ${
    error ? errorClassName : noErrorClassName
  }`;
  return (
    <div className={className}>
      <label className="flex item-center space-x-2">
        <input
          {...field}
          {...props}
          className={fullClassName}
          // type="radio"
        />
        {children}
      </label>
      {error && (
        <span className="text-rojoBase text-xs ml-1 border-rojoBase">
          {meta.error}
        </span>
      )}
    </div>
  );
};
