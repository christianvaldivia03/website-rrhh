"use client";
import { useField } from "formik";
import React, { Children } from "react";

interface Props {
  className?: string;
  classNameInput?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export const TextInput = ({ className = "", children, ...props }: Props) => {
  const [field, meta] = useField(props as any);
  let error = meta.error && meta.touched ? meta.error : null;
  let errorClassName =
    "focus:border-rojoBase focus:ring-rojoBase border-rojoBase";
  let noErrorClassName =
    "focus:border-secondary outline-none focus:ring-secondary border-textColorTwo/50";
  let fullClassName = `w-full bg-blanco outline-none focus:border-solid focus:ring-0 duration-300 border rounded-lg px-6 py-2 ${
    error ? errorClassName : noErrorClassName
  }`;

  return (
    <div className={className}>
      <div className="flex items-center h-full">
        <input
          {...field}
          {...props}
          className={`${props.classNameInput || ""} ${fullClassName}`}
        />
        {children && (
          <div className="flex items-center h-full rounded-lg bg-blanco relative right-3 ">
            {children}
          </div>
        )}
      </div>
      {error && (
        <span className="text-rojoBase text-xs ml-1 border-rojoBase">
          {meta.error}
        </span>
      )}
    </div>
  );
};
