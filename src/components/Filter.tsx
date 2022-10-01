import * as React from "react";
import { ReactNode } from "react";
import IFilter from "../interfaces/IFilter";

export interface IFiltersProps<T> {
  object: T;
  filters: Array<IFilter<T>>;
  onChangeFilter: (
    filterProperty: keyof T,
    checked: boolean,
    isTruthyPicked: boolean
  ) => void;
}

export function Filters<T>(props: IFiltersProps<T>) {
  const { object, filters, onChangeFilter } = props;

  const labelTruthy = (
    <>
      is <b>truthy</b>
    </>
  );

  const labelFalsy = (
    <>
      is <b>falsy</b>
    </>
  );

  return (
    <div className="p-1 my-2">
      <label className="mt-3">Filters! Try us too! (We also work!)</label>
    </div>
  );
}
