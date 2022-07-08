import React from "react";
import css from './filter.module.css'

const FilterForm = ({value, onChange}) =>
    <label className={css.label_filter}>
        Find contact by Name:
        <input className={css.search_input} type="text" value={value} onChange={onChange} />
        </label>
export default FilterForm;