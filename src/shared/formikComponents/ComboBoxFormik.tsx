import { on } from "events";
import { useField } from "formik";
import React, { Children } from "react";

interface Props {
  className?: string;
  classNameInput?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  data: any[];
  children?: React.ReactNode;
}

export const ComboBoxFormik = ({
  className = "",
  children,
  data,
  ...props
}: Props) => {
  const [field, meta] = useField(props as any);
  // // console.log(useField(props as any));
  // console.log(field);
  // console.log(meta);
  let error = meta.error && meta.touched ? meta.error : null;
  let errorClassName =
    "focus:border-rojoBase focus:ring-rojoBase border-rojoBase";
  let noErrorClassName =
    "focus:border-secondary outline-none focus:ring-secondary border-textColorTwo/50";
  let fullClassName = `w-full bg-blanco outline-none focus:border-solid focus:ring-0 duration-300 border rounded-lg px-6 py-2 ${
    error ? errorClassName : noErrorClassName
  }`;
  // console.log("datita", data);
  return (
    <div className={className}>
      <div className="flex items-center h-full">
        <select
          {...field}
          {...props}
          // {...a}
          className={`${props.classNameInput || ""} ${fullClassName}`}
          // onSubmit={onSubmit}
        >
          <option key={0} value={""}>
            Seleccione
          </option>
          {data != undefined &&
            data != null &&
            data.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        {children && (
          <div className="flex items-center h-full rounded-lg bg-blanco relative right-3 ">
            {children}
          </div>
        )}
      </div>
      {error && (
        <span className="text-rojoBase text-[8px] ml-1 border-rojoBase">
          {meta.error}
        </span>
      )}
    </div>
  );
};
